type Props = {
  perimeterLabel?: string;
  inputs?: string[];
  output?: string;
};

export function PerimeterDiagram({
  perimeterLabel = "CLIENT PERIMETER",
  inputs = ["DATA IN"],
  output = "DECISION + AUDIT LOG",
}: Props) {
  return (
    <figure className="bg-white border border-[var(--line)] p-8 lg:p-12">
      <svg
        viewBox="0 0 800 360"
        className="w-full h-auto"
        role="img"
        aria-label={`${perimeterLabel} — data does not leave the perimeter`}
      >
        {/* Perimeter ring */}
        <rect
          x="20"
          y="20"
          width="760"
          height="320"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text
          x="40"
          y="44"
          fill="var(--gold)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="2"
        >
          {perimeterLabel}
        </text>

        {/* Inputs (left) */}
        {inputs.map((label, i) => {
          const total = inputs.length;
          const spacing = 220 / Math.max(total, 1);
          const y = 110 + i * spacing - ((total - 1) * spacing) / 2;
          return (
            <g key={label}>
              <rect
                x="60"
                y={y - 22}
                width="180"
                height="44"
                fill="var(--blue-soft)"
                stroke="var(--navy)"
                strokeWidth="1"
              />
              <text
                x="150"
                y={y + 5}
                textAnchor="middle"
                fill="var(--navy)"
                fontFamily="var(--font-mono)"
                fontSize="11"
                letterSpacing="1.5"
              >
                {label.toUpperCase()}
              </text>
              <line
                x1="240"
                y1={y}
                x2="310"
                y2="180"
                stroke="var(--navy)"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {/* Cognitive Server (center) */}
        <rect
          x="310"
          y="130"
          width="180"
          height="100"
          fill="var(--navy)"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />
        <text
          x="400"
          y="170"
          textAnchor="middle"
          fill="var(--gold)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="2"
        >
          COGNITIVE
        </text>
        <text
          x="400"
          y="188"
          textAnchor="middle"
          fill="var(--cream)"
          fontFamily="var(--font-display)"
          fontSize="20"
        >
          Server
        </text>
        <text
          x="400"
          y="212"
          textAnchor="middle"
          fill="var(--cream)"
          opacity="0.6"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="1.5"
        >
          ON-PREM · LENOVO
        </text>

        {/* Arrow to output */}
        <line
          x1="490"
          y1="180"
          x2="560"
          y2="180"
          stroke="var(--navy)"
          strokeWidth="1.5"
        />
        <polygon
          points="560,175 570,180 560,185"
          fill="var(--navy)"
        />

        {/* Output */}
        <rect
          x="570"
          y="150"
          width="180"
          height="60"
          fill="white"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />
        <text
          x="660"
          y="178"
          textAnchor="middle"
          fill="var(--navy)"
          fontFamily="var(--font-display)"
          fontSize="13"
        >
          {output.split(" + ")[0]}
        </text>
        <text
          x="660"
          y="196"
          textAnchor="middle"
          fill="var(--gold)"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="1.5"
        >
          + {(output.split(" + ")[1] ?? "AUDIT LOG").toUpperCase()}
        </text>

        {/* No-egress marker */}
        <text
          x="760"
          y="324"
          textAnchor="end"
          fill="var(--coral)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="2"
        >
          ✗ NO THIRD-PARTY EGRESS
        </text>
      </svg>
      <figcaption
        className="text-center font-mono uppercase mt-4"
        style={{
          color: "var(--gold)",
          letterSpacing: "0.15em",
          fontSize: "0.75rem",
        }}
      >
        FIG · DATA STAYS INSIDE THE {perimeterLabel}
      </figcaption>
    </figure>
  );
}