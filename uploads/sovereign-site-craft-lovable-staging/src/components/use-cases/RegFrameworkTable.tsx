import type { RegRow } from "@/data/useCases";
import { useLocale } from "@/i18n/useLocale";

export function RegFrameworkTable({ rows, note }: { rows: RegRow[]; note?: string }) {
  const { t, pick } = useLocale();
  return (
    <section className="section section-cream">
      <div className="container-1200 py-20 lg:py-24">
        <p className="label-mono">{t("useCases.sections.regEyebrow")}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl font-display mb-10">
          {t("useCases.sections.regTitle")}
        </h2>

        <div className="border border-[var(--line)] bg-white overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-[var(--navy)] text-[var(--cream)]">
            {[
              t("useCases.sections.regColNorm"),
              t("useCases.sections.regColRequires"),
              t("useCases.sections.regColResponse"),
            ].map((h, i) => (
              <div
                key={h}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] px-5 py-4 ${i === 0 ? "col-span-3" : i === 1 ? "col-span-4" : "col-span-5"}`}
              >
                {h}
              </div>
            ))}
          </div>

          {rows.map((r) => (
            <div
              key={r.norm}
              className="grid grid-cols-1 md:grid-cols-12 border-t border-[var(--line)] hover:bg-[var(--cream)] transition-colors"
            >
              <div className="md:col-span-3 px-5 py-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  {r.norm}
                </span>
              </div>
              <div className="md:col-span-4 px-5 py-5 font-display text-[var(--body-dark)]">
                {pick(r.requires)}
              </div>
              <div className="md:col-span-5 px-5 py-5 text-[var(--body-mid)] leading-relaxed">
                {pick(r.response)}
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--body-mute)]">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}