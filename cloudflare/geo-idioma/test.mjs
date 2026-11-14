import w, { pickLang } from "./worker.js";
globalThis.fetch = async () => new Response("PORTADA-ES", { status: 200 });
const R = (path, { country = "XX", al = "", ua = "Mozilla/5.0", cookie = "", ref = "" } = {}) => {
  const r = new Request("https://www.softwareinabox.eu" + path, { headers: { "Accept-Language": al, "User-Agent": ua, Cookie: cookie, Referer: ref } });
  Object.defineProperty(r, "cf", { value: { country } }); return r;
};
const cases = [
  ["/", { country: "ES" }, "200"],
  ["/", { country: "DE" }, "/de/"],
  ["/", { country: "BE", al: "nl-BE,nl;q=0.9" }, "/nl-be/"],
  ["/", { country: "BE", al: "fr-BE" }, "/fr-be/"],
  ["/", { country: "CH", al: "fr-CH,fr" }, "/fr/"],
  ["/", { country: "MX" }, "200"],
  ["/", { country: "GB", al: "en-GB" }, "/en/"],
  ["/", { country: "US", al: "es-US,es" }, "200"],
  ["/", { country: "PL", al: "pl" }, "/en/"],
  ["/", { country: "DE", cookie: "siab_lang=es" }, "200"],
  ["/", { country: "ES", cookie: "siab_lang=it" }, "/it/"],
  ["/", { country: "US", ua: "Mozilla/5.0 (compatible; Googlebot/2.1)" }, "200"],
  ["/", { country: "DE", ref: "https://www.softwareinabox.eu/de/produkte/" }, "200"],
  ["/?lang=es", { country: "DE" }, "200+cookie"],
  ["/?lang=da", { country: "ES" }, "/da/+cookie"],
  ["/de/", { country: "ES" }, "200"],
  ["/regulacion/", { country: "DE" }, "200"],
];
let fail = 0;
for (const [p, o, exp] of cases) {
  const res = await w.fetch(R(p, o));
  const loc = res.headers.get("Location"); const ck = res.headers.get("Set-Cookie") ? "+cookie" : "";
  const got = (loc ? new URL(loc).pathname : String(res.status)) + ck;
  const ok = got === exp; if (!ok) fail++;
  console.log(ok ? "OK " : "XX ", p.padEnd(12), JSON.stringify(o).padEnd(70), "→", got);
}
console.log(fail ? `${fail} FALLOS` : "Todo correcto");
