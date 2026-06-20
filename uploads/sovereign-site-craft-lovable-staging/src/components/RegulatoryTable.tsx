export type RegulatoryRow = {
  norm: string;
  requires: string;
  response: string;
};

export function RegulatoryTable({ rows }: { rows: RegulatoryRow[] }) {
  return (
    <div className="overflow-x-auto bg-white border border-[var(--line)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--navy)] text-[var(--cream)]">
            {["Norma", "Qué exige", "Cómo responde Cognitive Server"].map((h) => (
              <th
                key={h}
                className="text-left font-mono uppercase tracking-wider text-xs px-5 py-4 border-b border-[var(--navy-2)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.norm}
              className="border-b border-[var(--line)] last:border-0 hover:bg-[var(--cream)] align-top"
            >
              <td className="px-5 py-5 min-w-[160px]">
                <span className="font-mono text-xs text-[var(--gold)] uppercase tracking-wider">
                  {r.norm}
                </span>
              </td>
              <td className="px-5 py-5 text-[var(--body-dark)] font-display min-w-[280px]">
                {r.requires}
              </td>
              <td className="px-5 py-5 text-[var(--body-mid)] leading-relaxed min-w-[320px]">
                {r.response}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}