const BASE = "https://sovereign-site-craft.lovable.app";

/**
 * Returns hreflang alternate link entries for a given route path.
 * The site uses client-side language switching with no URL prefix,
 * so all locale variants point to the same URL.
 */
export function hreflangLinks(path: string): Array<{ rel: string; hrefLang: string; href: string }> {
  const href = `${BASE}${path}`;
  return [
    { rel: "alternate", hrefLang: "es", href },
    { rel: "alternate", hrefLang: "en", href },
    { rel: "alternate", hrefLang: "it", href },
    { rel: "alternate", hrefLang: "pt", href },
    { rel: "alternate", hrefLang: "x-default", href },
  ];
}