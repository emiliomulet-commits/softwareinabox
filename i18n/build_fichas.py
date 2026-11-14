#!/usr/bin/env python3
"""Genera las fichas completas de normas en /regulacion/<slug>/ (solo en español).

Cada ficha se escribe como fragmento HTML en i18n/fichas/<slug>.html. La primera línea
es un comentario con metadatos JSON:
  <!--META {"slug":"ai-act","title":"…","desc":"…","name":"…","short":"AI Act","legis":"…"} -->
El script toma el CSS, la cabecera y el pie de regulacion/index.html para que las fichas
compartan el diseño de la sección «Regulación UE».

Uso:  python3 i18n/build_fichas.py   (después: python3 i18n/build.py build)
"""
import json, os, re, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
BASE = "https://www.softwareinabox.eu"
SRC = open(os.path.join(ROOT, "regulacion", "index.html"), encoding="utf-8").read()
SRC = re.sub(r"<!-- I18N(?:-SW)?:BEGIN -->.*?<!-- I18N(?:-SW)?:END -->", "", SRC, flags=re.S)

CSS = re.search(r"<style>.*?</style>", SRC, re.S).group(0)
HEADER = re.search(r"<header class=\"hd\">.*?</header>", SRC, re.S).group(0)
FOOTER = re.search(r"<footer class=\"ft\">.*?</footer>", SRC, re.S).group(0)
HEADER = HEADER.replace('href="#contacto"', 'href="/regulacion/#contacto"')

EXTRA_CSS = """<style>
.fh{padding-top:40px}
.fh .crumbs{color:var(--mute)}.fh .crumbs a{color:var(--ink)}
.cada-hero h1{color:#fff;font-size:clamp(32px,4vw,52px);font-weight:800;letter-spacing:-.03em;margin:0 0 16px}
.cada-hero .lead b{color:#fff}
.cards4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.cards4>*{min-width:0}
.card h4 .k{display:inline-block;font:800 13px var(--disp);color:var(--gold-d);margin-right:8px}
.ul{padding-left:20px;margin:0}.ul li{margin-bottom:6px}
.dl{font-size:14.5px}
.ficha-nav{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
.tbl td,.tbl th{vertical-align:top}
@media(max-width:1100px){.cards4{grid-template-columns:1fr 1fr}}
@media(max-width:680px){.cards4{grid-template-columns:1fr}}
</style>"""

TABS_JS = """<script>
(function(){var b=document.querySelector(".burger"),n=document.getElementById("nav");
 if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});}
 document.querySelectorAll(".tabs").forEach(function(g){g.querySelectorAll(".tab").forEach(function(t){
  t.addEventListener("click",function(){g.querySelectorAll(".tab").forEach(function(x){x.classList.toggle("on",x===t);x.setAttribute("aria-selected",x===t)});
   var box=g.parentNode;box.querySelectorAll(":scope > .tabpane").forEach(function(p){p.classList.toggle("on",p.id===t.dataset.p)});});});});
 var subs=document.querySelectorAll("#subnav a");if(subs.length&&"IntersectionObserver" in window){
  var obs=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){subs.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+en.target.id)})}})},{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("main section[id]").forEach(function(s){obs.observe(s)});}
})();
</script>"""


def page(meta, body):
    url = f"{BASE}/regulacion/{meta['slug']}/"
    today = datetime.date.today().isoformat()
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article", "@id": url + "#article", "url": url, "headline": meta["title"],
         "description": meta["desc"], "inLanguage": "es", "dateModified": today,
         "isPartOf": {"@id": "https://www.softwareinabox.eu/#website"},
         "publisher": {"@id": "https://www.softwareinabox.eu/#organization"},
         "author": {"@id": "https://www.softwareinabox.eu/#organization"},
         "about": {"@type": "Legislation", "name": meta["name"], "legislationIdentifier": meta["legis"],
                   "legislationJurisdiction": "UE"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Software in a Box", "item": BASE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Regulación UE", "item": BASE + "/regulacion/"},
            {"@type": "ListItem", "position": 3, "name": meta["short"], "item": url}]}]}
    esc = lambda s: s.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(meta['title'])} · Software in a Box</title>
<meta name="description" content="{esc(meta['desc'])}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Software in a Box">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="{esc(meta['title'])}">
<meta property="og:description" content="{esc(meta['desc'])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="https://www.softwareinabox.eu/assets/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="alternate" type="text/plain" title="llms.txt" href="https://www.softwareinabox.eu/llms.txt">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False)}
</script>
<meta name="theme-color" content="#0B2545">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230B2545'/%3E%3Cpath d='M32 13 50 23v18L32 51 14 41V23z' fill='none' stroke='%23C9A227' stroke-width='4'/%3E%3C/svg%3E">
<link rel="stylesheet" href="/assets/fonts.css">
{CSS}
{EXTRA_CSS}
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>

{HEADER}

<main id="contenido">
{body}
</main>

{FOOTER}
{TABS_JS}
</body>
</html>
"""


def main():
    d = os.path.join(HERE, "fichas")
    for fn in sorted(os.listdir(d)):
        if not fn.endswith(".html"):
            continue
        raw = open(os.path.join(d, fn), encoding="utf-8").read()
        m = re.match(r"\s*<!--META (\{.*?\}) -->\n", raw, re.S)
        meta = json.loads(m.group(1))
        out = os.path.join(ROOT, "regulacion", meta["slug"], "index.html")
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, "w", encoding="utf-8").write(page(meta, raw[m.end():]))
        print("ficha:", out.replace(ROOT, ""))


if __name__ == "__main__":
    main()
