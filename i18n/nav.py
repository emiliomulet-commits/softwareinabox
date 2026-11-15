"""Navegación común de www.softwareinabox.eu, igual en las 10 versiones de idioma.

build.py llama a inject() en cada página (cabecera, migas si faltan, pie, «volver arriba», CSS y JS
comunes) y a postpass() al final del build (anterior/siguiente en las fichas, mapa del sitio en HTML
y página 404 en 10 idiomas).

Textos: se reutilizan las traducciones que ya existen en <idioma>.json (mismo hash que el texto
español). Los textos nuevos de la navegación están en nav_strings.json: {"texto ES": {"en": …}}.
Todo lo que genera este módulo lleva data-nav, para que extract no lo trate como texto a traducir.
"""
import html
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
NEW = json.load(open(os.path.join(HERE, "nav_strings.json"), encoding="utf-8"))
B = None  # módulo build (lo fija build.py)
MISSING = set()

LOGO = ('<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="#0B2545" '
        'stroke="rgba(255,255,255,.18)"/><path d="M32 13 50 23v18L32 51 14 41V23z" fill="none" stroke="#C9A227" '
        'stroke-width="4" stroke-linejoin="round"/><path d="M14 23l18 10 18-10M32 33v18" fill="none" stroke="#C9A227" '
        'stroke-width="4" stroke-linejoin="round"/></svg>')
CARET = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>'
ICON = ('<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' rx=\'14\' fill=\'%230B2545\'/%3E%3Cpath d=\'M32 13 50 23v18L32 51 14 41V23z\' fill=\'none\' stroke=\'%23C9A227\' stroke-width=\'4\'/%3E%3C/svg%3E">')
UP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'

PRODUCTS = [("/productos/cognitiv/", "COGNITIV", "IA soberana en su servidor", "https://cognitiv.softwareinabox.eu/"),
            ("/productos/argos/", "ARGOS", "Pruebas de cumplimiento verificables", "https://argos.softwareinabox.eu/"),
            ("/productos/espacios-de-datos/", "Espacios de datos", "Compartir datos sin moverlos", "https://datos.softwareinabox.eu/")]
BRANCH = {"/productos/": "p", "/regulacion/": "r", "/empresa/": "e", "/contacto/": "c"}


def T(s, lang, tr):
    """Texto de la navegación en el idioma: traducción existente (hash) o nav_strings.json."""
    if lang == B.SRC:
        return s
    t = tr.get(B.hid(s)) if tr else None
    if t:
        return t
    base = lang.split("-")[0]
    d = NEW.get(s, {})
    t = d.get(lang) or d.get(base) or d.get(B.CFG["fallback"].get(lang, ""))
    if t:
        return t
    MISSING.add((lang, s))
    return s


def U(path, lang):
    return B.loc_url(path, lang)


def esc(s):
    return html.escape(s, quote=False)


def branch(pg):
    for k, v in BRANCH.items():
        if pg["path"].startswith(k):
            return v
    return ""


def header(pg, lang, tr):
    br = branch(pg)
    cur = lambda p: ' aria-current="page"' if pg["path"] == p else ""
    curb = lambda b: ' aria-current="page"' if br == b else ""
    t = lambda s: esc(T(s, lang, tr))
    prods = "".join(f'<a href="{U(p, lang)}"{cur(p)}>{t(n)}<small>{t(d)}</small></a>' for p, n, d, _ in PRODUCTS)
    reg = (f'<a href="{U("/regulacion/", lang)}"{cur("/regulacion/")}>{t("Índice y radar")}</a>'
           f'<a href="{U("/regulacion/calendario/", lang)}"{cur("/regulacion/calendario/")}>{t("Calendario")}</a>'
           f'<a href="{U("/regulacion/paises/", lang)}"{cur("/regulacion/paises/")}>{t("Por país")}</a>'
           f'<a href="{U("/regulacion/informe-cada/", lang)}"{cur("/regulacion/informe-cada/")}>{t("Informe CADA")}</a>'
           f'<hr><a href="{U("/mapa-del-sitio/", lang)}#normas">{t("Todas las normas (A–Z)")}</a>')
    emp = (f'<a href="{U("/empresa/", lang)}#como">{t("Cómo trabajamos")}</a>'
           f'<a href="{U("/empresa/", lang)}#experiencia">{t("Experiencia")}</a>'
           f'<a href="{U("/empresa/", lang)}#sectores">{t("Sectores")}</a>')
    dd = lambda key, href, label, panel: (
        f'<div class="sx-dd"><a href="{href}"{curb(key)}>{t(label)}</a>'
        f'<button type="button" aria-expanded="false" aria-label="{esc(T("Desplegar", lang, tr))}: {t(label)}">{CARET}</button>'
        f'<div class="sx-panel">{panel}</div></div>')
    return (f'<header class="sx-hd" data-nav>\n  <div class="sx-wrap">\n'
            f'    <a class="sx-logo" href="{U("/", lang)}" aria-label="{esc(T("Software in a Box, inicio", lang, tr))}">{LOGO}<span>Software in a Box</span></a>\n'
            f'    <button class="sx-burger" type="button" aria-expanded="false" aria-controls="sx-nav">{t("Menú")}</button>\n'
            f'    <nav class="sx-nav" id="sx-nav" aria-label="{esc(T("Principal", lang, tr))}">'
            f'<a href="{U("/", lang)}"{cur("/")}>{t("Inicio")}</a>'
            + dd("p", U("/productos/", lang), "Productos", prods + f'<hr><a href="{U("/productos/", lang)}"{cur("/productos/")}>{t("Todos los productos")}</a>')
            + dd("r", U("/regulacion/", lang), "Regulación UE", reg)
            + dd("e", U("/empresa/", lang), "Empresa", emp)
            + f'<a class="sx-cta" href="{U("/contacto/", lang)}"{curb("c")}>{t("Contacto")}</a></nav>\n'
            f'  </div>\n</header>')


