import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/AppDetailPage";
import { apps } from "@/content/apps";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/vault")({
  head: () => ({
    meta: [
      { title: `${i18n.t("appsPage.items.vault.title")} · Cognitive Server` },
      { name: "description", content: i18n.t("appsPage.items.vault.subtitle") as string },
      { property: "og:title", content: `${i18n.t("appsPage.items.vault.name")} — Cognitive Server` },
      { property: "og:description", content: i18n.t("appsPage.items.vault.title") as string },
      { property: "og:url", content: "/vault" },
    ],
    links: [
      { rel: "canonical", href: "/vault" },
      ...hreflangLinks("/vault"),
    ],
  }),
  component: () => <AppDetailPage app={apps.vault} />,
});
