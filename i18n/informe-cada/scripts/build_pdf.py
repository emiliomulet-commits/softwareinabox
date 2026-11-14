#!/usr/bin/env python3
"""Maqueta el informe CADA en PDF (A4) para un idioma.
Uso: python3 build_pdf.py <lang>
Entradas: tr/<lang>/part1..6.md, refs.txt, labels.json ; infografías en out/<lang>/ig/igNN.png
Salida: out/<lang>/CADA_informe_<lang>.pdf
Colocación sin huecos: cada infografía va al inicio de la primera página que empieza con un bloque
completo después del final de su sección (una infografía = una página; el resto del texto se desplaza
páginas enteras, así que un solo render de prueba basta)."""
import sys, os, re, json, html, subprocess, io
from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4

LANG = sys.argv[1]
B = os.path.dirname(os.path.abspath(__file__))
TR = f"{B}/tr/{LANG}"; OUT = f"{B}/out/{LANG}"; IG = f"{OUT}/ig"
os.makedirs(OUT, exist_ok=True)
for _f in sorted(os.listdir(IG)):
    if _f.endswith(".png"):
        _j = f"{IG}/{_f[:-4]}.jpg"
        if not os.path.exists(_j) or os.path.getmtime(_j) < os.path.getmtime(f"{IG}/{_f}"):
            subprocess.run(["convert", f"{IG}/{_f}", "-resize", "1250x", "-strip", "-quality", "80", _j], check=True)
LAB = json.load(open(f"{TR}/labels.json", encoding="utf-8"))
MD = "\n".join(open(f"{TR}/part{k}.md", encoding="utf-8").read().rstrip("\n") for k in range(1, 7))
REFS = [l for l in open(f"{TR}/refs.txt", encoding="utf-8").read().split("\n") if l.strip()]
CHROME = "/usr/bin/google-chrome"
NAVY, GOLD, TEAL, GREY = "#0B2545", "#C9A227", "#13807A", "#6B7280"

def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"((?:\[R\d+\])+)", r'<span class="cite">\1</span>', t)
    return t

# ---- markdown -> bloques ----
blocks = []   # dicts: kind, html, sec (índice de sección ##)
sec = 0; heads = []  # (block_id, title)
lines = MD.split("\n"); i = 0
while i < len(lines):
    l = lines[i]
    if not l.strip(): i += 1; continue
    if l.startswith("| "):
        rows = []
        while i < len(lines) and lines[i].startswith("| "):
            rows.append([c.strip() for c in lines[i].strip().strip("|").split(" | ")]); i += 1
        nc = len(rows[0])
        th = "".join(f"<th>{inline(c)}</th>" for c in rows[0])
        tb = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows[1:])
        blocks.append(dict(kind="table", html=f'<table class="c{nc}"><thead><tr>{th}</tr></thead><tbody>{tb}</tbody></table>', sec=sec))
        continue
    if l.startswith("## "):
        sec += 1; blocks.append(dict(kind="h1", html=f"<h1>{inline(l[3:])}</h1>", sec=sec, title=l[3:])); heads.append(len(blocks) - 1)
    elif l.startswith("### "):
        blocks.append(dict(kind="h2", html=f"<h2>{inline(l[4:])}</h2>", sec=sec))
    elif l.startswith("- "):
        items = []
        while i < len(lines) and lines[i].startswith("- "):
            items.append(f"<li>{inline(lines[i][2:])}</li>"); i += 1
        # cada viñeta es un bloque propio para poder cortar entre ellas
        for it in items: blocks.append(dict(kind="li", html=f"<ul>{it}</ul>", sec=sec))
        continue
    elif l.startswith("> "):
        blocks.append(dict(kind="quote", html=f"<blockquote>{inline(l[2:])}</blockquote>", sec=sec))
    else:
        blocks.append(dict(kind="p", html=f"<p>{inline(l)}</p>", sec=sec))
    i += 1
NSEC = sec
REF_ID = len(blocks)  # bloque virtual: encabezado de referencias

