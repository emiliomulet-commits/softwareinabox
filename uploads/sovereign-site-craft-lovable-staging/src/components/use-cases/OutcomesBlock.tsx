import { motion } from "framer-motion";
import { Activity, ShieldCheck, Gauge, Sparkles } from "lucide-react";
import type { Outcome } from "@/data/useCases";
import { useLocale } from "@/i18n/useLocale";

const ICONS = [Gauge, ShieldCheck, Activity, Sparkles];

export function OutcomesBlock({ outcomes, tint }: { outcomes: Outcome[]; tint: string }) {
  const { t, pick } = useLocale();
  return (
    <section className="section section-white">
      <div className="container-1200 py-20 lg:py-24">
        <p className="label-mono">{t("useCases.sections.outcomesEyebrow")}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl font-display mb-12">
          {t("useCases.sections.outcomesTitle")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          {outcomes.slice(0, 4).map((o, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={o.label.es + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10 flex items-start gap-5"
              >
                <Icon size={28} strokeWidth={1.25} style={{ color: tint }} />
                <div>
                  <div className="font-display text-5xl text-[var(--navy)] tracking-tight">
                    {o.metric}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--body-mute)]">
                    {pick(o.label)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}