def footer(pg, lang, tr):
    t = lambda s: esc(T(s, lang, tr))
    col = lambda h, links: f'<div><h2>{t(h)}</h2>' + "".join(f'<a href="{u}"{x}>{l}</a>' for u, l, x in links) + "</div>"
    prods = [(U(p, lang), t(n), "") for p, n, _, _ in PRODUCTS] + [(U("/productos/", lang), t("Todos los productos"), "")]
    reg = [(U("/regulacion/", lang), t("Índice y radar"), ""), (U("/regulacion/calendario/", lang), t("Calendario"), ""),
           (U("/regulacion/paises/", lang), t("Por país"), ""), (U("/regulacion/informe-cada/", lang), t("Informe CADA"), ""),
           (U("/mapa-del-sitio/", lang) + "#normas", t("Todas las normas (A–Z)"), "")]
    emp = [(U("/empresa/", lang) + "#como", t("Cómo trabajamos"), ""), (U("/empresa/", lang) + "#experiencia", t("Experiencia"), ""),
           (U("/empresa/", lang) + "#sectores", t("Sectores"), ""), (U("/contacto/", lang), t("Contacto"), "")]
    res = [(U("/mapa-del-sitio/", lang), t("Mapa del sitio"), ""), (U("https://cognitiv.softwareinabox.eu/", lang), "cognitiv.softwareinabox.eu", ""),
           (U("https://argos.softwareinabox.eu/", lang), "argos.softwareinabox.eu", ""), (U("https://datos.softwareinabox.eu/", lang), "datos.softwareinabox.eu", ""),
           ("/llms.txt", "llms.txt", ""), ("https://argos.softwareinabox.eu/taskforce/", "🔒 " + t("Área de equipo"), ' rel="nofollow"')]
    legal = "".join(f'<a href="{U(p, lang)}">{t(l)}</a>' for p, l in
                    (("/aviso-legal.html", "Aviso legal"), ("/privacidad.html", "Privacidad"), ("/cookies.html", "Cookies")))
    return (f'<footer class="sx-ft" data-nav>\n  <div class="sx-wrap">\n    <div class="sx-cols">\n'
            f'      <div><a class="sx-brand" href="{U("/", lang)}">Software in a Box</a>'
            f'<p>{t("Software para el dato sensible: IA soberana, cumplimiento verificado y espacios de datos federados. Madrid, Unión Europea.")}</p></div>\n'
            f'      {col("Productos", prods)}\n      {col("Regulación UE", reg)}\n      {col("Empresa", emp)}\n      {col("Recursos", res)}\n'
            f'    </div>\n    <div class="sx-legal"><span>{t("© 2026 Software in a Box, marca de Ullswater Investments S.L.")}</span>'
            f'<nav aria-label="{esc(T("Legal", lang, tr))}">{legal}</nav></div>\n  </div>\n</footer>')


CRUMB = {"/aviso-legal.html": "Aviso legal", "/privacidad.html": "Privacidad", "/cookies.html": "Cookies",
         "/gracias.html": None, "/productos/": "Productos", "/empresa/": "Empresa", "/contacto/": "Contacto",
         "/mapa-del-sitio/": "Mapa del sitio", "/regulacion/calendario/": "Calendario", "/regulacion/paises/": "Por país"}


