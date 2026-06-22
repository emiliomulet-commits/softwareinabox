import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/AppDetailPage";
import { apps } from "@/content/apps";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: `${i18n.t("appsPage.items.hub.title")} · Cognitive Server` },
      { name: "description", content: i18n.t("appsPage.items.hub.subtitle") as string },
      { property: "og:title", content: `${i18n.t("appsPage.items.hub.name")} — Cognitive Server` },
      { property: "og:description", content: i18n.t("appsPage.items.hub.title") as string },
      { property: "og:url", content: "/hub" },
    ],
    links: [
      { rel: "canonical", href: "/hub" },
      ...hreflangLinks("/hub"),
    ],
  }),
  component: () => <AppDetailPage app={apps.hub} />,
});
