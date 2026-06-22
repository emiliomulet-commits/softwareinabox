import { Link } from "@tanstack/react-router";
import type { AppConfig, AppPrimaryColor, AppSlug } from "@/content/apps";
import { apps } from "@/content/apps";
import { useTranslation } from "react-i18next";

const accent: Record<AppPrimaryColor, string> = {
  navy: "text-navy",
  gold: "text-gold",
  coral: "text-coral",
  green: "text-[var(--green)]",
};

const accentBg: Record<AppPrimaryColor, string> = {
  navy: "bg-navy",
  gold: "bg-gold",
  coral: "bg-coral",
  green: "bg-[var(--green)]",
};

export function AppDetailPage({ app }: { app: AppConfig }) {
  const { t } = useTranslation();
  const slug = app.slug as AppSlug;
  const k = `appsPage.items.${slug}` as const;
  const name = t(`${k}.name`) as string;
  const tagline = t(`${k}.tagline`) as string;
  const title = t(`${k}.title`) as string;
  const subtitle = t(`${k}.subtitle`) as string;
  const modules = t(`${k}.modules`, { returnObjects: true }) as { code: string; title: string; description: string }[];
  const hooks = t(`${k}.hooks`, { returnObjects: true }) as { name: string; signature: string; description: string }[];
  return (
    <div className="section-cream">
      {/* Breadcrumb */}
      <div className="container-1200 pt-10">
        <nav className="flex items-center gap-2 font-mono text-xs text-body-mute" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-navy">{t("appsPage.breadcrumb.home")}</Link>
          <span className="text-gold">/</span>
          <Link to="/platform" className="hover:text-navy">{t("appsPage.breadcrumb.platform")}</Link>
          <span className="text-gold">/</span>
          <span className="text-navy">{name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="container-1200 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <p className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accent[app.primaryColor === "navy" ? "gold" : app.primaryColor]}`}>
          {tagline}
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance text-navy max-w-4xl">
          {title}
        </h1>
        <p className="mt-8 text-lg text-body-mid leading-relaxed max-w-[720px]">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/architecture" className="btn btn-primary">{t("appsPage.ctaPrimary")}</Link>
          <Link to="/thesis/why-sovereign" className="btn btn-secondary">{t("appsPage.ctaSecondary")}</Link>
        </div>
      </section>

      {/* Modules */}
      <section className="border-t border-line">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("appsPage.modules.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("appsPage.modules.titlePrefix")} {name}</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {modules.map((m) => (
              <div key={m.code} className="bg-white p-7">
                <p className="font-mono text-[11px] tracking-[0.15em] text-gold">{m.code}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{m.title}</h3>
                <p className="mt-3 text-sm text-body-mid leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hooks */}
      <section className="border-t border-line bg-white">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("appsPage.hooks.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("appsPage.hooks.title")}</h2>
          <dl className="mt-12 divide-y divide-line border-y border-line">
            {hooks.map((h) => (
              <div key={h.name} className="grid md:grid-cols-12 gap-6 py-7">
                <dt className="md:col-span-5">
                  <p className="font-display text-lg text-navy">{h.name}</p>
                  <code className="mt-2 block font-mono text-xs text-body-mid break-words">
                    {h.signature}
                  </code>
                </dt>
                <dd className="md:col-span-7 text-body-mid leading-relaxed">{h.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Integration */}
      <section className="border-t border-line">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("appsPage.integration.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("appsPage.integration.titlePrefix")} {name} {t("appsPage.integration.titleSuffix")}</h2>
          <pre
            className="mt-10 overflow-x-auto border border-navy bg-[var(--gold-light)]/30 p-6 font-mono text-[13px] leading-relaxed text-navy"
            aria-label={`${name} integration example`}
          >
            <code>{app.integrationExample.code}</code>
          </pre>
          <p className="mt-3 font-mono text-[11px] tracking-[0.15em] uppercase text-body-mute">
            {t("appsPage.integration.langLabel")} · {app.integrationExample.lang}
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-white">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("appsPage.related.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("appsPage.related.title")}</h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {app.relatedApps.map((slug) => {
              const r = apps[slug];
              const rName = t(`appsPage.items.${slug}.name`) as string;
              const rTagline = t(`appsPage.items.${slug}.tagline`) as string;
              const rSubtitle = t(`appsPage.items.${slug}.subtitle`) as string;
              return (
                <Link
                  key={slug}
                  to={`/${slug}` as "/core" | "/vault" | "/hub" | "/nexus"}
                  className="block bg-navy text-cream p-7 hover:bg-navy-2 transition-colors group"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
                    {rTagline.split("—")[0]?.trim() || rTagline}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{rName}</h3>
                  <p className="mt-4 text-sm text-cream/75 leading-relaxed line-clamp-3">
                    {rSubtitle}
                  </p>
                  <p className="mt-6 btn-arrow text-gold">{t("appsPage.related.openPrefix")} {rName.toLowerCase()}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={`${accentBg.navy} relative`}>
        <div className={`absolute top-0 left-0 right-0 h-[3px] ${accentBg.gold}`} />
        <div className="container-1200 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">{t("appsPage.cta.eyebrow")}</p>
            <h2 className="mt-3 font-display text-2xl lg:text-3xl text-cream">
              {t("appsPage.cta.title")}
            </h2>
          </div>
          <Link to="/contact" className="btn btn-on-navy">{t("appsPage.cta.button")}</Link>
        </div>
      </section>
    </div>
  );
}
