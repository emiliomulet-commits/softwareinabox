"""Títulos y descripciones cortos para buscadores en la sección /regulacion/.

Google corta el <title> hacia los 60-65 caracteres y la descripción hacia los 155. Las páginas
conservan su titular largo en og:title y su descripción larga en og:description (y en el JSON-LD);
build.py llama a short_title() y short_desc() para escribir <title> y <meta name="description">
cortos, marcados con data-seo para que extract/build no los traten como textos a traducir.

Para cambiar un título corto: TITLES[idioma][slug]. Si no hay entrada, se aplica la regla:
1) titular + « · Software in a Box» si cabe en 65; 2) el titular solo si cabe;
3) lo que va antes de «:» + «: » + LABEL del idioma (landings de país) o el titular recortado.
"""
import re

MAX_T, MAX_D = 65, 155
BRAND = " · Software in a Box"

# etiqueta corta para las landings de país («AI Act en España: obligaciones, riesgos y casos»)
LABEL = {"es": "obligaciones, riesgos y casos", "en": "obligations, risks and cases",
         "fr": "obligations, risques et cas", "fr-be": "obligations, risques et cas",
         "de": "Pflichten, Risiken, Fälle", "nl": "verplichtingen, risico's, cases",
         "nl-be": "verplichtingen, risico's, cases", "pt": "obrigações, riscos e casos",
         "it": "obblighi, rischi e casi", "da": "forpligtelser, risici og sager"}

_IDX = {"es": "Regulación UE de nube, IA, datos y ciberseguridad",
        "en": "EU regulation on cloud, AI, data and cybersecurity",
        "fr": "Réglementation UE : cloud, IA, données, cybersécurité",
        "de": "EU-Regulierung: Cloud, KI, Daten und Cybersicherheit",
        "nl": "EU-regelgeving voor cloud, AI, data en cyberbeveiliging",
        "pt": "Regulamentação UE: cloud, IA, dados e cibersegurança",
        "it": "Normativa UE su cloud, IA, dati e cybersicurezza",
        "da": "EU-regulering af cloud, AI, data og cybersikkerhed"}
_IDX["fr-be"], _IDX["nl-be"] = _IDX["fr"], _IDX["nl"]

TITLES = {
    "es": {"chips-act": "Chips Act 2.0: la nueva Ley Europea de Chips",
           "data-union": "Data Union Strategy: Estrategia de la Unión de Datos",
           "dma-nube": "DMA y nube: AWS y Azure como guardianes de acceso",
           "dora": "DORA: Reglamento de resiliencia operativa digital",
           "ecodiseno-servidores": "Ecodiseño de servidores: Reglamento 2019/424 y revisión",
           "ehds": "EHDS: Espacio Europeo de Datos Sanitarios",
           "raee": "RAEE: residuos de aparatos eléctricos y electrónicos",
           "rgpd-omnibus": "RGPD y Ómnibus Digital: protección de datos en la UE"},
    "en": {"ai-act": "AI Act: the EU Artificial Intelligence Act after the Omnibus",
           "csa2-eucs": "CSA2 and EUCS: new Cybersecurity Act and cloud certification",
           "dma-nube": "DMA and cloud: AWS and Azure as gatekeepers",
           "dora": "DORA: the Digital Operational Resilience Act"},
    "fr": {"dma-nube": "DMA et cloud : AWS et Azure désignés contrôleurs d'accès",
           "dora": "DORA : règlement sur la résilience opérationnelle numérique"},
    "de": {"dma-nube": "DMA und Cloud: AWS und Azure als Torwächter",
           "dora": "DORA: Verordnung über die digitale operationale Resilienz",
           "ehds": "EHDS: Datenblatt zum Europäischen Gesundheitsdatenraum"},
    "nl": {"dma-nube": "DMA en cloud: AWS en Azure als poortwachters",
           "dora": "DORA: verordening digitale operationele weerbaarheid",
           "ehds": "EHDS: Europese ruimte voor gezondheidsgegevens"},
    "pt": {"dma-nube": "DMA e cloud: AWS e Azure como controladores de acesso",
           "dora": "DORA: Regulamento de resiliência operacional digital"},
    "it": {"dma-nube": "DMA e cloud: AWS e Azure designati gatekeeper",
           "dora": "DORA: regolamento sulla resilienza operativa digitale"},
    "da": {"dma-nube": "DMA og cloud: AWS og Azure som gatekeepere",
           "dora": "DORA: forordningen om digital operationel modstandsdygtighed"},
}
TITLES["fr-be"], TITLES["nl-be"] = TITLES["fr"], TITLES["nl"]
for _l, _t in _IDX.items():
    TITLES.setdefault(_l, {})[""] = _t

_TAIL = {"y", "e", "o", "u", "de", "del", "la", "el", "los", "las", "en", "a", "al", "con", "para", "por", "and", "of", "the",
         "for", "to", "on", "in", "et", "du", "des", "le", "les", "au", "aux", "und", "der", "die", "das", "den", "dem", "zum",
         "zur", "für", "von", "van", "het", "een", "voor", "og", "af", "til", "om", "di", "per", "da", "do", "dos", "das",
         "na", "no", "il", "lo", "gli", "della", "dello", "dei", "delle", "ed", "ou", "of"}


def _trim(text, n):
    """Corta en límite de palabra y quita conectores y signos colgando al final."""
    cut = text[:n].rsplit(" ", 1)[0] if len(text) > n else text
    words = cut.rstrip(",;:·-–—( ").split(" ")
    while len(words) > 1 and words[-1].lower() in _TAIL:
        words.pop()
    return " ".join(words).rstrip(",;:·-–—( ")


def short_title(full, slug, lang, landing=False):
    t = TITLES.get(lang, {}).get(slug)
    if t is None:
        if len(full + BRAND) <= MAX_T:
            return full + BRAND
        if len(full) <= MAX_T:
            return full
        head = re.split(r"\s?:\s", full, 1)[0]
        t = head + (": " + LABEL[lang] if landing and lang in LABEL else "")
        if len(t) > MAX_T:
            t = _trim(t, MAX_T)
    return t + BRAND if len(t + BRAND) <= MAX_T else t


def short_desc(d, n=MAX_D):
    if len(d) <= n:
        return d
    out = ""
    for p in re.split(r"(?<=[^\W\d_]{3}[.!?])\s+(?=[A-ZÁÉÍÓÚÄÖÜÆØÅ«“\"])", d):
        if len((out + " " + p).strip()) <= n:
            out = (out + " " + p).strip()
        else:
            break
    if len(out) >= 90:
        return out
    return _trim(d, n - 1) + "…"
