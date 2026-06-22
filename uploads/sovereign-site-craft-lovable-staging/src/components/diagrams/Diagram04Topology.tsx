import { useTranslation } from "react-i18next";

export function Diagram04Topology() {
  const { t } = useTranslation();
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      role="img"
      aria-label={t("home.svg.topologyAlt")}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <title>Sovereign by architecture, not by contract</title>
      <text x="600" y="32" textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="3">
        SOVEREIGN BY ARCHITECTURE · NOT BY CONTRACT
      </text>

      <line x1="600" y1="60" x2="600" y2="640" stroke="#D5D5D2" strokeWidth="1" />

      {/* LEFT */}
      <g>
        <text x="300" y="70" textAnchor="middle" fill="#2E7D4F" fontSize="11" fontWeight="700" letterSpacing="2">
          COGNITIVE SERVER · AIR-GAP VERIFIABLE
        </text>
        <rect x="60" y="90" width="500" height="480" rx="14" fill="none" stroke="#2E7D4F" strokeDasharray="5 4" />
        <text x="80" y="115" fill="#2E7D4F" fontSize="10" letterSpacing="2">CUSTOMER PHYSICAL PERIMETER</text>

        {/* main appliance card */}
        <rect x="90" y="135" width="440" height="200" rx="12" fill="#0C2340" />
        <text x="110" y="170" fill="#FFFFFF" fontFamily="'IBM Plex Serif', serif" fontSize="26" fontWeight="600">COGNITIVE SERVER</text>
        <text x="110" y="192" fill="#F5E8C4" fontSize="11" letterSpacing="1">Local appliance</text>
        <text x="110" y="220" fill="#B7841F" fontSize="11" letterSpacing="2" fontWeight="700">CORE · VAULT · HUB · NEXUS</text>
        <line x1="110" y1="232" x2="510" y2="232" stroke="#B7841F" strokeWidth="1" />
        <text x="110" y="258" fill="#FFFFFF" fontSize="12">Inference: in-situ on GPU</text>
        <text x="110" y="280" fill="#FFFFFF" fontSize="12">Storage: HMAC-verified VDS</text>
        <text x="110" y="302" fill="#FFFFFF" fontSize="12">Audit: cryptographic trace</text>

        {/* connector */}
        <circle cx="310" cy="345" r="5" fill="#B7841F" />
        <line x1="310" y1="345" x2="310" y2="420" stroke="#B7841F" strokeWidth="2" />
        <text x="320" y="385" fill="#9c7019" fontSize="9" letterSpacing="2">PHYSICAL CABLE · VERIFIABLE</text>

        <rect x="90" y="425" width="210" height="65" rx="10" fill="#FFFFFF" stroke="#0C2340" />
        <text x="105" y="450" fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="14" fontWeight="600">ERP / MES</text>
        <text x="105" y="472" fill="#4A4A4A" fontSize="10">on-site systems</text>

        <rect x="320" y="425" width="210" height="65" rx="10" fill="#FFFFFF" stroke="#0C2340" />
        <text x="335" y="450" fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="14" fontWeight="600">Operator UI</text>
        <text x="335" y="472" fill="#4A4A4A" fontSize="10">local network</text>

        <text x="300" y="555" textAnchor="middle" fill="#2E7D4F" fontSize="11" fontWeight="700" letterSpacing="2">
          ZERO EGRESS · GDPR · EU AI ACT
        </text>
      </g>

      {/* RIGHT */}
      <g>
        <text x="900" y="70" textAnchor="middle" fill="#DC4842" fontSize="11" fontWeight="700" letterSpacing="2">
          MICROSOFT COPILOT · CONTRACTUAL ONLY
        </text>

        <rect x="640" y="90" width="240" height="220" rx="14" fill="none" stroke="#DC4842" strokeDasharray="5 4" />
        <text x="655" y="115" fill="#DC4842" fontSize="10" letterSpacing="2">CUSTOMER PREMISES</text>

        <rect x="660" y="135" width="200" height="65" rx="10" fill="#FFFFFF" stroke="#DC4842" />
        <text x="675" y="160" fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="13" fontWeight="600">Microsoft 365</text>
        <text x="675" y="182" fill="#4A4A4A" fontSize="10">Office + Copilot</text>

        <rect x="660" y="215" width="200" height="65" rx="10" fill="#FFFFFF" stroke="#DC4842" />
        <text x="675" y="240" fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="13" fontWeight="600">User device</text>
        <text x="675" y="262" fill="#4A4A4A" fontSize="10">prompts & data</text>

        <text x="930" y="115" fill="#DC4842" fontSize="10" letterSpacing="2" fontWeight="700">EXTRA-TERRITORIAL PROCESSING</text>

        {[
          { y: 135, t: "EU Azure", s: "Azure West Europe" },
          { y: 215, t: "US East", s: "AWS · Anthropic (default)" },
          { y: 295, t: "Canada", s: "GCP · Flex Routing peak" },
          { y: 375, t: "Australia", s: "Flex Routing peak" },
        ].map((d, i) => (
          <g key={i}>
            <rect x="930" y={d.y} width="220" height="60" rx="10" fill="#F6E5E3" stroke="#DC4842" />
            <text x="945" y={d.y + 26} fill="#0C2340" fontFamily="'IBM Plex Serif', serif" fontSize="13" fontWeight="600">{d.t}</text>
            <text x="945" y={d.y + 46} fill="#4A4A4A" fontSize="10">{d.s}</text>
            <path d={`M 860 247 Q 895 ${(247 + d.y + 30) / 2} 930 ${d.y + 30}`} stroke="#DC4842" strokeDasharray="4 4" fill="none" opacity="0.6" />
          </g>
        ))}

        <text x="900" y="555" textAnchor="middle" fill="#DC4842" fontSize="10" fontWeight="700" letterSpacing="2">
          CONTRACTUAL GUARANTEE · CAN CHANGE UNILATERALLY · MARCH 2026 PRECEDENT
        </text>
      </g>

      <text x="600" y="660" textAnchor="middle" fill="#4A4A4A" fontSize="13" fontStyle="italic" fontFamily="'IBM Plex Serif', serif">
        The difference is not a feature. It is the topology of the system itself.
      </text>
    </svg>
  );
}
