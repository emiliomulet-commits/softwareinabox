import { motion, useReducedMotion } from "framer-motion";

type Props = {
  tint?: string;
  inputs?: string[];
  output?: string;
};

export function PerimeterDiagram({
  tint = "#102540",
  inputs = ["DATA", "QUERY"],
  output = "DECISION + AUDIT LOG",
}: Props) {
  const reduce = useReducedMotion();

  // Geometry
  const W = 640;
  const H = 420;
  const cx = W / 2;
  const cy = H / 2;
  const r = 150;

  const innerNodes = [
    { x: cx - 80, y: cy - 40, label: "INFERENCE" },
    { x: cx + 80, y: cy - 40, label: "ORCHESTRATOR" },
    { x: cx, y: cy + 60, label: "AUDIT LEDGER" },
  ];

  // Travel paths (inputs → inference → orchestrator → ledger → output)
  const travelPaths = [
    `M ${cx - r - 30} ${cy} L ${innerNodes[0].x} ${innerNodes[0].y}`,
    `M ${innerNodes[0].x} ${innerNodes[0].y} L ${innerNodes[1].x} ${innerNodes[1].y}`,
    `M ${innerNodes[1].x} ${innerNodes[1].y} L ${innerNodes[2].x} ${innerNodes[2].y}`,
    `M ${innerNodes[2].x} ${innerNodes[2].y} L ${cx + r + 30} ${cy}`,
  ];

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="No third-party egress perimeter diagram"
      >
        {/* Perimeter ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ opacity: 0.6 }}
          animate={reduce ? { opacity: 0.6 } : { opacity: [0.4, 0.8, 0.4] }}
          transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sector tint inner halo */}
        <circle cx={cx} cy={cy} r={r - 8} fill={tint} opacity="0.04" />

        {/* Inputs */}
        {inputs.map((label, i) => (
          <g key={label}>
            <rect
              x={20}
              y={cy - 18 + (i - (inputs.length - 1) / 2) * 60}
              width={110}
              height={36}
              fill="white"
              stroke="var(--line)"
            />
            <text
              x={75}
              y={cy + 4 + (i - (inputs.length - 1) / 2) * 60}
              textAnchor="middle"
              fontSize="10"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="0.15em"
              fill={tint}
            >
              {label}
            </text>
          </g>
        ))}

        {/* Inner travel paths */}
        {travelPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="var(--line)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Inner nodes */}
        {innerNodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="22" fill="white" stroke={tint} strokeWidth="1.2" />
            <text
              x={n.x}
              y={n.y + 38}
              textAnchor="middle"
              fontSize="9"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              letterSpacing="0.18em"
              fill="var(--body-mid)"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Output */}
        <g>
          <rect
            x={W - 180}
            y={cy - 18}
            width={160}
            height={36}
            fill={tint}
          />
          <text
            x={W - 100}
            y={cy + 4}
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            letterSpacing="0.15em"
            fill="var(--cream)"
          >
            {output}
          </text>
        </g>

        {/* Travelling dots */}
        {!reduce &&
          travelPaths.map((d, i) => (
            <motion.circle
              key={`dot-${i}`}
              r="3.5"
              fill="var(--gold)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6,
              }}
              style={{
                offsetPath: `path('${d}')`,
                // @ts-expect-error vendor
                WebkitOffsetPath: `path('${d}')`,
              }}
            />
          ))}

        {/* No egress markers */}
        <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="10" letterSpacing="0.2em" fill="var(--gold)">
          <text x={cx} y={cy - r - 18} textAnchor="middle">× NO THIRD-PARTY EGRESS</text>
          <text x={cx} y={cy + r + 30} textAnchor="middle" opacity="0.7">× NO THIRD-PARTY EGRESS</text>
        </g>
      </svg>

      <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-[var(--body-mute)]">
        Fig — Client perimeter · data never leaves
      </figcaption>
    </figure>
  );
}