def crumbs(pg, lang, tr):
    p = pg["path"]
    trail = [(U("/", lang), T("Inicio", lang, tr))]
    if p.startswith("/regulacion/") and p != "/regulacion/":
        trail.append((U("/regulacion/", lang), T("Regulación UE", lang, tr)))
    if p.startswith("/productos/") and p != "/productos/":
        trail.append((U("/productos/", lang), T("Productos", lang, tr)))
        last = next((T(n, lang, tr) for q, n, _, _ in PRODUCTS if q == p), "")
    else:
        last = T(CRUMB.get(p) or "", lang, tr) if CRUMB.get(p) else ""
    if not last:
        return ""
    return (f'<nav class="sx-crumbs" data-nav aria-label="{esc(T("Ruta", lang, tr))}">'
            + " › ".join(f'<a href="{u}">{esc(n)}</a>' for u, n in trail)
            + f' › <span aria-current="page">{esc(last)}</span></nav>')


VIEWS = [("en", "UE"), ("es", "España"), ("pt", "Portugal"), ("fr", "Francia"), ("fr-be", "Bélgica"), ("nl", "Países Bajos"),
         ("nl-be", "Bélgica"), ("de", "Alemania"), ("it", "Italia"), ("da", "Dinamarca")]
_ADAPT = None


def adapted(pg):
    """Fichas con contenido propio de cada país: landings (tr_src) o capa i18n/fichas_pais/."""
    global _ADAPT
    if _ADAPT is None:
        f = os.path.join(HERE, "fichas_pais", "de.html")
        _ADAPT = set(re.findall(r"<!--SLUG:([a-z0-9-]+)-->", open(f, encoding="utf-8").read())) if os.path.exists(f) else set()
    m = re.match(r"^/regulacion/([a-z0-9-]+)/$", pg["path"])
    return bool(m) and (bool(pg.get("tr_src")) or m.group(1) in _ADAPT)


def views(pg, lang, tr):
    t = lambda s: esc(T(s, lang, tr))
    items = []
    for l, name in VIEWS:
        if not B.has_lang(pg, l):
            continue
        cur = ' aria-current="page"' if l == lang else ""
        code = "" if l == "en" else f"<small>{l.upper()}</small>"
        items.append(f'<a href="{B.SITE["base"]}{B.lpath(pg, l)}" hreflang="{l}" lang="{l}"{cur}>{t(name)}{code}</a>')
    return (f'<nav class="sx-views" data-nav aria-label="{t("Ver esta norma en:")}"><b>{t("Ver esta norma en:")}</b>'
            + "".join(items) + "</nav>")


_FAQ = {}


def faq_data(slug, lang):
    base = {"fr-be": "fr", "nl-be": "nl"}.get(lang, lang)
    if base not in _FAQ:
        f = os.path.join(HERE, "faq", base + ".json")
        _FAQ[base] = json.load(open(f, encoding="utf-8")) if os.path.exists(f) else {}
    return _FAQ[base].get(slug)


