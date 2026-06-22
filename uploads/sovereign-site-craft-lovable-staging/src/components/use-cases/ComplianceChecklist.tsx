import { Check } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";

export function ComplianceChecklist({ items }: { items: string[] }) {
  const { t } = useLocale();
  return (
    <section className="section section-cream">
      <div className="container-1200 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="label-mono">{t("useCases.sections.checklistEyebrow")}</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display">
              {t("useCases.sections.checklistTitle")}
            </h2>
            <p className="mt-6 text-[var(--body-mid)] leading-relaxed">
              {t("useCases.sections.checklistBody")}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-[var(--line)] border border-[var(--line)] bg-white">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-6 px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 text-white"
                      style={{ background: "var(--green, #2F6B43)" }}
                    >
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="font-display text-lg text-[var(--navy)]">
                      {item}
                    </span>
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 border"
                    style={{ color: "var(--green, #2F6B43)", borderColor: "var(--green, #2F6B43)" }}
                  >
                    {t("useCases.sections.checklistBadge")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}