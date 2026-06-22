import { createFileRoute, Link } from "@tanstack/react-router";
import { ArchitectureSidebarMobile, ArchitectureSidebarDesktop } from "@/components/ArchitectureSidebar";
import { hreflangLinks } from "@/i18n/seo";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/architecture/multi-tenant")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.architectureMultiTenant.title") as string },
      { name: "description", content: i18n.t("seo.architectureMultiTenant.description") as string },
      { property: "og:title", content: i18n.t("seo.architectureMultiTenant.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.architectureMultiTenant.ogDescription") as string },
      { property: "og:url", content: "/architecture/multi-tenant" },
    ],
    links: [
      { rel: "canonical", href: "/architecture/multi-tenant" },
      ...hreflangLinks("/architecture/multi-tenant"),
    ],
  }),
  component: MultiTenantPage,
});

function MultiTenantPage() {
  const { t } = useTranslation();
  useLocalizedMeta("seo.architectureMultiTenant.title", "seo.architectureMultiTenant.description");
  const jwtList = t("architecture.multiTenant.jwtList", { returnObjects: true }) as string[];
  const isoList = t("architecture.multiTenant.isoList", { returnObjects: true }) as string[];
  const dcrList = t("architecture.multiTenant.dcrList", { returnObjects: true }) as string[];
  const onThisPage = t("architecture.multiTenant.onThisPageItems", { returnObjects: true }) as [string, string][];
  return (
    <div className="section-cream">
      <div className="container-1200">

        <ArchitectureSidebarMobile activePage="multi-tenant" activeHash="jwt" />

        <div className="grid grid-cols-12 gap-8">
          <ArchitectureSidebarDesktop activePage="multi-tenant" activeHash="jwt" />

          <article className="col-span-12 lg:col-span-6 xl:col-span-6 py-10 lg:py-14 prose-doc">
            <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label={t("architecture.common.ariaBreadcrumb")}>
              <Link to="/" className="hover:text-navy transition">{t("architecture.common.breadcrumbHome")}</Link>
              <span className="text-gold">/</span>
              <Link to="/architecture" className="hover:text-navy transition">{t("architecture.common.breadcrumbArchitecture")}</Link>
              <span className="text-gold">/</span>
              <span className="text-navy">{t("architecture.multiTenant.crumb")}</span>
            </nav>

            <p className="label-mono">{t("architecture.multiTenant.eyebrow")}</p>
            <h1 className="mt-5 font-display text-5xl lg:text-6xl tracking-tight text-balance">
              {t("architecture.multiTenant.h1")}
            </h1>
            <p className="mt-8 text-lg text-body-mid leading-relaxed">
              {t("architecture.multiTenant.intro")}
            </p>

            <h2 id="jwt" dangerouslySetInnerHTML={{ __html: t("architecture.multiTenant.jwtH2") }} />
            <p>{t("architecture.multiTenant.jwtP1")}</p>
            <ul>
              {jwtList.map((html, i) => <li key={i} dangerouslySetInnerHTML={{ __html: html }} />)}
            </ul>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `{
  <span class="str">"iss"</span>: <span class="str">"https://shield.cognitive.local"</span>,
  <span class="str">"sub"</span>: <span class="str">"operator_01J8..."</span>,
  <span class="str">"tenant_id"</span>: <span class="str">"acme-bank_01J8..."</span>,
  <span class="str">"scope"</span>: [<span class="str">"vault:read"</span>, <span class="str">"audit:export"</span>, <span class="str">"skill:execute:approved"</span>],
  <span class="str">"jti"</span>: <span class="str">"tok_01J8..."</span>,
  <span class="str">"iat"</span>: <span class="kw">1751000000</span>,
  <span class="str">"exp"</span>: <span class="kw">1751003600</span>
}`}} /></pre>

            <p dangerouslySetInnerHTML={{ __html: t("architecture.multiTenant.jwtP2") }} />

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.multiTenant.jwtCalloutLabel")}</span>
              <span dangerouslySetInnerHTML={{ __html: t("architecture.multiTenant.jwtCalloutBody") }} />
            </div>

            <h2 id="isolation">{t("architecture.multiTenant.isoH2")}</h2>
            <p>{t("architecture.multiTenant.isoP1")}</p>
            <ul>
              {isoList.map((html, i) => <li key={i} dangerouslySetInnerHTML={{ __html: html }} />)}
            </ul>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.multiTenant.isoCalloutLabel")}</span>
              {t("architecture.multiTenant.isoCalloutBody")}
            </div>

            <h2 id="dcr">{t("architecture.multiTenant.dcrH2")}</h2>
            <p>{t("architecture.multiTenant.dcrP1")}</p>
            <ol>
              {dcrList.map((html, i) => <li key={i} dangerouslySetInnerHTML={{ __html: html }} />)}
            </ol>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `<span class="com">// Registration request</span>
<span class="kw">POST</span> /register
{
  <span class="str">"tenant_id"</span>: <span class="str">"acme-bank_01J8..."</span>,
  <span class="str">"redirect_uris"</span>: [<span class="str">"https://acme-bank.internal/callback"</span>],
  <span class="str">"jwks_uri"</span>: <span class="str">"https://acme-bank.internal/.well-known/jwks.json"</span>,
  <span class="str">"token_endpoint_auth_method"</span>: <span class="str">"private_key_jwt"</span>
}

<span class="com">// Shield response</span>
{
  <span class="str">"client_id"</span>: <span class="str">"client_01J8..."</span>,
  <span class="str">"client_id_issued_at"</span>: <span class="kw">1751000000</span>,
  <span class="str">"client_secret_expires_at"</span>: <span class="kw">0</span>
}`}} /></pre>

            <div className="not-prose mt-20 pt-8 border-t border-line flex justify-between gap-4">
              <a href="/architecture#jsonrpc" className="group block max-w-[45%]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.prev")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.multiTenant.footerPrevTitle")}</p>
              </a>
              <Link to="/architecture/permissions" className="group block max-w-[45%] text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.next")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.multiTenant.footerNextTitle")}</p>
              </Link>
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
