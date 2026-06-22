export function ConcentricDots({ className }: { className?: string }) {
  // Decorative dotted concentric arcs, gold
  const rings = [60, 95, 130, 165, 200, 235, 270];
  return (
    <svg viewBox="0 0 320 320" className={className} aria-hidden="true" fill="none">
      <defs>
        <radialGradient id="cd-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      {rings.map((r) => {
        const count = Math.round((2 * Math.PI * r) / 9);
        return Array.from({ length: count }).map((_, i) => {
          const a = (i / count) * Math.PI * 2;
          const x = 160 + Math.cos(a) * r;
          const y = 160 + Math.sin(a) * r;
          return <circle key={`${r}-${i}`} cx={x} cy={y} r={1.2} fill="url(#cd-fade)" />;
        });
      })}
      <circle cx="160" cy="160" r="4" fill="currentColor" />
    </svg>
  );
}
