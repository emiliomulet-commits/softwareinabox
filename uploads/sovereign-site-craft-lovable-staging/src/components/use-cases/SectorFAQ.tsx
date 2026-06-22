import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/data/useCases";
import { useLocale } from "@/i18n/useLocale";

export function SectorFAQ({ faq }: { faq: FAQ[] }) {
  const { t, pick } = useLocale();
  if (!faq.length) return null;
  return (
    <section className="section section-white">
      <div className="container-1200 py-20 lg:py-24">
        <p className="label-mono">{t("useCases.sections.faqEyebrow")}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl font-display mb-10">
          {t("useCases.sections.faqTitle")}
        </h2>

        <Accordion type="single" collapsible className="border-t border-[var(--line)]">
          {faq.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[var(--line)]"
            >
              <AccordionTrigger className="font-display text-lg lg:text-xl text-[var(--navy)] py-6">
                {pick(f.q)}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--body-mid)] leading-relaxed pb-6 max-w-3xl">
                {pick(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}