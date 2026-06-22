export type AppSlug = "core" | "vault" | "hub" | "nexus";
export type AppPrimaryColor = "navy" | "gold" | "coral" | "green";

export type AppConfig = {
  slug: AppSlug;
  name: string;
  tagline: string;
  title: string;
  subtitle: string;
  primaryColor: AppPrimaryColor;
  modules: { code: string; title: string; description: string }[];
  hooks: { name: string; signature: string; description: string }[];
  integrationExample: { lang: string; code: string };
  relatedApps: AppSlug[];
};

const core: AppConfig = {
  slug: "core",
  name: "Core",
  tagline: "APP · 01 — THE CENTRAL NODE",
  title: "Core — the reasoning and chat motor.",
  subtitle:
    "Core is the cognitive heart of the server. It runs the chat experience, drives the Audit Chain, and owns the SSO and design system that every other application inherits. Llama 3 served by Ollama runs in-situ on the local GPU — every prompt, retrieval and tool call is traced by Chain before it leaves the request boundary.",
  primaryColor: "navy",
  modules: [
    {
      code: "MOD-01",
      title: "Operator Chat",
      description:
        "Streaming chat surface with citations. Every response carries a Trace ID linking back to the prompts, resources and tools that produced it.",
    },
    {
      code: "MOD-02",
      title: "Audit Chain Motor",
      description:
        "Tamper-evident ledger that records every reasoning step. Signed, exportable, and replayable for regulators and internal auditors.",
    },
    {
      code: "MOD-03",
      title: "SSO & Identity",
      description:
        "OAuth 2.1 + OIDC with tenant-scoped JWTs. Sessions issued and revoked by Shield; Core never sees a raw password.",
    },
    {
      code: "MOD-04",
      title: "Design System",
      description:
        "A single typographic and component library inherited by every cognitive application — same look, same accessibility, same telemetry hooks.",
    },
  ],
  hooks: [
    {
      name: "useChatSession",
      signature: "useChatSession(opts: { tenantId: string }) => ChatSession",
      description:
        "Opens a streaming chat session against the local Llama 3 runtime, wires Trace IDs into every emitted message, and exposes the active SSO claims.",
    },
    {
      name: "useAuditTrace",
      signature: "useAuditTrace(traceId: string) => AuditTrace",
      description:
        "Loads a signed Chain trace by ID — prompts, retrievals, tool calls, and the operator action that initiated them.",
    },
    {
      name: "useDesignTokens",
      signature: "useDesignTokens() => Tokens",
      description:
        "Returns the live design-system tokens (typography, colors, spacing) so satellite UIs render consistently across Core, Vault, Hub and Nexus.",
    },
    {
      name: "useSsoClaims",
      signature: "useSsoClaims() => SsoClaims | null",
      description:
        "Reads the current tenant, role and scope set from the Shield-issued JWT without forcing a network round trip.",
    },
  ],
  integrationExample: {
    lang: "ts",
    code: `// Embed the Core chat surface inside a tenant app
import { CoreChat, useChatSession } from "@cognitivserver/core";

export function OperatorConsole({ tenantId }: { tenantId: string }) {
  const session = useChatSession({ tenantId });
  
  return (
    <CoreChat
      session={session}
      runtime="ollama:llama3"
      onTrace={(traceId) => console.log("Chain trace:", traceId)}
    />
  );
}`,
  },
  relatedApps: ["vault", "hub", "nexus"],
};

