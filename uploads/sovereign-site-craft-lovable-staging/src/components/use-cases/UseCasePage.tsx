import { useCasesBySlug } from "@/data/useCases";
import { UseCaseHero } from "./UseCaseHero";
import { PerimeterDiagram } from "./PerimeterDiagram";
import { ComponentsExplainer } from "./ComponentsExplainer";
import { PracticalExample } from "./PracticalExample";
import { RegFrameworkTable } from "./RegFrameworkTable";
import { OutcomesBlock } from "./OutcomesBlock";
import { ComplianceChecklist } from "./ComplianceChecklist";
import { SectorFAQ } from "./SectorFAQ";
import { FinalCTA } from "./FinalCTA";
import { useLocale } from "@/i18n/useLocale";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export function UseCasePage({ slug }: { slug: string }) {
  const data = useCasesBySlug[slug];
  const { t, pick } = useLocale();
  const seoKey = slug === "public-sector" ? "publicSector" : slug;
  useLocalizedMeta(`seo.${seoKey}.title`, `seo.${seoKey}.description`);
  if (!data) {
    return (
      <div className="container-1200 py-40 text-center font-display text-2xl">
        Use case not found.
      </div>
    );
  }

  const aiActNote = data.regRows.find((r) => r.norm === "EU AI Act")
    ? t("useCases.sections.aiActNote")
    : undefined;

  return (
    <div className="bg-[var(--cream)]">
      {/* 1. Hero */}
      <UseCaseHero
        useCode={data.id}
        sectorName={pick(data.sector)}
        headline={pick(data.headline)}
        subtitle={pick(data.subtitle)}
        chips={data.chips}
        tint={data.tint}
      />

      {/* 2. Perimeter diagram — signature block */}
      <section className="section section-white">
        <div className="container-1200 py-20 lg:py-24">
          <p className="label-mono">{t("useCases.sections.perimeterEyebrow")}</p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display mb-12 max-w-3xl text-balance">
            {t("useCases.sections.perimeterTitle")}
          </h2>
          <PerimeterDiagram tint={data.tint} />
        </div>
      </section>

      {/* 3. Components explainer */}
      <ComponentsExplainer />

      {/* 4. Practical example */}
      <PracticalExample
        title={pick(data.example.title)}
        steps={data.example.steps}
        tint={data.tint}
      />

      {/* 5. Regulatory framework table */}
      <RegFrameworkTable rows={data.regRows} note={aiActNote} />

      {/* 6. Outcomes */}
      <OutcomesBlock
        outcomes={[
          ...data.outcomes,
          ...data.stats.map((s) => ({ metric: s.value, label: s.label })),
        ].slice(0, 4)}
        tint={data.tint}
      />

      {/* 7. Compliance checklist */}
      <ComplianceChecklist items={data.checklist} />

      {/* 8. Sector FAQ */}
      <SectorFAQ faq={data.faq} />

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}