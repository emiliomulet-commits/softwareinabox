const blocks = [
  { letter: "J", title: "Network Sovereignty", sub: "WireGuard VPN · Traefik TLS · GAIA-X / Pontus-X federation", phase: "91—100", layer: "NETWORK" },
  { letter: "I", title: "Auto-configuration", sub: "AI self-config · system discovery · health rebalancing", phase: "84—90", layer: "OPS" },
  { letter: "H", title: "Frontend & RBAC", sub: "React dashboard · 3D RBAC · admin panel", phase: "76—83", layer: "INTERFACE" },
  { letter: "G", title: "Skills & Artefacts", sub: "Catalog of skills v1.0 · Word/Excel/PDF generators", phase: "66—75", layer: "ACTIONS" },
  { letter: "F", title: "MCP Server", sub: "Proprietary MCP host · primitives · tool budgets", phase: "56—65", layer: "PROTOCOL" },
  { letter: "E", title: "Orchestration & Ingest", sub: "n8n · Odoo · Teams · WhatsApp · OCR pipeline", phase: "46—55", layer: "AUTOMATION" },
  { letter: "D", title: "Persistence", sub: "PostgreSQL uuid v7 · Qdrant vector · Redis · encrypted backup", phase: "36—45", layer: "STORAGE" },
  { letter: "C", title: "AI Stack Local", sub: "Ollama · Llama 3 · Mistral · Nomic embeddings · model router", phase: "26—35", layer: "COGNITION" },
  { letter: "B", title: "GPU & Container Runtime", sub: "NVIDIA / CUDA · Docker · persistent logging", phase: "16—25", layer: "COMPUTE" },
  { letter: "A", title: "Hardware Base", sub: "Dell / HPE / Lenovo / xFusion appliance · TPM 2.0 · Ubuntu 24.04 LTS · hardening", phase: "1—15", layer: "METAL" },
];

export function Diagram02Stack() {
  const startY = 60;
  const rowH = 60;
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      role="img"
      aria-label="The Cognitive Stack: ten blocks, one hundred phases, from metal to model"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <title>The Cognitive Stack</title>
      <text x="500" y="32" textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="3">
        THE COGNITIVE STACK · 10 BLOCKS · 100 PHASES · FROM METAL TO MODEL
      </text>

      {blocks.map((b, i) => {
        const y = startY + i * rowH;
        return (
          <g key={b.letter}>
            <text x="170" y={y + 30} textAnchor="end" fill="rgba(74,74,74,0.35)" fontSize="10" letterSpacing="2">{b.layer}</text>
            <rect x="180" y={y} width="760" height="50" rx="10" fill="#0C2340" />
            <circle cx="210" cy={y + 25} r="22" fill="#B7841F" />
            <text x="210" y={y + 32} textAnchor="middle" fill="#FFFFFF" fontFamily="'IBM Plex Serif', serif" fontSize="20" fontWeight="700">{b.letter}</text>
            <text x="250" y={y + 22} fill="#FFFFFF" fontFamily="'IBM Plex Serif', serif" fontSize="17" fontWeight="600">{b.title}</text>
            <text x="250" y={y + 40} fill="#FFFFFF" fontSize="10.5" opacity="0.85">{b.sub}</text>
            <text x="920" y={y + 30} textAnchor="end" fill="#B7841F" fontSize="11" fontWeight="600" letterSpacing="1">{b.phase}</text>
          </g>
        );
      })}

      {/* Built bottom-up arrow */}
      <line x1="960" y1={startY + 10} x2="960" y2={startY + blocks.length * rowH - 10} stroke="#B7841F" strokeWidth="2" markerEnd="url(#arrUp)" />
      <defs>
        <marker id="arrUp" viewBox="0 0 10 10" refX="5" refY="0" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,10 L5,0 L10,10 Z" fill="#B7841F" />
        </marker>
      </defs>
      <text transform={`translate(980 ${startY + (blocks.length * rowH) / 2}) rotate(90)`} textAnchor="middle" fill="#B7841F" fontSize="10" letterSpacing="3" fontWeight="700">
        BUILT BOTTOM-UP
      </text>
    </svg>
  );
}