const vault: AppConfig = {
  slug: "vault",
  name: "Vault",
  tagline: "APP · 02 — THE SOVEREIGN DATA SPACE",
  title: "Vault — the sovereign data space.",
  subtitle:
    "Vault is the cognitive server's memory under European jurisdiction. A Vector Data Space built on Qdrant, with every asset sealed by an HMAC SHA-256 fingerprint and surfaced through a Compute-to-Data execution boundary. Skills, regulatory texts, embeddings and generated artefacts live inside the perimeter — Vault returns the answer, never the raw bytes. Aligned with GAIA-X and Pontus-X federation contracts so that what stays sovereign on the appliance can still be discovered, attested and exchanged across trusted European nodes.",
  primaryColor: "gold",
  modules: [
    {
      code: "MOD-01",
      title: "Sovereign Vector Vault",
      description:
        "Qdrant-backed vector store with HMAC SHA-256 integrity on every asset, residency tags, GAIA-X compliance classification and a single-click \"save to vault\" path from any cognitive application.",
    },
    {
      code: "MOD-02",
      title: "Compute-to-Data Boundary",
      description:
        "Skills execute against tenant data inside the Vault perimeter. Only the signed result leaves — raw rows, prompts and embeddings remain sovereign. Each execution emits a Chain receipt with input fingerprint and output hash.",
    },
    {
      code: "MOD-03",
      title: "Artefact Engine",
      description:
        "Generates Word, Excel and PDF deliverables from Vault assets and writes them back as signed artefacts. Every artefact carries provenance metadata, the skill identifier, the operator's tenant JWT and the originating Chain trace.",
    },
    {
      code: "MOD-04",
      title: "Sovereign Notifications",
      description:
        "Tenant-aware notification stream for vault events: integrity failures, residency violations, artefact completions, federation handshake outcomes. Persistent for criticals, auto-dismiss for transient signals.",
    },
  ],
  hooks: [
    {
      name: "useSovereignVault",
      signature:
        "useSovereignVault(tenantId: string) => { assets, save, verify, classification }",
      description:
        "CRUD surface over the tenant's vector vault with HMAC verification on every read. Returns assets, residency classification and a save() that re-signs and re-indexes in one call.",
    },
    {
      name: "useComputeToData",
      signature:
        "useComputeToData(skillId: string) => { run, lastReceipt, status }",
      description:
        "Executes a Vault skill against tenant data without exporting it. Returns only the signed result and a Chain receipt; the underlying bytes never cross the Vault boundary.",
    },
    {
      name: "useArtefactEngine",
      signature:
        "useArtefactEngine() => { generate, list, sign, exportTo(format) }",
      description:
        "Builds Word, Excel or PDF artefacts from Vault assets, signs them with the tenant key, and routes downloads through the Shield-enforced perimeter.",
    },
    {
      name: "useSovereignNotifications",
      signature:
        "useSovereignNotifications() => { stream, dismiss, persistCritical }",
      description:
        "Subscribes to the tenant-scoped Vault notification stream. Critical events stay until acknowledged; routine signals auto-dismiss after their lifetime expires.",
    },
  ],
  integrationExample: {
    lang: "ts",
    code: `// Run a regulatory diff skill against tenant policy assets without exporting them
import {
  useSovereignVault,
  useComputeToData,
} from "@cognitivserver/vault";

export function PolicyDiffPanel({ tenantId }: { tenantId: string }) {
  const { assets } = useSovereignVault(tenantId);
  const { run, lastReceipt } = useComputeToData("regulatory_diff_v2");

  async function compare(assetId: string) {
    // Raw policy bytes never leave Vault. Only the signed diff is returned.
    const result = await run({ assetId, regime: "NIS2" });
    console.log("Chain receipt:", lastReceipt?.traceId);
    return result;
  }

  return <PolicyDiffUI assets={assets} onCompare={compare} />;
}`,
  },
  relatedApps: ["core", "hub", "nexus"],
};

const hub: AppConfig = {
  slug: "hub",
  name: "Hub",
  tagline: "APP · 03 — THE SYSTEMS ATLAS",
  title: "Hub — the systems atlas.",
  subtitle:
    "Hub is where the cognitive server learns the operator's landscape. A live catalog of every connected ERP, CRM, MES, WMS and TMS, with a Fleet Manager that probes each connector continuously and an Ecosystem Dashboard that surfaces the entire posture in one screen. Built for the reality of European mid-market: SAP next to Odoo, Salesforce next to a homegrown WMS — all addressable through a single sovereign perimeter so Core can reason across them and Nexus can orchestrate them.",
  primaryColor: "coral",
  modules: [
    {
      code: "MOD-01",
      title: "System Catalog",
      description:
        "Curated, tenant-scoped catalog of enterprise systems — ERP (SAP, Oracle, Dynamics, Odoo), CRM (Salesforce, HubSpot), MES, WMS, TMS — with capability matrices, compatibility scores and integration recipes for each connector.",
    },
    {
      code: "MOD-02",
      title: "Discovery Panel",
      description:
        "Faceted search and filtering across the catalog by system type, industry, protocol, residency, and compatibility with the Cognitive Server. Results feed straight into Fleet Manager onboarding.",
    },
    {
      code: "MOD-03",
      title: "Fleet Manager",
      description:
        "Continuous health checks across every registered connector — endpoint ping, auth refresh, schema drift detection, version probe. Shows uptime, latency and the last successful exchange per system.",
    },
    {
      code: "MOD-04",
      title: "Ecosystem Dashboard",
      description:
        "Single-pane view of the four cognitive applications and every external system in the fleet. Surfaces realtime events from Bridge, the global Chain stream, and a Shield posture indicator at the perimeter of each connector.",
    },
  ],
  hooks: [
    {
      name: "useSystemCatalog",
      signature:
        "useSystemCatalog(filters?: CatalogFilters) => { systems, register, score }",
      description:
        "Reads the tenant-scoped catalog of enterprise systems. Returns capability metadata, compatibility scores and a register() that adds a new system to the fleet through a typed adapter manifest.",
    },
    {
      name: "useFleetHealth",
      signature:
        "useFleetHealth() => { fleet, refresh, lastProbe(systemId) }",
      description:
        "Subscribes to the continuous Fleet Manager probe. Exposes uptime, latency, auth status and the last successful exchange for every connector in the tenant's fleet.",
    },
    {
      name: "useEcosystemDashboard",
      signature: "useEcosystemDashboard() => { apps, events, posture }",
      description:
        "Aggregates app-level state for Core, Vault, Hub and Nexus, the recent Bridge event stream, and the Shield posture score. Drives the cross-app dashboard surface.",
    },
    {
      name: "useDiscovery",
      signature:
        "useDiscovery(query: string, facets?: Facets) => { results, suggest }",
      description:
        "Faceted discovery across the System Catalog. Returns typed system records and an LLM-assisted suggest() that recommends next-best connectors given the current fleet.",
    },
  ],
  integrationExample: {
    lang: "ts",
    code: `// Register an Odoo ERP connector and watch it appear in the Fleet
import {
  useSystemCatalog,
  useFleetHealth,
} from "@cognitivserver/hub";

export function OnboardOdooPanel({ tenantId }: { tenantId: string }) {
  const { register } = useSystemCatalog();
  const { fleet, refresh } = useFleetHealth();

  async function onboard() {
    await register({
      tenantId,
      kind: "erp.odoo",
      endpoint: "https://erp.tenant.local",
      auth: { scheme: "oauth2.1", scopes: ["read:partners"] },
    });
    await refresh();
  }

  return <FleetGrid fleet={fleet} onAdd={onboard} />;
}`,
  },
  relatedApps: ["core", "vault", "nexus"],
};

