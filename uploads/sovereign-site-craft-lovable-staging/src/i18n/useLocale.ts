import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES, type Locale } from "./config";

export type Localized = {
  es: string;
  en: string;
  it?: string;
  pt?: string;
};

export function pick(locale: string, value: Localized): string {
  const l = (locale || "").slice(0, 2) as Locale;
  return (value as Record<string, string | undefined>)[l] || value.en || value.es;
}

export function useLocale() {
  const { i18n, t } = useTranslation();
  const raw = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(raw)
    ? (raw as Locale)
    : "en";
  return {
    locale,
    t,
    change: (next: Locale) => i18n.changeLanguage(next),
    pick: (v: Localized) => pick(locale, v),
  };
}