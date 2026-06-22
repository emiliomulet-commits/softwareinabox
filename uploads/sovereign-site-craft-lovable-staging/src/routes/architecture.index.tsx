import { createFileRoute } from "@tanstack/react-router";
import { ArchitectureSidebarMobile, ArchitectureSidebarDesktop } from "@/components/ArchitectureSidebar";
import { Diagram02Stack } from "@/components/diagrams/Diagram02Stack";
import { Diagram03Flow } from "@/components/diagrams/Diagram03Flow";
import { FigCaption } from "@/components/diagrams/FigCaption";
import { hreflangLinks } from "@/i18n/seo";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/architecture/")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.architecture.title") as string },
      { name: "description", content: i18n.t("seo.architecture.description") as string },
      { property: "og:title", content: i18n.t("seo.architecture.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.architecture.ogDescription") as string },
      { property: "og:url", content: "/architecture" },
    ],
    links: [
      { rel: "canonical", href: "/architecture" },
      ...hreflangLinks("/architecture"),
    ],
  }),
  component: Architecture,
});

function Architecture() {
  const { t } = useTranslation();
  useLocalizedMeta("seo.architecture.title", "seo.architecture.description");
  const lrRows = t("architecture.overview.lrRows", { returnObjects: true }) as [string, string, string][];
  const onThisPage = t("architecture.overview.onThisPageItems", { returnObjects: true }) as [string, string][];
  return (
    <div className="section-cream">
      <div className="container-1200">

        {/* MOBILE SIDEBAR DISCLOSURE */}
        <ArchitectureSidebarMobile activePage="architecture" activeHash="primitives" />

        <div className="grid grid-cols-12 gap-8">

          {/* LEFT SIDEBAR */}
          <ArchitectureSidebarDesktop activePage="architecture" activeHash="primitives" />

          {/* MAIN */}
          <article className="col-span-12 lg:col-span-6 xl:col-span-6 py-10 lg:py-14 prose-doc">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-mono text-xs text-body-mute mb-10" aria-label={t("architecture.common.ariaBreadcrumb")}>
              <a href="/" className="hover:text-navy transition">{t("architecture.common.breadcrumbHome")}</a>
              <span className="text-gold">/</span>
              <a href="/architecture" className="hover:text-navy transition">{t("architecture.common.breadcrumbArchitecture")}</a>

              <span className="text-gold">/</span>
              <a href="/architecture#mcp" className="hover:text-navy transition">{t("architecture.overview.crumbMcp")}</a>
              <span className="text-gold">/</span>
              <span className="text-navy">{t("architecture.overview.crumbCurrent")}</span>
            </nav>

            <section id="mcp">
              <p className="label-mono">{t("architecture.overview.eyebrowMcp")}</p>
              <h1 id="primitives" className="mt-5 font-display text-5xl lg:text-6xl tracking-tight text-balance">
                {t("architecture.overview.h1")}
              </h1>
            </section>

            <p className="mt-8 text-lg text-body-mid leading-relaxed" dangerouslySetInnerHTML={{ __html: t("architecture.overview.intro") }} />

            {/* Stack diagram */}
            <section className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.stackEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.stackH2")}</h2>
              <p className="mt-3 text-body-mid">{t("architecture.overview.stackP")}</p>
              <figure className="mt-8">
                <Diagram02Stack />
                <FigCaption>{t("architecture.overview.stackFig")}</FigCaption>
              </figure>
            </section>

            {/* Diagram */}
            <div className="not-prose my-14">
              <PrimitivesDiagram />
            </div>

            <section id="host-client-server" className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.hcsEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.hcsH2")}</h2>
              <div className="prose-doc mt-6">
                <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.hcsP1") }} />
                <p>{t("architecture.overview.hcsP2")}</p>
              </div>
              <div className="callout mt-8">
                <span className="callout-label">{t("architecture.overview.hcsCalloutLabel")}</span>
                {t("architecture.overview.hcsCalloutBody")}
              </div>
            </section>

            <h2 id="tools">{t("architecture.overview.toolsH2")}</h2>
            <p>{t("architecture.overview.toolsP1")}</p>
            <p>{t("architecture.overview.toolsP2")}</p>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `<span class="com">// src/lib/mcp/tools/audit-cloud-config.ts</span>
<span class="kw">import</span> { defineTool } <span class="kw">from</span> <span class="str">"mcp-tanstack-start"</span>;
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;

<span class="kw">export const</span> <span class="fn">auditCloudConfig</span> = <span class="fn">defineTool</span>({
  name: <span class="str">"audit_cloud_config"</span>,
  description: <span class="str">"Audit a cloud configuration against NIS2 controls."</span>,
  parameters: z.<span class="fn">object</span>({
    tenant: z.<span class="fn">string</span>(),
    regime: z.<span class="fn">enum</span>([<span class="str">"NIS2"</span>, <span class="str">"DORA"</span>, <span class="str">"AI_ACT"</span>]),
  }),
  execute: <span class="kw">async</span> ({ tenant, regime }, { auth }) =&gt; {
    <span class="kw">await</span> <span class="fn">requireScope</span>(auth, <span class="str">"audit:read"</span>);
    <span class="kw">return</span> <span class="fn">runAudit</span>(tenant, regime);
  },
});`}} /></pre>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.overview.toolsCalloutLabel")}</span>
              {t("architecture.overview.toolsCalloutBody")}
            </div>

            <h2 id="resources">{t("architecture.overview.resourcesH2")}</h2>
            <p>{t("architecture.overview.resourcesP1")}</p>
            <p>{t("architecture.overview.resourcesP2")}</p>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `<span class="kw">server</span>.<span class="fn">resource</span>({
  uri: <span class="str">"vault://tenant/{tenantId}/policy/{name}"</span>,
  mimeType: <span class="str">"application/json"</span>,
  description: <span class="str">"Tenant-scoped policy document, lineage-tracked."</span>,
  read: <span class="kw">async</span> ({ tenantId, name }, { auth }) =&gt; {
    <span class="kw">await</span> <span class="fn">requireScope</span>(auth, <span class="str">"vault:read"</span>);
    <span class="kw">return</span> <span class="fn">vault</span>.<span class="fn">read</span>(tenantId, name);
  },
});`}} /></pre>

            <div className="callout not-prose my-8">
              <span className="callout-label">{t("architecture.overview.resourcesCalloutLabel")}</span>
              {t("architecture.overview.resourcesCalloutBody")}
            </div>

            <h2 id="prompts">{t("architecture.overview.promptsH2")}</h2>
            <p>{t("architecture.overview.promptsP1")}</p>
            <p>{t("architecture.overview.promptsP2")}</p>

            <pre className="code-block not-prose my-6"><code dangerouslySetInnerHTML={{__html: `<span class="kw">server</span>.<span class="fn">prompt</span>({
  name: <span class="str">"nis2_incident_triage"</span>,
  description: <span class="str">"Classify and route a suspected NIS2 incident."</span>,
  arguments: [
    { name: <span class="str">"signal"</span>, required: <span class="kw">true</span> },
    { name: <span class="str">"jurisdiction"</span>, required: <span class="kw">true</span> },
  ],
  build: ({ signal, jurisdiction }) =&gt; ({
    messages: [
      { role: <span class="str">"system"</span>, content: <span class="fn">policyFor</span>(jurisdiction) },
      { role: <span class="str">"user"</span>,   content: signal },
    ],
  }),
});`}} /></pre>

            <section id="jsonrpc" className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.jsonrpcEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.jsonrpcH2")}</h2>
              <div className="prose-doc mt-6">
                <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.jsonrpcP1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.jsonrpcP2") }} />
              </div>
              <pre className="code-block my-6"><code dangerouslySetInnerHTML={{__html: `{
  <span class="str">"jsonrpc"</span>: <span class="str">"2.0"</span>,
  <span class="str">"method"</span>: <span class="str">"tools/call"</span>,
  <span class="str">"params"</span>: {
    <span class="str">"name"</span>: <span class="str">"audit_cloud_config"</span>,
    <span class="str">"arguments"</span>: { <span class="str">"tenant"</span>: <span class="str">"acme-bank"</span>, <span class="str">"regime"</span>: <span class="str">"DORA"</span> }
  },
  <span class="str">"id"</span>: <span class="str">"req_01J8..."</span>
}`}} /></pre>
              <div className="callout mt-8">
                <span className="callout-label">{t("architecture.overview.jsonrpcCalloutLabel")}</span>
                {t("architecture.overview.jsonrpcCalloutBody")}
              </div>
            </section>

            <section id="local-remote" className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.lrEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.lrH2")}</h2>
              <div className="prose-doc mt-6">
                <p>{t("architecture.overview.lrP1")}</p>
                <p>{t("architecture.overview.lrP2")}</p>
              </div>
              <div className="mt-8 overflow-x-auto border border-line">
                <table className="w-full text-sm">
                  <thead className="bg-navy text-cream">
                    <tr>
                      <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.overview.lrHeadDim")}</th>
                      <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.overview.lrHeadLocal")}</th>
                      <th className="px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase">{t("architecture.overview.lrHeadRemote")}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-cream">
                    {lrRows.map(([k, a, b]) => (
                      <tr key={k} className="border-t border-line">
                        <td className="px-4 py-3 font-medium text-navy">{k}</td>
                        <td className="px-4 py-3 text-body-mid">{a}</td>
                        <td className="px-4 py-3 text-body-mid">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="callout mt-8">
                <span className="callout-label">{t("architecture.overview.lrCalloutLabel")}</span>
                {t("architecture.overview.lrCalloutBody")}
              </div>
            </section>

            <section className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.flowEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.flowH2")}</h2>
              <p className="mt-3 text-body-mid">{t("architecture.overview.flowP")}</p>
              <figure className="mt-8">
                <Diagram03Flow />
                <FigCaption>{t("architecture.overview.flowFig")}</FigCaption>
              </figure>
            </section>

            <section className="not-prose my-14">
              <p className="label-mono">{t("architecture.overview.fabricEyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight">{t("architecture.overview.fabricH2")}</h2>
              <p className="mt-3 text-body-mid">{t("architecture.overview.fabricP")}</p>

              <div id="shield" className="mt-10 pt-2">
                <p className="label-mono">{t("architecture.overview.shieldCode")}</p>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl tracking-tight" dangerouslySetInnerHTML={{ __html: t("architecture.overview.shieldH3") }} />
                <div className="prose-doc mt-4">
                  <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.shieldBody") }} />
                </div>
              </div>

              <div id="bridge" className="mt-12 pt-2">
                <p className="label-mono">{t("architecture.overview.bridgeCode")}</p>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl tracking-tight">{t("architecture.overview.bridgeH3")}</h3>
                <div className="prose-doc mt-4">
                  <p>{t("architecture.overview.bridgeBody")}</p>
                </div>
              </div>

              <div id="chain" className="mt-12 pt-2">
                <p className="label-mono">{t("architecture.overview.chainCode")}</p>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl tracking-tight">{t("architecture.overview.chainH3")}</h3>
                <div className="prose-doc mt-4">
                  <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.chainBody") }} />
                </div>
              </div>
            </section>

            <h2 id="composing">{t("architecture.overview.composingH2")}</h2>
            <p>{t("architecture.overview.composingP")}</p>

            <h2 id="spec">{t("architecture.overview.specH2")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("architecture.overview.specP") }} />

            {/* Footer nav */}
            <div className="not-prose mt-20 pt-8 border-t border-line flex justify-between gap-4">
              <a href="/architecture" className="group block max-w-[45%]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.prev")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.overview.footerPrevTitle")}</p>
              </a>
              <a href="/architecture#jsonrpc" className="group block max-w-[45%] text-right">
                <p className="font-mono text-[11px] uppercase tracking-wider text-body-mute">{t("architecture.common.next")}</p>
                <p className="mt-1 font-display text-lg text-navy group-hover:text-gold transition">{t("architecture.overview.footerNextTitle")}</p>
              </a>
            </div>
          </article>

          {/* RIGHT TOC */}
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

              <div className="mt-10 pt-6 border-t border-line space-y-3">
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">{t("architecture.common.reference")}</p>
                <a href="https://modelcontextprotocol.io/specification/2025-06-18" target="_blank" rel="noopener" className="block text-sm text-body-mid hover:text-navy">
                  {t("architecture.common.mcpSpecLink")}
                </a>
                <a href="/resources/architecture-paper" className="block text-sm text-body-mid hover:text-navy">
                  {t("architecture.common.architecturePaper")}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PrimitivesDiagram() {
  const { t } = useTranslation();
  const primitives = [
    {
      code: "PRIM-01",
      name: t("architecture.overview.primName1"),
      tagline: t("architecture.overview.primTagInvocable"),
      lines: ["audit_cloud_config()", "get_access_logs()", "verify_training_records()"],
    },
    {
      code: "PRIM-02",
      name: t("architecture.overview.primName2"),
      tagline: t("architecture.overview.primTagReadOnly"),
      lines: ["vault://policy/*", "vault://regulation/*", "vault://evidence/*"],
    },
    {
      code: "PRIM-03",
      name: t("architecture.overview.primName3"),
      tagline: t("architecture.overview.primTagTemplated"),
      lines: ["nis2_incident_triage", "dora_resilience_check", "ai_act_conformity"],
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
      {primitives.map((p) => (
        <div key={p.code} className="bg-navy text-cream p-7 relative">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold">{p.code}</p>
            <p className="font-mono text-[11px] text-cream/50">MCP</p>
          </div>
          <h3 className="mt-4 font-display text-3xl text-cream">{p.name}</h3>
          <p className="mt-1 font-display italic text-gold text-sm">{p.tagline}</p>
          <ul className="mt-6 space-y-1.5">
            {p.lines.map((l) => (
              <li key={l} className="font-mono text-xs text-cream/85 flex gap-2">
                <span className="text-gold">▸</span>{l}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
