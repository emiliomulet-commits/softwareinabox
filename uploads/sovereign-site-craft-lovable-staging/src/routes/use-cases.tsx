import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useCases } from "@/data/useCases";
import { useLocale } from "@/i18n/useLocale";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

const CHIP_I18N_KEYS: Record<string, string> = {
  "Derecho administrativo": "useCases.index.chips.administrativeLaw",
  "Tribunal de Cuentas": "useCases.index.chips.auditCourt",
};

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.useCases.title") as string },
      { name: "description", content: i18n.t("seo.useCases.description") as string },
      { property: "og:title", content: i18n.t("seo.useCases.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.useCases.ogDescription") as string },
      { property: "og:url", content: "/use-cases" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases" },
      ...hreflangLinks("/use-cases"),
    ],
  }),
  component: UseCasesRoute,
});

function UseCasesRoute() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // /use-cases renders the index; nested routes render their own page.
  if (pathname !== "/use-cases") return <Outlet />;
  return <UseCasesIndex />;
}

function UseCasesIndex() {
  const { t, pick } = useLocale();
  useLocalizedMeta("seo.useCases.title", "seo.useCases.description");
  const chipLabel = (n: string) => {
    const key = CHIP_I18N_KEYS[n];
    return key ? t(key) : n;
  };
  return (
    <div className="bg-[var(--cream)]">
      <header
        className="section section-navy relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(183,132,31,0.22), transparent 55%)",
        }}
      >
        <div className="container-1200 py-20 lg:py-28 relative">
          <nav className="label-mono mb-8 text-[var(--gold)]">
            <Link to="/" className="hover:text-[var(--gold-light)]">
              Home
            </Link>
            <span className="mx-2 text-[var(--navy-2)]">/</span>
            <span className="text-[var(--cream)]">{t("nav.useCases")}</span>
          </nav>

          <p className="label-mono text-[var(--gold)]">{t("useCases.index.eyebrow")}</p>

          <h1 className="mt-4 text-5xl lg:text-7xl font-display tracking-tight text-balance max-w-4xl">
            {t("useCases.index.title")}
          </h1>
          <p className="font-display italic text-xl lg:text-2xl text-[var(--gold-light)] mt-4 max-w-3xl">
            {t("useCases.index.subtitle")}
          </p>
          <p className="mt-8 max-w-2xl text-[var(--cream)]/80 leading-relaxed text-lg">
            {t("useCases.index.lede")}
          </p>
        </div>
      </header>

      <section className="section section-cream">
        <div className="container-1200 py-20">
          <div className="grid md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
            {useCases.map((s) => (
              <article
                key={s.id}
                className="bg-white p-8 lg:p-10 flex flex-col card-accent"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="label-mono">{s.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--body-mute)]">
                    {t("useCases.index.sectorLabel")}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl text-[var(--navy)]">
                  {pick(s.sector)}
                </h2>
                <p className="mt-3 text-[var(--body-mid)] leading-relaxed">
                  {pick(s.subtitle)}
                </p>

                <div className="mt-6">
                  <p className="label-mono mb-3">{t("useCases.index.regulatoryScope")}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.chips.map((n) => (
                      <span
                        key={n}
                        className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-[var(--line)] text-[var(--body-mid)] bg-[var(--cream)]"
                      >
                        {chipLabel(n)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a href={`/use-cases/${s.slug}`} className="btn-arrow">
                    {t("cta.open")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}