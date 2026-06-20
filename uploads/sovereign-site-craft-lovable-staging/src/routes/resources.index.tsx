import { createFileRoute, Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/useLocale";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.resources.title") as string },
      { name: "description", content: i18n.t("seo.resources.description") as string },
      { property: "og:title", content: i18n.t("seo.resources.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.resources.ogDescription") as string },
      { property: "og:url", content: "/resources" },
    ],
    links: [
      { rel: "canonical", href: "/resources" },
      ...hreflangLinks("/resources"),
    ],
  }),
  component: ResourcesPage,
});

type TechCard = {
  key: "archPaper" | "stack" | "mcp" | "iso";
  href: string;
  ctaKey: "read" | "open" | "request" | "view";
};

type SectorCard = {
  key: "banking" | "insurance" | "manufacturing" | "publicSector" | "healthcare";
  chips: string[];
  href: string;
};

const techCards: TechCard[] = [
  { key: "archPaper", href: "/resources/architecture-paper", ctaKey: "request" },
  { key: "stack", href: "/architecture", ctaKey: "read" },
  { key: "mcp", href: "/architecture", ctaKey: "read" },
  { key: "iso", href: "/compliance", ctaKey: "view" },
];

const sectorCards: SectorCard[] = [
  { key: "banking", chips: ["DORA", "Basel III", "MiFID II", "AML/KYC", "EU AI Act"], href: "/use-cases/banking" },
  { key: "insurance", chips: ["Solvency II", "IDD", "EU AI Act", "GDPR Art. 22"], href: "/use-cases/insurance" },
  { key: "manufacturing", chips: ["EU AI Act", "IATF 16949", "ISO 9001", "REACH/RoHS"], href: "/use-cases/manufacturing" },
  { key: "publicSector", chips: ["EU AI Act Annex III", "GDPR", "Derecho administrativo", "Tribunal de Cuentas"], href: "/use-cases/public-sector" },
  { key: "healthcare", chips: ["GDPR Art. 9", "EU AI Act high-risk", "LOPDGDD", "Joint Commission", "ISO 9001"], href: "/use-cases/healthcare" },
];

function ResourcesPage() {
  const { t } = useLocale();
  useLocalizedMeta("seo.resources.title", "seo.resources.description");

  return (
    <div className="bg-[var(--cream)]">
      <div className="container-1200 py-14 lg:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-navy transition">{t("resources.home")}</Link>
          <span className="text-gold">/</span>
          <span className="text-navy">{t("resources.breadcrumb")}</span>
        </nav>

        {/* Header */}
        <header className="max-w-3xl">
          <p className="label-mono">{t("resources.eyebrow")}</p>
          <h1 className="mt-5 font-display text-4xl lg:text-6xl tracking-tight text-balance">
            {t("resources.h1")}
          </h1>
          <p className="mt-6 text-lg text-body-mid leading-relaxed">
            {t("resources.subtitle")}
          </p>
        </header>

        {/* Section 1 — Technical */}
        <section className="mt-20 pt-14 border-t border-line">
          <p className="label-mono">{t("resources.sec1.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">
            {t("resources.sec1.h2")}
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-px bg-line border border-line">
            {techCards.map((c) => (
              <Link
                key={c.key}
                to={c.href}
                className="group bg-cream p-7 flex flex-col hover:bg-white transition-colors"
              >
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
                  {t(`resources.techCards.${c.key}.type`)}
                </p>
                <h3 className="mt-4 font-display text-2xl text-navy">{t(`resources.techCards.${c.key}.title`)}</h3>
                <p className="mt-3 text-sm text-body-mid leading-relaxed">{t(`resources.techCards.${c.key}.desc`)}</p>
                <span className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-navy group-hover:text-gold transition">
                  {t(`resources.cta.${c.ctaKey}`)}
                </span>
              </Link>
            ))}
            <Link
              to="/resources/hardware"
              className="group bg-cream p-7 flex flex-col hover:bg-white transition-colors"
            >
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
                {t("resources.hardwareCard.type")}
              </p>
              <h3 className="mt-4 font-display text-2xl text-navy">{t("resources.hardwareCard.title")}</h3>
              <p className="mt-3 text-sm text-body-mid leading-relaxed">{t("resources.hardwareCard.desc")}</p>
              <span className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-navy group-hover:text-gold transition">
                {t("resources.hardwareCard.cta")}
              </span>
            </Link>
          </div>
        </section>

        {/* Section 2 — Sector briefings */}
        <section className="mt-20 pt-14 border-t border-line">
          <p className="label-mono">{t("resources.sec2.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">
            {t("resources.sec2.h2")}
          </h2>
          <p className="mt-4 max-w-2xl text-body-mid">{t("resources.sec2.subtitle")}</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {sectorCards.map((c) => (
              <Link
                key={c.key}
                to={c.href}
                className="group bg-cream p-6 flex flex-col hover:bg-white transition-colors"
              >
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
                  {t(`resources.sectorBadges.${c.key}`)}
                </p>
                <h3 className="mt-4 font-display text-xl text-navy">{t(`resources.sectorCards.${c.key}`)}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.chips.map((ch) => (
                    <li
                      key={ch}
                      className="border border-line bg-white px-2 py-0.5 font-mono text-[10px] tracking-[0.1em] uppercase text-body-mid"
                    >
                      {ch}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-navy group-hover:text-gold transition">
                  {t("resources.cta.open")}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3 — Thesis & editorial */}
        <section className="mt-20 pt-14 border-t border-line">
          <p className="label-mono">{t("resources.sec3.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">
            {t("resources.sec3.h2")}
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-line border border-line">
            <Link
              to="/thesis/why-sovereign"
              className="group bg-cream p-7 flex flex-col hover:bg-white transition-colors"
            >
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
                {t("resources.thesis.card1.meta")}
              </p>
              <h3 className="mt-4 font-display text-2xl text-navy">{t("resources.thesis.card1.title")}</h3>
              <p className="mt-3 text-sm text-body-mid leading-relaxed">{t("resources.thesis.card1.desc")}</p>
              <span className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-navy group-hover:text-gold transition">
                {t("resources.cta.read")}
              </span>
            </Link>
            <div className="bg-cream p-7 flex flex-col opacity-70">
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-body-mute">
                {t("resources.thesis.card2.metaPrefix")}{t("resources.cta.comingSoon")}
              </p>
              <h3 className="mt-4 font-display text-2xl text-navy/80">{t("resources.thesis.card2.title")}</h3>
              <p className="mt-3 text-sm text-body-mid leading-relaxed">{t("resources.thesis.card2.desc")}</p>
              <span className="mt-6 font-mono text-[11px] tracking-[0.15em] uppercase text-body-mute">
                {t("resources.cta.comingSoon")}
              </span>
            </div>
          </div>
        </section>

        {/* Section 4 — Restricted */}
        <section className="mt-20 pt-14 pb-10 border-t border-line">
          <p className="label-mono">{t("resources.sec4.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">
            {t("resources.sec4.h2")}
          </h2>
          <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
            <p className="text-body-mid leading-relaxed max-w-2xl">
              {t("resources.sec4.body")}
            </p>
            <div className="border border-line bg-white p-6">
              <Link
                to="/contact"
                className="inline-block font-mono text-[11px] tracking-[0.15em] uppercase text-navy hover:text-gold transition"
              >
                {t("resources.sec4.cta")}
              </Link>
              <p className="mt-4 text-xs text-body-mute leading-relaxed">
                {t("resources.sec4.note")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}