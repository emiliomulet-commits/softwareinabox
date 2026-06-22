import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@/i18n/config";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-mono">{t("notFound.eyebrow")}</p>
        <h1 className="mt-4 text-5xl font-display text-foreground">{t("notFound.title")}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{t("notFound.subtitle")}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 border border-rule bg-surface px-5 py-2.5 text-sm text-foreground transition-colors hover:border-signal hover:text-signal"
        >
          {t("notFound.cta")}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-mono">System fault</p>
        <h1 className="mt-4 text-3xl font-display text-foreground">This page failed to render.</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 border border-rule bg-surface px-5 py-2.5 text-sm hover:border-signal hover:text-signal"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cognitive Server — Sovereign cognitive infrastructure for European industry" },
      { name: "description", content: "Cognitive Server operates sovereign AI compute and reasoning infrastructure for European industrial, energy, and defense operators." },
      { property: "og:site_name", content: "Cognitive Server" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Cognitive Server — Sovereign cognitive infrastructure for European industry" },
      { name: "twitter:title", content: "Cognitive Server — Sovereign cognitive infrastructure for European industry" },
      { property: "og:description", content: "Cognitive Server operates sovereign AI compute and reasoning infrastructure for European industrial, energy, and defense operators." },
      { name: "twitter:description", content: "Cognitive Server operates sovereign AI compute and reasoning infrastructure for European industrial, energy, and defense operators." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/27440560-3ff1-4d12-9232-1f001651124a/id-preview-be9f3315--5cb619d9-a1c0-427a-aa53-1a8b6eae27c6.lovable.app-1779407037356.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/27440560-3ff1-4d12-9232-1f001651124a/id-preview-be9f3315--5cb619d9-a1c0-427a-aa53-1a8b6eae27c6.lovable.app-1779407037356.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Cognitive Server",
        url: "https://www.cognitivserver.com",
        description: "Sovereign cognitive infrastructure for European industry.",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { i18n } = useTranslation();
  useEffect(() => {
    const apply = (lng: string) => {
      if (typeof document !== "undefined") {
        document.documentElement.lang = (lng || "en").slice(0, 2);
      }
    };
    apply(i18n.resolvedLanguage || i18n.language);
    i18n.on("languageChanged", apply);
    return () => {
      i18n.off("languageChanged", apply);
    };
  }, [i18n]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