def faq_block(pg, lang, tr, items):
    t = lambda s: esc(T(s, lang, tr))
    qa = "".join(f'<details class="faq"><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q, a in items)
    return (f'<!--SX:FAQ--><section class="sec sx-faq" id="faq" data-nav><div class="wrap"><div class="sec-h"><h2>{t("Preguntas frecuentes")}</h2></div>'
            f'{qa}</div></section><!--/SX:FAQ-->\n')


def faq_ld(pg, lang, items):
    url = B.SITE["base"] + B.lpath(pg, lang)
    ld = {"@context": "https://schema.org", "@type": "FAQPage", "@id": url + "#faq", "inLanguage": lang,
          "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in items]}
    return '<script type="application/ld+json" data-nav id="sx-faq-ld">' + json.dumps(ld, ensure_ascii=False).replace("</", "<\\/") + "</script>\n"


def top_button(pg, lang, tr):
    a = lambda s: html.escape(T(s, lang, tr), quote=True)
    extra = f' data-toc="{a("En esta página")}" data-more="{a("Ver todo")}" data-less="{a("Ver menos")}"'
    if pg["path"] == "/regulacion/":
        links = {"calendario": [U("/regulacion/calendario/", lang), T("Calendario completo", lang, tr)]}
        extra += ' data-fold="cada casos oportunidades glosario" data-foldlinks="' + html.escape(json.dumps(links, ensure_ascii=False), quote=True) + '"'
    return (f'<button class="sx-top" type="button" data-nav aria-label="{a("Volver arriba")}" '
            f'title="{a("Volver arriba")}"{extra}>{UP}</button>')


def strip(raw):
    raw = re.sub(r"\n?<!--SX:PG-->.*?<!--/SX:PG-->", "", raw, flags=re.S)
    raw = re.sub(r"<!--SX:CR-->.*?<!--/SX:CR-->", "<!--SX:CRUMBS-->", raw, flags=re.S)
    raw = re.sub(r'\n?<nav class="sx-views" data-nav.*?</nav>', "", raw, flags=re.S)
    raw = re.sub(r"<!--SX:FAQ-->.*?<!--/SX:FAQ-->\n?", "", raw, flags=re.S)
    raw = re.sub(r'<script type="application/ld\+json" data-nav id="sx-faq-ld">.*?</script>\n?', "", raw, flags=re.S)
    raw = re.sub(r'<a href="#faq" data-nav>.*?</a>', "", raw)
    raw = re.sub(r"<!--SX:NORMS:(l-\w+)-->.*?<!--/SX:NORMS-->", r"<!--SX:NORMS:\1--><!--/SX:NORMS-->", raw, flags=re.S)
    raw = re.sub(r'\n?<button class="sx-top" type="button" data-nav.*?</button>', "", raw, flags=re.S)
    raw = re.sub(r'\n?<link rel="stylesheet" href="/assets/nav\.css[^"]*">', "", raw)
    raw = re.sub(r'\n?<script src="/assets/nav\.js[^"]*" defer></script>', "", raw)
    return raw


def inject(raw, pg, lang, tr):
    if B.SITE is not B.CFG["sites"]["www"]:
        return raw
    if not raw.lstrip().lower().startswith("<!doctype html") or 'http-equiv="refresh"' in raw:
        return raw
    raw = strip(raw)
    v = asset_version()
    raw = re.sub(r"<header\b.*?</header>", lambda _: header(pg, lang, tr), raw, count=1, flags=re.S)
    i = raw.rfind("<footer")
    if i >= 0:
        j = raw.find("</footer>", i) + len("</footer>")
        raw = raw[:i] + footer(pg, lang, tr) + raw[j:]
    if 'class="crumbs' not in raw:
        c = crumbs(pg, lang, tr)
        if c:
            c = "<!--SX:CR-->" + c + "<!--/SX:CR-->"
            raw = raw.replace("<!--SX:CRUMBS-->", c, 1) if "<!--SX:CRUMBS-->" in raw else raw.replace("</header>", "</header>\n" + c, 1)
    ms = re.match(r"^/regulacion/([a-z0-9-]+)/$", pg["path"])
    items = faq_data(ms.group(1), lang) if ms and not pg.get("gen") else None
    if items and 'id="faq"' not in raw:
        i = raw.find('id="fuentes"')
        i = raw.rfind("<section", 0, i) if i > 0 else raw.rfind("<footer")
        raw = raw[:i] + faq_block(pg, lang, tr, items) + raw[i:]
        raw = raw.replace("</head>", faq_ld(pg, lang, items) + "</head>", 1)
        m = re.search(r'(<nav class="subnav"[^>]*>.*?)(<a href="#fuentes")', raw, re.S)
        if m:
            raw = raw[:m.start(2)] + f'<a href="#faq" data-nav>{esc(T("Preguntas frecuentes", lang, tr))}</a>' + raw[m.start(2):]
    if adapted(pg):
        m = re.search(r'<nav class="crumbs"[^>]*>.*?</nav>', raw, re.S)
        if m:
            raw = raw[:m.end()] + "\n" + views(pg, lang, tr) + raw[m.end():]
    raw = raw.replace("</head>", f'<link rel="stylesheet" href="/assets/nav.css?v={v}">\n</head>', 1)
    # imagen social propia de la página (i18n/og_pages.py), si existe
    k = pg["path"].strip("/").replace(".html", "").replace("/", "-")
    base = {"fr-be": "fr", "nl-be": "nl"}.get(lang, lang)
    if k and os.path.exists(os.path.join(ROOT, "assets", "og", f"{k}_{base}.jpg")):
        img = f"https://www.softwareinabox.eu/assets/og/{k}_{base}.jpg"
        raw = re.sub(r'(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*"', lambda m: m.group(1) + img + '"', raw)
    k = raw.rfind("</body>")
    raw = raw[:k] + top_button(pg, lang, tr) + f'\n<script src="/assets/nav.js?v={v}" defer></script>\n' + raw[k:]
    # los scripts propios de cada página ya no gobiernan el menú (lo hace nav.js)
    raw = re.sub(r"document\.querySelector\(([\"'])\.(?:burger|sx-none)\1\),n=document\.getElementById\(([\"'])nav\2\)",
                 'document.createElement("button"),n=document.createElement("nav")', raw)
    # anclas antiguas de la portada que ya no existen
    raw = raw.replace('href="/#principio"', 'href="' + U("/empresa/", lang) + '#como"')
    return raw


_V = None


def asset_version():
    global _V
    if _V is None:
        import hashlib
        h = hashlib.sha1()
        for f in ("nav.css", "nav.js"):
            h.update(open(os.path.join(ROOT, "assets", f), "rb").read())
        _V = h.hexdigest()[:8]
    return _V


# ---------------------------------------------------------------- post-build
def out_file(pg, lang):
    if lang == B.SRC:
        return os.path.join(ROOT, pg["file"])
    return os.path.join(ROOT, lang, B.lfile(pg, lang))


def text(h):
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", h))).strip()


def label(raw):
    m = re.search(r'<nav class="(?:sx-)?crumbs[^"]*"[^>]*>(.*?)</nav>', raw, re.S)
    if m:
        last = re.split(r"›", m.group(1))[-1]
        t = text(last)
        if t:
            return t
    m = re.search(r"<h1[^>]*>(.*?)</h1>", raw, re.S)
    if m:
        return text(m.group(1))
    m = re.search(r"<title[^>]*>(.*?)</title>", raw, re.S)
    return text(m.group(1)) if m else ""


def regs():
    return [pg for pg in B.SITE["pages"] if re.match(r"^/regulacion/[a-z0-9-]+/$", pg["path"]) and pg["path"] != "/regulacion/informe-cada/" and not pg.get("gen")]


def pager(pg, lang, tr, labels):
    rs = regs()
    i = rs.index(pg)
    prv, nxt = rs[i - 1], rs[(i + 1) % len(rs)]
    t = lambda s: esc(T(s, lang, tr))
    return (f'<!--SX:PG--><nav class="sx-pager" data-nav aria-label="{t("Norma anterior")} / {t("Norma siguiente")}"><div class="sx-wrap">'
            f'<a class="sx-prev" href="{U(prv["path"], lang)}" rel="prev"><small>← {t("Norma anterior")}</small><b>{esc(labels[prv["path"]])}</b></a>'
            f'<a class="sx-up" href="{U("/regulacion/", lang)}#radar">{t("Volver al radar")}</a>'
            f'<a class="sx-next" href="{U(nxt["path"], lang)}" rel="next"><small>{t("Norma siguiente")} →</small><b>{esc(labels[nxt["path"]])}</b></a>'
            f'</div></nav><!--/SX:PG-->')


def norms_list(layer, lang, labels):
    out = []
    for pg in regs():
        src = open(os.path.join(ROOT, pg["file"]), encoding="utf-8").read()
        if f'class="layer {layer}"' in src and pg["path"] in labels:
            out.append(f'<li><a href="{U(pg["path"], lang)}">{esc(labels[pg["path"]])}</a></li>')
    return f"<!--SX:NORMS:{layer}--><ul class=\"plist\" data-nav>" + "".join(out) + "</ul><!--/SX:NORMS-->"


def postpass(langs):
    L = [B.SRC] + list(langs)
    ALL = {}
    for lang in L:
        ALL[lang] = {}
        for pg in B.SITE["pages"]:
            f = out_file(pg, lang)
            if os.path.exists(f) and B.has_lang(pg, lang) and not pg.get("gen"):
                ALL[lang][pg["path"]] = label(open(f, encoding="utf-8").read())
    GEN = {"sitemap": sitemap_page, "calendar": calendar_page, "paises": paises_page}
    for lang in L:
        tr = B.load_tr(lang) if lang != B.SRC else {}
        labels = ALL[lang]
        for pg in regs():
            f = out_file(pg, lang)
            if not os.path.exists(f):
                continue
            raw = open(f, encoding="utf-8").read()
            raw = re.sub(r"\n?<!--SX:PG-->.*?<!--/SX:PG-->", "", raw, flags=re.S)
            i = raw.rfind('<footer class="sx-ft"')
            raw = raw[:i] + pager(pg, lang, tr, labels) + "\n" + raw[i:]
            open(f, "w", encoding="utf-8").write(raw)
        for pg in B.SITE["pages"]:
            if not pg["path"].startswith("/productos/") or not B.has_lang(pg, lang) or pg.get("gen"):
                continue
            f = out_file(pg, lang)
            raw = open(f, encoding="utf-8").read()
            raw = re.sub(r"<!--SX:NORMS:(l-\w+)-->.*?<!--/SX:NORMS-->", lambda m: norms_list(m.group(1), lang, labels), raw, flags=re.S)
            open(f, "w", encoding="utf-8").write(raw)
        for pg in B.SITE["pages"]:
            if pg.get("gen") in GEN:
                f = out_file(pg, lang)
                os.makedirs(os.path.dirname(f), exist_ok=True)
                open(f, "w", encoding="utf-8").write(GEN[pg["gen"]](pg, lang, tr, labels, ALL))
                if lang != B.SRC and B.lfile(pg, lang) != pg["file"]:  # ruta antigua -> nueva
                    old = os.path.join(ROOT, lang, pg["file"])
                    os.makedirs(os.path.dirname(old), exist_ok=True)
                    open(old, "w", encoding="utf-8").write(B.redirect_stub(B.SITE["base"] + B.lpath(pg, lang)))
    open(os.path.join(ROOT, "404.html"), "w", encoding="utf-8").write(page_404(langs))
    if MISSING:
        print("nav: textos sin traducir:", sorted(MISSING)[:20], "…" if len(MISSING) > 20 else "")


def calendar_page(pg, lang, tr, labels, ALL):
    t = lambda s: esc(T(s, lang, tr))
    body = (f'<h1>{t("Calendario de la regulación europea")}</h1>\n'
            f'<p class="lead">{t("Todos los hitos de 2025 a 2030, norma a norma: fechas de aplicación, plazos y decisiones pendientes.")}</p>\n'
            f'<div class="sx-cal"><table><thead><tr><th>{t("Fecha")}</th><th>{t("Norma")}</th><th>{t("Hito")}</th><th>{t("A quién afecta")}</th></tr></thead>'
            f'<tbody><!--PRE:tl--><!--/PRE:tl--></tbody></table></div>\n'
            f'<p class="sx-back"><a href="{U("/regulacion/", lang)}#radar">← {t("Volver al radar")}</a> · '
            f'<a href="{U("/regulacion/paises/", lang)}">{t("Por país")}</a> · <a href="{U("/mapa-del-sitio/", lang)}#normas">{t("Todas las normas (A–Z)")}</a></p>\n'
            '<script data-i18n="skip">(function(){var M={fabricante:"F",mayorista:"M",integrador:"I",cliente:"C"},r=M[new URLSearchParams(location.search).get("rol")];'
            'if(!r)return;document.querySelectorAll(".sx-cal tr[data-aud]").forEach(function(x){if(x.dataset.aud.indexOf(r)<0)x.style.display="none"})})();</script>')
    title = T("Calendario de la regulación europea", lang, tr) + " · Software in a Box"
    return shell(pg, lang, tr, title, T("Todos los hitos de 2025 a 2030, norma a norma: fechas de aplicación, plazos y decisiones pendientes.", lang, tr), body)


def paises_page(pg, lang, tr, labels, ALL):
    t = lambda s: esc(T(s, lang, tr))
    cards = []
    for l, name in VIEWS:
        lab = ALL.get(l, {})
        items = [p for p in regs() if adapted(p) and B.has_lang(p, l) and p["path"] in lab]
        lis = "".join(f'<li><a href="{U(p["path"], l)}">{esc(lab[p["path"]])}</a></li>' for p in items)
        sub = "" if l == "en" else f' <small>{l.upper()}</small>'
        cards.append(f'<section lang="{l}"><h2><a href="{U("/regulacion/", l)}">{t(name)}</a>{sub}</h2><ul>{lis}</ul></section>')
    body = (f'<h1>{t("La regulación europea, país por país")}</h1>\n'
            f'<p class="lead">{t("Cada guía adapta las normas a un país: autoridades, leyes nacionales y calendario. La versión de la UE está en inglés.")}</p>\n'
            '<div class="sx-map">' + "\n".join(cards) + '</div>')
    title = T("La regulación europea, país por país", lang, tr) + " · Software in a Box"
    return shell(pg, lang, tr, title, T("Cada guía adapta las normas a un país: autoridades, leyes nacionales y calendario. La versión de la UE está en inglés.", lang, tr), body)


def shell(pg, lang, tr, title, desc, body, robots="index, follow"):
    url = B.SITE["base"] + B.lpath(pg, lang)
    raw = (f'<!DOCTYPE html>\n<html lang="{lang}">\n<head>\n<meta charset="utf-8">\n'
           f'<meta name="viewport" content="width=device-width, initial-scale=1">\n'
           f'<title>{esc(title)}</title>\n<meta name="description" content="{html.escape(desc)}">\n'
           f'<meta name="robots" content="{robots}">\n<link rel="canonical" href="{url}">\n'
           f'<meta property="og:type" content="website">\n<meta property="og:title" content="{html.escape(title)}">\n'
           f'<meta property="og:description" content="{html.escape(desc)}">\n<meta property="og:url" content="{url}">\n'
           f'<meta property="og:image" content="https://www.softwareinabox.eu/assets/og.jpg">\n'
           f'<meta property="og:locale" content="{B.CFG["locales"][lang]}">\n'
           + ICON + "\n"
           '<link rel="stylesheet" href="/assets/fonts.css">\n'
           '<style>*{box-sizing:border-box}body{margin:0;font:17px/1.6 "Hanken Grotesk",system-ui,sans-serif;color:#233044;background:#fff}'
           'h1,h2{font-family:Montserrat,system-ui,sans-serif;color:#0B2545;letter-spacing:-.02em}'
           '.sx-main{max-width:1240px;margin:0 auto;padding:28px 28px 72px}.sx-main h1{font-size:clamp(32px,4vw,46px);margin:8px 0 10px}'
           '.sx-main .lead{color:#5A6A80;max-width:46em;margin:0 0 34px}.sx-map{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:30px}'
           '.sx-map section{border-top:3px solid #C9A227;padding-top:14px}.sx-map h2{font-size:19px;margin:0 0 10px}'
           '.sx-map ul{list-style:none;margin:0;padding:0}.sx-map li{padding:5px 0;border-bottom:1px solid #EEF1F5}'
           '.sx-map a{color:#0B2545;text-decoration:none}.sx-map a:hover{text-decoration:underline}.sx-map small{color:#5A6A80}'
           '.sx-wide{grid-column:1/-1}.sx-wide ul{columns:3 280px;column-gap:30px}.sx-wide li{break-inside:avoid}'
           '.sx-map h2 small{font:600 12px Montserrat,system-ui;color:#8C6D0E;margin-left:6px}.sx-map h2 a{color:#0B2545;text-decoration:none}'
           '.sx-cal{overflow-x:auto;border:1px solid #D5DDE7;border-radius:14px}.sx-cal table{border-collapse:collapse;width:100%;font-size:15.5px}'
           '.sx-cal th{position:sticky;top:0;background:#0B2545;color:#fff;text-align:left;font:700 13px Montserrat,system-ui;text-transform:uppercase;letter-spacing:.06em;padding:12px 14px}'
           '.sx-cal td{padding:11px 14px;border-top:1px solid #EEF1F5;vertical-align:top}.sx-cal tr:nth-child(even) td{background:#F7F9FB}.sx-cal .mini{font-size:13.5px;color:#5A6A80}'
           '.sx-back{margin-top:24px}.sx-back a{color:#0B2545;font-weight:600}</style>\n'
           '</head>\n<body>\n<header></header>\n'
           f'<main id="contenido" class="sx-main">\n{body}\n</main>\n<footer></footer>\n</body>\n</html>\n')
    return B.add_common(inject(raw, pg, lang, tr), pg, lang)


def sitemap_page(pg, lang, tr, labels, ALL=None):
    t = lambda s: esc(T(s, lang, tr))
    li = lambda p, extra="": f'<li><a href="{U(p, lang)}">{esc(labels.get(p, p))}</a>{extra}</li>'
    pages = [p for p in B.SITE["pages"] if B.has_lang(p, lang) and p.get("sitemap", True) is not False and not p.get("gen")]
    norms = sorted((p for p in regs() if p in pages), key=lambda p: labels.get(p["path"], "").lower())
    prods = "".join(li(p) for p, *_ in PRODUCTS if any(x["path"] == p for x in pages))
    body = (f'<h1>{t("Mapa del sitio")}</h1>\n<p class="lead">{t("Todas las páginas de Software in a Box, ordenadas por sección.")}</p>\n<div class="sx-map">\n'
            f'<section><h2>{t("Inicio")}</h2><ul>{li("/")}<li><a href="{U("/contacto/", lang)}">{t("Contacto")}</a></li></ul></section>\n'
            f'<section><h2>{t("Productos")}</h2><ul><li><a href="{U("/productos/", lang)}">{t("Todos los productos")}</a></li>{prods}</ul></section>\n'
            f'<section><h2>{t("Empresa")}</h2><ul><li><a href="{U("/empresa/", lang)}#como">{t("Cómo trabajamos")}</a></li>'
            f'<li><a href="{U("/empresa/", lang)}#experiencia">{t("Experiencia")}</a></li><li><a href="{U("/empresa/", lang)}#sectores">{t("Sectores")}</a></li></ul></section>\n'
            f'<section><h2>{t("Regulación UE")}</h2><ul><li><a href="{U("/regulacion/", lang)}">{t("Índice y radar")}</a></li>'
            f'<li><a href="{U("/regulacion/", lang)}#calendario">{t("Calendario")}</a></li>{li("/regulacion/informe-cada/")}</ul></section>\n'
            f'<section class="sx-wide" id="normas"><h2>{t("Todas las normas (A–Z)")}</h2><ul>' + "".join(li(p["path"]) for p in norms) + '</ul></section>\n'
            f'<section><h2>{t("Otras webs")}</h2><ul>' + "".join(f'<li><a href="{u}">{n}</a> <small>{t(d)}</small></li>' for _, n, d, u in PRODUCTS) + '</ul></section>\n'
            f'<section><h2>{t("Legal")}</h2><ul>' + "".join(li(p) for p in ("/aviso-legal.html", "/privacidad.html", "/cookies.html")) +
            f'<li><a href="/sitemap.xml">{t("Para buscadores (XML)")}</a></li></ul></section>\n</div>')
    title = T("Mapa del sitio", lang, tr) + " · Software in a Box"
    return shell(pg, lang, tr, title, T("Todas las páginas de Software in a Box, ordenadas por sección.", lang, tr), body)


def page_404(langs):
    """GitHub Pages sirve /404.html para cualquier dirección inexistente: el idioma sale de la URL."""
    L = [B.SRC] + list(langs)
    data = {}
    for lang in L:
        tr = B.load_tr(lang) if lang != B.SRC else {}
        g = lambda s: T(s, lang, tr)
        data[lang] = {"h": g("Página no encontrada"), "p": g("La dirección que ha abierto no existe o ha cambiado de sitio. Estas son las secciones principales:"),
                      "l": [[U("/", lang), g("Inicio")], [U("/productos/", lang), g("Productos")], [U("/regulacion/", lang), g("Regulación UE")],
                            [U("/empresa/", lang), g("Empresa")], [U("/contacto/", lang), g("Contacto")], [U("/mapa-del-sitio/", lang), g("Mapa del sitio")]],
                      "b": g("Volver a la página anterior"), "t": g("Página no encontrada") + " · Software in a Box"}
    es = data[B.SRC]
    links = "".join(f'<a href="{u}">{esc(n)}</a>' for u, n in es["l"])
    return ('<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            f'<title>{esc(es["t"])}</title>\n<meta name="robots" content="noindex">\n<link rel="stylesheet" href="/assets/fonts.css">\n'
            '<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#071A33;color:#C9D3E0;font:17px/1.6 "Hanken Grotesk",system-ui,sans-serif;padding:24px}'
            '.c{max-width:640px}.k{font:800 15px Montserrat,system-ui;color:#C9A227;letter-spacing:.2em}h1{font:800 clamp(30px,5vw,44px)/1.1 Montserrat,system-ui;color:#fff;margin:10px 0 14px}'
            '.l{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0}.l a{color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:9px 16px}'
            '.l a:first-child{background:#C9A227;border-color:#C9A227;color:#0B2545;font-weight:700}.l a:hover{border-color:#C9A227}'
            'button{background:none;border:0;color:#AFC0D6;text-decoration:underline;cursor:pointer;font:inherit;padding:0}.g{margin-top:34px;font-size:14px;color:#8FA0B6}.g a{color:#AFC0D6;margin-right:12px}</style>\n'
            '</head>\n<body>\n<div class="c"><div class="k">404</div>'
            f'<h1 id="h">{esc(es["h"])}</h1><p id="p">{esc(es["p"])}</p><nav class="l" id="l">{links}</nav>'
            f'<button id="b" type="button" onclick="history.back()">{esc(es["b"])}</button>'
            '<div class="g">' + "".join(f'<a href="{U("/", l)}" hreflang="{l}" lang="{l}">{esc(B.CFG["names"][l])}</a>' for l in L) + '</div></div>\n'
            '<script>(function(){var D=' + json.dumps(data, ensure_ascii=False).replace("</", "<\\/") + ';'
            'var m=location.pathname.match(/^\\/(en|fr-be|nl-be|fr|de|nl|pt|it|da)(\\/|$)/),l=m?m[1]:"es",d=D[l];if(!d||l==="es")return;'
            'document.documentElement.lang=l;document.title=d.t;document.getElementById("h").textContent=d.h;document.getElementById("p").textContent=d.p;'
            'document.getElementById("b").textContent=d.b;var n=document.getElementById("l");n.innerHTML="";'
            'd.l.forEach(function(x){var a=document.createElement("a");a.href=x[0];a.textContent=x[1];n.appendChild(a)})})();</script>\n'
            '</body>\n</html>\n')
