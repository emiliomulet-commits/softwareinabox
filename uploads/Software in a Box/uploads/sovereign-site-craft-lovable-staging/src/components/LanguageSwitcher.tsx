import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import { SUPPORTED_LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";

const NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  it: "Italiano",
  pt: "Português",
};

export function LanguageSwitcher({ variant = "pill" }: { variant?: "pill" | "ghost" }) {
  const { locale, change, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const triggerCls =
    variant === "pill"
      ? "inline-flex items-center gap-1.5 px-2.5 py-1 border border-line bg-cream hover:border-navy hover:text-navy text-body-mid font-mono text-[11px] uppercase tracking-[0.18em] transition-colors rounded-none"
      : "inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-body-mid hover:text-navy transition-colors";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t("language.label")}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerCls}
      >
        {LOCALE_LABELS[locale]}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[140px] border border-line bg-cream shadow-lg py-1 z-50"
        >
          {SUPPORTED_LOCALES.map((code) => {
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    change(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-sm transition-colors hover:bg-white ${
                    active ? "text-navy font-medium" : "text-body-mid"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                      {LOCALE_LABELS[code]}
                    </span>
                    {NAMES[code]}
                  </span>
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}