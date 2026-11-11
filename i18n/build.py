#!/usr/bin/env python3
"""Generador multiidioma de las webs de Software in a Box.

Uso (desde la raíz del repo de una web):
  python3 i18n/build.py extract   -> i18n/strings.json (textos en español a traducir)
  python3 i18n/build.py build     -> /en/ /fr/ /de/ /nl/ /pt/ /it/ + hreflang + selector + sitemap
  python3 i18n/build.py status    -> textos pendientes por idioma

El español es la fuente: se edita la página en la raíz y se vuelve a ejecutar
extract + build. Las traducciones viven en i18n/<idioma>.json ({id: texto}).
"""
import hashlib, html, json, os, re, sys, datetime
from html.parser import HTMLParser

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CFG = json.load(open(os.path.join(HERE, "sites.json"), encoding="utf-8"))
SITE_KEY = open(os.path.join(HERE, "SITE"), encoding="utf-8").read().strip()
SITE = CFG["sites"][SITE_KEY]
LANGS = CFG["langs"]
SRC = CFG["source_lang"]
ALL = [SRC] + LANGS


BUILDING = set()


def active():
    """Idiomas publicados: español + los que se están generando + los que ya tienen carpeta."""
    return [SRC] + [l for l in LANGS if l in BUILDING or os.path.isdir(os.path.join(ROOT, l))]

INLINE = {"a", "b", "strong", "i", "em", "span", "br", "small", "sup", "sub", "code", "u",
          "mark", "abbr", "s", "wbr", "q", "cite", "time", "tspan", "bdi", "kbd", "del", "ins"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param",
        "source", "track", "wbr"}
NOTEXT = {"script", "style", "textarea", "noscript"}
LETTER = re.compile(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]")
ATTRS = {"alt", "title", "placeholder", "aria-label"}
META_TR = {"description", "og:title", "og:description", "twitter:title", "twitter:description",
           "og:image:alt", "twitter:image:alt"}
JSON_KEYS = {"name", "description", "text", "headline", "alternateName", "abstract", "slogan",
             "disambiguatingDescription", "caption", "articleBody", "keywords", "knowsAbout",
             "serviceType", "category", "jobTitle", "featureList", "audienceType", "about"}


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def hid(s):
    return hashlib.sha1(norm(s).encode("utf-8")).hexdigest()[:10]


# ---------------------------------------------------------------- parser con posiciones
class Node:
    def __init__(self, tag, attrs, s0, s1):
        self.tag, self.attrs, self.s0, self.s1 = tag, dict(attrs), s0, s1
        self.e0 = self.e1 = None
        self.kids = []  # Node o (ini, fin) de texto
        self.parent = None


class P(HTMLParser):
    def __init__(self, raw):
        super().__init__(convert_charrefs=False)
        self.raw = raw
        self.lines = [0]
        for m in re.finditer("\n", raw):
            self.lines.append(m.end())
        self.root = Node("#root", [], 0, 0)
        self.stack = [self.root]

    def off(self):
        l, c = self.getpos()
        return self.lines[l - 1] + c

    def handle_starttag(self, tag, attrs):
        o = self.off(); t = self.get_starttag_text()
        n = Node(tag, attrs, o, o + len(t)); n.parent = self.stack[-1]
        self.stack[-1].kids.append(n)
        if tag not in VOID:
            self.stack.append(n)
        else:
            n.e0 = n.e1 = n.s1

    def handle_startendtag(self, tag, attrs):
        o = self.off(); t = self.get_starttag_text()
        n = Node(tag, attrs, o, o + len(t)); n.parent = self.stack[-1]; n.e0 = n.e1 = n.s1
        self.stack[-1].kids.append(n)

    def handle_endtag(self, tag):
        o = self.off()
        e = self.raw.index(">", o) + 1
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                for j in range(len(self.stack) - 1, i - 1, -1):
                    n = self.stack[j]
                    if n.e0 is None:
                        n.e0, n.e1 = (o, e) if j == i else (o, o)
                del self.stack[i:]
                return

    def _txt(self, length):
        o = self.off(); self.stack[-1].kids.append((o, o + length))

    def handle_data(self, d): self._txt(len(d))
    def handle_entityref(self, name): self._txt(len(name) + 2)
    def handle_charref(self, name): self._txt(len(name) + 3)


