import { motion } from "framer-motion";
import { useLocale } from "@/i18n/useLocale";

type Piece = { code: string; name: string; body: string };

export function ComponentsExplainer() {
  const { t } = useLocale();
  const pieces = t("ucComponents.pieces", { returnObjects: true }) as Piece[];
  return (
    <section className="section section-cream">
      <div className="container-1200 py-20 lg:py-24">
        <p className="label-mono">{t("useCases.sections.anatomyEyebrow")}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl font-display max-w-3xl text-balance">
          {t("useCases.sections.anatomyTitle")}
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
          {pieces.map((p, i) => (
            <motion.article
              key={p.code}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="bg-white p-6 lg:p-7"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
                  COMP · {p.code}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl text-[var(--navy)]">{p.name}</h3>
              <p className="mt-3 text-[var(--body-mid)] leading-relaxed text-sm">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}