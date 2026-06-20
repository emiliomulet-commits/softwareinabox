import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { useLocale } from "@/i18n/useLocale";

export function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="section-navy">
      <div className="container-1200 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-5 w-5 text-gold" />
              <span className="font-display text-[15px] text-cream">Cognitive Server</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-cream/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="mt-8 font-mono text-[11px] tracking-wider uppercase text-gold">
              {t("footer.madeIn")}
            </p>
          </div>

          <FooterCol title={t("footer.applications")} items={[
            ["CORE", "/core"],
            ["VAULT", "/vault"],
            ["HUB", "/hub"],
            ["NEXUS", "/nexus"],
          ]} />

          <FooterCol title={t("footer.fabric")} items={[
            ["Shield · Identity", "/architecture#shield"],
            ["Bridge · Transport", "/architecture#bridge"],
            ["Chain · Audit", "/architecture#chain"],
          ]} />
          <FooterCol title={t("footer.company")} items={[
            [t("nav.architecture"), "/architecture"],
            [t("nav.compliance"), "/compliance"],
            [t("nav.useCases"), "/use-cases"],
            [t("nav.resources"), "/resources"],
          ]} />
          <FooterCol title={t("footer.reach")} items={[
            ["victor.sanchez@cognitivserver.com", "mailto:victor.sanchez@cognitivserver.com"],
            ["WhatsApp · +34 601 398 868", "https://wa.me/34601398868", "nowrap"],
            ["SOFTWARE IN A BOX · ES", "/contact", "nowrap"],
          ]} />
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-navy-2 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] tracking-wider uppercase text-cream/50">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <div className="flex gap-6 font-mono text-[11px] tracking-wider uppercase text-cream/50">
            <span>ES · EN · IT · PT</span>
            <span>GDPR · NIS2 · DORA · AI Act</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: Array<[string, string] | [string, string, string]> }) {
  return (
    <div className="md:col-span-2">
      <p className="font-mono text-[11px] tracking-wider uppercase text-gold mb-4">{title}</p>
      <ul className="space-y-2.5">
        {items.map(([label, href, modifier]) => (
          <li key={label} className={modifier === "nowrap" ? "whitespace-nowrap" : undefined}>
            <a href={href} className="text-sm text-cream/75 hover:text-gold transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
