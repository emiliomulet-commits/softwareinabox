import { createFileRoute } from "@tanstack/react-router";
import { UseCasePage } from "@/components/use-cases/UseCasePage";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/use-cases/public-sector")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.publicSector.title") as string },
      { name: "description", content: i18n.t("seo.publicSector.description") as string },
      { property: "og:title", content: i18n.t("seo.publicSector.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.publicSector.ogDescription") as string },
      { property: "og:url", content: "/use-cases/public-sector" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases/public-sector" },
      ...hreflangLinks("/use-cases/public-sector"),
    ],
  }),
  component: () => <UseCasePage slug="public-sector" />,
});