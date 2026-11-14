#!/usr/bin/env python3
"""Prerenderiza en HTML estático los bloques que /regulacion/index.html genera con JavaScript
(radar, calendario, matriz, casos y oportunidades), para buscadores y asistentes de IA.

Uso (desde la raíz del repo, con Playwright y Chromium instalados):
  python3 i18n/prerender_regulacion.py --clear   # vacía los bloques (antes de extract/build)
  python3 i18n/build.py extract && python3 i18n/build.py build
  python3 i18n/prerender_regulacion.py           # rellena los bloques en todos los idiomas
Los datos se editan en el <script> de regulacion/index.html (REGS, EV, CASES, OPPS). El JavaScript sigue redibujando los bloques en el navegador.
"""
import asyncio, os, re, sys, threading, http.server, socketserver, functools
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANG_DIRS = ["", "en", "fr", "de", "nl", "pt", "it", "da", "fr-be", "nl-be"]
BLOCKS = {"regs": "#regs", "allfic": "#allfic", "tl": "#tlTable tbody", "matrix": "#matrixT tbody", "cases": "#cases", "opps": "#opps"}

def serve():
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    h.log_message = lambda *a: None
    s = socketserver.TCPServer(("127.0.0.1", 0), h)
    threading.Thread(target=s.serve_forever, daemon=True).start()
    return s

def clear(raw):
    for k in BLOCKS:
        raw = re.sub(rf"<!--PRE:{k}-->.*<!--/PRE:{k}-->", f"<!--PRE:{k}--><!--/PRE:{k}-->", raw, flags=re.S)
    return raw


def hub_path(d):
    """Ruta pública del índice /regulacion/ en cada idioma (sites.json puede traducir el slug)."""
    import json
    cfg = json.load(open(os.path.join(ROOT, "i18n", "sites.json"), encoding="utf-8"))
    pg = next(p for p in cfg["sites"]["www"]["pages"] if p["path"] == "/regulacion/")
    return ("/" + d if d else "") + (pg.get("paths", {}).get(d) or "/regulacion/") if d else "/regulacion/"


def cal_file(d):
    import json
    cfg = json.load(open(os.path.join(ROOT, "i18n", "sites.json"), encoding="utf-8"))
    pg = next((p for p in cfg["sites"]["www"]["pages"] if p["path"] == "/regulacion/calendario/"), None)
    if not pg:
        return None
    path = (pg.get("paths", {}).get(d) or pg["path"]) if d else pg["path"]
    return os.path.join(ROOT, d, path.strip("/"), "index.html")


def pages():
    for d in LANG_DIRS:
        p = os.path.join(ROOT, hub_path(d).strip("/"), "index.html")
        if os.path.exists(p):
            yield d, p


async def main():
    if "--clear" in sys.argv:
        for d, p in pages():
            raw = open(p, encoding="utf-8").read()
            open(p, "w", encoding="utf-8").write(clear(raw))
        print("bloques vaciados")
        return
    from playwright.async_api import async_playwright
    for d, p in pages():
        raw = open(p, encoding="utf-8").read()
        open(p, "w", encoding="utf-8").write(clear(raw))
    srv = serve()
    exe = os.environ.get("CHROME") or next((x for x in ("/usr/bin/google-chrome", "/usr/bin/chromium") if os.path.exists(x)), None)
    async with async_playwright() as pw:
        b = await pw.chromium.launch(executable_path=exe, args=["--no-sandbox"]) if exe else await pw.chromium.launch()
        for d, p in pages():
            pg = await b.new_page()
            await pg.add_init_script("try{localStorage.clear()}catch(e){}")
            await pg.goto(f"http://127.0.0.1:{srv.server_address[1]}{hub_path(d)}")
            out = {k: await pg.eval_on_selector(sel, "e=>e.innerHTML") for k, sel in BLOCKS.items()}
            await pg.close()
            raw = open(p, encoding="utf-8").read()
            for k, html in out.items():
                raw = raw.replace(f"<!--PRE:{k}--><!--/PRE:{k}-->", f"<!--PRE:{k}-->{html}<!--/PRE:{k}-->")
            open(p, "w", encoding="utf-8").write(raw)
            cf = cal_file(d)  # el calendario completo tiene su página propia (i18n/nav.py)
            if cf and os.path.exists(cf):
                c = open(cf, encoding="utf-8").read()
                c = re.sub(r"<!--PRE:tl-->.*<!--/PRE:tl-->", lambda _: f"<!--PRE:tl-->{out['tl']}<!--/PRE:tl-->", c, flags=re.S)
                open(cf, "w", encoding="utf-8").write(c)
            print("prerenderizado:", d or "es")
        await b.close()
    srv.shutdown()


asyncio.run(main())
