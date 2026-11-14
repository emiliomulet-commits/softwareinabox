#!/usr/bin/env python3
"""Genera las páginas de rama de www a partir de las secciones de la portada (index.html):

  /productos/                       sección #productos + #sectores
  /productos/cognitiv/ · argos/ · espacios-de-datos/   ficha de cada producto
  /empresa/                         #como + #experiencia + #sectores
  /contacto/                        #contacto (formulario)

Reutiliza el CSS y los textos de la portada, así que sus traducciones ya existen (mismo hash).
Los textos nuevos (títulos, descripciones, encabezados) se traducen como cualquier otro en <idioma>.json.
Ejecutar antes de `build.py extract` cuando cambie la portada:  python3 i18n/gen_pages.py
"""
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://www.softwareinabox.eu"
home = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
home = re.sub(r"<!-- I18N-SW:BEGIN -->.*?<!-- I18N-SW:END -->", "", home, flags=re.S)
STYLE = re.search(r"<style>.*?</style>", home, re.S).group(0)
ICON = re.search(r'<link rel="icon"[^>]*>', home).group(0)


def sec(i):
    return re.search(r'<section class="[^"]*" id="%s".*?</section>' % i, home, re.S).group(0)


EXTRA_CSS = """<style>
.phero{background:radial-gradient(1000px 500px at 85% 0%,#123766 0%,transparent 60%),var(--deep);color:#fff}
.phero .wrap{padding-top:34px;padding-bottom:64px}
.phero .sx-crumbs{padding:0 0 26px;margin:0;color:#8FA0B6}.phero .sx-crumbs a{color:#C9D3E0}
.phero .eyebrow{font:700 13px var(--disp);letter-spacing:.18em;text-transform:uppercase;color:var(--gold)}
.phero h1{color:#fff;font-size:clamp(38px,4.8vw,62px);font-weight:800;letter-spacing:-.03em;line-height:1.05;margin-top:12px}
.phero h1 span{display:block;color:#AFC0D6;font-weight:600}
.phero .lead{font-size:20px;color:#C9D3E0;max-width:38em;margin:22px 0 30px}
.phero .ctas{display:flex;flex-wrap:wrap;gap:12px}
.pcard ul{margin:0;padding:0;list-style:none;display:grid;gap:14px}
.pcard li{background:var(--paper);border-radius:14px;padding:18px 22px;border-left:4px solid var(--c,var(--gold))}
.plist{columns:2 320px;column-gap:28px;list-style:none;padding:0;margin:0}
.plist li{break-inside:avoid;border-bottom:1px solid var(--line);padding:10px 0}
.plist a{color:var(--ink);font-weight:600;text-decoration:none}.plist a:hover{text-decoration:underline}
.psect{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
.psect div{border:1px solid var(--line);border-radius:14px;padding:20px}.psect b{display:block;font-family:var(--disp);color:var(--ink);margin-bottom:6px}
.sec.tight{padding:80px 0}
.sx-sp{display:none}
</style>"""

FOOT_SCRIPT = """<script data-i18n="skip">
(function(){var f=document.querySelector('form.form');if(!f)return;var i=document.createElement('input');i.type='hidden';i.name='Página de origen';
i.value=document.referrer||location.href;f.appendChild(i);})();
</script>"""


