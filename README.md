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
