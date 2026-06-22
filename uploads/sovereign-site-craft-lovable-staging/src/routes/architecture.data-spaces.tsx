import { createFileRoute, Link } from "@tanstack/react-router";
import { ArchitectureSidebarMobile, ArchitectureSidebarDesktop } from "@/components/ArchitectureSidebar";
import { hreflangLinks } from "@/i18n/seo";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/architecture/data-spaces")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.architectureDataSpaces.title") as string },
      { name: "description", content: i18n.t("seo.architectureDataSpaces.description") as string },
      { property: "og:title", content: i18n.t("seo.architectureDataSpaces.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.architectureDataSpaces.ogDescription") as string },
      { property: "og:url", content: "/architecture/data-spaces" },
    ],
    links: [
      { rel: "canonical", href: "/architecture/data-spaces" },
      ...hreflangLinks("/architecture/data-spaces"),
    ],
  }),
  component: DataSpacesPage,
});

function DataSpacesPage() {
  const { t } = useTranslation();
  useLocalizedMeta("seo.architectureDataSpaces.title", "seo.architectureDataSpaces.description");
  const gaiaList = t("architecture.dataSpaces.gaiaList", { returnObjects: true }) as string[];
  const onThisPage = t("architecture.dataSpaces.onThisPageItems", { returnObjects: true }) as [string, string][];
  return (
    <div className="section-cream">
      <div className="container-1200">

        <ArchitectureSidebarMobile activePage="data-spaces" activeHash="gaia-x" />

        <div className="grid grid-cols-12 gap-8">
          <ArchitectureSidebarDesktop activePage="data-spaces" activeHash="gaia-x" />

          <article className="col-span-12 lg:col-span-6 xl:col-span-6 py-10 lg:py-14 prose-doc">
            <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label={t("architecture.common.ariaBreadcrumb")}>
              <Link to="/" className="hover:text-navy transition">{t("architecture.common.breadcrumbHome")}</Link>
              <span className="text-gold">/</span>
              <Link to="/architecture" className="hover:text-navy transition">{t("architecture.common.breadcrumbArchitecture")}</Link>
              <span className="text-gold">/</span>
              <span className="text-navy">{t("architecture.dataSpaces.crumb")}</span>
            </nav>

            <p className="label-mono">{t("architecture.dataSpaces.eyebrow")}</p>
            <h1 className="mt-5 font-display text-5xl lg:text-6xl tracking-tight text-balance" dangerouslySetInnerHTML={{ __html: t("architecture.dataSpaces.h1") }} />
            <p className="mt-8 text-lg text-body-mid leading-relaxed">
              {t("architecture.dataSpaces.intro")}
            </p>

            <h2 id="gaia-x">{t("architecture.dataSpaces.gaiaH2")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.dataSpaces.gaiaP1") }} />
            <p>{t("architecture.dataSpaces.gaiaP2")}</p>
            <ol>
              {gaiaList.map((html, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </ol>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `{
  <span class="str">"@context"</span>: <span class="str">"https://www.w3.org/2018/credentials/v1"</span>,
  <span class="str">"@type"</span>: [<span class="str">"VerifiableCredential"</span>, <span class="str">"gx:ServiceOffering"</span>],
  <span class="str">"issuer"</span>: <span class="str">"did:web:operator.internal"</span>,
  <span class="str">"credentialSubject"</span>: {
    <span class="str">"gx:name"</span>: <span class="str">"Cognitive Server — Sovereign AI"</span>,
    <span class="str">"gx:jurisdiction"</span>: <span class="str">"EU"</span>,
    <span class="str">"gx:dataResidency"</span>: <span class="str">"on-premises"</span>,
    <span class="str">"gx:aiActRiskClass"</span>: <span class="str">"limited"</span>,
    <span class="str">"gx:certifications"</span>: [<span class="str">"ISO/IEC 27001:2022"</span>, <span class="str">"ENS Alto"</span>]
  }
}`}} /></pre>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.dataSpaces.gaiaCalloutLabel")}</span>
              {t("architecture.dataSpaces.gaiaCalloutBody")}
            </div>

            <h2 id="ids">{t("architecture.dataSpaces.idsH2")}</h2>
            <p>{t("architecture.dataSpaces.idsP1")}</p>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.dataSpaces.idsP2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("architecture.dataSpaces.idsP3") }} />
            <p dangerouslySetInnerHTML={{ __html: t("architecture.dataSpaces.idsP4") }} />

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `{
  <span class="str">"@type"</span>: <span class="str">"ids:ConnectorEndpoint"</span>,
  <span class="str">"@id"</span>: <span class="str">"https://connector.operator.internal/"</span>,
  <span class="str">"ids:accessURL"</span>: {
    <span class="str">"@id"</span>: <span class="str">"https://connector.operator.internal/api/v1"</span>
  },
  <span class="str">"ids:endpointInformation"</span>: <span class="str">"Cognitive Server IDS Adapter v1"</span>,
  <span class="str">"ids:securityProfile"</span>: {
    <span class="str">"@id"</span>: <span class="str">"idsc:TRUST_PLUS_SECURITY_PROFILE"</span>
  }
}`}} /></pre>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.dataSpaces.idsCalloutLabel")}</span>
              {t("architecture.dataSpaces.idsCalloutBody")}
            </div>

            <div className="not-prose mt-20 pt-8 border-t border-line flex justify-between gap-4">
              <Link to="/architecture/permissions" className="group block max-w-[45%]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.prev")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.dataSpaces.footerPrevTitle")}</p>
              </Link>
              <Link to="/architecture" className="group block max-w-[45%] text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.backTo")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.common.backToOverview")}</p>
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
