import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/AppDetailPage";
import { apps } from "@/content/apps";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/nexus")({
  head: () => ({
    meta: [
      { title: `${i18n.t("appsPage.items.nexus.title")} · Cognitive Server` },
      { name: "description", content: i18n.t("appsPage.items.nexus.subtitle") as string },
      { property: "og:title", content: `${i18n.t("appsPage.items.nexus.name")} — Cognitive Server` },
      { property: "og:description", content: i18n.t("appsPage.items.nexus.title") as string },
      { property: "og:url", content: "/nexus" },
    ],
    links: [
      { rel: "canonical", href: "/nexus" },
      ...hreflangLinks("/nexus"),
    ],
  }),
  component: () => <AppDetailPage app={apps.nexus} />,
});
