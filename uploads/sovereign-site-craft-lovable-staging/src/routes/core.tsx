import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/AppDetailPage";
import { apps } from "@/content/apps";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/core")({
  head: () => ({
    meta: [
      { title: `${i18n.t("appsPage.items.core.title")} · Cognitive Server` },
      { name: "description", content: i18n.t("appsPage.items.core.subtitle") as string },
      { property: "og:title", content: `${i18n.t("appsPage.items.core.name")} — Cognitive Server` },
      { property: "og:description", content: i18n.t("appsPage.items.core.title") as string },
      { property: "og:url", content: "/core" },
    ],
    links: [
      { rel: "canonical", href: "/core" },
      ...hreflangLinks("/core"),
    ],
  }),
  component: () => <AppDetailPage app={apps.core} />,
});