const nexus: AppConfig = {
  slug: "nexus",
  name: "Nexus",
  tagline: "APP · 04 — THE ORCHESTRATOR",
  title: "Nexus — the orchestrator.",
  subtitle:
    "Nexus is the MCP Host of the cognitive server. It carries the approved Skill Catalog, four granular RBAC roles — admin, director, operator, viewer — and the compliance posture surface that turns every reasoning step into evidence. Bridge transports the JSON-RPC traffic, Shield evaluates the scope, Chain seals the result, and a Firebase mirror keeps the live posture visible across the operator's regulators, auditors and lines of business. Where Vault remembers and Hub connects, Nexus decides who is allowed to do what — and proves it.",
  primaryColor: "green",
  modules: [
    {
      code: "MOD-01",
      title: "MCP Host",
      description:
        "The sovereign Model Context Protocol host of the appliance. Routes every Tool, Resource and Prompt call through scope evaluation, tenant binding and Chain sealing before the model touches the result.",
    },
    {
      code: "MOD-02",
      title: "Skill Catalog",
      description:
        "Registry of approved, versioned skills — incident triage, conformity assessment, vendor due diligence, KPI extraction. Each skill is signed by Shield, replayable from Chain and graduates from experimental in Vault to corporate in Nexus.",
    },
    {
      code: "MOD-03",
      title: "RBAC & Compliance",
      description:
        "Four granular roles (admin, director, operator, viewer) with scope-by-scope policy bindings. Every ALLOWED and DENIED call is appended to the compliance log with regulator-aligned tags (NIS2, DORA, EU AI Act).",
    },
    {
      code: "MOD-04",
      title: "Firebase Posture Mirror",
      description:
        "Live, read-only mirror of the appliance's compliance posture into a Firebase project the operator owns. Multi-device dashboards, regulator views and incident channels — without a raw byte of operator data leaving the perimeter.",
    },
  ],
  hooks: [
    {
      name: "useMcpHost",
      signature:
        "useMcpHost() => { invokeTool, readResource, runPrompt, lastTrace }",
      description:
        "Programmatic surface for the sovereign MCP Host. Every call is scope-checked by Shield, signed by Chain, and returns alongside the trace identifier it generated.",
    },
    {
      name: "useSkillCatalog",
      signature:
        "useSkillCatalog(status?: SkillStatus) => { skills, promote, deprecate }",
      description:
        "Reads the approved Skill Catalog. promote() graduates an experimental skill from Vault into the corporate catalog after policy review; deprecate() retires one with a regulatory reason code.",
    },
    {
      name: "useRbac",
      signature:
        "useRbac() => { role, scopes, can(action), evaluateBatch(actions) }",
      description:
        "Reads the current operator's role and active scope set, and offers a can() predicate that mirrors the server-side policy without round-tripping for every UI decision.",
    },
    {
      name: "useComplianceLog",
      signature:
        "useComplianceLog(filters?: ComplianceFilters) => { entries, export, regulatorView }",
      description:
        "Streams ALLOWED/DENIED entries from the compliance ledger with regulator-aligned filtering (NIS2, DORA, EU AI Act). export() produces a signed, replayable evidence pack.",
    },
  ],
  integrationExample: {
    lang: "ts",
    code: `// Run an EU AI Act conformity assessment through the sovereign MCP host
import {
  useMcpHost,
  useRbac,
} from "@cognitivserver/nexus";

export function ConformityRunner({ systemId }: { systemId: string }) {
  const { runPrompt, lastTrace } = useMcpHost();
  const { can } = useRbac();

  async function run() {
    if (!can("compliance:run")) throw new Error("Scope denied by Shield");
    const result = await runPrompt({
      name: "ai_act_conformity",
      args: { systemId, regime: "EU_AI_ACT" },
    });
    // The Chain trace is the evidence — keep it next to the result.
    return { result, traceId: lastTrace?.id };
  }

  return <RunButton onRun={run} />;
}`,
  },
  relatedApps: ["core", "vault", "hub"],
};

export const apps: Record<AppSlug, AppConfig> = {
  core,
  vault,
  hub,
  nexus,
};
