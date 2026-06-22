import { createFileRoute, Link } from "@tanstack/react-router";
import { Diagram05Rbac } from "@/components/diagrams/Diagram05Rbac";
import { FigCaption } from "@/components/diagrams/FigCaption";
import { hreflangLinks } from "@/i18n/seo";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.compliance.title") as string },
      { name: "description", content: i18n.t("seo.compliance.description") as string },
      { property: "og:title", content: i18n.t("seo.compliance.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.compliance.ogDescription") as string },
    ],
    links: [
      { rel: "canonical", href: "/compliance" },
      ...hreflangLinks("/compliance"),
    ],
  }),
  component: CompliancePage,
});

type Chip = "gdpr" | "soc2" | "nis2" | "nist" | "slsa";
type Cover = "full" | "partial";

type Owner =
  | { layer: "App"; name: "CORE" | "VAULT" | "HUB" | "NEXUS" }
  | { layer: "Fabric"; name: "SHIELD" | "BRIDGE" | "CHAIN" };

type Row = {
  id: string;
  capability: string;
  owner: Owner;
  crossMap: { label: string; chip: Chip }[];
  cover: Cover;
  domain: "A.5" | "A.6" | "A.7" | "A.8";
};

// Capabilities and titles are looked up from i18n by row id.
const rows: Row[] = [
  { id: "A.5.15", domain: "A.5", capability: "SSO + scoped tokens", owner: { layer: "Fabric", name: "SHIELD" }, crossMap: [{ label: "GDPR Art.32", chip: "gdpr" }, { label: "SOC2 CC6.1", chip: "soc2" }], cover: "full" },
  { id: "A.5.17", domain: "A.5", capability: "OAuth 2.1 PKCE", owner: { layer: "Fabric", name: "SHIELD" }, crossMap: [{ label: "NIST 800-63", chip: "nist" }], cover: "full" },
  { id: "A.5.23", domain: "A.5", capability: "Sovereign on-prem perimeter", owner: { layer: "App", name: "NEXUS" }, crossMap: [{ label: "NIS2 Art.21", chip: "nis2" }], cover: "full" },
  { id: "A.6.3", domain: "A.6", capability: "Operator playbooks + training records", owner: { layer: "App", name: "NEXUS" }, crossMap: [{ label: "SOC2 CC1.4", chip: "soc2" }], cover: "full" },
  { id: "A.7.4", domain: "A.7", capability: "TPM 2.0 attestation (hardware vendor)", owner: { layer: "Fabric", name: "SHIELD" }, crossMap: [{ label: "NIS2 Art.21", chip: "nis2" }], cover: "full" },
  { id: "A.8.3", domain: "A.8", capability: "VDS row-level policies", owner: { layer: "App", name: "VAULT" }, crossMap: [{ label: "GDPR Art.5", chip: "gdpr" }], cover: "full" },
  { id: "A.8.5", domain: "A.8", capability: "JWT + Tenant-ID isolation", owner: { layer: "Fabric", name: "SHIELD" }, crossMap: [{ label: "NIST 800-63", chip: "nist" }, { label: "SOC2 CC6.1", chip: "soc2" }], cover: "full" },
  { id: "A.8.10", domain: "A.8", capability: "VDS lifecycle", owner: { layer: "App", name: "VAULT" }, crossMap: [{ label: "GDPR Art.17", chip: "gdpr" }], cover: "full" },
  { id: "A.8.12", domain: "A.8", capability: "Inside-perimeter inference, zero egress", owner: { layer: "App", name: "CORE" }, crossMap: [{ label: "GDPR Art.32", chip: "gdpr" }], cover: "full" },
  { id: "A.8.15", domain: "A.8", capability: "Trace ID per request", owner: { layer: "Fabric", name: "CHAIN" }, crossMap: [{ label: "SOC2 CC7.2", chip: "soc2" }, { label: "NIS2", chip: "nis2" }], cover: "full" },
  { id: "A.8.16", domain: "A.8", capability: "Heartbeat + alert engine", owner: { layer: "Fabric", name: "CHAIN" }, crossMap: [{ label: "NIS2 Art.21", chip: "nis2" }], cover: "full" },
  { id: "A.8.28", domain: "A.8", capability: "Code signing + SBOM", owner: { layer: "Fabric", name: "BRIDGE" }, crossMap: [{ label: "SLSA L3", chip: "slsa" }], cover: "partial" },
];

