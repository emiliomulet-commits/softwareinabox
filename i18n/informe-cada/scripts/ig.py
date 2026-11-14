# Librería de infografías SVG (760 x 1060) -> PNG con rsvg-convert. Multilingüe (IG_LANG).
import html, subprocess, math, os

LANG = os.environ.get("IG_LANG", "es")
UI = {
 "es": dict(ig="INFOGRAFÍA", src="Fuente: ", done="Hecho", plan="Previsto", scen="Escenario / estimación", gate="Puerta", yes="SÍ", no="NO"),
 "en": dict(ig="INFOGRAPHIC", src="Source: ", done="Done", plan="Planned", scen="Scenario / estimate", gate="Gate", yes="YES", no="NO"),
 "fr": dict(ig="INFOGRAPHIE", src="Source : ", done="Réalisé", plan="Prévu", scen="Scénario / estimation", gate="Étape", yes="OUI", no="NON"),
 "de": dict(ig="INFOGRAFIK", src="Quelle: ", done="Erfolgt", plan="Geplant", scen="Szenario / Schätzung", gate="Meilenstein", yes="JA", no="NEIN"),
 "nl": dict(ig="INFOGRAPHIC", src="Bron: ", done="Gerealiseerd", plan="Gepland", scen="Scenario / schatting", gate="Poort", yes="JA", no="NEE"),
 "pt": dict(ig="INFOGRAFIA", src="Fonte: ", done="Concluído", plan="Previsto", scen="Cenário / estimativa", gate="Etapa", yes="SIM", no="NÃO"),
 "it": dict(ig="INFOGRAFICA", src="Fonte: ", done="Fatto", plan="Previsto", scen="Scenario / stima", gate="Tappa", yes="SÌ", no="NO"),
 "da": dict(ig="INFOGRAFIK", src="Kilde: ", done="Gennemført", plan="Planlagt", scen="Scenarie / skøn", gate="Milepæl", yes="JA", no="NEJ"),
}[LANG]

def fmtnum(v):
    if isinstance(v, (int, float)):
        if LANG == "en":
            return f"{v:,}" if float(v).is_integer() else f"{v:,.1f}"
        s = f"{v:,}" if float(v).is_integer() else f"{v:,.1f}"
        th = " " if LANG == "fr" else "."
        s = s.replace(",", "§").replace(".", ",").replace("§", th)
        if LANG == "es" and isinstance(v, (int, float)) and abs(v) < 10000 and float(v).is_integer():
            s = s.replace(".", "")
        return s
    return str(v)

W, H = 760, 1060
M = 24
NAVY = "#0B2545"; GOLD = "#C9A227"; TEAL = "#13807A"; TEAL_L = "#E3F2F1"
INK = "#1F2937"; G1 = "#374151"; G2 = "#6B7280"; G3 = "#9CA3AF"; G4 = "#E5E7EB"; G5 = "#F3F4F6"; WHITE = "#FFFFFF"
RED = "#B42318"; RED_L = "#FDECEA"; GREEN = "#1F7A4D"; GREEN_L = "#E6F4EC"; AMBER = "#B7791F"; AMBER_L = "#FDF3E1"
NAVY_L = "#E8EDF5"; GOLD_L = "#FBF5E1"
FONT = "Inter"

def esc(s): return html.escape(str(s), quote=True)

def cw(size, weight=400):
    return size * (0.56 if weight >= 600 else 0.53)

def wrap(text, width, size, weight=400):
    words = str(text).split()
    lines, cur = [], ""
    maxc = max(4, int(width / cw(size, weight)))
    for w in words:
        t = (cur + " " + w).strip()
        if len(t) <= maxc: cur = t
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

