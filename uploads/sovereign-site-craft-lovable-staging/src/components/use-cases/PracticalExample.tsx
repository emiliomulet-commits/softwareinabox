import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ExampleStep } from "@/data/useCases";
import { useLocale } from "@/i18n/useLocale";

type Props = {
  title: string;
  steps: ExampleStep[];
  tint: string;
};

function AuditTyping({ tint }: { tint: string }) {
  const reduce = useReducedMotion();
  const full = `[${new Date().toISOString()}] trace_id=0x9F4A · signed · sealed`;
  const [text, setText] = useState(reduce ? full : "");

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [reduce, full]);

  return (
    <div
      className="mt-4 font-mono text-[11px] tracking-wider p-3 border"
      style={{ borderColor: tint, color: tint, background: `${tint}0D` }}
    >
      {text}
      <span className="inline-block w-2 h-3 align-middle ml-1 animate-pulse" style={{ background: tint }} />
    </div>
  );
}

export function PracticalExample({ title, steps, tint }: Props) {
  const { t, pick } = useLocale();
  return (
    <section className="section section-white">
      <div className="container-1200 py-20 lg:py-24">
        <p className="label-mono">{t("useCases.sections.exampleEyebrow")}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl font-display mb-12 max-w-3xl text-balance">
          {title}
        </h2>

        <div className="relative">
          {/* Gold progress line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[27px] top-2 bottom-2 w-px origin-top"
            style={{ background: "var(--gold)" }}
          />

          <ol className="space-y-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.code}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative flex gap-6 pl-0"
              >
                <div
                  className="relative z-10 flex items-center justify-center w-14 h-14 shrink-0 font-mono text-xs tracking-widest border bg-white"
                  style={{ color: tint, borderColor: tint }}
                >
                  {s.code}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl text-[var(--navy)]">{pick(s.title)}</h3>
                  <p className="mt-2 text-[var(--body-mid)] leading-relaxed">{pick(s.body)}</p>
                  {i === steps.length - 1 && <AuditTyping tint={tint} />}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}