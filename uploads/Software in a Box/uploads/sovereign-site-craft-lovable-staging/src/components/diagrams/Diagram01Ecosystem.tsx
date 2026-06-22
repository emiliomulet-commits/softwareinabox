import { useTranslation } from "react-i18next";

export function Diagram01Ecosystem() {
  const { t } = useTranslation();
  const cards = [
    { x: 75, y: 130, name: "Core", slug: "/core", tag: "The central node", lines: ["Chat · Audit Chain motor", "SSO · Design System", "Llama 3 + Ollama runtime"] },
    { x: 515, y: 130, name: "Vault", slug: "/vault", tag: "The sovereign data space", lines: ["Vector Data Space (VDS)", "Qdrant + HMAC SHA-256", "Compute-to-Data · Artefacts"] },
    { x: 75, y: 310, name: "Hub", slug: "/hub", tag: "The systems atlas", lines: ["ERP · CRM · MES · WMS catalog", "Fleet Manager + health checks", "Ecosystem Dashboard"] },
    { x: 515, y: 310, name: "Nexus", slug: "/nexus", tag: "The orchestrator", lines: ["MCP Host + skill catalog", "RBAC: 4 granular roles", "Compliance UI + Firebase"] },
  ];
  const centers = cards.map(c => ({ cx: c.x + 205, cy: c.y + 80 }));
  return (
    <svg
      viewBox="0 0 1000 580"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      role="img"
      aria-label={t("home.svg.ecosystemAlt")}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <title>The Cognitive Server ecosystem</title>
      <text x="500" y="32" textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="3">
        THE COGNITIVE SERVER ECOSYSTEM · ONE OPERATING SYSTEM · FOUR APPLICATIONS
      </text>

      <rect x="40" y="60" width="920" height="500" rx="22" fill="#0C2340" stroke="#B7841F" strokeDasharray="5 4" />
      <text x="60" y="90" fill="#B7841F" fontSize="10" letterSpacing="2">
        COGNITIVE SERVER · CERTIFIED APPLIANCE · CUSTOMER PERIMETER
      </text>

      {/* connectors between card centers - cross pattern */}
      {[[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]].map(([a,b], i) => (
        <line key={i} x1={centers[a].cx} y1={centers[a].cy} x2={centers[b].cx} y2={centers[b].cy} stroke="#DC4842" strokeWidth="1" opacity="0.5" />
      ))}

      {cards.map(c => (
        <g key={c.name}>
          <rect x={c.x} y={c.y} width="410" height="160" rx="14" fill="#FFFFFF" />
          <rect x={c.x} y={c.y} width="410" height="5" rx="2" fill="#B7841F" />
          <text x={c.x + 20} y={c.y + 40} fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="22" fontWeight="600">{c.name}</text>
          <text x={c.x + 390} y={c.y + 40} textAnchor="end" fill="#4A4A4A" fontSize="11">{c.slug}</text>
          <text x={c.x + 20} y={c.y + 62} fill="#4A4A4A" fontSize="11" fontStyle="italic" fontFamily="'IBM Plex Serif', serif">{c.tag}</text>
          {c.lines.map((l, i) => (
            <text key={i} x={c.x + 20} y={c.y + 92 + i * 20} fill="#0C2340" fontSize="12">{l}</text>
          ))}
        </g>
      ))}

      {/* fabric strip */}
      <rect x="75" y="495" width="850" height="50" rx="8" fill="#1F3A66" />
      <text x="90" y="525" fill="#F5E8C4" fontSize="11" fontWeight="700" letterSpacing="2">THE FABRIC</text>
      <text x="200" y="525" fontSize="11">
        <tspan fill="#FFFFFF" fontWeight="700">BRIDGE</tspan>
        <tspan fill="#F5E8C4"> · synchronises events  </tspan>
        <tspan fill="#FFFFFF" fontWeight="700">  SHIELD</tspan>
        <tspan fill="#F5E8C4"> · enforces RBAC perimeter  </tspan>
        <tspan fill="#FFFFFF" fontWeight="700">  CHAIN</tspan>
        <tspan fill="#F5E8C4"> · records immutable audit</tspan>
      </text>
    </svg>
  );
}
