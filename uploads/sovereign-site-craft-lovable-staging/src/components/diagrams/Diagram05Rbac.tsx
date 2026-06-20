const roles = [
  { name: "ecosystem_admin", fill: "#0C2340", text: "#FFFFFF" },
  { name: "app_admin", fill: "#1F3A66", text: "#FFFFFF" },
  { name: "director_area", fill: "#345379", text: "#FFFFFF" },
  { name: "operator", fill: "#B7841F", text: "#FFFFFF" },
  { name: "viewer", fill: "#F5E8C4", text: "#0C2340" },
];
const matrix = [
  { label: "read.dashboard", cells: [1, 1, 1, 1, 1] },
  { label: "invoke.skill", cells: [1, 1, 1, 1, 0] },
  { label: "approve.artefact", cells: [1, 1, 1, 0, 0] },
  { label: "configure.adapter", cells: [1, 1, 0, 0, 0] },
  { label: "manage.tenant", cells: [1, 0, 0, 0, 0] },
];
const colHeaders = ["ECO", "APP", "DIR", "OPE", "VIEW"];

export function Diagram05Rbac() {
  const roleX = 30;
  const roleY = 80;
  const roleH = 40;
  const roleGap = 14;
  const matrixX = 290;
  const matrixY = 80;
  const labelW = 220;
  const cellW = 90;
  const rowH = 40;
  return (
    <svg
      viewBox="0 0 1300 600"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
      role="img"
      aria-label="Shield role-based access matrix enforced perimetrally"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <title>Shield · Role-based access matrix</title>
      <text x="650" y="32" textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="3">
        SHIELD · ROLE-BASED ACCESS MATRIX · ENFORCED PERIMETRALLY
      </text>

      {/* role pills */}
      {roles.map((r, i) => {
        const y = roleY + i * (roleH + roleGap);
        return (
          <g key={r.name}>
            <rect x={roleX} y={y} width="200" height={roleH} rx="8" fill={r.fill} />
            <text x={roleX + 100} y={y + 25} textAnchor="middle" fill={r.text} fontSize="12" fontWeight="600">{r.name}</text>
          </g>
        );
      })}

      {/* matrix header */}
      <text x={matrixX} y={matrixY - 10} fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="2">PERMISSIONS PER ACTION</text>
      {colHeaders.map((h, i) => (
        <text key={h} x={matrixX + labelW + i * cellW + cellW / 2} y={matrixY - 10} textAnchor="middle" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="2">{h}</text>
      ))}

      {matrix.map((row, ri) => {
        const y = matrixY + ri * rowH;
        return (
          <g key={row.label}>
            <rect x={matrixX} y={y} width={labelW + cellW * 5} height={rowH} fill={ri % 2 === 0 ? "#FAFAF8" : "#FFFFFF"} />
            <text x={matrixX + 12} y={y + 25} fill="#0C2340" fontSize="12">{row.label}</text>
            {row.cells.map((v, ci) => {
              const cx = matrixX + labelW + ci * cellW + cellW / 2;
              const cy = y + rowH / 2;
              return v === 1 ? (
                <g key={ci}>
                  <circle cx={cx} cy={cy} r="12" fill="#2E7D4F" />
                  <path d={`M ${cx - 5} ${cy} L ${cx - 1} ${cy + 4} L ${cx + 6} ${cy - 4}`} stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              ) : (
                <circle key={ci} cx={cx} cy={cy} r="12" fill="#D5D5D2" />
              );
            })}
          </g>
        );
      })}

      {/* JWT card */}
      <g>
        <rect x="30" y="410" width="1240" height="170" rx="8" fill="#0C2340" />
        <text x="50" y="440" fill="#B7841F" fontSize="11" fontWeight="700" letterSpacing="2">EVERY REQUEST CARRIES A SIGNED JWT</text>
        {[
          `{ "sub": "user_8421", "tenant": "fundicion_benito", "role": "director_area:logistica",`,
          `  "scopes": ["read.dashboard", "invoke.skill", "approve.artefact"],`,
          `  "iat": 1737504000, "exp": 1737507600, "iss": "shield.cognitivserver" }`,
        ].map((l, i) => (
          <text key={i} x="50" y={470 + i * 22} fill="#FFFFFF" fontSize="11">{l}</text>
        ))}
      </g>
    </svg>
  );
}
