import { createFileRoute, Link } from "@tanstack/react-router";
import { Diagram01Ecosystem } from "@/components/diagrams/Diagram01Ecosystem";
import { Diagram02Stack } from "@/components/diagrams/Diagram02Stack";
import { FigCaption } from "@/components/diagrams/FigCaption";
import { apps, type AppSlug } from "@/content/apps";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: i18n.t("platform.meta.title") as string },
      { name: "description", content: i18n.t("platform.meta.description") as string },
      { property: "og:title", content: i18n.t("platform.meta.ogTitle") as string },
      { property: "og:description", content: i18n.t("platform.meta.ogDescription") as string },
      { property: "og:url", content: "/platform" },
    ],
    links: [
      { rel: "canonical", href: "/platform" },
      ...hreflangLinks("/platform"),
    ],
  }),
  component: Platform,
});

const order: AppSlug[] = ["core", "vault", "hub", "nexus"];

const accentText: Record<string, string> = {
  navy: "text-navy",
  gold: "text-gold",
  coral: "text-coral",
  green: "text-[var(--green)]",
};

type Principle = { code: string; title: string; body: string };

function Platform() {
  const { t } = useTranslation();
  const principles = t("platform.principles.items", { returnObjects: true }) as Principle[];
  const fabricItems = t("platform.appsBlock.fabricItems", { returnObjects: true }) as string[];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-cream">
        <div className="container-1200 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <p className="label-mono">{t("platform.hero.eyebrow")}</p>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl tracking-tight max-w-5xl text-balance text-navy">
            {t("platform.hero.titleA")}<span className="text-gold">{t("platform.hero.titleB")}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-body-mid leading-relaxed">
            {t("platform.hero.body")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/architecture" className="btn btn-primary">{t("platform.hero.ctaPrimary")}</Link>
            <Link to="/thesis/why-sovereign" className="btn btn-secondary">{t("platform.hero.ctaSecondary")}</Link>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="border-b border-line bg-white">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("platform.ecosystem.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight max-w-3xl">
            {t("platform.ecosystem.title")}
          </h2>
          <div className="mt-12 max-w-4xl mx-auto">
            <Diagram01Ecosystem />
            <FigCaption>{t("platform.ecosystem.caption")}</FigCaption>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-line bg-cream">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("platform.appsBlock.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight max-w-3xl">
            {t("platform.appsBlock.title")}
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line border border-line">
            {order.map((slug) => {
              const app = apps[slug];
              const localTagline = t(`appsPage.items.${slug}.tagline`) as string;
              const localTitle = t(`appsPage.items.${slug}.title`) as string;
              return (
                <Link
                  key={slug}
                  to={`/${slug}` as "/core" | "/vault" | "/hub" | "/nexus"}
                  className="block bg-white p-8 lg:p-10 hover:bg-cream transition-colors group"
                >
                  <p className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accentText[app.primaryColor] ?? "text-gold"}`}>
                    {localTagline}
                  </p>
                  <h3 className="mt-4 font-display text-3xl text-navy">{app.name}</h3>
                  <p className="mt-4 text-sm text-body-mid leading-relaxed">
                    {localTitle.split(".")[0]}.
                  </p>
                  <p className="mt-8 btn-arrow text-navy group-hover:text-gold transition-colors">
                    {t("platform.appsBlock.openPrefix")} {app.name.toLowerCase()} →
                  </p>
                </Link>
              );
            })}
          </div>

          {/* FABRIC STRIP */}
          <div className="mt-8 bg-navy text-cream px-6 py-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold whitespace-nowrap">
              {t("platform.appsBlock.fabricLabel")}
            </p>
            <div className="flex flex-wrap gap-2">
              {fabricItems.map((p) => (
                <span key={p} className="font-mono text-[11px] tracking-wider uppercase text-cream border border-gold/50 px-3 py-1.5">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-line bg-white">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("platform.stack.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight max-w-3xl">
            {t("platform.stack.title")}
          </h2>
          <p className="mt-6 max-w-2xl text-body-mid leading-relaxed">{t("platform.stack.body")}</p>
          <div className="mt-12 max-w-3xl mx-auto">
            <Diagram02Stack />
            <FigCaption>{t("platform.stack.caption")}</FigCaption>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/architecture" className="btn btn-primary">{t("platform.stack.ctaPrimary")}</Link>
            <Link to="/compliance" className="btn btn-secondary">{t("platform.stack.ctaSecondary")}</Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-line bg-cream">
        <div className="container-1200 py-20">
          <p className="label-mono">{t("platform.principles.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight max-w-3xl">
            {t("platform.principles.title")}
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-line border border-line">
            {principles.map((p) => (
              <div key={p.code} className="bg-white p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] text-gold">{p.code}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-body-mid leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy relative">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
        <div className="container-1200 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">{t("platform.cta.eyebrow")}</p>
            <h2 className="mt-3 font-display text-2xl lg:text-3xl text-cream max-w-2xl">
              {t("platform.cta.title")}
            </h2>
          </div>
          <Link to="/contact" className="btn btn-on-navy">{t("platform.cta.button")}</Link>
        </div>
      </section>
    </>
  );
}
