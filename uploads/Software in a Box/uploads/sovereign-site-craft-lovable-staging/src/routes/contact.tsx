import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import i18n from "@/i18n/config";
import { useTranslation } from "react-i18next";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: i18n.t("contact.meta.title") as string },
      { name: "description", content: i18n.t("contact.meta.description") as string },
      { property: "og:title", content: i18n.t("contact.meta.ogTitle") as string },
      { property: "og:description", content: i18n.t("contact.meta.ogDescription") as string },
      { property: "og:url", content: "/contact" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
      ...hreflangLinks("/contact"),
    ],
  }),
  component: Contact,
});

type Office = {
  code: string;
  name: string;
  email?: string;
  whatsapp?: string;
  whatsappUrl?: string;
  whatsappLabel?: string;
  address?: string;
  registration?: string;
};

function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const offices = t("contact.offices", { returnObjects: true }) as Office[];
  const workloads = t("contact.form.workloads", { returnObjects: true }) as string[];

  return (
    <section>
      <div className="container-1200 pt-24 pb-32">
        <p className="label-mono">{t("contact.eyebrow")}</p>
        <h1 className="mt-6 font-display text-5xl lg:text-7xl tracking-tight max-w-3xl text-balance">
          {t("contact.titleA")}<span className="text-gold">{t("contact.titleB")}</span>{t("contact.titleC")}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-body-mid leading-relaxed">{t("contact.body")}</p>

        <div className="mt-20 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="border-2 border-green p-10 bg-white">
                <p className="label-mono !text-green">{t("contact.success.label")}</p>
                <h2 className="mt-4 font-display text-3xl">{t("contact.success.title")}</h2>
                <p className="mt-3 text-body-mid">{t("contact.success.body")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="border border-line bg-white p-8 lg:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t("contact.form.name")} name="name" required />
                  <Field label={t("contact.form.org")} name="org" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t("contact.form.email")} name="email" type="email" required />
                  <Field label={t("contact.form.jurisdiction")} name="jur" placeholder={t("contact.form.jurisdictionPlaceholder")} />
                </div>

                <div>
                  <label className="label-mono block mb-2">{t("contact.form.workloadClass")}</label>
                  <select aria-label={t("contact.form.workloadClass")} className="w-full bg-cream border border-line px-4 py-3 text-sm text-body-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                    {workloads.map((w) => (<option key={w}>{w}</option>))}
                  </select>
                </div>

                <div>
                  <label className="label-mono block mb-2">{t("contact.form.brief")}</label>
                  <textarea
                    aria-label={t("contact.form.brief")}
                    rows={6}
                    required
                    placeholder={t("contact.form.briefPlaceholder")}
                    className="w-full bg-cream border border-line px-4 py-3 text-sm text-body-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  {t("contact.form.submit")}
                </button>
                <p className="label-mono">{t("contact.form.security")}</p>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-10">
            {offices.map((o) => (
              <div key={o.name} className="border-l-2 border-gold pl-6">
                <p className="label-mono">{o.code}</p>
                <h3 className="mt-2 font-display text-2xl">{o.name}</h3>
                {o.address && (
                  <p className="mt-3 font-mono text-sm text-body-mid leading-relaxed">{o.address}</p>
                )}
                {o.registration && (
                  <p className="mt-2 font-mono text-xs text-body-mid">{o.registration}</p>
                )}
                {o.email && (
                  <p className="mt-3 font-mono text-sm text-navy">
                    <a href={`mailto:${o.email}`} className="hover:text-gold transition-colors">{o.email}</a>
                  </p>
                )}
                {o.whatsappUrl && (
                  <p className="font-mono text-sm text-navy">
                    <a
                      href={o.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                      aria-label={`${o.whatsappLabel}: ${o.whatsapp}`}
                    >
                      {o.whatsappLabel} · {o.whatsapp}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-mono block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-cream border border-line px-4 py-3 text-sm text-body-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
