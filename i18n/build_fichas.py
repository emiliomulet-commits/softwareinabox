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
/* landings de país */
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
.flag{display:inline-flex;align-items:center;gap:8px;font:700 12px var(--disp);letter-spacing:.08em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,162,39,.5);border-radius:999px;padding:5px 12px}
.flow{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:8px 0 34px}
.flow>div{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 14px;position:relative;font-size:14.5px}
.flow>div b{display:block;font:800 14px var(--disp);color:var(--ink);margin-bottom:6px}
.flow>div:not(:last-child):after{content:"→";position:absolute;right:-12px;top:50%;transform:translateY(-50%);color:var(--gold-d);font-weight:800;z-index:2}
.case{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:24px;display:flex;flex-direction:column;gap:10px}
.case .meta{display:flex;gap:8px;flex-wrap:wrap;align-items:center;font:700 12px var(--disp);color:var(--mute);text-transform:uppercase;letter-spacing:.06em}
.case h4{margin:0}
.case dl{margin:0;font-size:15px}.case dt{font:700 12.5px var(--disp);color:var(--gold-d);text-transform:uppercase;letter-spacing:.06em;margin-top:8px}.case dd{margin:2px 0 0}
.case .src-l{font-size:13.5px;margin-top:auto;padding-top:8px;border-top:1px solid var(--line)}.case .src-l a{color:var(--ink);font-weight:600}
.scen{border:1.5px dashed var(--gold);background:var(--gold-t)}
.scen .meta:before{content:"Escenario ilustrativo";background:var(--gold);color:var(--ink);padding:3px 9px;border-radius:6px;letter-spacing:.04em}
.risk td:nth-child(3),.risk td:nth-child(4){white-space:nowrap}
.lvl{display:inline-block;font:700 12px var(--disp);padding:3px 10px;border-radius:999px}
.lvl.h{background:#FCEFEA;color:#A3201A}.lvl.m{background:#FDF6E6;color:var(--warn)}.lvl.b{background:#EEF8F2;color:var(--ok)}
.faq{border:1px solid var(--line);border-radius:12px;background:#fff;margin-bottom:10px}
.faq summary{cursor:pointer;padding:18px 22px;font:700 16.5px var(--disp);color:var(--ink);list-style:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary:after{content:"+";float:right;color:var(--gold-d);font-weight:800}
.faq[open] summary:after{content:"–"}
.faq>div{padding:0 22px 18px;font-size:16px}
.ctaband{background:linear-gradient(135deg,#123766 0%,var(--deep) 70%);border-radius:24px;padding:40px;color:#C9D3E0;display:flex;gap:28px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.ctaband h3{color:#fff;margin:0 0 8px}.ctaband p{margin:0;max-width:40em}
.split{font:700 12.5px var(--disp);color:var(--mute);text-transform:uppercase;letter-spacing:.12em;margin:40px 0 16px}
@media(max-width:1100px){.flow{grid-template-columns:repeat(3,1fr)}.flow>div:nth-child(3):after{display:none}}
@media(max-width:680px){.flow{grid-template-columns:1fr}.flow>div:after{display:none}.ctaband{padding:26px}}
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


def page(meta, body, faq=None):
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
    if meta.get("country"):
        ld["@graph"][0]["spatialCoverage"] = {"@type": "Country", "name": meta["country"]}
    if faq:
        ld["@graph"].append({"@type": "FAQPage", "@id": url + "#faq", "mainEntity": faq})
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


FAQ_RE = re.compile(r'<details class="faq"[^>]*>\s*<summary>(.*?)</summary>\s*<div>(.*?)</div>\s*</details>', re.S)


def strip_tags(x):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip()


def landing_body(raw, ficha_body):
    """Sustituye <!--FICHA:id--> por la sección id de la ficha UE (calendario, niveles de riesgo...)."""
    def sec(m):
        sid = m.group(1)
        mm = re.search(r'<section[^>]*\bid="' + re.escape(sid) + r'".*?</section>', ficha_body, re.S)
        if not mm:
            raise SystemExit(f"FICHA:{sid} no existe en la ficha")
        return mm.group(0)
    raw = re.sub(r"<!--FICHA:([a-z0-9-]+)-->", sec, raw)
    # fondos alternos: blanco / gris; una sección sin id (banda de llamada) mantiene el fondo de la anterior
    state = {"i": -1, "alt": True}
    def fix(m):
        attrs = m.group(1)
        if 'id="' in attrs:
            state["alt"] = not state["alt"]
        cls = re.search(r'class="([^"]*)"', attrs).group(1).split()
        cls = [c for c in cls if c != "alt"] + (["alt"] if state["alt"] else [])
        return "<section" + re.sub(r'class="[^"]*"', 'class="' + " ".join(cls) + '"', attrs, count=1) + ">"
    return re.sub(r"<section(\s[^>]*\bclass=\"[^\"]*\bsec\b[^>]*)>", fix, raw)


def main():
    d = os.path.join(HERE, "fichas")
    for fn in sorted(os.listdir(d)):
        if not fn.endswith(".html"):
            continue
        raw = open(os.path.join(d, fn), encoding="utf-8").read()
        m = re.match(r"\s*<!--META (\{.*?\}) -->\n", raw, re.S)
        meta = json.loads(m.group(1))
        body = raw[m.end():]
        out = os.path.join(ROOT, "regulacion", meta["slug"], "index.html")
        land = os.path.join(HERE, "landings", "es", fn)
        if os.path.exists(land):
            # Hay landing de país (España): la landing se publica en /regulacion/<slug>/ y la ficha UE
            # queda como fuente de las traducciones (sites.json -> "tr_src") hasta que cada país tenga la suya.
            src = os.path.join(HERE, "src", "regulacion-" + meta["slug"] + ".html")
            os.makedirs(os.path.dirname(src), exist_ok=True)
            open(src, "w", encoding="utf-8").write(page(meta, body))
            print("ficha UE (fuente de traducción):", src.replace(ROOT, ""))
            lraw = open(land, encoding="utf-8").read()
            lm = re.match(r"\s*<!--META (\{.*?\}) -->\n", lraw, re.S)
            lmeta = dict(meta, **json.loads(lm.group(1)))
            lbody = landing_body(lraw[lm.end():], body)
            faq = [{"@type": "Question", "name": strip_tags(q), "acceptedAnswer": {"@type": "Answer", "text": strip_tags(a)}}
                   for q, a in FAQ_RE.findall(lbody)]
            os.makedirs(os.path.dirname(out), exist_ok=True)
            open(out, "w", encoding="utf-8").write(page(lmeta, lbody, faq))
            print("landing:", out.replace(ROOT, ""))
            continue
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, "w", encoding="utf-8").write(page(meta, body))
        print("ficha:", out.replace(ROOT, ""))


if __name__ == "__main__":
    main()
