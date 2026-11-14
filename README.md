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
- Navegación común (desde el 14-11-2026): `i18n/nav.py` pone en cada página de www la misma cabecera (Inicio, Productos, Regulación UE, Empresa, Contacto, idioma), migas, pie, «volver arriba», anterior/siguiente en las fichas, el mapa del sitio en HTML (`/mapa-del-sitio/`) y la 404 en 10 idiomas. Estilos y comportamiento en `assets/nav.css` y `assets/nav.js`; textos nuevos de navegación en `i18n/nav_strings.json`. No se edita la cabecera ni el pie a mano en las páginas: se regeneran en cada build.
- Páginas de rama: `python3 i18n/gen_pages.py` regenera `/productos/` (y una por producto), `/empresa/` y `/contacto/` a partir de las secciones de la portada; ejecutarlo antes de `extract` si cambia la portada.
- URL traducidas: `paths` en `i18n/sites.json` (p. ej. `/en/regulation/dora/`); la ruta antigua con slug en español queda como redirección (noindex + canonical + refresh). Cuando haya acceso a Cloudflare, conviene convertirlas en 301 reales.
- Imágenes sociales por página: `python3 i18n/og_pages.py` tras el build (escribe `assets/og/<clave>_<idioma>.jpg`) y después otro `build` para enlazarlas.
- El sitemap usa como lastmod la fecha del último commit de cada página (hoy si tiene cambios sin publicar).
- Adaptación por país de las fichas traducidas: `i18n/fichas_pais/<idioma>.html` (bloques `<!--SLUG:x-->` con reemplazos `R`/`RX`, secciones `SEC` y `AFTER`) se aplica en `build.py` antes de localizar enlaces. Se genera con `python3 i18n/fichas_pais/_gen/common.py <idiomas>` a partir de `content_<idioma>.py`; si un texto a reemplazar ya no existe, el build se detiene. Las fichas de normas UE sustituyen la sección «España» por la del país; las fichas de normas españolas añaden una sección «Y en <país>» (en `en`, comparativa de Estados miembros).
- `build.py` admite `"langs"` por página en `sites.json` para publicar una página solo en algunos idiomas.
