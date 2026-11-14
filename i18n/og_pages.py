#!/usr/bin/env python3
"""Imágenes sociales (og:image, 1200×630) de cada página de www, una por idioma.

Uso, después de i18n/build.py build (lee las páginas ya generadas):
  python3 i18n/og_pages.py          # genera assets/og/<clave>_<idioma>.jpg
  python3 i18n/build.py build       # nav.py enlaza cada página con su imagen si existe
Clave: la ruta española sin barras ("/regulacion/dora/" -> "regulacion-dora").
fr-be usa la imagen fr y nl-be la nl. La portada y el informe CADA conservan su imagen propia.
"""
import asyncio, html, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import build as B  # noqa: E402
import nav  # noqa: E402

OUT = os.path.join(ROOT, "assets", "og")
LANGS = ["es", "en", "fr", "de", "nl", "pt", "it", "da"]
SKIP = {"/", "/regulacion/informe-cada/", "/aviso-legal.html", "/privacidad.html", "/cookies.html", "/gracias.html"}


def key(path):
    return path.strip("/").replace(".html", "").replace("/", "-")


def eligible(pg):
    return pg["path"] not in SKIP and pg.get("sitemap", True) is not False


TPL = """<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face{font-family:M;src:url(file://%(root)s/assets/fonts/montserrat-latin-wght-normal.woff2) format("woff2");font-weight:100 900}
@font-face{font-family:M;src:url(file://%(root)s/assets/fonts/montserrat-latin-ext-wght-normal.woff2) format("woff2");font-weight:100 900;unicode-range:U+0100-024F}
@font-face{font-family:H;src:url(file://%(root)s/assets/fonts/hanken-grotesk-latin-wght-normal.woff2) format("woff2");font-weight:100 900}
@font-face{font-family:H;src:url(file://%(root)s/assets/fonts/hanken-grotesk-latin-ext-wght-normal.woff2) format("woff2");font-weight:100 900;unicode-range:U+0100-024F}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:H,sans-serif;color:#fff;position:relative;
 background:radial-gradient(circle at 88%% 18%%,#123a6b 0,#0b2545 46%%,#081a33 100%%)}
.l{position:absolute;left:72px;top:64px;width:790px}
.brand{display:flex;align-items:center;gap:14px;font:700 24px M,sans-serif}
.eb{margin-top:56px;font:700 17px M,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#C9A227}
h1{margin-top:16px;font:800 %(hsize)spx/1.06 M,sans-serif;letter-spacing:-.015em}
p{margin-top:24px;font-size:26px;line-height:1.38;color:#C9D3E0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.url{position:absolute;left:72px;bottom:46px;font-size:18px;color:#8fa2bb}
.bar{position:absolute;left:0;top:0;bottom:0;width:10px;background:%(accent)s}
.hex{position:absolute;right:70px;top:150px}
</style></head><body><div class="bar"></div>
<div class="l"><div class="brand"><svg width="40" height="40" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0f2b4f"/><path d="M32 13 50 23v18L32 51 14 41V23z" fill="none" stroke="#C9A227" stroke-width="4" stroke-linejoin="round"/><path d="M14 23l18 10 18-10M32 33v18" fill="none" stroke="#C9A227" stroke-width="4" stroke-linejoin="round"/></svg>Software in a Box</div>
<div class="eb">%(eyebrow)s</div><h1>%(head)s</h1><p>%(sub)s</p></div>
<svg class="hex" width="250" height="280" viewBox="0 0 64 72" opacity=".9"><path d="M32 4 58 19v34L32 68 6 53V19z" fill="none" stroke="%(accent)s" stroke-width="2.4" stroke-linejoin="round"/><path d="M6 19l26 15 26-15M32 34v34" fill="none" stroke="%(accent)s" stroke-width="2.4" stroke-linejoin="round" opacity=".6"/></svg>
<div class="url">%(url)s</div>
</body></html>"""

ACCENT = {"productos-cognitiv": "#E4572E", "productos-argos": "#8B73F5", "productos-espacios-de-datos": "#2BB8B8"}
SECTION = {"regulacion": "Regulación UE", "productos": "Productos", "empresa": "Empresa", "contacto": "Contacto", "mapa-del-sitio": "Mapa del sitio"}


def meta(raw, name):
    m = re.search(r'<meta (?:name|property)="%s"[^>]*content="([^"]*)"' % re.escape(name), raw)
    return html.unescape(m.group(1)) if m else ""


async def main():
    from playwright.async_api import async_playwright
    os.makedirs(OUT, exist_ok=True)
    exe = os.environ.get("CHROME") or next((x for x in ("/usr/bin/google-chrome", "/usr/bin/chromium") if os.path.exists(x)), None)
    async with async_playwright() as pw:
        b = await pw.chromium.launch(executable_path=exe, args=["--no-sandbox", "--allow-file-access-from-files"]) if exe else await pw.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        n = 0
        for page in [p for p in B.SITE["pages"] if eligible(p)]:
            k = key(page["path"])
            for lang in LANGS:
                f = nav.out_file(page, lang)
                if not os.path.exists(f):
                    continue
                raw = open(f, encoding="utf-8").read()
                tr = B.load_tr(lang) if lang != "es" else {}
                head = nav.label(raw)
                sub = meta(raw, "description")
                eb = nav.T(SECTION.get(k.split("-")[0] if not k.startswith("mapa") else "mapa-del-sitio", "Software in a Box"), lang, tr)
                url = "www.softwareinabox.eu" + B.lpath(page, lang)
                h = os.path.join(OUT, f"_{k}_{lang}.html")
                open(h, "w", encoding="utf-8").write(TPL % {
                    "root": ROOT, "eyebrow": html.escape(eb), "head": html.escape(head), "sub": html.escape(sub),
                    "hsize": 70 if len(head) < 22 else (58 if len(head) < 40 else 48), "url": html.escape(url),
                    "accent": ACCENT.get(k, "#C9A227")})
                await pg.goto("file://" + h)
                await pg.evaluate("document.fonts.ready")
                await pg.screenshot(path=os.path.join(OUT, f"{k}_{lang}.jpg"), type="jpeg", quality=80)
                os.remove(h)
                n += 1
        await b.close()
    print("og:", n, "imágenes en assets/og/")


if __name__ == "__main__":
    asyncio.run(main())
