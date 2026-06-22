import { createFileRoute, Link } from "@tanstack/react-router";
import { ConcentricDots } from "@/components/concentric-dots";
import { Diagram01Ecosystem } from "@/components/diagrams/Diagram01Ecosystem";
import { Diagram04Topology } from "@/components/diagrams/Diagram04Topology";
import { FigCaption } from "@/components/diagrams/FigCaption";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("home.meta.title") as string },
      { name: "description", content: i18n.t("home.meta.description") as string },
      { property: "og:title", content: i18n.t("home.meta.ogTitle") as string },
      { property: "og:description", content: i18n.t("home.meta.ogDescription") as string },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      ...hreflangLinks("/"),
    ],
  }),
  component: Home,
});

type AppItem = { name: string; href: string; code: string; tagline: string; body: string; tags: string[] };
type FabricItem = { name: string; code: string; tagline: string; body: string };
type WhyItem = { tag: string; title: string; body: string };
type IndustryItem = { code: string; name: string; href: string; detail: string };
type RegEvent = { date: string; title: string; detail: string };
type Stat = { value: string; label: string };

const whyTagClass: Record<string, string> = {
  Hyperscalers: "text-coral bg-coral-soft",
  Hiperescala: "text-coral bg-coral-soft",
  Hiperescalas: "text-coral bg-coral-soft",
  Hyperscaler: "text-coral bg-coral-soft",
  "Frontier models": "text-body-mid bg-line",
  "Modelos frontera": "text-body-mid bg-line",
  "Modelli frontiera": "text-body-mid bg-line",
  "Modelos frontier": "text-body-mid bg-line",
  "Cognitive Server": "text-cream bg-navy",
};

