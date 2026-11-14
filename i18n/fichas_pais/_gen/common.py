"""Generador de i18n/fichas_pais/<lang>.html a partir del contenido por país (content_<lang>.py)."""
import importlib, os, sys, html

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def ul(items, cls="check"):
    return f'<ul class="{cls}">' + "".join(f"<li>{i}</li>" for i in items) + "</ul>"


def card(h4, body):
    inner = ul(body) if isinstance(body, list) else f"<p>{body}</p>"
    return f'<div class="card soft"><h4>{h4}</h4>{inner}</div>'


def srclist(title, srcs):
    if not srcs:
        return ""
    lis = "".join(f'<li>{lab} · <a href="{url}">{t}</a></li>' for lab, t, url in srcs)
    return f'<h4 style="margin-top:26px">{title}</h4><ul class="src">{lis}</ul>'


def section_body(eyebrow, h2, cards, callout=None, extra="", srctitle=None, srcs=None):
    g = "grid2" if len(cards) != 3 else "grid3"
    s = (f'<div class="wrap">\n<div class="sec-h"><div class="eyebrow">{eyebrow}</div><h2>{h2}</h2></div>\n'
         f'<div class="{g}">' + "".join(card(*c) for c in cards) + "</div>\n")
    if extra:
        s += extra + "\n"
    if callout:
        s += f'<div class="callout">{callout}</div>\n'
    if srcs:
        s += srclist(srctitle, srcs) + "\n"
    return s + "</div>"


def table(caption, head, rows):
    th = "".join(f"<th>{h}</th>" for h in head)
    tr = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows)
    return f'<div class="tbl"><table><caption class="sr">{caption}</caption><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table></div>'


def lis(srcs):
    return "".join(f'\n      <li>{lab} · <a href="{url}">{t}</a></li>' for lab, t, url in srcs)


def R(old, new):
    return f"<!--R-->{old}<!--=>-->{new}<!--/R-->\n"


def RX(pat, new):
    return f"<!--RX-->{pat}<!--=>-->{new}<!--/RX-->\n"


def SEC(sid, body):
    return f"<!--SEC:{sid}-->\n{body}\n<!--/SEC-->\n"


def AFTER(sid, body):
    return f"<!--AFTER:{sid}-->\n{body}\n<!--/AFTER-->\n"


def ROW_TR(text):  # elimina filas <tr> que contienen el texto
    return r"<tr>(?:(?!</tr>).)*?" + text + r"(?:(?!</tr>).)*?</tr>\s*"


def build(lang):
    sys.path.insert(0, os.path.dirname(__file__))
    C = importlib.import_module("content_" + lang.replace("-", "_"))
    S = C.SPAIN  # palabra «España» en la traducción
    out = [f"<!-- Adaptación por país de las fichas traducidas ({lang}). Generado por el flujo descrito en CADA_CONTEXTO/08_WEB. -->\n"]
    src_rx = r"(?:\s*<li>" + S + r" · (?:(?!</li>).)*</li>)+"

    def blk(slug, parts):
        out.append(f"<!--SLUG:{slug}-->\n" + "".join(parts) + "<!--/SLUG-->\n\n")

    # --- fichas UE con sección «España» ---
    for slug, key in [("rgpd-omnibus", "rgpd"), ("data-union", "du"), ("chips-act", "chips"), ("ecodiseno-servidores", "eco")]:
        d = getattr(C, "EU", {}).get(key)
        if not d:
            continue
        p = [R(f'<a href="#espana">{S}</a>', f'<a href="#espana">{C.NAV}</a>'), SEC("espana", d["sec"])]
        p.append(RX(src_rx, lis(d["src"])))
        for old, new in d.get("R", []):
            p.append(R(old, new))
        for pat, new in d.get("RX", []):
            p.append(RX(pat, new))
        blk(slug, p)
    # --- fichas nacionales: sección nueva tras la indicada ---
    for slug, after in [("raee", "cambios"), ("factura-electronica", "paises"), ("ens", "nis2"),
                        ("ley-gobernanza-ia", "sandbox"), ("rd-centros-datos", "paises")]:
        d = C.NAT.get(slug)
        if not d:
            continue
        body = f'<section class="sec" id="pais">\n{d["sec"]}\n</section>'
        p = [R('<a href="#eslabon">', f'<a href="#pais">{d.get("nav", C.NAV)}</a><a href="#eslabon">'), AFTER(after, body)]
        for old, new in d.get("R", []):
            p.append(R(old, new))
        blk(slug, p)
    for slug, rs in getattr(C, "EXTRA", {}).items():
        blk(slug, [R(o, n) for o, n in rs])
    os.makedirs(OUT, exist_ok=True)
    open(os.path.join(OUT, lang + ".html"), "w", encoding="utf-8").write("".join(out))
    print("escrito", lang)


if __name__ == "__main__":
    for l in sys.argv[1:]:
        build(l)
