# Software in a Box · www.softwareinabox.eu

Web corporativa de **Software in a Box**. Presenta la empresa y enlaza con las webs de cada línea de producto:

| Producto | Subdominio | Repositorio |
|---|---|---|
| COGNITIV | https://cognitiv.softwareinabox.eu | emiliomulet-commits/siab-cognitiv |
| ARGOS | https://argos.softwareinabox.eu | emiliomulet-commits/siab-argos |
| Espacios de datos | https://datos.softwareinabox.eu | emiliomulet-commits/siab-datos |

- Publicación: GitHub Pages (rama `main`) con dominio `www.softwareinabox.eu`, detrás de Cloudflare.
- Las antiguas páginas `SIAB-*.dc.html` de COGNITIV redirigen a `cognitiv.softwareinabox.eu`.

## Idiomas
El español es la fuente (páginas de la raíz). Las versiones `/en/`, `/fr/`, `/de/`, `/nl/`, `/pt/` e `/it/` se generan con `i18n/build.py` a partir de `i18n/<idioma>.json`, y el mismo script añade hreflang, canonical, selector de idioma y `sitemap.xml`. Tras editar una página en español: `python3 i18n/build.py extract`, traducir los textos nuevos y `python3 i18n/build.py build`. No editar a mano las carpetas de idioma.

## Sección «Regulación UE» (`/regulacion/`)
Radar de normativa europea (CADA, AI Act, Data Act, CRA, NIS2, DORA, EHDS…) para fabricantes, mayoristas, integradores y clientes finales, en todos los idiomas de la web.
- Los datos de normas, hitos, casos y oportunidades están en el `<script>` de `regulacion/index.html` (`REGS`, `EV`, `CASES`, `OPPS`, y los textos de interfaz en `T`). Las claves internas (temas, carriles, eslabones `F M I C`) son códigos sin espacios para que el generador no las traduzca; los textos visibles van entre comillas dobles para que sí los extraiga.
- Flujo tras editar: `python3 i18n/prerender_regulacion.py --clear` → `python3 i18n/build.py extract` → traducir los textos nuevos → `python3 i18n/build.py build` → `python3 i18n/prerender_regulacion.py` (requiere Playwright; vuelca a HTML estático los bloques que genera el JavaScript, en todos los idiomas).
- `build.py` admite `"langs"` por página en `sites.json` para publicar una página solo en algunos idiomas.