function Home() {
  const { t } = useTranslation();
  const heroStats = t("home.hero.stats", { returnObjects: true }) as Stat[];
  const regClock = t("home.regClock", { returnObjects: true }) as RegEvent[];
  const apps = t("home.apps.items", { returnObjects: true }) as AppItem[];
  const fabricStrip = t("home.apps.fabricStrip", { returnObjects: true }) as string[];
  const fabric = t("home.fabric.items", { returnObjects: true }) as FabricItem[];
  const whyNow = t("home.whyNow.items", { returnObjects: true }) as WhyItem[];
  const industries = t("home.industries.items", { returnObjects: true }) as IndustryItem[];
  const cs = t;

  return (
    <>
      {/* HERO */}
      <section className="section section-navy relative overflow-hidden">
        <ConcentricDots className="absolute -top-20 -right-24 w-[520px] h-[520px] text-gold opacity-70 pointer-events-none" />
        <div className="container-1200 relative pt-24 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-4xl">
            <p className="label-mono">{cs("home.hero.eyebrow")}</p>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-tight text-balance">
              {cs("home.hero.headlineA")}<span className="text-gold italic">{cs("home.hero.headlineB")}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg lg:text-xl text-cream/80 leading-relaxed">
              {cs("home.hero.body")}
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link to="/thesis/why-sovereign" className="btn btn-primary">{cs("home.hero.ctaPrimary")}</Link>
              <a href="/architecture" className="btn btn-on-navy">{cs("home.hero.ctaSecondary")}</a>
            </div>
          </div>

          <div className="mt-20 border-t border-gold/60 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl lg:text-5xl text-gold">{s.value}</p>
                  <p className="mt-2 text-sm text-cream/70 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="section section-navy">
        <div className="container-1200 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-cream text-balance">
              {cs("home.videos.title")}
            </h2>
            <p className="mt-5 text-cream/75 leading-relaxed">
              {cs("home.videos.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
            {[
              { id: "17T-pe81J1-7nA6kieIPJPieZDPNMe49d", titleKey: "home.videos.v1.title", descKey: "home.videos.v1.desc" },
              { id: "1youoIE8hNu_rlS4I9hx0RFbk_AvAxk_Y", titleKey: "home.videos.v2.title", descKey: "home.videos.v2.desc" },
            ].map((v) => (
              <figure key={v.id}>
                <div
                  className="w-full overflow-hidden rounded-xl shadow-2xl shadow-black/40 ring-1 ring-gold/20 bg-navy-2"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <iframe
                    src={`https://drive.google.com/file/d/${v.id}/preview`}
                    title={cs(v.titleKey)}
                    allowFullScreen
                    className="w-full h-full block border-0"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-display text-xl text-cream">{cs(v.titleKey)}</h3>
                  <p className="mt-2 text-sm text-cream/70 leading-relaxed">{cs(v.descKey)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="section section-cream">
        <div className="container-1200 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="label-mono">{cs("home.thesis.eyebrow")}</p>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl leading-[1.1] tracking-tight text-balance">
                {cs("home.thesis.title")}
              </h2>
              <div className="mt-8 space-y-5 text-body-mid leading-relaxed max-w-xl">
                <p>{cs("home.thesis.p1")}</p>
                <p>
                  <span className="text-navy font-medium">{cs("home.thesis.p2a")}</span>
                  {cs("home.thesis.p2b")}
                  <span className="text-navy font-medium">{cs("home.thesis.p2c")}</span>
                  {cs("home.thesis.p2d")}
                </p>
                <p>{cs("home.thesis.p3")}</p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="card p-8 lg:p-10">
                <p className="label-mono">{cs("home.regClockTitle")}</p>
                <ol className="mt-8 space-y-6">
                  {regClock.map((e) => (
                    <li key={e.date} className="grid grid-cols-12 gap-4">
                      <span className="col-span-4 font-mono text-xs text-navy pt-1">{e.date}</span>
                      <div className="col-span-8 border-l border-line pl-4">
                        <p className="font-medium text-navy">{e.title}</p>
                        <p className="text-sm text-body-mid mt-1 leading-relaxed">{e.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TOPOLOGY DIAGRAM */}
      <section className="section section-cream">
        <div className="container-1200 pb-16 lg:pb-20">
          <figure>
            <Diagram04Topology />
            <FigCaption>{cs("home.topologyCaption")}</FigCaption>
          </figure>
          <div className="mt-4 text-center">
            <Link
              to="/thesis/why-sovereign"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold hover:text-navy transition-colors"
            >
              {cs("home.topologyLink")}
            </Link>
          </div>
        </div>
      </section>

      {/* FOUR APPS */}
      <section className="section section-white">
        <div className="container-1200 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="label-mono">{cs("home.apps.eyebrow")}</p>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-tight">
              {cs("home.apps.title")}
            </h2>
            <p className="mt-6 text-lg text-body-mid leading-relaxed">
              {cs("home.apps.body")}
            </p>
          </div>

          <figure className="mt-12">
            <Diagram01Ecosystem />
            <FigCaption>{cs("home.apps.ecosystemCaption")}</FigCaption>
          </figure>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {apps.map((a) => (
              <Link
                key={a.name}
                to={a.href as "/core" | "/vault" | "/hub" | "/nexus"}
                className="card card-accent p-9 pt-10 group block"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl tracking-tight">{a.name}</h3>
                  <span className="font-mono text-xs text-body-mute">{a.code}</span>
                </div>
                <p className="mt-2 font-display text-base italic text-gold">{a.tagline}</p>
                <p className="mt-5 text-body-mid leading-relaxed">{a.body}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] tracking-wider uppercase text-navy bg-blue-soft px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-8 btn-arrow">{cs("home.apps.openPrefix")} {a.name.toLowerCase()}</p>
              </Link>
            ))}
          </div>

          {/* Fabric strip */}
          <div className="mt-8 bg-navy text-cream px-6 py-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold whitespace-nowrap">
              {cs("footer.fabric")}
            </span>
            <div className="flex flex-wrap gap-2">
              {fabricStrip.map((p) => (
                <span key={p} className="font-mono text-[11px] tracking-wider uppercase text-cream border border-gold/50 px-3 py-1.5">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE FABRIC */}
      <section className="section section-navy">
        <div className="container-1200 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="label-mono">{cs("home.fabric.eyebrow")}</p>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-tight text-balance">
                {cs("home.fabric.titleA")}<span className="italic text-gold">{cs("home.fabric.titleB")}</span>
              </h2>
              <p className="mt-6 text-cream/75 leading-relaxed">{cs("home.fabric.body")}</p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-px bg-navy-2 border border-navy-2">
              {fabric.map((f) => (
                <div key={f.name} className="bg-navy p-7 relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-cream">{f.name}</h3>
                    <span className="font-mono text-[11px] text-cream/50">{f.code}</span>
                  </div>
                  <p className="mt-1 font-display italic text-gold text-sm">{f.tagline}</p>
                  <p className="mt-4 text-sm text-cream/75 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section section-cream">
        <div className="container-1200 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="label-mono">{cs("home.whyNow.eyebrow")}</p>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-tight text-balance">
              {cs("home.whyNow.title")}
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {whyNow.map((w) => (
              <div key={w.title} className="card p-8">
                <span className={`inline-block font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 ${whyTagClass[w.tag] ?? "text-body-mid bg-line"}`}>
                  {w.tag}
                </span>
                <h3 className="mt-5 font-display text-2xl">{w.title}</h3>
                <p className="mt-3 text-body-mid leading-relaxed text-sm">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section section-white">
        <div className="container-1200 py-24 lg:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="label-mono">{cs("home.industries.eyebrow")}</p>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-tight">
                {cs("home.industries.title")}
              </h2>
            </div>
            <a href="/use-cases" className="btn-arrow">{cs("home.industries.allLabel")}</a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-line border border-line">
            {industries.map((i) => (
              <a key={i.name} href={i.href} className="bg-white p-7 hover:bg-cream transition-colors group">
                <p className="font-mono text-xs text-gold">{i.code}</p>
                <h3 className="mt-3 font-display text-lg leading-tight">{i.name}</h3>
                <p className="mt-3 text-xs text-body-mid leading-relaxed">{i.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy">
        <div className="container-1200 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <p className="label-mono">{cs("home.contactSection.eyebrow")}</p>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-tight text-balance">
                {cs("home.contactSection.title")}
              </h2>
              <p className="mt-6 text-cream/75 leading-relaxed max-w-md">
                {cs("home.contactSection.body")}
              </p>
              <div className="mt-8 space-y-2 font-mono text-sm text-cream/80">
                <p><a href="mailto:victor.sanchez@cognitivserver.com" className="hover:text-gold transition-colors">{cs("home.contactSection.email")}</a></p>
                <p><a href="https://wa.me/34601398868" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">{cs("home.contactSection.phone")}</a></p>
                <p>{cs("home.contactSection.security")}</p>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-6 bg-navy-2 border border-gold/30 p-8 lg:p-10 space-y-5"
            >
              <NavyField label={cs("home.contactSection.formName")} name="name" />
              <NavyField label={cs("home.contactSection.formOrg")} name="org" />
              <NavyField label={cs("home.contactSection.formEmail")} name="email" type="email" />
              <div>
                <label className="label-mono block mb-2">{cs("home.contactSection.formBrief")}</label>
                <textarea
                  rows={4}
                  className="w-full bg-navy border border-gold/30 px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none resize-none"
                  placeholder={cs("home.contactSection.placeholder")}
                />
              </div>
              <button type="submit" className="btn btn-on-navy w-full">{cs("home.contactSection.submit")}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function NavyField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label-mono block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-navy border border-gold/30 px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
