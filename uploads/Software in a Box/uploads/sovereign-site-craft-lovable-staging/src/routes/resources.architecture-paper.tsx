import { createFileRoute, Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/useLocale";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/resources/architecture-paper")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.architecturePaper.title") as string },
      { name: "description", content: i18n.t("seo.architecturePaper.description") as string },
      { property: "og:title", content: i18n.t("seo.architecturePaper.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.architecturePaper.ogDescription") as string },
      { property: "og:url", content: "/resources/architecture-paper" },
    ],
    links: [
      { rel: "canonical", href: "/resources/architecture-paper" },
      ...hreflangLinks("/resources/architecture-paper"),
    ],
  }),
  component: ArchPaperPage,
});

function ArchPaperPage() {
  const { t, locale } = useLocale();

  const metadata: Array<[string, string]> = [
    [t("archPaper.meta.version"), "2026.05"],
    [t("archPaper.meta.pages"), "48"],
    [t("archPaper.meta.format"), "PDF · A4"],
    [t("archPaper.meta.classification"), t("archPaper.meta.classificationValue")],
    [t("archPaper.meta.authors"), t("archPaper.meta.authorsValue")],
    [t("archPaper.meta.lastUpdated"), t("archPaper.meta.lastUpdatedValue")],
    [t("archPaper.meta.language"), locale.toUpperCase()],
  ];
  const toc = t("archPaper.toc.items", { returnObjects: true }) as Array<[string, string]>;

  return (
    <div className="bg-[var(--cream)]">
      <div className="container-1200 py-14 lg:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-navy transition">{t("archPaper.home")}</Link>
          <span className="text-gold">/</span>
          <Link to="/resources" className="hover:text-navy transition">{t("nav.resources")}</Link>
          <span className="text-gold">/</span>
          <span className="text-navy">{t("archPaper.breadcrumb")}</span>
        </nav>

        {/* Header */}
        <header className="max-w-3xl">
          <p className="label-mono">{t("archPaper.eyebrow")}</p>
          <h1 className="mt-5 font-display text-4xl lg:text-6xl tracking-tight text-balance">
            {t("archPaper.h1")}
          </h1>
          <p className="mt-6 text-lg text-body-mid leading-relaxed">
            {t("archPaper.subtitle")}
          </p>
        </header>

        {/* Section 1 — Metadata */}
        <section className="mt-16 pt-12 border-t border-line">
          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
            {metadata.map(([k, v]) => (
              <div key={k} className="bg-cream p-5 flex items-baseline justify-between gap-6">
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">{k}</span>
                <span className="text-sm text-navy text-right">{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Executive summary */}
        <section className="mt-20 pt-14 border-t border-line">
          <p className="label-mono">{t("archPaper.exec.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("archPaper.exec.h2")}</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-body-mid leading-relaxed">
            <p>{t("archPaper.exec.p1")}</p>
            <p dangerouslySetInnerHTML={{ __html: t("archPaper.exec.p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("archPaper.exec.p3") }} />
          </div>
        </section>

        {/* Section 3 — TOC */}
        <section className="mt-20 pt-14 border-t border-line">
          <p className="label-mono">{t("archPaper.toc.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("archPaper.toc.h2")}</h2>
          <ol className="mt-10 max-w-4xl">
            {toc.map(([title, desc], i) => (
              <li
                key={title}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_1fr_2fr] gap-6 py-5 border-t border-line first:border-t-0"
              >
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg text-navy">{title}</h3>
                <p className="col-start-2 sm:col-start-3 text-sm text-body-mid leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 4 — Primary CTA */}
        <section className="mt-20 pt-14 border-t border-line">
          <div className="max-w-3xl">
            <p className="label-mono">{t("archPaper.request.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("archPaper.request.h2")}</h2>
            <p className="mt-6 text-body-mid leading-relaxed">{t("archPaper.request.body")}</p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-navy text-cream px-6 py-3 font-mono text-[12px] tracking-[0.15em] uppercase hover:bg-gold hover:text-navy transition-colors"
              >
                {t("archPaper.cta")}
              </Link>
              <p className="mt-4 text-xs text-body-mute leading-relaxed">{t("archPaper.request.note")}</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Secondary CTAs */}
        <section className="mt-20 pt-14 pb-10 border-t border-line">
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-cream p-7">
              <p className="text-sm text-body-mid">{t("archPaper.secondary.archLine")}</p>
              <Link
                to="/architecture"
                className="mt-3 inline-block font-mono text-[11px] tracking-[0.15em] uppercase text-navy hover:text-gold transition"
              >
                {t("archPaper.secondary.archCta")}
              </Link>
            </div>
            <div className="bg-cream p-7">
              <p className="text-sm text-body-mid">{t("archPaper.secondary.complianceLine")}</p>
              <Link
                to="/compliance"
                className="mt-3 inline-block font-mono text-[11px] tracking-[0.15em] uppercase text-navy hover:text-gold transition"
              >
                {t("archPaper.secondary.complianceCta")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}