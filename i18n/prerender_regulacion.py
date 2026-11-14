#!/usr/bin/env python3
"""Prerenderiza en HTML estático los bloques que /regulacion/index.html genera con JavaScript
(radar, calendario, matriz, casos y oportunidades), para buscadores y asistentes de IA.

Uso (desde la raíz del repo, con Playwright y Chromium instalados):
  python3 i18n/prerender_regulacion.py
Los datos se editan en el <script> de regulacion/index.html (REGS, EV, CASES, OPPS) y
después se vuelve a ejecutar este script. El JavaScript sigue redibujando los bloques en el navegador.
"""
import asyncio, os, re, sys, threading, http.server, socketserver, functools
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE = os.path.join(ROOT, "regulacion", "index.html")
BLOCKS = {"regs": "#regs", "tl": "#tlTable tbody", "matrix": "#matrixT tbody", "cases": "#cases", "opps": "#opps"}

def serve():
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    h.log_message = lambda *a: None
    s = socketserver.TCPServer(("127.0.0.1", 0), h)
    threading.Thread(target=s.serve_forever, daemon=True).start()
    return s

async def main():
    from playwright.async_api import async_playwright
    raw = open(PAGE, encoding="utf-8").read()
    clean = raw
    for k in BLOCKS:
        clean = re.sub(rf"<!--PRE:{k}-->.*?<!--/PRE:{k}-->", f"<!--PRE:{k}--><!--/PRE:{k}-->", clean, flags=re.S)
    open(PAGE, "w", encoding="utf-8").write(clean)
    srv = serve()
    exe = os.environ.get("CHROME") or next((p for p in ("/usr/bin/google-chrome", "/usr/bin/chromium") if os.path.exists(p)), None)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=exe, args=["--no-sandbox"]) if exe else await p.chromium.launch()
        pg = await b.new_page()
        await pg.add_init_script("try{localStorage.clear()}catch(e){}")
        await pg.goto(f"http://127.0.0.1:{srv.server_address[1]}/regulacion/")
        out = {k: await pg.eval_on_selector(sel, "e=>e.innerHTML") for k, sel in BLOCKS.items()}
        await b.close()
    srv.shutdown()
    for k, html in out.items():
        clean = clean.replace(f"<!--PRE:{k}--><!--/PRE:{k}-->", f"<!--PRE:{k}-->{html}<!--/PRE:{k}-->")
    open(PAGE, "w", encoding="utf-8").write(clean)
    print("prerenderizado:", ", ".join(f"{k} ({len(v)} car.)" for k, v in out.items()))

asyncio.run(main())
