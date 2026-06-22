import { createFileRoute } from "@tanstack/react-router";
import { UseCasePage } from "@/components/use-cases/UseCasePage";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/use-cases/manufacturing")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.manufacturing.title") as string },
      { name: "description", content: i18n.t("seo.manufacturing.description") as string },
      { property: "og:title", content: i18n.t("seo.manufacturing.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.manufacturing.ogDescription") as string },
      { property: "og:url", content: "/use-cases/manufacturing" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases/manufacturing" },
      ...hreflangLinks("/use-cases/manufacturing"),
    ],
  }),
  component: () => <UseCasePage slug="manufacturing" />,
});