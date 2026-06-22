import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Reactively syncs <title> and <meta name="description"> with the current
 * i18n language. The TanStack Router head() runs at route-match time and
 * does not re-evaluate on languageChanged, so head() seeds the SSR/initial
 * values and this hook keeps the DOM in sync after the user (or detector)
 * switches language.
 */
export function useLocalizedMeta(titleKey: string, descriptionKey: string) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const apply = () => {
      const title = t(titleKey);
      if (typeof title === "string" && title && title !== titleKey) {
        document.title = title;
      }
      const description = t(descriptionKey);
      if (typeof description === "string" && description && description !== descriptionKey) {
        let tag = document.querySelector('meta[name="description"]');
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", "description");
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", description);
      }
    };

    apply();
    i18n.on("languageChanged", apply);
    return () => {
      i18n.off("languageChanged", apply);
    };
  }, [t, i18n, titleKey, descriptionKey]);
}