def page(path, title, desc, ogt, body, jsonld_name):
    url = BASE + path
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": ogt, "description": desc, "inLanguage": "es",
         "isPartOf": {"@id": BASE + "/#website"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": n, "item": u} for i, (n, u) in enumerate(jsonld_name)]}]}
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title, quote=False)}</title>
<meta property="og:image" content="https://www.softwareinabox.eu/assets/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="https://www.softwareinabox.eu/assets/og.jpg">
<meta name="description" content="{html.escape(desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Software in a Box">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="{html.escape(ogt)}">
<meta property="og:description" content="{html.escape(desc)}">
<meta property="og:url" content="{url}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=1)}
</script>
<meta name="theme-color" content="#0B2545">
{ICON}
<link rel="stylesheet" href="/assets/fonts.css">
{STYLE}
{EXTRA_CSS}
</head>
<body>
<header></header>
<main id="contenido">
{body}
</main>
<footer></footer>
{FOOT_SCRIPT}
</body>
</html>
"""


SP = '<div class="sx-sp" aria-hidden="true"></div>'  # bloque vacío: cada botón se traduce por separado


def hero(eyebrow, h1, lead, ctas):
    c = "".join(f'<a class="btn {k}" href="{u}">{t}</a>' for u, t, k in ctas) + SP
    return (f'<section class="phero">\n  <div class="wrap">\n    <!--SX:CRUMBS-->\n    <p class="eyebrow">{eyebrow}</p>\n    <h1>{h1}</h1>\n'
            f'    <p class="lead">{lead}</p>\n    <div class="ctas">{c}</div>\n  </div>\n</section>')


def write(path, content):
    f = os.path.join(ROOT, path.strip("/"), "index.html")
    os.makedirs(os.path.dirname(f), exist_ok=True)
    open(f, "w", encoding="utf-8").write(content)
    print("escrito", f)


# ---------------------------------------------------------------- productos
prod_sec = sec("productos")
drawers = re.findall(r'<a class="drawer (d-\w+)" href="([^"]+)">(.*?)</a>', prod_sec, re.S)
matrix = sec("sectores")
rows = re.findall(r'<tr><th scope="row">(.*?)</th><td class="d">(.*?)</td>(.*?)</tr>', matrix, re.S)
SLUG = {"d-cog": ("cognitiv", "l-cog", 0, "--cog"), "d-arg": ("argos", "l-arg", 1, "--arg"), "d-dat": ("espacios-de-datos", "l-dat", 2, "--dat")}
WEB = {"d-cog": "https://cognitiv.softwareinabox.eu/", "d-arg": "https://argos.softwareinabox.eu/", "d-dat": "https://datos.softwareinabox.eu/"}

write("/productos/", page(
    "/productos/", "Productos: COGNITIV, ARGOS y Espacios de datos · Software in a Box",
    "Tres productos para usar IA y compartir datos sin entregar el control: COGNITIV, ARGOS y Espacios de datos federados.",
    "Productos de Software in a Box: COGNITIV, ARGOS y Espacios de datos",
    hero("Productos", "Tres productos para el mismo problema",
         "Usar inteligencia artificial y compartir datos sin entregar el control. Cada producto resuelve una parte y tiene su propia web.",
         [("/contacto/", "Hablemos", "btn-gold")])
    + "\n" + re.sub(r'class="drawer (d-\w+)" href="[^"]+"',
                    lambda m: f'class="drawer {m.group(1)}" href="/productos/{SLUG[m.group(1)][0]}/"', prod_sec)
             .replace('id="productos"', 'id="lista"')
    + "\n" + matrix,
    [("Inicio", BASE + "/"), ("Productos", BASE + "/productos/")]))

for cls, _, inner in drawers:
    slug, layer, col, var = SLUG[cls]
    url = WEB[cls]
    name = re.search(r"<h3>(.*?)</h3>", inner).group(1)
    what = re.search(r'<p class="what">(.*?)</p>', inner).group(1)
    lis = re.findall(r"<li>(.*?)</li>", inner)
    go = re.search(r'<span class="go">(.*?)</span>', inner).group(1)
    sectors = []
    for th, td, cells in rows:
        marks = re.findall(r'<span class="(yes|no)">', cells)
        if len(marks) > col and marks[col] == "yes":
            sectors.append((th, td))
    body = (hero("Producto", name, what, [(url, go, "btn-gold sx-ext"), ("/contacto/", "Hablemos", "btn-line")]) + "\n"
            f'<section class="sec tight pcard" style="--c:var({var})">\n  <div class="wrap">\n    <div class="sec-h"><h2>Qué ofrece</h2></div>\n    <ul>'
            + "".join(f"<li>{x}</li>" for x in lis) + "</ul>\n  </div>\n</section>\n"
            f'<section class="sec tight" style="background:var(--paper)">\n  <div class="wrap">\n    <div class="sec-h"><h2>Para qué sectores</h2></div>\n'
            '    <div class="psect">' + "".join(f"<div><b>{th}</b><p>{td}</p></div>" for th, td in sectors) + "</div>\n  </div>\n</section>\n"
            f'<section class="sec tight">\n  <div class="wrap">\n    <div class="sec-h"><h2>Normas europeas en las que ayuda</h2>'
            f'<p>Fichas de la sección Regulación UE en las que este producto aparece como respuesta.</p></div>\n'
            f'    <!--SX:NORMS:{layer}--><!--/SX:NORMS-->\n  </div>\n</section>\n'
            f'<section class="sec tight" style="background:var(--paper)">\n  <div class="wrap">\n    <div class="sec-h"><h2>¿Hablamos de su caso?</h2>'
            f'<p>Cuéntenos qué datos necesita proteger y qué quiere conseguir con ellos. Le proponemos el producto y la arquitectura adecuados.</p></div>\n'
            f'    <div class="ctas" style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-gold" href="/contacto/">Hablemos</a>'
            f'<a class="btn" style="border:2px solid var(--line);color:var(--ink)" href="{url}">{go}</a>{SP}</div>\n  </div>\n</section>')
    write(f"/productos/{slug}/", page(
        f"/productos/{slug}/", f"{name} · Software in a Box", what, name, body,
        [("Inicio", BASE + "/"), ("Productos", BASE + "/productos/"), (name, BASE + f"/productos/{slug}/")]))

# ---------------------------------------------------------------- empresa
hero_lead = re.search(r'<p class="lead">(.*?)</p>', home, re.S).group(1)
write("/empresa/", page(
    "/empresa/", "Empresa: cómo trabajamos, experiencia y sectores · Software in a Box",
    "Quiénes somos: la IA va al dato y el dato no se mueve. Tres espacios de datos reales detrás del producto y los sectores en los que trabajamos.",
    "Software in a Box: cómo trabajamos, experiencia y sectores",
    hero("Empresa", "Su IA y sus datos, <span>dentro de casa.</span>", hero_lead,
         [("/contacto/", "Solicitar una reunión", "btn-gold"), ("/productos/", "Conocer los productos", "btn-line")])
    + "\n" + sec("como") + "\n" + sec("experiencia") + "\n" + sec("sectores"),
    [("Inicio", BASE + "/"), ("Empresa", BASE + "/empresa/")]))

# ---------------------------------------------------------------- contacto
write("/contacto/", page(
    "/contacto/", "Contacto · Software in a Box",
    "Cuéntenos qué datos necesita proteger y qué quiere conseguir con ellos. Le proponemos el producto y la arquitectura adecuados.",
    "Contacto · Software in a Box",
    '<!--SX:CRUMBS-->\n' + sec("contacto").replace('class="sec contact"', 'class="sec contact" style="padding-top:56px"'),
    [("Inicio", BASE + "/"), ("Contacto", BASE + "/contacto/")]))
