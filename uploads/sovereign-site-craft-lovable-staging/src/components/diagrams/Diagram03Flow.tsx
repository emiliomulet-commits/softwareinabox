const steps = [
  { n: "01", title: "Operator", desc: "Natural language question via Core chat" },
  { n: "02", title: "Core", desc: "LLM parses intent + verifies SSO session" },
  { n: "03", title: "Shield", desc: "Validates JWT scope + Tenant-ID signature" },
  { n: "04", title: "Nexus", desc: "Selects MCP tools from approved catalog" },
  { n: "05", title: "Vault + Hub", desc: "Reads resources + executes tools" },
  { n: "06", title: "Core", desc: "LLM synthesises response with citations" },
];

export function Diagram03Flow() {
  const boxW = 180;
  const boxH = 130;
  const gap = 20;
  const startX = 120;
  const rowY = 230;
  const chainX = 120 + (boxW + gap) * 2.5 - boxW / 2; // center it
  const chainY = 460;
  return (
    <svg
      viewBox="0 0 1400 660"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      role="img"
      aria-label="End-to-end reasoning flow: operator question to auditable answer"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <title>End-to-end reasoning flow</title>
      <text x="700" y="32" textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="3">
        END-TO-END REASONING FLOW · OPERATOR QUESTION → AUDITABLE ANSWER
      </text>
      <defs>
        <marker id="goldArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#B7841F" />
        </marker>
      </defs>

      {steps.map((s, i) => {
        const x = startX + i * (boxW + gap);
        const cx = x + boxW / 2;
        const cy = rowY + boxH / 2;
        return (
          <g key={s.n}>
            <rect x={x} y={rowY} width={boxW} height={boxH} rx="10" fill="#0C2340" />
            <circle cx={x + 22} cy={rowY + 22} r="14" fill="#B7841F" />
            <text x={x + 22} y={rowY + 26} textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">{s.n}</text>
            <text x={x + boxW / 2} y={rowY + 65} textAnchor="middle" fill="#FFFFFF" fontFamily="'IBM Plex Serif', serif" fontSize="18" fontWeight="600">{s.title}</text>
            <foreignObject x={x + 12} y={rowY + 75} width={boxW - 24} height={boxH - 80}>
              <div style={{ color: "#FFFFFF", fontSize: "10.5px", fontFamily: "'IBM Plex Mono', monospace", textAlign: "center", lineHeight: 1.4, opacity: 0.9 }}>
                {s.desc}
              </div>
            </foreignObject>
            {i < steps.length - 1 && (
              <line x1={x + boxW} y1={rowY + boxH / 2} x2={x + boxW + gap} y2={rowY + boxH / 2} stroke="#B7841F" strokeWidth="2" markerEnd="url(#goldArrow)" />
            )}
            {/* dashed coral connector to chain */}
            <path d={`M ${cx} ${rowY + boxH} Q ${cx} ${(rowY + boxH + chainY) / 2 + 20} ${chainX + boxW / 2} ${chainY}`} stroke="#DC4842" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.55" />
          </g>
        );
      })}

      <text x="700" y="425" textAnchor="middle" fill="#DC4842" fontSize="13" fontStyle="italic" fontFamily="'IBM Plex Serif', serif">
        Every step emits a trace event consumed by Chain
      </text>

      <g>
        <rect x={chainX} y={chainY} width={boxW} height={boxH} rx="10" fill="#DC4842" />
        <circle cx={chainX + 22} cy={chainY + 22} r="14" fill="#FFFFFF" />
        <text x={chainX + 22} y={chainY + 26} textAnchor="middle" fill="#DC4842" fontSize="10" fontWeight="700">07</text>
        <text x={chainX + boxW / 2} y={chainY + 65} textAnchor="middle" fill="#FFFFFF" fontFamily="'IBM Plex Serif', serif" fontSize="18" fontWeight="600">Chain</text>
        <foreignObject x={chainX + 12} y={chainY + 75} width={boxW - 24} height={boxH - 80}>
          <div style={{ color: "#FFFFFF", fontSize: "10.5px", fontFamily: "'IBM Plex Mono', monospace", textAlign: "center", lineHeight: 1.4 }}>
            Trace ID recorded + immutable evidence
          </div>
        </foreignObject>
      </g>

      <text x="700" y="630" textAnchor="middle" fill="#4A4A4A" fontSize="11">
        Average latency end-to-end:{" "}
        <tspan fill="#0C2340" fontWeight="700">~1.2 s</tspan>
        {" · GPU inference local · "}
        <tspan fill="#0C2340" fontWeight="700">zero egress</tspan>
        {" from the perimeter"}
      </text>
    </svg>
  );
}
