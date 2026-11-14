// Software in a Box — portada según el país del visitante (Cloudflare Worker)
// Solo actúa en la portada "/" (español). Las URL profundas (/de/…, enlaces de LinkedIn…) no se tocan.
// Orden de decisión: 1) ?lang= en la URL  2) cookie siab_lang (elección del usuario en el selector)
//                    3) país (request.cf.country) + idioma del navegador  4) inglés (versión UE)

const LANGS = ["es", "en", "fr", "de", "nl", "pt", "it", "da", "fr-be", "nl-be"];
const COOKIE = "siab_lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

// País → idioma de la web. Los países con varias lenguas se resuelven con el navegador (ver MULTI).
const COUNTRY = {
  ES: "es", AD: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es", GT: "es",
  CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es", CR: "es", PA: "es", UY: "es",
  PR: "es", GQ: "es",
  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt",
  FR: "fr", MC: "fr",
  NL: "nl", SR: "nl",
  DE: "de", AT: "de", LI: "de",
  IT: "it", SM: "it", VA: "it",
  DK: "da", GL: "da", FO: "da",
};
// País multilingüe → idiomas posibles (el primero es el de por defecto).
const MULTI = {
  BE: { nl: "nl-be", fr: "fr-be", _: "fr-be" },
  CH: { de: "de", fr: "fr", it: "it", _: "de" },
  LU: { fr: "fr", de: "de", _: "fr" },
};

const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|linkedin|embedly|preview|gptbot|claude|perplexity|google-extended|lighthouse|headless/i;

function browserLangs(req) {
  // "de-CH,de;q=0.9,fr;q=0.8" → ["de-ch","de","fr"]
  return (req.headers.get("Accept-Language") || "")
    .split(",")
    .map(p => p.split(";")[0].trim().toLowerCase())
    .filter(Boolean);
}

export function pickLang(req) {
  const country = (req.cf && req.cf.country) || req.headers.get("CF-IPCountry") || "XX";
  const bl = browserLangs(req);
  const multi = MULTI[country];
  if (multi) {
    for (const l of bl) { const base = l.split("-")[0]; if (multi[base]) return multi[base]; }
    return multi._;
  }
  if (COUNTRY[country]) return COUNTRY[country];
  // País sin idioma propio en la web (UK, EE. UU., Polonia…): si el navegador está en uno de los nuestros, ese; si no, inglés.
  for (const l of bl) {
    if (l === "fr-be" || l === "nl-be") return l;
    const base = l.split("-")[0];
    if (LANGS.includes(base)) return base;
  }
  return "en";
}

function getCookie(req, name) {
  const m = (req.headers.get("Cookie") || "").match(new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : null;
}

function target(lang, url) {
  return lang === "es" ? url.origin + "/" : `${url.origin}/${lang}/`;
}

export default {
  async fetch(req) {
    const url = new URL(req.url);
    const isHome = url.pathname === "/" || url.pathname === "/index.html";
    if (!isHome || req.method !== "GET") return fetch(req);

    // 1) ?lang=xx fuerza un idioma y lo recuerda (útil para compartir la portada en español: /?lang=es)
    const forced = url.searchParams.get("lang");
    if (forced && LANGS.includes(forced)) {
      const res = forced === "es" ? await fetch(req) : Response.redirect(target(forced, url), 302);
      const out = new Response(res.body, res);
      out.headers.append("Set-Cookie", `${COOKIE}=${forced}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`);
      out.headers.set("Cache-Control", "private, no-store");
      return out;
    }

    // Buscadores y asistentes de IA: nunca redirigir (ven la portada en español + hreflang).
    if (BOTS.test(req.headers.get("User-Agent") || "")) return fetch(req);

    // Si viene navegando desde la propia web (p. ej. eligió ES en el selector), no redirigir.
    const ref = req.headers.get("Referer") || "";
    if (ref.startsWith(url.origin)) return fetch(req);

    // 2) Elección guardada  3) País + navegador
    const saved = getCookie(req, COOKIE);
    const lang = saved && LANGS.includes(saved) ? saved : pickLang(req);
    if (lang === "es") return fetch(req);

    return new Response(null, {
      status: 302,
      headers: {
        Location: target(lang, url),
        "Cache-Control": "private, no-store",
        Vary: "Cookie, Accept-Language",
      },
    });
  },
};
