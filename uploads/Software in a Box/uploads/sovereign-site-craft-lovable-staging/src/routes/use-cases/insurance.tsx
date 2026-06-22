import { createFileRoute } from "@tanstack/react-router";
import { UseCasePage } from "@/components/use-cases/UseCasePage";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/use-cases/insurance")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.insurance.title") as string },
      { name: "description", content: i18n.t("seo.insurance.description") as string },
      { property: "og:title", content: i18n.t("seo.insurance.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.insurance.ogDescription") as string },
      { property: "og:url", content: "/use-cases/insurance" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases/insurance" },
      ...hreflangLinks("/use-cases/insurance"),
    ],
  }),
  component: () => <UseCasePage slug="insurance" />,
});