CSS = f"""
@page {{ size: A4; margin: 20mm 19mm 18mm 19mm; }}
html {{ font-family: Carlito, Calibri, Inter, sans-serif; font-size: 11.6pt; color:#1F2937; }}
body {{ margin:0; }}
p {{ text-align: justify; line-height: 1.42; margin: 0 0 8pt; hyphens:auto; orphans:3; widows:3 }}
h1 {{ font-size: 17pt; color:{NAVY}; border-bottom: 1.5pt solid {GOLD}; padding-bottom: 4pt; margin: 18pt 0 9pt; break-after: avoid; line-height:1.2 }}
h2 {{ font-size: 12.6pt; color:{TEAL}; margin: 12pt 0 5pt; break-after: avoid; line-height:1.25 }}
ul {{ margin: 0 0 4pt; padding-left: 16pt; }} li {{ line-height:1.4; margin: 0; text-align:justify; hyphens:auto }}
li::marker {{ color:{TEAL} }}
blockquote {{ margin: 6pt 6pt 10pt; padding: 7pt 10pt; background:#E8EDF5; border-left: 3.5pt solid {GOLD}; color:{NAVY}; font-weight:700; line-height:1.32; break-inside: avoid }}
table {{ width:100%; border-collapse: collapse; margin: 4pt 0 10pt; font-size: 9.8pt; line-height:1.28 }}
th {{ background:{NAVY}; color:#fff; text-align:left; padding:4pt 5pt; font-weight:700 }}
td {{ padding:4pt 5pt; border:0.5pt solid #D1D5DB; vertical-align: top }}
td:first-child {{ font-weight:700 }}
tbody tr:nth-child(odd) td {{ background:#F3F4F6 }}
tr {{ break-inside: avoid }} thead {{ display: table-header-group }}
.cite {{ color:{GREY}; font-size: 8.4pt }}
.mk {{ font-size:1px; color:#fff; line-height:0 }}
.igpage {{ break-before: page; break-after: page; height: 255mm; display:flex; align-items:center; justify-content:center; margin:0 }}
.igpage img {{ max-height: 255mm; max-width: 100%; }}
.cover {{ height: 255mm; position: relative; break-after: page }}
.cover .k {{ color:{TEAL}; font-weight:700; font-size:10.5pt; letter-spacing:.04em; margin-top: 52mm }}
.cover .t {{ color:{NAVY}; font-weight:700; font-size:27pt; line-height:1.12; margin: 9pt 0 8pt }}
.cover .s {{ color:#374151; font-size:15pt; line-height:1.3; border-bottom: 2pt solid {GOLD}; padding-bottom: 12pt; margin-bottom: 14pt }}
.cover .sum {{ color:#374151; font-size:11pt; line-height:1.4 }}
.cover .foot {{ position:absolute; bottom: 0; left:0; right:0 }}
.cover .a {{ color:{NAVY}; font-weight:700; font-size:13pt }}
.cover .pl {{ color:{GREY}; font-size:10pt; margin:3pt 0 }} .cover .d {{ color:{GREY}; font-size:9pt; font-style:italic }}
.cover .bar {{ height:5pt; background:{NAVY}; width:100%; margin-bottom: 0 }} .cover .bar2 {{ height:3pt; background:{GOLD}; width:30% }}
.toc h1 {{ border:none; font-size:20pt; margin-top:0 }}
.toc .row {{ display:flex; font-size: 10pt; line-height: 1.5; }}
.toc .row .tt {{ flex:0 1 auto; }} .toc .row .dots {{ flex:1; border-bottom:1px dotted #9CA3AF; margin: 0 4pt 4pt }} .toc .row .pg {{ flex:0 0 auto; }}
.refs h1 {{ break-before: auto }}
.refs p {{ font-size: 8.8pt; text-align:left; padding-left: 26pt; text-indent: -26pt; margin: 0 0 3pt; line-height:1.3; word-break: break-word }}
.refs b {{ color:{NAVY} }}
"""

def build_html(place, tocp, mark):
    out = [f"<!DOCTYPE html><html lang='{LANG}'><head><meta charset='utf-8'><style>{CSS}</style></head><body>"]
    out.append(f"""<div class="cover"><div class="bar"></div><div class="bar2"></div>
<div class="k">{html.escape(LAB['kicker'])}</div><div class="t">{html.escape(LAB['title'])}</div>
<div class="s">{html.escape(LAB['subtitle'])}</div><div class="sum">{html.escape(LAB['summary'])}</div>
<div class="foot"><div class="a">{html.escape(LAB['author'])}</div><div class="pl">{html.escape(LAB['place'])} · softwareinabox.eu</div><div class="d">{html.escape(LAB['disclaimer'])}</div></div></div>""")
    out.append(f'<div class="toc"><h1>{html.escape(LAB["toc"])}</h1>')
    titles = [blocks[h]["title"] for h in heads] + [LAB["references"]]
    for k, t in enumerate(titles):
        pg = str(tocp[k]) if tocp else "000"
        out.append(f'<div class="row"><span class="tt">{inline(t)}</span><span class="dots"></span><span class="pg">{pg}</span></div>')
    out.append("</div><div style='break-before:page'></div>")
    for bid, b in enumerate(blocks):
        for n in place.get(bid, []):
            out.append(f'<div class="igpage"><img src="file://{IG}/ig{n:02d}.jpg"></div>')
        h = b["html"]
        if mark:
            h = re.sub(r"^(<(?:h1|h2|p|blockquote|ul><li|table><thead><tr><th)[^>]*>)", lambda m: m.group(1) + f'<span class="mk">QZ{bid}QZ</span>', h)
        out.append(h)
    for n in place.get(REF_ID, []):
        out.append(f'<div class="igpage"><img src="file://{IG}/ig{n:02d}.jpg"></div>')
    out.append('<div class="refs"><h1>' + (f'<span class="mk">QZ{REF_ID}QZ</span>' if mark else "") + html.escape(LAB["references"]) + "</h1>")
    for r in REFS:
        rid, rest = r.split(" ", 1)
        out.append(f"<p><b>{rid}</b>&nbsp;&nbsp;{html.escape(rest)}</p>")
    out.append("</div></body></html>")
    return "\n".join(out)

