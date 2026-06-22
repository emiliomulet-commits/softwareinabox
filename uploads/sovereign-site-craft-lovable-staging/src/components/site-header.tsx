import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "@/i18n/useLocale";

type NavLink = { href: string; label: string };
type NavGroup = { label: string; href: string; children: NavLink[] };
type NavItem = NavLink | NavGroup;

function isGroup(item: NavItem): item is NavGroup {
  return (item as NavGroup).children !== undefined;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useLocale();

  const nav: NavItem[] = [
    {
      label: t("nav.platform"),
      href: "/platform",
      children: [
        { href: "/platform", label: t("nav.overview") },
        { href: "/core", label: "Core · APP-01" },
        { href: "/vault", label: "Vault · APP-02" },
        { href: "/hub", label: "Hub · APP-03" },
        { href: "/nexus", label: "Nexus · APP-04" },
        { href: "/thesis/why-sovereign", label: t("nav.thesis") },
      ],
    },
    { href: "/architecture", label: t("nav.architecture") },
    { href: "/compliance", label: t("nav.compliance") },
    { href: "/use-cases", label: t("nav.useCases") },
    { href: "/resources", label: t("nav.resources") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-xl">
      <div className="container-1200 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="h-5 w-5 text-gold" />
          <span className="font-display text-[15px] tracking-tight text-navy">
            Cognitive Server
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label={t("nav.ariaLabel")}>
          {nav.map((item) =>
            isGroup(item) ? (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm transition-colors hover:text-navy ${
                    item.children.some((c) => isActive(c.href)) ? "text-navy font-medium" : "text-body-mid"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                <div
                  className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-opacity"
                >
                  <div className="min-w-[220px] border border-line bg-cream shadow-lg py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-white hover:text-navy ${
                          isActive(c.href) ? "text-navy font-medium" : "text-body-mid"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors hover:text-navy ${
                  isActive(item.href) ? "text-navy font-medium" : "text-body-mid"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5">
            <span aria-hidden="true" className="h-5 w-px bg-line" />
            <LanguageSwitcher />
          </div>
          <Link
            to="/contact"
            className="hidden md:inline text-sm text-body-mid hover:text-navy transition-colors"
          >
            {t("nav.signIn")}
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center text-navy"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-line bg-cream"
          aria-label="Mobile"
        >
          <div className="container-1200 py-4 flex flex-col">
            {nav.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="border-b border-line/60">
                  <p className="pt-3 pb-1 font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
                    {item.label}
                  </p>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-sm ${
                        isActive(c.href) ? "text-navy font-medium" : "text-body-mid"
                      }`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base border-b border-line/60 last:border-0 ${
                    isActive(item.href) ? "text-navy font-medium" : "text-body-mid"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex items-center justify-between">
              <LanguageSwitcher variant="pill" />
              <Link to="/contact" className="text-sm text-body-mid" onClick={() => setOpen(false)}>
                {t("nav.signIn")}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
