import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import es from "./locales/es";
import it from "./locales/it";
import pt from "./locales/pt";

export const SUPPORTED_LOCALES = ["es", "en", "it", "pt"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  it: "IT",
  pt: "PT",
};

if (!i18n.isInitialized) {
  const isBrowser = typeof window !== "undefined";
  const chain = isBrowser ? i18n.use(LanguageDetector) : i18n;
  chain
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        es: { translation: es },
        it: { translation: it },
        pt: { translation: pt },
      },
      fallbackLng: "en",
      lng: isBrowser ? undefined : "en",
      supportedLngs: SUPPORTED_LOCALES as unknown as string[],
      nonExplicitSupportedLngs: true,
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "cs.lang",
      },
      returnNull: false,
    });
}

export default i18n;