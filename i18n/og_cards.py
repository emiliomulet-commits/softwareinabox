#!/usr/bin/env python3
"""Genera las imágenes sociales (og:image, 1200×630) de la sección Regulación UE, una por idioma.

Uso (desde la raíz del repo, con Playwright y Chromium):
  python3 i18n/og_cards.py
Salida: assets/og/informe-cada_<idioma>.jpg (es, en, fr, de, nl, pt, it, da).
El texto sale del og:title de cada página ya generada (antes de «:» = titular, después = subtítulo),
así que conviene ejecutarlo después de i18n/build.py build. build.py cambia _es.jpg por el idioma
de cada página si la imagen existe (fr-be usa fr, nl-be usa nl).
"""
import asyncio, html, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "og")
LANGS = ["es", "en", "fr", "de", "nl", "pt", "it", "da"]
PAGES = {"informe-cada": "regulacion/informe-cada/index.html"}
EYEBROW = "Cloud and AI Development Act · COM(2026) 502"
LEVELS = {"es": "Nivel", "en": "Level", "fr": "Niveau", "de": "Stufe", "nl": "Niveau", "pt": "Nível", "it": "Livello", "da": "Niveau"}

TPL = """<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face{font-family:M;src:url(file://%(root)s/assets/fonts/montserrat-latin-wght-normal.woff2) format("woff2");font-weight:100 900}
@font-face{font-family:M;src:url(file://%(root)s/assets/fonts/montserrat-latin-ext-wght-normal.woff2) format("woff2");font-weight:100 900;unicode-range:U+0100-024F}
@font-face{font-family:H;src:url(file://%(root)s/assets/fonts/hanken-grotesk-latin-wght-normal.woff2) format("woff2");font-weight:100 900}
@font-face{font-family:H;src:url(file://%(root)s/assets/fonts/hanken-grotesk-latin-ext-wght-normal.woff2) format("woff2");font-weight:100 900;unicode-range:U+0100-024F}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:H,sans-serif;color:#fff;
 background:radial-gradient(circle at 85%% 20%%,#123a6b 0,#0b2545 45%%,#081a33 100%%)}
.l{position:absolute;left:70px;top:64px;width:720px}
.brand{display:flex;align-items:center;gap:14px;font:700 24px M,sans-serif}
.hex{width:40px;height:40px;border-radius:8px;background:#0f2b4f;display:grid;place-items:center}
.eb{margin-top:44px;font:700 16px M,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#C9A227}
h1{margin-top:16px;font:800 %(hsize)spx/1.05 M,sans-serif;letter-spacing:-.01em}
p{margin-top:22px;font-size:27px;line-height:1.35;color:#C9D3E0}
.url{position:absolute;left:70px;bottom:46px;font-size:18px;color:#8fa2bb}
.r{position:absolute;right:70px;top:120px;width:300px;display:flex;flex-direction:column;gap:14px}
.lv{height:76px;border-radius:12px;padding:0 22px;display:flex;align-items:center;font:700 22px M,sans-serif}
</style></head><body>
<div class="l"><div class="brand"><span class="hex"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" stroke-width="2"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7z"/></svg></span>Software in a Box</div>
<div class="eb">%(eyebrow)s</div><h1>%(head)s</h1><p>%(sub)s</p></div>
<div class="r">
<div class="lv" style="background:#E3E9F1;color:#0b2545">%(lvl)s 1</div>
<div class="lv" style="background:#F1D98A;color:#0b2545">%(lvl)s 2</div>
<div class="lv" style="background:#D9A520;color:#0b2545">%(lvl)s 3</div>
<div class="lv" style="background:#C8411B">%(lvl)s 4</div></div>
<div class="url">www.softwareinabox.eu/regulacion/</div>
</body></html>"""


def og_title(path):
    raw = open(os.path.join(ROOT, path), encoding="utf-8").read()
    return html.unescape(re.search(r'<meta property="og:title" content="([^"]*)"', raw).group(1))


async def main():
    from playwright.async_api import async_playwright
    os.makedirs(OUT, exist_ok=True)
    exe = os.environ.get("CHROME") or next((x for x in ("/usr/bin/google-chrome", "/usr/bin/chromium") if os.path.exists(x)), None)
    async with async_playwright() as pw:
        b = await pw.chromium.launch(executable_path=exe, args=["--no-sandbox", "--allow-file-access-from-files"]) if exe else await pw.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        for slug, src in PAGES.items():
            for lang in LANGS:
                path = src if lang == "es" else f"{lang}/{src}"
                head, _, sub = og_title(path).partition(":")
                sub = sub.strip()
                sub = sub[:1].upper() + sub[1:]
                h = os.path.join(OUT, f"_{slug}_{lang}.html")
                open(h, "w", encoding="utf-8").write(TPL % {
                    "root": ROOT, "eyebrow": EYEBROW, "head": html.escape(head.strip()), "sub": html.escape(sub),
                    "hsize": 62 if len(head) < 40 else 52, "lvl": LEVELS[lang]})
                await pg.goto("file://" + h)
                await pg.evaluate("document.fonts.ready")
                dest = os.path.join(OUT, f"{slug}_{lang}.jpg")
                await pg.screenshot(path=dest, type="jpeg", quality=88)
                os.remove(h)
                print("og:", os.path.relpath(dest, ROOT))
        await b.close()


asyncio.run(main())
