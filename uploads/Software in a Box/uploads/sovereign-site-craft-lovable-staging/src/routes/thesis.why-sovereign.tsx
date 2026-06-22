import { createFileRoute, Link } from "@tanstack/react-router";
import { Diagram04Topology } from "@/components/diagrams/Diagram04Topology";
import { FigCaption } from "@/components/diagrams/FigCaption";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/thesis/why-sovereign")({
  head: () => ({
    meta: [
      { title: i18n.t("thesis.meta.title") as string },
      { name: "description", content: i18n.t("thesis.meta.description") as string },
      { property: "og:title", content: i18n.t("thesis.meta.ogTitle") as string },
      { property: "og:description", content: i18n.t("thesis.meta.ogDescription") as string },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/thesis/why-sovereign" },
    ],
    links: [
      { rel: "canonical", href: "/thesis/why-sovereign" },
      ...hreflangLinks("/thesis/why-sovereign"),
    ],
  }),
  component: WhySovereign,
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 id={id} className="font-display text-[28px] leading-tight text-navy">
        {title}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-coral pl-6 font-display italic text-xl text-navy leading-snug">
      {children}
    </blockquote>
  );
}

function WhySovereign() {
  const { t } = useTranslation();
  return (
    <article
      className="section-cream"
      style={{ fontFamily: "'IBM Plex Serif', serif" }}
    >
      <div className="container-1200 pt-12 pb-24">
        {/* Header band */}
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
              {t("thesis.eyebrow")}
            </p>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-body-mute border border-line px-2.5 py-1">
              {t("thesis.readTime")}
            </span>
          </div>
          <h1 className="mt-8 font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-navy text-balance">
            {t("thesis.title")}
          </h1>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.12em] text-coral">
            {t("thesis.subtitle")}
          </p>
        </div>

        {/* Body */}
        <div
          className="mx-auto mt-14 max-w-[680px] text-navy"
          style={{ fontSize: "19px", lineHeight: 1.7 }}
        >
          <p>
            In June 2025, Microsoft revised the operational rules of its EU
            cloud regions. A capability called Flex Routing was introduced —
            quietly, in a release note — permitting EU customer workloads to
            be processed in US, Canadian, or Australian regions whenever
            European capacity tightened. The legal scaffolding around the
            change did not move: contracts still spoke of European
            data-residency. The system itself, however, no longer behaved
            that way.
          </p>

          <Section id="illusion" title="The illusion of contractual sovereignty">
            <p>
              For a decade, the European posture on data sovereignty has been
              fundamentally textual. We wrote it into Data Processing
              Agreements, into Standard Contractual Clauses, into Schrems II
              transfer impact assessments. We treated sovereignty as a
              property that could be guaranteed by language — by careful
              drafting, by negotiated clauses, by audit attestations.
            </p>
            <p>
              The March 2026 precedent has made that posture untenable. A
              clause that can be amended by the counterparty, at the
              counterparty's convenience, under foreign jurisdiction, is not
              a guarantee. It is a memorandum of present intent.
            </p>
            <Pull>
              A guarantee that can be revised unilaterally is, in operational
              terms, indistinguishable from no guarantee at all.
            </Pull>
          </Section>

          <Section id="topology" title="What topology means here">
            <p>
              Topology is the study of which properties survive deformation —
              which features of a system remain true regardless of how the
              surface is stretched, twisted, or relabelled. Applied to
              cognitive infrastructure, the question becomes: which
              properties of this system hold even if every contract is
              rewritten tomorrow?
            </p>
            <p>
              The answer is short. The properties that survive are the ones
              encoded in the wiring: where the silicon physically sits, where
              the inference physically runs, which keys physically exist on
              which machines, and which audit records physically accumulate
              under whose custody.
            </p>
          </Section>

          {/* Mid-essay diagram */}
          <figure className="not-prose my-16 -mx-4 sm:mx-0">
            <Diagram04Topology />
            <FigCaption>FIG. 04 · TOPOLOGY OF SOVEREIGNTY</FigCaption>
          </figure>

          <Section id="invariants" title="Five invariants of a sovereign cognitive system">
            <p>
              A cognitive system can claim sovereignty only if five
              invariants hold simultaneously. Each is a physical or
              cryptographic fact, not a contractual one.
            </p>
            <ol className="list-decimal pl-6 space-y-4 marker:font-mono marker:text-gold marker:text-sm">
              <li>
                <strong className="text-navy">Locality of inference.</strong>{" "}
                The model weights execute on hardware whose physical location
                is verifiable by the operator.
              </li>
              <li>
                <strong className="text-navy">Locality of state.</strong>{" "}
                Vectors, embeddings, and intermediate context never leave the
                perimeter — not for "telemetry", not for "model improvement",
                not for "support".
              </li>
              <li>
                <strong className="text-navy">Custody of keys.</strong>{" "}
                Signing and encryption keys are generated on, and never leave,
                hardware under the operator's physical control.
              </li>
              <li>
                <strong className="text-navy">Custody of audit.</strong>{" "}
                The tamper-evident record of every reasoning step is held by
                the operator and exportable to regulators on demand.
              </li>
              <li>
                <strong className="text-navy">Independence of runtime.</strong>{" "}
                The system continues to reason if the upstream vendor
                disappears, is acquired, or is enjoined by a foreign court.
              </li>
            </ol>
            <Pull>
              Sovereignty is the conjunction of five physical facts. Strike
              one and the property collapses.
            </Pull>
          </Section>

          <Section id="consequence" title="The contract layer is a consequence, not the cause">
            <p>
              Contracts are still necessary. They allocate liability, define
              service levels, and provide a forum for disputes. But they are
              downstream of architecture, not a substitute for it. A
              well-drafted DPA over a hyperscaler perimeter is a high-quality
              promise about a system that, structurally, cannot keep it.
            </p>
            <p>
              The Cognitive Server inverts the relationship. The system is
              sovereign by construction; the contract simply documents what
              the topology already enforces.
            </p>
          </Section>

          <Section id="conclusion" title="Conclusion — sovereignty is a property of the network">
            <p>
              When European industrial operators ask "is this AI sovereign?",
              they are asking a question about the wiring diagram, not the
              cover page. The answer is found by tracing the path of a
              single prompt: where it is read, where it is reasoned over,
              where its evidence is stored, and whose hands can interrupt
              the chain.
            </p>
            <p>
              If that path stays inside the operator's perimeter — verifiably,
              cryptographically, physically — the system is sovereign. If any
              link leaves, no contractual language can bring it back.
            </p>
          </Section>
        </div>
      </div>

      {/* Footer continue */}
      <div className="bg-navy relative">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
        <div className="container-1200 py-16 grid md:grid-cols-2 gap-8">
          <Link to="/architecture" className="group block">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">Continue reading →</p>
            <p className="mt-3 font-display text-2xl text-cream group-hover:text-gold transition-colors">
              The architecture that makes it true
            </p>
            <p className="mt-2 text-sm text-cream/70">MCP primitives, the stack, the reasoning flow.</p>
          </Link>
          <Link to="/compliance" className="group block">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">Continue reading →</p>
            <p className="mt-3 font-display text-2xl text-cream group-hover:text-gold transition-colors">
              The compliance evidence
            </p>
            <p className="mt-2 text-sm text-cream/70">ISO/IEC 27001:2022 mapping and the RBAC matrix.</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
