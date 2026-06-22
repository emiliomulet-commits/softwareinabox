import { useTranslation } from "react-i18next";

type SubItem = { labelKey: string; hash: string };
type Group = {
  titleKey: string;
  page: "architecture" | "multi-tenant" | "permissions" | "data-spaces";
  topLabelKey: string;
  topHref: string;
  items: SubItem[];
};

const GROUPS: Group[] = [
  {
    titleKey: "architecture.sidebar.mcp",
    page: "architecture",
    topLabelKey: "architecture.sidebar.topMcp",
    topHref: "/architecture",
    items: [
      { labelKey: "architecture.sidebar.itemHostClient", hash: "host-client-server" },
      { labelKey: "architecture.sidebar.itemPrimitives", hash: "primitives" },
      { labelKey: "architecture.sidebar.itemJsonrpc", hash: "jsonrpc" },
      { labelKey: "architecture.sidebar.itemLocalRemote", hash: "local-remote" },
    ],
  },
  {
    titleKey: "architecture.sidebar.multiTenant",
    page: "multi-tenant",
    topLabelKey: "architecture.sidebar.topMultiTenant",
    topHref: "/architecture/multi-tenant",
    items: [
      { labelKey: "architecture.sidebar.itemJwt", hash: "jwt" },
      { labelKey: "architecture.sidebar.itemIsolation", hash: "isolation" },
      { labelKey: "architecture.sidebar.itemDcr", hash: "dcr" },
    ],
  },
  {
    titleKey: "architecture.sidebar.permissions",
    page: "permissions",
    topLabelKey: "architecture.sidebar.topPermissions",
    topHref: "/architecture/permissions",
    items: [
      { labelKey: "architecture.sidebar.itemOauth", hash: "oauth" },
      { labelKey: "architecture.sidebar.itemScopes", hash: "scopes" },
      { labelKey: "architecture.sidebar.itemLp", hash: "lp" },
    ],
  },
  {
    titleKey: "architecture.sidebar.dataSpaces",
    page: "data-spaces",
    topLabelKey: "architecture.sidebar.topDataSpaces",
    topHref: "/architecture/data-spaces",
    items: [
      { labelKey: "architecture.sidebar.itemGaiaX", hash: "gaia-x" },
      { labelKey: "architecture.sidebar.itemIds", hash: "ids" },
    ],
  },
];

export type ArchitecturePage = Group["page"];

type Props = {
  activePage: ArchitecturePage;
  activeHash?: string;
};

function hrefFor(group: Group, hash: string, activePage: ArchitecturePage) {
  return group.page === activePage ? `#${hash}` : `${group.topHref}#${hash}`;
}

function SidebarList({ activePage, activeHash, mobile }: Props & { mobile?: boolean }) {
  const { t } = useTranslation();
  const labelCls = `font-mono text-[11px] tracking-[0.15em] uppercase text-gold ${mobile ? "mb-2" : "mb-3"}`;
  return (
    <>
      {GROUPS.map((group) => {
        const isActiveGroup = group.page === activePage;
        const topActive = isActiveGroup && !activeHash;
        return (
          <div key={group.titleKey}>
            <p className={labelCls}>{t(group.titleKey)}</p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={group.topHref}
                  className={`block py-1 text-sm transition-colors ${
                    topActive ? "text-navy font-medium" : "text-body-mid hover:text-navy"
                  }`}
                >
                  {t(group.topLabelKey)}
                </a>
              </li>
              <li>
                <ul className="space-y-1.5 border-l border-line">
                  {group.items.map((item) => {
                    const active = isActiveGroup && activeHash === item.hash;
                    return (
                      <li key={item.hash}>
                        <a
                          href={hrefFor(group, item.hash, activePage)}
                          className={`block pl-4 py-1 text-sm transition-colors ${
                            active
                              ? "text-navy font-medium border-l-2 border-gold -ml-px"
                              : "text-body-mid hover:text-navy"
                          }`}
                        >
                          {t(item.labelKey)}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export function ArchitectureSidebarMobile({ activePage, activeHash }: Props) {
  const { t } = useTranslation();
  return (
    <details className="lg:hidden border-b border-line py-4 group">
      <summary className="flex items-center justify-between cursor-pointer list-none font-mono text-[11px] tracking-[0.15em] uppercase text-gold">
        <span>{t("architecture.common.navTitle")}</span>
        <span className="text-navy text-base group-open:rotate-45 transition-transform">+</span>
      </summary>
      <nav className="mt-4 space-y-6" aria-label={t("architecture.common.ariaSidebarMobile")}>
        <SidebarList activePage={activePage} activeHash={activeHash} mobile />
      </nav>
    </details>
  );
}

export function ArchitectureSidebarDesktop({ activePage, activeHash }: Props) {
  const { t } = useTranslation();
  return (
    <aside className="hidden lg:block col-span-3 xl:col-span-3 border-r border-line" aria-label={t("architecture.common.ariaSidebar")}>
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-10 pr-6 w-[240px]">
        <nav className="space-y-8">
          <SidebarList activePage={activePage} activeHash={activeHash} />
        </nav>
      </div>
    </aside>
  );
}