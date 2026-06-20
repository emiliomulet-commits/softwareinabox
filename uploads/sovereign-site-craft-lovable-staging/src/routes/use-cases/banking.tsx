import { createFileRoute } from "@tanstack/react-router";
import { UseCasePage } from "@/components/use-cases/UseCasePage";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";

export const Route = createFileRoute("/use-cases/banking")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.banking.title") as string },
      { name: "description", content: i18n.t("seo.banking.description") as string },
      { property: "og:title", content: i18n.t("seo.banking.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.banking.ogDescription") as string },
      { property: "og:url", content: "/use-cases/banking" },
    ],
    links: [
      { rel: "canonical", href: "/use-cases/banking" },
      ...hreflangLinks("/use-cases/banking"),
    ],
  }),
  component: () => <UseCasePage slug="banking" />,
});