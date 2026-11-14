# Informe CADA para la cadena de valor — fuentes y maquetación

Fuente del PDF que se publica en `/descargas/informe-cada/CADA_informe_<idioma>.pdf` y se presenta en `/regulacion/informe-cada/`. La landing de esa página se genera desde `i18n/fichas/informe-cada.html`.

## Contenido
- `tr/<idioma>/`: texto del informe en 8 idiomas (es, en, fr, de, nl, pt, it, da).
  - `part1.md` … `part6.md`: cuerpo del informe.
  - `refs.txt`: referencias R1–R93.
  - `ig_strings.json`: textos de las 35 infografías.
  - `labels.json`: portada, cabecera e índice.
- `tr/GUIA.md`: reglas de traducción y terminología fijada.
- `tr/validate.py <idioma>`: comprueba la estructura de la traducción frente al español.
- `scripts/`: herramientas para generar infografías y PDF.
  - `ig.py`: librería de infografías, multilingüe vía `IG_LANG`.
  - `make_ig_es.py`: las 35 infografías en español.
  - `igstrings.py`: `extract` saca los textos de las infografías; `gen <idioma>` genera `make_ig_<idioma>_gen.py`.
  - `build_pdf.py <idioma>`: maqueta el PDF (HTML → Chrome/Playwright). Coloca las infografías sin dejar huecos, recalcula el índice y añade cabecera y pie (reportlab). Al final comprime con qpdf.
  - `run_es.sh`, `run_lang.sh <idioma>`: generan infografías y PDF de un idioma.
  - `deploy_assets.sh <idiomas…>`: copia el PDF y las vistas previas (ig05, ig06, ig31) a `/descargas/informe-cada/`.
  - `ovf.py <idiomas…>`: detecta textos de infografía que se salen del lienzo.
  - `rebrand.py`, `mig_rebrand.py`, `finalize.py`: trazabilidad de cómo se creó la versión propia a partir del informe de V-Valley. No hace falta volver a ejecutarlos.
- `linkedin_posts.md`: publicaciones de LinkedIn en 8 idiomas.

## Requisitos
Python 3 con `playwright`, `pypdf` y `reportlab`; Google Chrome en `/usr/bin/google-chrome`; `rsvg-convert`, ImageMagick, `qpdf` y `pdftotext`; fuentes Inter y Carlito.

## Regenerar tras un cambio
Los scripts esperan `tr/` junto a ellos. Trabaja en una copia:

```bash
W=/tmp/inf; mkdir -p $W && cp -r i18n/informe-cada/scripts/* $W/ && cp -r i18n/informe-cada/tr $W/
```

Pasos:
1. Edita el texto en español: `tr/es/partN.md`, `refs.txt` y, si cambian las infografías, `make_ig_es.py`.
2. Aplica el mismo cambio en cada idioma. El número de líneas debe coincidir; comprueba con `python3 tr/validate.py <idioma>`.
3. Si cambian textos de infografías:
   - ejecuta `python3 igstrings.py extract` (genera `ig_strings_es.json` en el directorio de trabajo);
   - cópialo a `tr/es/ig_strings.json`;
   - añade las claves nuevas en `tr/<idioma>/ig_strings.json`.
4. Genera infografías y PDF: `./run_es.sh` y `./run_lang.sh <idioma>` para cada uno de los otros idiomas.
5. Copia los resultados a la web: `REPO=/ruta/al/repo ./deploy_assets.sh es en fr de nl pt it da`.
6. Si cambia el número de páginas, actualiza las cifras de la landing (ids 78262cf942, 2ca8589ea2 y 8e5030574c en `i18n/<idioma>.json`). Después, `python3 i18n/build.py build`.
7. Vuelve a copiar a `i18n/informe-cada/tr/` las fuentes modificadas.

## Pendiente conocido
Cuando se apruebe el real decreto español de centros de datos (previsto el 17 o el 24 de noviembre de 2026), actualizar:
- §16 (soberanía digital y centros de datos), §20, §29 (energía y permisos) y la tabla de §16;
- el Anexo B (pasar el hito a «cumplido»);
- las infografías 16 y 20;
- R94/R95 si procede.
