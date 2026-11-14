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
Radar de normativa europea (CADA, AI Act, Data Act, CRA, NIS2, DORA, EHDS…) para fabricantes, mayoristas, integradores y clientes finales.
- De momento solo en español: en `i18n/sites.json` la página declara `"langs": ["es"]`, y `build.py` no la genera en otros idiomas, la deja fuera de `strings.json` y enlaza a la versión española desde las demás.
- Los datos de las normas, hitos, casos y oportunidades están en el `<script>` de `regulacion/index.html` (`REGS`, `EV`, `CASES`, `OPPS`). Tras editarlos, ejecutar `python3 i18n/prerender_regulacion.py` (requiere Playwright) para regenerar el HTML estático que leen buscadores y asistentes de IA.
- Para traducirla: añadir el idioma a `"langs"`, `python3 i18n/build.py extract`, traducir y `python3 i18n/build.py build`.