const chipClass: Record<Chip, string> = {
  gdpr: "bg-[var(--gold-light)] text-[var(--navy)] border-[var(--gold)]",
  soc2: "bg-[var(--blue-soft)] text-[var(--navy)] border-[var(--navy-2)]",
  nis2: "bg-[var(--coral-soft)] text-[var(--coral)] border-[var(--coral)]",
  nist: "bg-white text-[var(--navy)] border-[var(--line)]",
  slsa: "bg-white text-[var(--body-mid)] border-[var(--line)]",
};

function CompliancePage() {
  const { t } = useTranslation();
  useLocalizedMeta("seo.compliance.title", "seo.compliance.description");
  const domains = t("compliance.domains", { returnObjects: true }) as [string, string, number][];
  const filters = t("compliance.filters", { returnObjects: true }) as string[];
  const tableHeads = t("compliance.tableHeads", { returnObjects: true }) as string[];
  const evidenceCards = t("compliance.evidenceCards", { returnObjects: true }) as [string, string, string][];
  const auditItems = t("compliance.auditItems", { returnObjects: true }) as [string, string, string][];

  return (
    <div className="bg-[var(--cream)]">


      {/* Framework header */}
      <header
        className="section section-navy relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(183,132,31,0.22), transparent 55%)",
        }}
      >
        <div className="container-1200 py-20 lg:py-28 relative">
          <nav className="label-mono mb-8 text-[var(--gold)]">
            <Link to="/" className="hover:text-[var(--gold-light)]">{t("architecture.common.breadcrumbHome")}</Link>
            <span className="mx-2 text-[var(--navy-2)]">/</span>
            <span>{t("compliance.crumb")}</span>
            <span className="mx-2 text-[var(--navy-2)]">/</span>
            <span className="text-[var(--cream)]">{t("compliance.crumbCurrent")}</span>
          </nav>

          <div className="inline-flex items-center gap-2 border border-[var(--green)] bg-[color-mix(in_oklab,var(--green)_15%,transparent)] px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-[var(--green)] mb-8">
            <span className="text-[var(--green)]">●</span>
            {t("compliance.mappedBadge")}
          </div>

          <h1 className="text-5xl lg:text-7xl font-display tracking-tight text-balance max-w-4xl">
            {t("compliance.h1")}
          </h1>
          <p className="font-display italic text-xl lg:text-2xl text-[var(--gold-light)] mt-6 max-w-3xl" dangerouslySetInnerHTML={{ __html: t("compliance.tagline") }} />
        </div>
      </header>

      {/* Summary cards */}
      <section className="section section-white">
        <div className="container-1200 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
            {domains.map(([code, name, count]) => (
              <div key={code} className="bg-white p-6 lg:p-8">
                <div className="label-mono mb-3">{code}</div>
                <div className="font-display text-2xl text-[var(--navy)]">{name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-[var(--navy)]">{count}</span>
                  <span className="text-sm text-[var(--body-mute)]">{t("compliance.controlsLabel")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RBAC perimeter diagram */}
      <section className="section section-white">
        <div className="container-1200 py-16">
          <p className="label-mono">{t("compliance.rbacEyebrow")}</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-display">{t("compliance.rbacH2")}</h2>
          <figure className="mt-8">
            <Diagram05Rbac />
            <FigCaption>{t("compliance.rbacFig")}</FigCaption>
          </figure>
        </div>
      </section>

      {/* Filters + matrix */}
      <section className="section section-cream">
        <div className="container-1200 py-16">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="label-mono mr-2">{t("compliance.filterLabel")}</span>
            {filters.map((f, i) => (
              <button
                key={f}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                  i === 0
                    ? "bg-[var(--navy)] text-[var(--cream)] border-[var(--navy)]"
                    : "bg-white text-[var(--body-mid)] border-[var(--line)] hover:border-[var(--navy)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto bg-white border border-[var(--line)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--navy)] text-[var(--cream)]">
                  {tableHeads.map((h) => (
                    <th key={h} className="text-left font-mono uppercase tracking-wider text-xs px-5 py-4 border-b border-[var(--navy-2)]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const title = t(`compliance.rowTitles.${r.id}`);
                  const capability = t(`compliance.rowCaps.${r.id}`);
                  return (
                    <tr key={r.id} className="border-b border-[var(--line)] last:border-0 hover:bg-[var(--cream)]">
                      <td className="px-5 py-5 align-top whitespace-nowrap">
                        <span className="font-mono text-xs text-[var(--gold)]">{r.id}</span>
                      </td>
                      <td className="px-5 py-5 align-top font-display text-[var(--navy)] min-w-[180px]">
                        {title}
                      </td>
                      <td className="px-5 py-5 align-top text-[var(--body-dark)] min-w-[260px]">
                        <span className={`inline-block font-mono text-[10px] uppercase tracking-wider mr-2 px-1.5 py-0.5 border ${r.owner.layer === "Fabric" ? "text-[var(--gold)] border-[var(--gold)]" : "text-[var(--navy)] border-[var(--navy)] bg-[var(--blue-soft)]"}`}>
                          {r.owner.layer} · {r.owner.name}
                        </span>
                        {capability}
                      </td>
                      <td className="px-5 py-5 align-top min-w-[220px]">
                        <div className="flex flex-wrap gap-1.5">
                          {r.crossMap.map((c) => (
                            <span
                              key={c.label}
                              className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider border ${chipClass[c.chip]}`}
                            >
                              {c.label}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-5 align-top">
                        {r.cover === "full" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-[var(--green)] text-white text-sm">✓</span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-[var(--gold-light)] text-[var(--gold)] text-sm" title={t("compliance.partialTitle")}>◐</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[var(--body-mute)] mt-4 font-mono">
            {t("compliance.tableFootnote")}
          </p>
        </div>
      </section>

      {/* Evidence library */}
      <section className="section section-white">
        <div className="container-1200 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="label-mono mb-4">{t("compliance.evidenceEyebrow")}</div>
              <h2 className="text-3xl lg:text-4xl font-display">{t("compliance.evidenceH2")}</h2>
              <p className="mt-6 text-[var(--body-mid)] leading-relaxed">
                {t("compliance.evidenceBody")}
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
              {evidenceCards.map(([kind, title, meta]) => (
                <div key={title} className="bg-white p-6 card-accent">
                  <div className="label-mono mb-3">{kind}</div>
                  <div className="font-display text-lg text-[var(--navy)]">{title}</div>
                  <div className="text-xs text-[var(--body-mute)] font-mono mt-2">{meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit history timeline */}
      <section className="section section-cream">
        <div className="container-1200 py-20">
          <div className="label-mono mb-4">{t("compliance.auditEyebrow")}</div>
          <h2 className="text-3xl lg:text-4xl font-display mb-12">{t("compliance.auditH2")}</h2>

          <ol className="relative border-l border-[var(--line)] ml-3">
            {auditItems.map(([date, title, body]) => (
              <li key={date} className="ml-6 mb-10 last:mb-0">
                <span className="absolute -left-[7px] w-3.5 h-3.5 bg-[var(--gold)] border-2 border-[var(--cream)]" />
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)]">{date}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--green)] border border-[var(--green)] px-2 py-0.5">{t("compliance.passed")}</span>
                </div>
                <h3 className="font-display text-xl text-[var(--navy)] mt-2">{title}</h3>
                <p className="text-[var(--body-mid)] mt-2 max-w-3xl leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  );
}
