# Portada según el país del visitante — softwareinabox.eu

## Qué hace
- Quien abre `www.softwareinabox.eu/` desde Alemania va a `/de/`, desde Bélgica a `/nl-be/` o `/fr-be/` (según el idioma de su navegador), desde Suiza a `/de/`, `/fr/` o `/it/`, desde España o Latinoamérica se queda en `/`, y desde un país sin idioma propio en la web va a `/en/` (versión UE).
- Solo actúa en la portada. Las URL de una página concreta (`/de/…`, enlaces de LinkedIn, Google) nunca se redirigen.
- El país lo da Cloudflare (`request.cf.country`): no hace falta ningún servicio de geolocalización externo ni banner de cookies (la cookie es funcional y solo guarda el idioma elegido).

## Orden de decisión
1. `?lang=xx` en la URL (fuerza y recuerda). Para compartir la portada en español: `https://www.softwareinabox.eu/?lang=es`
2. Cookie `siab_lang` (se guarda al elegir idioma en el selector).
3. País + idioma del navegador.
4. Inglés.

## Excepciones (SEO)
- Buscadores y asistentes de IA (Googlebot, Bingbot, GPTBot, ClaudeBot, LinkedIn…) nunca se redirigen: ven la portada y los hreflang, que ya están bien.
- Si el visitante llega a `/` desde otra página de la propia web, no se redirige.
- La redirección es 302 (temporal) y `no-store`, para que Cloudflare no la guarde en caché para todos.

## Archivos
| Archivo | Para qué |
|---|---|
| `worker.js` | El Worker de Cloudflare |
| `wrangler.toml` | Rutas: `www.softwareinabox.eu/*`, `/` e `/index.html` (fail open) |
| `test.mjs` | 17 pruebas (`node test.mjs`) |
| `selector-cookie.patch` | Cambio en `i18n/build.py`: el selector guarda la cookie. Después: `python3 i18n/build.py build` |

## Estado
Desplegado el 14-11-2026: Worker `siab-geo-idioma` en la cuenta Cloudflare de Emilio, rutas `www.softwareinabox.eu/*`, `/` e `/index.html`, modo fail open (si el Worker fallara, la web se sirve igual). Probado en vivo: `?lang=de` redirige y guarda la cookie, la cookie se respeta, `?utm_…` llega al Worker, las páginas interiores no se tocan, y las visitas desde la propia web no se redirigen.

## Despliegue
- Panel: Cloudflare → Workers & Pages → Create → Worker `siab-geo-idioma` → pegar `worker.js` → Deploy → Settings → Domains & Routes → añadir las 3 rutas de `wrangler.toml` (con «Fail open»).
- O con terminal: `npx wrangler deploy` en esta carpeta.
- Plan gratuito: 100.000 peticiones al día (solo cuentan las de la portada).
- Marcha atrás: borrar las rutas del Worker (la web vuelve a ser como hoy al instante).

## Cómo probarlo
Con una VPN o con `curl -I -H "Accept-Language: de" https://www.softwareinabox.eu/` desde distintos países; y en el navegador, borrar la cookie `siab_lang` entre prueba y prueba.
