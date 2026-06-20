import { createFileRoute } from "@tanstack/react-router";
import { UseCasePage } from "@/components/use-cases/UseCasePage";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/use-cases/healthcare")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.healthcare.title") as string },
      { name: "description", content: i18n.t("seo.healthcare.description") as string },
      { property: "og:title", content: i18n.t("seo.healthcare.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.healthcare.ogDescription") as string },
      { property: "og:url", content: "/use-cases/healthcare" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases/healthcare" },
      ...hreflangLinks("/use-cases/healthcare"),
    ],
  }),
  component: () => <UseCasePage slug="healthcare" />,
});