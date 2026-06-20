import { createFileRoute, Link } from "@tanstack/react-router";
import { ArchitectureSidebarMobile, ArchitectureSidebarDesktop } from "@/components/ArchitectureSidebar";
import { hreflangLinks } from "@/i18n/seo";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/architecture/permissions")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.architecturePermissions.title") as string },
      { name: "description", content: i18n.t("seo.architecturePermissions.description") as string },
      { property: "og:title", content: i18n.t("seo.architecturePermissions.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.architecturePermissions.ogDescription") as string },
      { property: "og:url", content: "/architecture/permissions" },
    ],
    links: [
      { rel: "canonical", href: "/architecture/permissions" },
      ...hreflangLinks("/architecture/permissions"),
    ],
  }),
  component: PermissionsPage,
});

function PermissionsPage() {
  const { t } = useTranslation();
  useLocalizedMeta("seo.architecturePermissions.title", "seo.architecturePermissions.description");
  const oauthList = t("architecture.permissions.oauthList", { returnObjects: true }) as string[];
  const scopesRows = t("architecture.permissions.scopesRows", { returnObjects: true }) as [string, string, string][];
  const lpRows = t("architecture.permissions.lpRows", { returnObjects: true }) as [string, string, string, string][];
  const onThisPage = t("architecture.permissions.onThisPageItems", { returnObjects: true }) as [string, string][];
  return (
    <div className="section-cream">
      <div className="container-1200">

        <ArchitectureSidebarMobile activePage="permissions" activeHash="oauth" />

        <div className="grid grid-cols-12 gap-8">
          <ArchitectureSidebarDesktop activePage="permissions" activeHash="oauth" />

          <article className="col-span-12 lg:col-span-6 xl:col-span-6 py-10 lg:py-14 prose-doc">
            <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label={t("architecture.common.ariaBreadcrumb")}>
              <Link to="/" className="hover:text-navy transition">{t("architecture.common.breadcrumbHome")}</Link>
              <span className="text-gold">/</span>
              <Link to="/architecture" className="hover:text-navy transition">{t("architecture.common.breadcrumbArchitecture")}</Link>
              <span className="text-gold">/</span>
              <span className="text-navy">{t("architecture.permissions.crumb")}</span>
            </nav>

            <p className="label-mono">{t("architecture.permissions.eyebrow")}</p>
            <h1 className="mt-5 font-display text-5xl lg:text-6xl tracking-tight text-balance" dangerouslySetInnerHTML={{ __html: t("architecture.permissions.h1") }} />
            <p className="mt-8 text-lg text-body-mid leading-relaxed">
              {t("architecture.permissions.intro")}
            </p>

            <h2 id="oauth">{t("architecture.permissions.oauthH2")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.permissions.oauthP1") }} />
            <p>{t("architecture.permissions.oauthP2")}</p>
            <ul>
              {oauthList.map((html, i) => <li key={i} dangerouslySetInnerHTML={{ __html: html }} />)}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.permissions.oauthP3") }} />

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.permissions.oauthCalloutLabel")}</span>
              {t("architecture.permissions.oauthCalloutBody")}
            </div>

            <h2 id="scopes">{t("architecture.permissions.scopesH2")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.permissions.scopesP1") }} />

            <div className="not-prose my-8 overflow-x-auto border border-line">
              <table className="w-full text-sm">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.scopesHeadScope")}</th>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.scopesHeadComponent")}</th>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.scopesHeadAction")}</th>
                  </tr>
                </thead>
                <tbody className="bg-cream">
                  {scopesRows.map(([s, c, a]) => (
                    <tr key={s} className="border-t border-line">
                      <td className="px-4 py-3 font-mono text-[12px] text-navy">{s}</td>
                      <td className="px-4 py-3 text-body-mid">{c}</td>
                      <td className="px-4 py-3 text-body-mid">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.permissions.scopesCalloutLabel")}</span>
              <span dangerouslySetInnerHTML={{ __html: t("architecture.permissions.scopesCalloutBody") }} />
            </div>

            <h2 id="lp">{t("architecture.permissions.lpH2")}</h2>
            <p>{t("architecture.permissions.lpP1")}</p>

            <div className="not-prose my-8 overflow-x-auto border border-line">
              <table className="w-full text-sm">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.lpHeadRole")}</th>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.lpHeadScopeSet")}</th>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.lpHeadCanDo")}</th>
                    <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.permissions.lpHeadCannotDo")}</th>
                  </tr>
                </thead>
                <tbody className="bg-cream">
                  {lpRows.map(([r, s, c, n]) => (
                    <tr key={r} className="border-t border-line">
                      <td className="px-4 py-3 font-mono text-[12px] text-navy">{r}</td>
                      <td className="px-4 py-3 font-mono text-[11px] text-body-mid">{s}</td>
                      <td className="px-4 py-3 text-body-mid">{c}</td>
                      <td className="px-4 py-3 text-body-mid">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t("architecture.permissions.lpP2") }} />

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.permissions.lpCalloutLabel")}</span>
              <span dangerouslySetInnerHTML={{ __html: t("architecture.permissions.lpCalloutBody") }} />
            </div>

            <div className="not-prose mt-20 pt-8 border-t border-line flex justify-between gap-4">
              <Link to="/architecture/multi-tenant" className="group block max-w-[45%]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.prev")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.permissions.footerPrevTitle")}</p>
              </Link>
              <a href="/architecture" className="group block max-w-[45%] text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.backTo")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.common.backToOverview")}</p>
              </a>
            </div>
          </article>

          <aside className="hidden xl:block col-span-3">
            <div className="sticky top-16 py-14 w-[220px]">
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold mb-4">{t("architecture.common.onThisPage")}</p>
              <ul className="space-y-2 border-l border-line">
                {onThisPage.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="block pl-4 py-1 text-sm text-body-mid hover:text-navy transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
