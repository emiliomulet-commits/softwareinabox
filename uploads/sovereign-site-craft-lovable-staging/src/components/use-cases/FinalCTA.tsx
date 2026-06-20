import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/useLocale";

export function FinalCTA() {
  const { t } = useLocale();
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--navy)", color: "var(--cream)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(184,137,62,0.22), transparent 55%)",
        }}
      />
      <div className="container-1200 relative py-20 lg:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
          {t("useCases.sections.ctaEyebrow")}
        </p>
        <h2 className="mt-4 text-4xl lg:text-6xl font-display tracking-tight text-balance max-w-3xl">
          {t("useCases.sections.ctaTitle")}
        </h2>
        <p className="mt-6 max-w-2xl text-[var(--cream)]/80 leading-relaxed">
          {t("useCases.sections.ctaBody")}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn btn-primary">
            {t("cta.requestSession")}
          </Link>
          <Link to="/architecture" className="btn btn-on-navy">
            {t("cta.seeArchitecture")}
          </Link>
        </div>
      </div>
    </section>
  );
}