# Adaptación por país de las fichas traducidas

- `<idioma>.html`: reemplazos que `i18n/build.py` (función `apply_country`) aplica a las páginas `/regulacion/<slug>/` de ese idioma.
- `_gen/`: generador. `content_<idioma>.py` contiene el texto y las fuentes por país; `common.py` escribe el `.html`.
- Uso: editar `content_<idioma>.py` → `python3 i18n/fichas_pais/_gen/common.py <idioma>` → `python3 i18n/build.py build` → `python3 i18n/prerender_regulacion.py`.
- Países: de=Alemania, fr=Francia, nl=Países Bajos, pt=Portugal, it=Italia, da=Dinamarca, fr-be y nl-be=Bélgica, en=vista UE (comparativa).
- Fuente de los datos: `CADA_CONTEXTO/09_PAISES/<país>/DIFERENCIAS.md` y `FUENTES.md` (situación a 14-11-2026).