def render(htmltxt, pdfpath):
    hp = pdfpath.replace(".pdf", ".html")
    open(hp, "w", encoding="utf-8").write(htmltxt)
    with sync_playwright() as p:
        br = p.chromium.launch(executable_path=CHROME, args=["--allow-file-access-from-files"])
        pg = br.new_page(); pg.goto("file://" + hp, wait_until="load")
        pg.pdf(path=pdfpath, format="A4", print_background=True, prefer_css_page_size=True)
        br.close()
    txt = subprocess.run(["pdftotext", "-layout", pdfpath, "-"], capture_output=True, text=True).stdout
    return txt.split("\f")

def analyse(pages):
    first, starts = {}, {}
    for pi, p in enumerate(pages, 1):
        ms = re.findall(r"QZ(\d+)QZ", p)
        for m in ms: first.setdefault(int(m), pi)
        body = p.strip()
        mm = re.match(r"QZ(\d+)QZ", body)
        starts[pi] = int(mm.group(1)) if mm else None
    return first, starts

# Colocación iterativa: una imagen por render (como place.py)
probe = f"{OUT}/probe.pdf"
ends = heads[1:] + [REF_ID]
igsec = list(range(1, 33)) + [33, 34, 35]
place = {}; last = -1
for k in range(1, 36):
    if not os.path.exists(f"{IG}/ig{k:02d}.png"): continue
    pages = render(build_html(place, None, True), probe)
    first, starts = analyse(pages)
    nxt = ends[igsec[k - 1] - 1]
    q = first[nxt]
    if starts.get(q) == nxt:
        cand = nxt
    else:
        nq = [b for b, pg in first.items() if pg == q + 1]
        if not nq: cand = REF_ID
        else:
            E = min(nq)
            if starts.get(q + 1) == E: cand = E
            else:
                cand = E - 1
                if blocks[cand]["kind"] == "table" or cand <= last: cand = E
        while cand - 1 > last and cand - 1 < len(blocks) and blocks[cand - 1]["kind"] in ("h1", "h2"): cand -= 1
    if cand < last: cand = last
    place.setdefault(cand, []).append(k); last = cand
pages = render(build_html(place, None, True), probe)
first, starts = analyse(pages)
def shift(bid): return 0
tocp = [first[h] for h in heads] + [first[REF_ID]]
# Pase de verificación (con marcas) y final (sin marcas)
pages2 = render(build_html(place, tocp, True), f"{OUT}/verify.pdf")
f2, _ = analyse(pages2)
real = [f2[h] for h in heads] + [f2[REF_ID]]
if real != tocp:
    print("aviso: índice recalculado", sum(a != b for a, b in zip(real, tocp)), "diferencias")
    tocp = real
final_raw = f"{OUT}/raw.pdf"
render(build_html(place, tocp, False), final_raw)

# Cabecera y pie (desde la página 2)
pdfmetrics.registerFont(TTFont("Carlito", "/usr/share/fonts/truetype/crosextra/Carlito-Regular.ttf"))
rd = PdfReader(final_raw); wr = PdfWriter()
buf = io.BytesIO(); c = canvas.Canvas(buf, pagesize=A4); w, h = A4
for n in range(1, len(rd.pages) + 1):
    if n > 1:
        c.setFont("Carlito", 8); c.setFillColorRGB(0.42, 0.45, 0.5)
        c.drawRightString(w - 19 * 2.8346, h - 12 * 2.8346, LAB["running_header"])
        c.setFont("Carlito", 9); c.drawCentredString(w / 2, 9 * 2.8346, str(n))
    c.showPage()
c.save(); buf.seek(0); ov = PdfReader(buf)
for n, pg in enumerate(rd.pages, 1):
    if n > 1: pg.merge_page(ov.pages[n - 1])
    wr.add_page(pg)
wr.compress_identical_objects(remove_identicals=True, remove_orphans=True)
wr.add_metadata({"/Title": f"{LAB['title']} — {LAB['pdf_filename_title']}", "/Author": LAB["author"], "/Subject": LAB["subtitle"]})
final = f"{OUT}/CADA_informe_{LANG}.pdf"
with open(final + ".tmp", "wb") as f: wr.write(f)
subprocess.run(["qpdf", "--object-streams=generate", "--compress-streams=y", "--recompress-flate", "--compression-level=9", final + ".tmp", final], check=True)
os.remove(final + ".tmp")
for t in ("probe", "verify", "raw"):
    for ext in (".pdf", ".html"):
        try: os.remove(f"{OUT}/{t}{ext}")
        except FileNotFoundError: pass
print(LANG, "páginas", len(rd.pages), "imágenes", sum(len(v) for v in place.values()), "->", final)
