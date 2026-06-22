import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/useLocale";

type Props = {
  useCode: string;
  sectorName: string;
  headline: string;
  subtitle: string;
  chips: string[];
  tint: string;
};

export function UseCaseHero({ useCode, sectorName, headline, subtitle, chips, tint }: Props) {
  const { t } = useLocale();
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${tint} 0%, #0B1A30 100%)`,
        color: "var(--cream)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(184,137,62,0.28), transparent 55%)",
        }}
      />
      <div className="container-1200 relative py-20 lg:py-28">
        <nav className="label-mono mb-8 text-[var(--gold)]">
          <Link to="/" className="hover:text-[var(--gold-light)]">{t("cta.home")}</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link to="/use-cases" className="hover:text-[var(--gold-light)]">{t("nav.useCases")}</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="opacity-90">{sectorName}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            {useCode}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
            · {sectorName}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-display tracking-tight text-balance max-w-4xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display italic text-xl lg:text-2xl text-[var(--gold-light)] mt-6 max-w-3xl"
        >
          {subtitle}
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
              className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-[var(--gold)] text-[var(--gold-light)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)]"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </header>
  );
}