def parse(raw):
    p = P(raw); p.feed(raw); p.close()
    for n in p.stack[1:]:
        if n.e0 is None:
            n.e0 = n.e1 = len(raw)
    return p.root


def walk(n):
    for k in n.kids:
        if isinstance(k, Node):
            yield k
            yield from walk(k)


def inline_only(n):
    for k in n.kids:
        if isinstance(k, Node):
            if k.tag not in INLINE or not inline_only(k):
                return False
    return True


def has_letters(raw, n):
    return bool(LETTER.search(re.sub(r"<[^>]+>|&[#\w]+;", " ", raw[n.s1:n.e0])))


# ---------------------------------------------------------------- unidades traducibles
def units(raw, site=SITE):
    """Devuelve lista de (ini, fin, kind, texto_fuente, extra)."""
    out = []
    root = parse(raw)
    skip_ids = set(site.get("skip_script_ids", []))
    skip_types = set(site.get("skip_script_types", []))

    def rec(n):
        for k in n.kids:
            if isinstance(k, tuple):
                a, b = k
                seg = raw[a:b]
                if LETTER.search(re.sub(r"&[#\w]+;", " ", seg)) and n.tag not in NOTEXT:
                    lead = len(seg) - len(seg.lstrip()); trail = len(seg.rstrip())
                    out.append((a + lead, a + trail, "html", seg.strip(), None))
                continue
            if k.tag in NOTEXT:
                continue
            if k.tag not in ("html", "head", "body", "#root") and k.kids and inline_only(k) and has_letters(raw, k):
                out.append((k.s1, k.e0, "html", raw[k.s1:k.e0].strip() and raw[k.s1:k.e0], None))
                continue
            rec(k)
    rec(root)
    # recorta espacios de las unidades de bloque
    fixed = []
    for a, b, kind, s, x in out:
        seg = raw[a:b]; lead = len(seg) - len(seg.lstrip()); trail = len(seg.rstrip())
        fixed.append((a + lead, a + trail, kind, seg.strip(), x))
    out = fixed

    for n in walk(root):
        # atributos
        tag_raw = raw[n.s0:n.s1]
        names = set()
        for an in ATTRS:
            if an in n.attrs and n.attrs[an] and LETTER.search(n.attrs[an]):
                names.add(an)
        if n.tag == "meta" and (n.attrs.get("name") in META_TR or n.attrs.get("property") in META_TR):
            names.add("content")
        if n.tag in ("input", "button") and n.attrs.get("type") in ("submit", "button", "reset") and n.attrs.get("value"):
            names.add("value")
        for an in names:
            m = re.search(r"(\s" + re.escape(an) + r"\s*=\s*)([\"'])(.*?)\2", tag_raw, re.S | re.I)
            if m:
                a = n.s0 + m.start(3); b = n.s0 + m.end(3)
                out.append((a, b, "attr", html.unescape(raw[a:b]), m.group(2)))
        # scripts
        if n.tag == "script":
            typ = (n.attrs.get("type") or "").lower()
            body0, body1 = n.s1, n.e0
            if n.attrs.get("id") in skip_ids or typ in skip_types or n.attrs.get("src"):
                continue
            if typ == "application/ld+json":
                out.append((body0, body1, "jsonld", raw[body0:body1], None))
                continue
            if site.get("js_extract", True) is False or n.attrs.get("data-i18n") == "skip":
                continue
            js = raw[body0:body1]
            for m in re.finditer(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"", js):
                q = "'" if m.group(1) is not None else '"'
                s = m.group(1) if m.group(1) is not None else m.group(2)
                if not LETTER.search(s):
                    continue
                prev = js[:m.start()].rstrip()[-1:] 
                single_word = re.match(r"^[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+[:]?$", s) and prev in (":", ",", "[", "(", "?")
                if not (" " in s.strip() or re.search(r"[ÁÉÍÓÚÜÑáéíóúüñ¿¡]", s) or single_word):
                    continue
                if re.search(r"(^|[\s,>])[.#][\w-]|\w\.[a-z][\w-]*($|[\s,>])|\[[\w-]+=?", s) and not re.search(r"[áéíóúñ]", s):
                    continue  # selectores CSS
                a = body0 + m.start(1 if q == "'" else 2); b = a + len(s)
                out.append((a, b, "js", s, q))
    # quita unidades anidadas dentro de un bloque html (se traducen con el bloque)
    blocks = sorted((a, b) for a, b, k, s, x in out if k == "html")
    def inside(a, b):
        for c, d in blocks:
            if c <= a and b <= d and (c, d) != (a, b):
                return True
            if c > a:
                break
        return False
    return [u for u in out if not inside(u[0], u[1])]