class SVG:
    def __init__(self, h=H):
        self.h = h; self.parts = []
    def add(self, s): self.parts.append(s)
    def rect(self, x, y, w, h, fill=WHITE, stroke=None, sw=1.25, r=8, op=1):
        st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" fill-opacity="{op}"{st}/>')
    def line(self, x1, y1, x2, y2, c=G3, sw=1.5, dash=None, arrow=False):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        m = ' marker-end="url(#arr)"' if arrow else ''
        self.add(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{sw}"{d}{m}/>')
    def path(self, d, fill="none", c=G3, sw=1.5, arrow=False):
        m = ' marker-end="url(#arr)"' if arrow else ''
        self.add(f'<path d="{d}" fill="{fill}" stroke="{c}" stroke-width="{sw}"{m}/>')
    def circle(self, x, y, r, fill, stroke=None, sw=1.5):
        st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
        self.add(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}"{st}/>')
    def text(self, x, y, s, size=11.5, w=400, c=G1, anchor="start", italic=False):
        it = ' font-style="italic"' if italic else ''
        self.add(f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{size}" font-weight="{w}" fill="{c}" text-anchor="{anchor}"{it}>{esc(s)}</text>')
    def para(self, x, y, s, width, size=11.5, w=400, c=G1, lh=None, anchor="start", maxlines=99):
        lh = lh or size * 1.38
        full = wrap(s, width, size, w)
        if len(full) > maxlines and os.environ.get("IG_CHECK"): print("TRUNC", repr(s))
        lines = full[:maxlines]
        for i, l in enumerate(lines):
            self.text(x, y + i * lh, l, size, w, c, anchor)
        return y + len(lines) * lh
    def render(self):
        defs = ('<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
                f'<path d="M0,0 L10,5 L0,10 z" fill="{G2}"/></marker></defs>')
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{self.h}" viewBox="0 0 {W} {self.h}">'
                f'<rect width="{W}" height="{self.h}" fill="{WHITE}"/>' + defs + "".join(self.parts) + '</svg>')

def header(s, num, kicker, title, sub):
    s.rect(0, 0, W, 6, NAVY, r=0)
    s.rect(0, 6, 120, 3, GOLD, r=0)
    s.text(M, 34, f"{UI['ig']} {num:02d} · {kicker.upper()}", 10.5, 700, TEAL)
    y = s.para(M, 62, title, W - 2 * M, 19, 700, NAVY, lh=24)
    y = s.para(M, y + 4, sub, W - 2 * M, 12, 400, G2, lh=17)
    s.line(M, y + 6, W - M, y + 6, G4, 1)
    return y + 22

def band(s, y, label, text, color=NAVY):
    lines = wrap(text, W - 2 * M - 150, 11.5, 500)
    h = max(52, 20 + len(lines) * 16)
    s.rect(M, y, W - 2 * M, h, color, r=8)
    ll = wrap(label.upper(), 125, 10.5, 700)
    for i, l in enumerate(ll): s.text(M + 16, y + 22 + i * 13, l, 10.5, 700, GOLD)
    for i, l in enumerate(lines):
        s.text(M + 150, y + 22 + i * 16, l, 11.5, 500, WHITE)
    return y + h + 10

def source(s, y, text):
    s.para(M, y + 8, UI['src'] + text, W - 2 * M, 10, 400, G2, lh=13)

def section_label(s, y, txt):
    s.text(M, y, txt.upper(), 10.5, 700, G2)
    s.line(min(M + len(txt) * 7.2 + 8, W - M - 10), y - 4, W - M, y - 4, G4, 1)
    return y + 14

def kpis(s, y, items, cols=3, h=136, accent_idx=0):
    gap = 16; cwid = (W - 2 * M - gap * (cols - 1)) / cols
    for i, (num, lab, ctx) in enumerate(items):
        r, c = divmod(i, cols)
        x = M + c * (cwid + gap); yy = y + r * (h + gap)
        acc = i == accent_idx
        s.rect(x, yy, cwid, h, NAVY_L if acc else G5, NAVY if acc else G4, 2 if acc else 1)
        s.text(x + 14, yy + 34, num, 24, 700, NAVY if acc else INK)
        s.para(x + 14, yy + 54, lab, cwid - 28, 12, 600, INK, lh=15, maxlines=2)
        nl = len(wrap(lab, cwid - 28, 12, 600)[:2])
        s.para(x + 14, yy + 58 + nl * 15 + 2, ctx, cwid - 28, 10.5, 400, G2, lh=13.5, maxlines=3)
    rows = math.ceil(len(items) / cols)
    return y + rows * (h + gap)

def rows_numbered(s, y, items, tagw=170, rh=None):
    for i, it in enumerate(items):
        t, txt, tag = it[0], it[1], it[2]; acc = len(it) > 3 and it[3]
        lines = wrap(txt, W - 2 * M - 70 - tagw - 20, 10.5)
        h = rh or max(52, 30 + len(lines) * 13.5)
        s.rect(M, y, W - 2 * M, h, NAVY_L if acc else WHITE, NAVY if acc else G4, 2 if acc else 1)
        s.circle(M + 26, y + h / 2, 14, NAVY if acc else G1)
        s.text(M + 26, y + h / 2 + 4.5, str(i + 1), 12, 700, WHITE, "middle")
        s.text(M + 52, y + 20, t, 12.5, 600, INK)
        for j, l in enumerate(lines): s.text(M + 52, y + 36 + j * 13.5, l, 10.5, 400, G2)
        tx = W - M - tagw - 10
        s.rect(tx, y + h / 2 - 15, tagw, 30, TEAL_L if not acc else GOLD_L, TEAL if not acc else GOLD, 1, r=15)
        tl = wrap(tag, tagw - 16, 10, 600)[:2]
        for j, l in enumerate(tl):
            s.text(tx + tagw / 2, y + h / 2 + 4 - (len(tl) - 1) * 6 + j * 12, l, 10, 600, TEAL if not acc else "#7A5C00", "middle")
        y += h + 8
    return y

def ladder(s, y, levels, h=78):
    n = len(levels); full = W - 2 * M
    for i, (name, sub, reqs, acc) in enumerate(levels):
        x = M; w = full
        fills = [G5, "#DCE6F2", "#B9CDE5", NAVY]
        f = fills[min(i, 3)]; dark = i == 3
        s.rect(x, y, w, h, f, NAVY if acc else G4, 2 if acc else 1)
        s.text(x + 16, y + 28, name, 15, 700, WHITE if dark else NAVY)
        s.para(x + 16, y + 46, sub, 160, 10.5, 500, "#CBD5E1" if dark else G2, lh=13, maxlines=3)
        rx = x + 190
        cols = 2; colw = (w - 200) / cols
        for j, rq in enumerate(reqs[:6]):
            r, c = divmod(j, cols)
            s.circle(rx + c * colw + 4, y + 20 + r * 20, 3, GOLD if dark else TEAL)
            fs = min(10.5, (colw - 20) / max(1, len(rq) * 0.53))
            s.text(rx + c * colw + 14, y + 24 + r * 20, rq, round(fs, 2), 400, WHITE if dark else G1)
        y += h + 8
    return y

def two_sides(s, y, left, right, concl, h=230):
    colw = (W - 2 * M - 24) / 2
    need = max(54 + sum(len(wrap(p, colw - 44, 11)) * 14.5 + 6 for p in pts) + 8 for (_, _, pts) in [left, right])
    h = max(h, need)
    for k, (t, col, pts) in enumerate([left, right]):
        x = M + k * (colw + 24)
        s.rect(x, y, colw, h, WHITE, col, 1.5)
        s.rect(x, y, colw, 34, col, r=8); s.rect(x, y + 20, colw, 14, col, r=0)
        s.text(x + 14, y + 23, t, 13, 700, WHITE)
        yy = y + 54
        for p in pts:
            s.circle(x + 18, yy - 4, 3, col)
            yy = s.para(x + 30, yy, p, colw - 44, 11, 400, G1, lh=14.5) + 6
    cy = y + h + 18
    s.line(M + colw / 2, y + h, W / 2, cy, G3, 1.5, arrow=False)
    s.line(W - M - colw / 2, y + h, W / 2, cy, G3, 1.5)
    lines = wrap(concl, W - 2 * M - 160, 12, 600)
    hh = 24 + len(lines) * 16
    s.rect(M + 60, cy, W - 2 * M - 120, hh, NAVY_L, NAVY, 2)
    for i, l in enumerate(lines): s.text(W / 2, cy + 20 + i * 16, l, 12, 600, NAVY, "middle")
    return cy + hh + 12

def flow(s, y, steps, accent=None, bh=88, decision=None):
    per = 4; gap = 26; bw = (W - 2 * M - gap * (per - 1)) / per
    for i, (t, d) in enumerate(steps):
        r, c = divmod(i, per)
        x = M + c * (bw + gap); yy = y + r * (bh + 34)
        acc = i == accent
        s.rect(x, yy, bw, bh, NAVY if acc else WHITE, NAVY if acc else G3, 1.5)
        s.text(x + 12, yy + 20, f"{i+1:02d}", 10.5, 700, GOLD if acc else TEAL)
        ty = s.para(x + 12, yy + 37, t, bw - 24, 11.5, 700, WHITE if acc else INK, lh=14, maxlines=2)
        s.para(x + 12, ty + 2, d, bw - 24, 10, 400, "#CBD5E1" if acc else G2, lh=12.5, maxlines=4)
        if c < per - 1 and i < len(steps) - 1:
            s.line(x + bw + 2, yy + bh / 2, x + bw + gap - 3, yy + bh / 2, G2, 1.5, arrow=True)
        elif i < len(steps) - 1:
            s.path(f"M{x+bw/2},{yy+bh} L{x+bw/2},{yy+bh+17} L{M+bw/2},{yy+bh+17} L{M+bw/2},{yy+bh+31}", c=G2, arrow=True)
    rows = math.ceil(len(steps) / per)
    return y + rows * (bh + 34) - 20

def decision_tree(s, y, q, yes, no, yes_detail, no_detail):
    cx = W / 2
    s.add(f'<polygon points="{cx},{y} {cx+150},{y+45} {cx},{y+90} {cx-150},{y+45}" fill="{GOLD_L}" stroke="{GOLD}" stroke-width="2"/>')
    ls = wrap(q, 200, 11.5, 600)
    for i, l in enumerate(ls): s.text(cx, y + 45 - (len(ls) - 1) * 7 + i * 14 + 4, l, 11.5, 600, INK, "middle")
    bw = 320
    for k, (lab, title, det, col) in enumerate([(UI['yes'], yes, yes_detail, NAVY), (UI['no'], no, no_detail, TEAL)]):
        x = M if k == 0 else W - M - bw
        s.path(f"M{cx + (-150 if k==0 else 150)},{y+45} L{x+bw/2},{y+45} L{x+bw/2},{y+112}", c=G2, arrow=True)
        s.text(x + bw / 2 + (-30 if k==0 else 30), y + 38, lab, 11, 700, col, "middle")
        lines = []
        for d in det: lines += wrap(d, bw - 40, 10.5)
        hh = 52 + len(lines) * 14 + len(det) * 4
        s.rect(x, y + 116, bw, hh, WHITE, col, 1.5)
        s.text(x + 14, y + 140, title, 12.5, 700, col)
        yy = y + 162
        for d in det:
            s.circle(x + 18, yy - 4, 3, col)
            yy = s.para(x + 28, yy, d, bw - 40, 10.5, 400, G1, lh=14) + 4
    return y + 116 + max(52 + sum(len(wrap(d, bw-40,10.5)) for d in yes_detail)*14 + len(yes_detail)*4,
                          52 + sum(len(wrap(d, bw-40,10.5)) for d in no_detail)*14 + len(no_detail)*4) + 14

def timeline(s, y, events, h=300):
    x0, x1 = M + 62, W - M - 62
    n = len(events); step = (x1 - x0) / (n - 1)
    ly = y + h / 2
    s.line(x0, ly, x1, ly, G3, 3)
    for i, (d, t, tp) in enumerate(events):
        x = x0 + i * step; up = i % 2 == 0
        col = NAVY if tp == "hecho" else (TEAL if tp == "previsto" else GOLD)
        fill = col if tp == "hecho" else WHITE
        s.circle(x, ly, 8, fill, col, 2.5)
        yy = ly - 26 if up else ly + 38
        s.line(x, ly + (-8 if up else 8), x, yy + (6 if up else -16), G4, 1)
        tw = min(140, step * 1.9)
        lines = wrap(t, tw, 10, 400)[:4]
        if up:
            base = yy - len(lines) * 12.5
            s.text(x, base - 6, d, 11, 700, col, "middle")
            for j, l in enumerate(lines): s.text(x, base + 8 + j * 12.5, l, 10, 400, G1, "middle")
        else:
            s.text(x, yy, d, 11, 700, col, "middle")
            for j, l in enumerate(lines): s.text(x, yy + 15 + j * 12.5, l, 10, 400, G1, "middle")
    ly2 = y + h + 6
    for k, (lab, col, f) in enumerate([(UI['done'], NAVY, NAVY), (UI['plan'], TEAL, WHITE), (UI['scen'], GOLD, WHITE)]):
        x = M + k * 170
        s.circle(x + 8, ly2, 6, f, col, 2); s.text(x + 20, ly2 + 4, lab, 10.5, 500, G1)
    return ly2 + 20

def heatmap(s, y, rows, cols, vals, legend=("Bajo", "Medio", "Alto"), labw=230, rh=30, accent_row=None, scale="risk"):
    colw = (W - 2 * M - labw) / len(cols)
    s.rect(M, y, W - 2 * M, 34, NAVY, r=6)
    for j, c in enumerate(cols):
        ls = wrap(c, colw - 6, 10, 600)[:2]
        for k, l in enumerate(ls):
            s.text(M + labw + j * colw + colw / 2, y + 15 + k * 12 - (len(ls) - 1) * 4, l, 10, 600, WHITE, "middle")
    yy = y + 38
    if scale == "weight":
        pal = {0: (G5, G3, "—"), 1: (G5, G2, legend[0]), 2: (TEAL_L, TEAL, legend[1]), 3: (NAVY_L, NAVY, legend[2])}
    else:
        pal = {0: (G5, G3, "—"), 1: (GREEN_L, GREEN, legend[0]), 2: (AMBER_L, AMBER, legend[1]), 3: (RED_L, RED, legend[2])}
    for i, r in enumerate(rows):
        acc = i == accent_row
        s.rect(M, yy, labw - 6, rh, NAVY_L if acc else G5, NAVY if acc else None, 1.5, r=4)
        ls = wrap(r, labw - 20, 10.5, 600)[:2]
        for k, l in enumerate(ls): s.text(M + 10, yy + rh / 2 + 4 - (len(ls) - 1) * 6 + k * 12, l, 10.5, 600, INK)
        for j in range(len(cols)):
            v = vals[i][j]; f, c, lab = pal[v]
            s.rect(M + labw + j * colw + 2, yy, colw - 4, rh, f, c, 1, r=4)
            s.text(M + labw + j * colw + colw / 2, yy + rh / 2 + 4, lab, 10, 600, c, "middle")
        yy += rh + 4
    return yy + 6

def matrix2x2(s, y, xl, yl, quads, points, size=380, fills=None):
    x0 = M + 40; side = size
    s.rect(x0, y, side, side, WHITE, G3, 1, r=4)
    s.line(x0 + side / 2, y, x0 + side / 2, y + side, G4, 1, "4 4")
    s.line(x0, y + side / 2, x0 + side, y + side / 2, G4, 1, "4 4")
    fills = fills or [AMBER_L, RED_L, GREEN_L, AMBER_L]
    for k, q in enumerate(quads):
        qx = x0 + (k % 2) * side / 2; qy = y + (k // 2) * side / 2
        s.rect(qx + 3, qy + 3, side / 2 - 6, side / 2 - 6, fills[k], r=4, op=0.55)
        s.para(qx + 10, qy + 18, q, side / 2 - 20, 10.5, 700, G1, lh=13, maxlines=2)
    s.text(x0 + side / 2, y + side + 22, xl + " →", 11, 600, G1, "middle")
    s.add(f'<text x="{x0-18}" y="{y+side/2}" font-family="{FONT}" font-size="11" font-weight="600" fill="{G1}" text-anchor="middle" transform="rotate(-90 {x0-18} {y+side/2})">{esc(yl)} →</text>')
    for i, (px, py, lab, acc) in enumerate(points):
        cx = x0 + px * side; cy = y + (1 - py) * side
        s.circle(cx, cy, 11, NAVY if acc else G1)
        s.text(cx, cy + 4, str(i + 1), 10, 700, WHITE, "middle")
    lx = x0 + side + 24; ly = y + 6
    for i, (px, py, lab, acc) in enumerate(points):
        s.circle(lx + 9, ly + 5, 9, NAVY if acc else G1); s.text(lx + 9, ly + 9, str(i + 1), 9.5, 700, WHITE, "middle")
        ly = s.para(lx + 24, ly + 9, lab, W - M - lx - 24, 10.5, 600 if acc else 400, NAVY if acc else G1, lh=13) + 5
    return y + side + 34

def cards(s, y, items, cols=3, h=160, accent=None, tags=("GANA", "FRENO")):
    gap = 14; cwid = (W - 2 * M - gap * (cols - 1)) / cols
    for i, (t, g, f) in enumerate(items):
        r, c = divmod(i, cols)
        x = M + c * (cwid + gap); yy = y + r * (h + gap)
        acc = i == accent
        s.rect(x, yy, cwid, h, WHITE, NAVY if acc else G4, 2 if acc else 1)
        s.rect(x, yy, cwid, 30, NAVY if acc else G5, r=8); s.rect(x, yy + 18, cwid, 12, NAVY if acc else G5, r=0)
        s.para(x + 12, yy + 20, t, cwid - 24, 11.5, 700, WHITE if acc else NAVY, maxlines=1)
        s.text(x + 12, yy + 50, tags[0], 9.5, 700, GREEN)
        e = s.para(x + 12, yy + 64, g, cwid - 24, 10.5, 400, G1, lh=13, maxlines=4)
        s.text(x + 12, e + 8, tags[1], 9.5, 700, RED)
        s.para(x + 12, e + 22, f, cwid - 24, 10.5, 400, G1, lh=13, maxlines=4)
    rows = math.ceil(len(items) / cols)
    return y + rows * (h + gap)

def bars(s, y, items, maxv, unit="", labw=230, bh=24, accent=None, note=None):
    bw = W - 2 * M - labw - 70
    for i, (lab, v) in enumerate(items):
        acc = i == accent
        s.para(M, y + 16, lab, labw - 10, 11, 600 if acc else 400, NAVY if acc else G1, maxlines=2, lh=12)
        L = bw * v / maxv
        s.rect(M + labw, y + 2, max(L, 2), bh, NAVY if acc else G3, r=4)
        s.text(M + labw + L + 8, y + 19, f"{fmtnum(v)}{unit}", 11.5, 700, NAVY if acc else G1)
        y += bh + 12
    return y

def cycle(s, y, nodes, center, r=150, accent=0):
    cx, cy = W / 2, y + r + 50
    n = len(nodes)
    s.circle(cx, cy, r, "none", G4, 2)
    s.circle(cx, cy, 70, NAVY_L, NAVY, 2)
    ls = wrap(center, 120, 12, 700)
    for i, l in enumerate(ls): s.text(cx, cy + 4 - (len(ls) - 1) * 8 + i * 16, l, 12, 700, NAVY, "middle")
    for i, (t, d) in enumerate(nodes):
        a = -math.pi / 2 + i * 2 * math.pi / n
        nx, ny = cx + r * math.cos(a), cy + r * math.sin(a)
        bw, bh = 172, 74
        bx = nx - bw / 2; by = ny - bh / 2
        acc = i == accent
        s.rect(bx, by, bw, bh, NAVY if acc else WHITE, NAVY if acc else G3, 1.5)
        s.para(bx + 10, by + 18, t, bw - 20, 11.5, 700, GOLD if acc else NAVY, maxlines=1)
        s.para(bx + 10, by + 33, d, bw - 20, 10, 400, "#CBD5E1" if acc else G2, lh=12, maxlines=3)
    return cy + r + 50

def roadmap(s, y, phases, gates):
    n = len(phases); gap = 30; bw = (W - 2 * M - gap * (n - 1)) / n
    hmax = 0
    for i, (t, per, acts) in enumerate(phases):
        lines = sum(len(wrap(a, bw - 30, 10.5)) for a in acts)
        h = 70 + lines * 13.5 + len(acts) * 6
        hmax = max(hmax, h)
    for i, (t, per, acts) in enumerate(phases):
        x = M + i * (bw + gap)
        col = [TEAL, NAVY, GOLD, G1][i % 4]
        s.rect(x, y, bw, hmax, WHITE, col, 1.5)
        s.rect(x, y, bw, 46, col, r=8); s.rect(x, y + 30, bw, 16, col, r=0)
        s.text(x + 12, y + 20, t, 12, 700, WHITE)
        s.text(x + 12, y + 37, per, 10, 500, WHITE)
        yy = y + 66
        for a in acts:
            s.circle(x + 15, yy - 4, 3, col)
            yy = s.para(x + 25, yy, a, bw - 32, 10.5, 400, G1, lh=13.5) + 6
        if i < n - 1:
            gx = x + bw + gap / 2; gy = y + hmax / 2
            s.add(f'<polygon points="{gx},{gy-14} {gx+13},{gy} {gx},{gy+14} {gx-13},{gy}" fill="{GOLD}"/>')
    yy = y + hmax + 14
    for i, g in enumerate(gates):
        s.add(f'<polygon points="{M+8},{yy-6} {M+16},{yy} {M+8},{yy+6} {M},{yy}" fill="{GOLD}"/>')
        yy = s.para(M + 24, yy + 4, f"{UI['gate']} {i+1}: {g}", W - 2 * M - 30, 10.5, 500, G1, lh=13) + 4
    return yy + 6

def table(s, y, head, rows, widths, accent_col=None, rh=None):
    s.rect(M, y, W - 2 * M, 30, NAVY, r=6)
    hh = 30
    cx = M
    hw = [wrap(hd, widths[j] - 14, 10.5, 700) for j, hd in enumerate(head)]
    nl = max(len(w) for w in hw)
    if nl > 1:
        hh = 16 + nl * 13; s.rect(M, y, W - 2 * M, hh, NAVY, r=6)
    for j, w_ in enumerate(hw):
        for k, l in enumerate(w_): s.text(cx + 8, y + 19 + k * 13, l, 10.5, 700, WHITE)
        cx += widths[j]
    yy = y + hh + 4
    for i, r in enumerate(rows):
        wrapped = [wrap(c, widths[j] - 14, 10.5, 600 if j == 0 else 400) for j, c in enumerate(r)]
        h = rh or (12 + max(len(w) for w in wrapped) * 13.5)
        h = max(h, 12 + max(len(w) for w in wrapped) * 13.5)
        s.rect(M, yy, W - 2 * M, h, G5 if i % 2 == 0 else WHITE, r=3)
        cx = M
        for j, wl in enumerate(wrapped):
            col = NAVY if j == accent_col else (INK if j == 0 else G1)
            for k, l in enumerate(wl): s.text(cx + 8, yy + 16 + k * 13.5, l, 10.5, 600 if (j == 0 or j == accent_col) else 400, col)
            cx += widths[j]
        yy += h + 2
    return yy + 6

def stack(s, y, layers, side_title=None, side=None, accent=None):
    w = (W - 2 * M) * (0.62 if side else 1)
    for i, (t, d, tag) in enumerate(layers):
        acc = i == accent
        lines = wrap(d, w - 150, 10.5)
        h = max(50, 26 + len(lines) * 13.5)
        s.rect(M, y, w, h, NAVY if acc else (G5 if i % 2 else WHITE), NAVY if acc else G3, 1.25)
        s.para(M + 12, y + 20, t, 128, 12, 700, GOLD if acc else NAVY, maxlines=1)
        s.para(M + 12, y + 36, tag, 120, 9.5, 600, "#CBD5E1" if acc else TEAL, maxlines=1)
        for k, l in enumerate(lines): s.text(M + 140, y + 20 + k * 13.5, l, 10.5, 400, WHITE if acc else G1)
        y += h + 6
    if side:
        x = M + w + 18; sw_ = W - M - x
        return y, (x, sw_)
    return y, None

def save(s, name, outdir, end=None):
    if end: s.h = int(end + 16)
    svgp = os.path.join(outdir, name + ".svg"); pngp = os.path.join(outdir, name + ".png")
    open(svgp, "w").write(s.render())
    subprocess.run(["rsvg-convert", "-z", "2.5", "-o", pngp, svgp], check=True)
    return pngp