def jsonld_strings(txt):
    res = []
    try:
        data = json.loads(txt)
    except Exception:
        return res
    def rec(o, key=None):
        if isinstance(o, dict):
            for k, v in o.items():
                rec(v, k)
        elif isinstance(o, list):
            for v in o:
                rec(v, key)
        elif isinstance(o, str) and key in JSON_KEYS and LETTER.search(o) and not o.startswith("http"):
            res.append(o)
    rec(data)
    return res


# ---------------------------------------------------------------- extract / status
def extract():
    seen = {}
    for pg in SITE["pages"]:
        raw = strip_i18n(open(os.path.join(ROOT, pg["file"]), encoding="utf-8").read())
        for a, b, kind, s, x in units(raw):
            items = jsonld_strings(s) if kind == "jsonld" else [s]
            for it in items:
                k = hid(it)
                if k not in seen:
                    seen[k] = {"id": k, "src": norm(it), "kind": kind, "pages": []}
                if pg["file"] not in seen[k]["pages"]:
                    seen[k]["pages"].append(pg["file"])
    json.dump(list(seen.values()), open(os.path.join(HERE, "strings.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    words = sum(len(v["src"].split()) for v in seen.values())
    print(f"{SITE_KEY}: {len(seen)} textos, {words} palabras -> i18n/strings.json")


def load_tr(lang):
    p = os.path.join(HERE, f"{lang}.json")
    d = json.load(open(p, encoding="utf-8")) if os.path.exists(p) else {}
    kp = os.path.join(HERE, "keep.json")
    keep = json.load(open(kp, encoding="utf-8")) if os.path.exists(kp) else []
    strings = {s["id"]: s["src"] for s in json.load(open(os.path.join(HERE, "strings.json"), encoding="utf-8"))}
    for k in keep:
        if k in strings and k not in d:
            d[k] = strings[k]
    if lang != "en" and os.path.exists(os.path.join(HERE, "en.json")):
        for k, v in json.load(open(os.path.join(HERE, "en.json"), encoding="utf-8")).items():
            if v == "=" and k not in d:  # marcas y siglas: se heredan del inglés
                d[k] = "="
    for k, v in list(d.items()):
        if k not in strings:
            continue
        if v == "=":  # "=" significa: se deja igual que en español
            d[k] = strings[k]
        elif v.startswith("~"):  # "~viejo=>nuevo || viejo2=>nuevo2": sustituciones sobre el original
            s = strings[k]
            for pair in v[1:].split(" || "):
                if "<=>" in pair:  # forma ">viejo<=>nuevo<"
                    a, b = pair.split("<=>", 1)
                    a += "<"
                    if a.startswith(">"):
                        b = ">" + b
                else:
                    a, b = pair.split("=>", 1)
                if a not in s:
                    print(f"  aviso {lang} {k}: no encuentro «{a}»")
                s = s.replace(a, b, 1)
            d[k] = s
    return d


def status():
    strings = json.load(open(os.path.join(HERE, "strings.json"), encoding="utf-8"))
    for lang in LANGS:
        d = load_tr(lang)
        miss = [s for s in strings if s["id"] not in d]
        print(f"{lang}: {len(strings) - len(miss)}/{len(strings)} traducidos" + (f", faltan {len(miss)}" if miss else ""))


# ---------------------------------------------------------------- enlaces
def site_of_host(host):
    for key, s in CFG["sites"].items():
        if host in s["hosts"]:
            return key, s
    return None, None


def page_match(s, path):
    p = path or "/"
    for pg in s["pages"]:
        cands = {pg["path"], "/" + pg["file"]}
        if pg["path"].endswith(".html"):
            cands.add(pg["path"][:-5])
        else:
            cands.add(pg["path"] + ".html")
        if pg["file"] == "index.html":
            cands |= {"/", "/index.html", ""}
        if p in cands:
            return pg
    return None


def lpath(pg, lang):
    """Ruta pública. "paths": {"en": "/resources"} en sites.json traduce el slug de un idioma."""
    if lang == SRC:
        return pg["path"]
    return "/" + lang + pg.get("paths", {}).get(lang, pg["path"])


def lfile(pg, lang):
    """Fichero de salida dentro de la carpeta del idioma (sigue al slug traducido si lo hay)."""
    p = pg.get("paths", {}).get(lang)
    if not p:
        return pg["file"]
    return (p.strip("/") or "index") + ("" if p.endswith(".html") else ".html")


def redirect_stub(url):
    return ('<!DOCTYPE html>\n<html><head><meta charset="utf-8"><title>Redirect</title>'
            f'<meta name="robots" content="noindex"><link rel="canonical" href="{url}">'
            f'<meta http-equiv="refresh" content="0; url={url}">'
            f'<script>location.replace("{url}")</script></head>'
            f'<body><a href="{url}">{url}</a></body></html>\n')


def loc_url(u, lang):
    if not u or u.startswith(("#", "mailto:", "tel:", "data:", "javascript:", "{")):
        return u
    m = re.match(r"^(https?://)([^/]+)(/[^?#]*)?([?#].*)?$", u)
    if m:
        key, s = site_of_host(m.group(2))
        if not s:
            return u
        pg = page_match(s, m.group(3) or "/")
        if not pg:
            return u
        if lang in CFG.get("lang_sites", {}) and key not in CFG["lang_sites"][lang]:
            lang = CFG["fallback"][lang]  # la web de destino no tiene esa versión (fr-be -> fr, da -> en)
        return s["base"] + lpath(pg, lang) + (m.group(4) or "")
    if re.match(r"^[a-z]+:", u):
        return u
    m = re.match(r"^([^?#]*)([?#].*)?$", u)
    path, rest = m.group(1), m.group(2) or ""
    if not path.startswith("/"):
        path = "/" + re.sub(r"^(\./)+", "", path)
        if path == "/.":
            path = "/"
    pg = page_match(SITE, path)
    if pg:
        return lpath(pg, lang) + rest
    return path + rest


def rewrite_links(raw, lang):
    def fix_tag(m):
        tag = m.group(0)
        def f(mm):
            return mm.group(1) + mm.group(2) + loc_url(html.unescape(mm.group(3)), lang).replace('"', "&quot;") + mm.group(2)
        return re.sub(r"(\s(?:href|src|action)\s*=\s*)([\"'])(.*?)\2", f, tag, flags=re.I)
    out = re.sub(r"<(?:a|link|img|script|form|area|iframe|source|image|use)\b[^>]*>", fix_tag, raw, flags=re.I)
    return out


# ---------------------------------------------------------------- bloques comunes
def hreflang_block(pg):
    base = SITE["base"]
    lines = ["<!-- I18N:BEGIN -->"]
    for l in active():
        lines.append(f'<link rel="alternate" hreflang="{l}" href="{base}{lpath(pg, l)}">')
    lines.append(f'<link rel="alternate" hreflang="x-default" href="{base}{lpath(pg, CFG["x_default"])}">')
    lines.append("<!-- I18N:END -->")
    return "\n".join(lines)


SW_CSS = ("<style>.i18n-sw{position:fixed;left:16px;bottom:16px;z-index:2147483000;font:600 14px/1.2 system-ui,-apple-system,'Segoe UI',sans-serif}"
          ".i18n-sw details{background:#0B2545;color:#fff;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);overflow:hidden}"
          ".i18n-sw summary{list-style:none;cursor:pointer;padding:10px 14px;display:flex;align-items:center;gap:8px;user-select:none}"
          ".i18n-sw summary::-webkit-details-marker{display:none}"
          ".i18n-sw summary:focus-visible,.i18n-sw a:focus-visible{outline:3px solid #C9A227;outline-offset:-3px}"
          ".i18n-sw ul{list-style:none;margin:0;padding:4px 0 8px;border-top:1px solid rgba(255,255,255,.15)}"
          ".i18n-sw a{display:block;padding:7px 16px;color:#C9D3E0;text-decoration:none;font-weight:500}"
          ".i18n-sw a:hover{color:#fff;background:rgba(255,255,255,.08)}"
          ".i18n-sw a[aria-current]{color:#C9A227;font-weight:700}"
          "@media print{.i18n-sw{display:none}}</style>")


def switcher(pg, lang):
    base = SITE["base"]
    items = []
    for l in active():
        cur = ' aria-current="true"' if l == lang else ""
        items.append(f'<li><a href="{base}{lpath(pg, l)}" hreflang="{l}" lang="{l}"{cur}>{CFG["names"][l]}</a></li>')
    globe = ('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">'
             '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>')
    label = {"es": "Idioma", "en": "Language", "fr": "Langue", "de": "Sprache", "nl": "Taal", "pt": "Idioma", "it": "Lingua", "da": "Sprog", "fr-be": "Langue", "nl-be": "Taal"}.get(lang, "Language")
    return ("<!-- I18N-SW:BEGIN -->" + SW_CSS +
            f'<nav class="i18n-sw" aria-label="{label}"><details><summary>{globe}{lang.upper()}</summary><ul>'
            + "".join(items) + "</ul></details></nav><!-- I18N-SW:END -->")


def strip_i18n(raw):
    raw = re.sub(r"\n?<!-- I18N:BEGIN -->.*?<!-- I18N:END -->", "", raw, flags=re.S)
    raw = re.sub(r"<!-- I18N-SW:BEGIN -->.*?<!-- I18N-SW:END -->\n?", "", raw, flags=re.S)
    raw = re.sub(r"[ \t]*<link rel=\"alternate\" hreflang=\"[^\"]*\" href=\"[^\"]*\">\n?", "", raw)
    return raw


def add_common(raw, pg, lang):
    raw = re.sub(r"</head>", hreflang_block(pg) + "\n</head>", raw, count=1)
    i = raw.rfind("</body>")
    if i < 0:
        raw += switcher(pg, lang)
    else:
        raw = raw[:i] + switcher(pg, lang) + "\n" + raw[i:]
    return raw


# ---------------------------------------------------------------- build
def translate_jsonld(txt, tr, lang, pg):
    try:
        data = json.loads(txt)
    except Exception:
        return txt, []
    miss = []
    page_urls = {SITE["base"] + p["path"] for p in SITE["pages"]}
    def rec(o, key=None, parent=None):
        if isinstance(o, dict):
            return {k: rec(v, k, o) for k, v in o.items()}
        if isinstance(o, list):
            return [rec(v, key, parent) for v in o]
        if isinstance(o, str):
            if key == "inLanguage":
                return lang
            if key in JSON_KEYS and LETTER.search(o) and not o.startswith("http"):
                t = tr.get(hid(o))
                if t is None:
                    miss.append(o); return o
                return t
            if o.startswith("http") and key != "@id":
                return loc_url(o, lang)
            if key == "@id" and o.startswith("http") and "#" in o:
                b, frag = o.split("#", 1)
                if frag in ("organization", "website"):
                    return o
                return loc_url(b, lang) + "#" + frag
        return o
    out = rec(data)
    return "\n" + json.dumps(out, ensure_ascii=False, indent=1) + "\n", miss


def js_escape(t, q):
    return re.sub(r"(?<!\\)" + re.escape(q), "\\" + q, t).replace("\n", "\\n")


def build_page(pg, lang, tr, missing):
    path = os.path.join(ROOT, pg["file"])
    raw = strip_i18n(open(path, encoding="utf-8").read())
    if lang == SRC:
        return add_common(raw, pg, lang)
    reps = []
    for a, b, kind, s, x in units(raw):
        if kind == "jsonld":
            t, miss = translate_jsonld(s, tr, lang, pg)
            missing.extend(miss); reps.append((a, b, t)); continue
        t = tr.get(hid(s))
        if t is None:
            missing.append(s); continue
        if kind == "attr":
            t = html.escape(t, quote=True) if "&" not in t or not re.search(r"&[#\w]+;", t) else t.replace('"', "&quot;")
        elif kind == "js":
            t = js_escape(t, x)
        reps.append((a, b, t))
    reps.sort(key=lambda r: r[0], reverse=True)
    last = None
    for a, b, t in reps:
        if last is not None and b > last:
            continue  # solapamiento: se queda la unidad exterior ya aplicada
        raw = raw[:a] + t + raw[b:]
        last = a
    url = SITE["base"] + lpath(pg, lang)
    raw = re.sub(r'(<html\b[^>]*?\blang=")[^"]*"', r"\g<1>" + lang + '"', raw, count=1)
    raw = re.sub(r'(<link rel="canonical" href=")[^"]*"', r"\g<1>" + url + '"', raw)
    raw = re.sub(r'(<meta property="og:url" content=")[^"]*"', r"\g<1>" + url + '"', raw)
    raw = re.sub(r'(<meta property="og:locale" content=")[^"]*"', r"\g<1>" + CFG["locales"][lang] + '"', raw)
    raw = rewrite_links(raw, lang)
    # formularios: página de gracias en el idioma y asunto marcado
    raw = re.sub(r'(name="_next" value=")([^"]*)"', lambda m: m.group(1) + loc_url(m.group(2), lang) + '"', raw)
    raw = re.sub(r'(name="_subject" value=")([^"]*)"', lambda m: m.group(1) + m.group(2) + " [" + lang.upper() + ']"', raw)
    return add_common(raw, pg, lang)


def sitemap():
    base = SITE["base"]; today = datetime.date.today().isoformat()
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for pg in SITE["pages"]:
        if pg.get("sitemap") is False:
            continue
        alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{l}" href="{base}{lpath(pg, l)}"/>' for l in active())
        alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{base}{lpath(pg, CFG["x_default"])}"/>'
        for l in active():
            out.append(f"  <url>\n    <loc>{base}{lpath(pg, l)}</loc>\n    <lastmod>{today}</lastmod>\n"
                       f"    <changefreq>{pg.get('changefreq', 'monthly')}</changefreq>\n    <priority>{pg.get('priority', '0.5')}</priority>{alts}\n  </url>")
    out.append("</urlset>\n")
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(out))


def llms():
    p = os.path.join(ROOT, "llms.txt")
    if not os.path.exists(p):
        return
    t = re.sub(r"\n*## (Idiomas|Languages)[^\n]*\n(?:- [^\n]*\n?)*", "\n", open(p, encoding="utf-8").read()).rstrip() + "\n"
    home = next(pg for pg in SITE["pages"] if pg["file"] == "index.html")
    t += "\n## Idiomas / Languages\n" + "".join(f"- [{CFG['names'][l]}]({SITE['base']}{lpath(home, l)})\n" for l in active())
    open(p, "w", encoding="utf-8").write(t)


def build(only=None):
    langs = [l for l in LANGS if (not only or l in only) and os.path.exists(os.path.join(HERE, f"{l}.json"))]
    BUILDING.update(langs)
    report = {}
    for pg in SITE["pages"]:
        out = build_page(pg, SRC, {}, [])
        open(os.path.join(ROOT, pg["file"]), "w", encoding="utf-8").write(out)
    for lang in langs:
        tr = load_tr(lang)
        if not tr:
            print(f"{lang}: sin traducciones, se omite"); continue
        missing = []
        for pg in SITE["pages"]:
            out = build_page(pg, lang, tr, missing)
            dest = os.path.join(ROOT, lang, lfile(pg, lang))
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            open(dest, "w", encoding="utf-8").write(out)
            if lfile(pg, lang) != pg["file"]:  # la ruta antigua (slug en español) redirige a la traducida
                old = os.path.join(ROOT, lang, pg["file"])
                os.makedirs(os.path.dirname(old), exist_ok=True)
                open(old, "w", encoding="utf-8").write(redirect_stub(SITE["base"] + lpath(pg, lang)))
        report[lang] = sorted(set(missing))
        print(f"{lang}: {len(SITE['pages'])} páginas" + (f", {len(report[lang])} textos sin traducir" if report[lang] else ""))
    sitemap(); llms()
    json.dump(report, open(os.path.join(HERE, "missing.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "build"
    {"extract": extract, "status": status}.get(cmd, lambda: build(sys.argv[2:]))()
