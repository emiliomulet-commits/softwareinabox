import { Link } from "@tanstack/react-router";

type Props = {
  useCode: string;
  sectorName: string;
  title: string;
  subtitle: string;
  chips: string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function UseCaseHero({
  useCode,
  sectorName,
  title,
  subtitle,
  chips,
  ctaPrimary,
  ctaSecondary,
}: Props) {
  return (
    <header
      className="section section-navy relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% 20%, rgba(183,132,31,0.22), transparent 55%)",
      }}
    >
      <div className="container-1200 py-20 lg:py-28 relative">
        <nav className="label-mono mb-8 text-[var(--gold)]">
          <Link to="/" className="hover:text-[var(--gold-light)]">Home</Link>
          <span className="mx-2 text-[var(--navy-2)]">/</span>
          <Link to="/use-cases" className="hover:text-[var(--gold-light)]">Use cases</Link>
          <span className="mx-2 text-[var(--navy-2)]">/</span>
          <span className="text-[var(--cream)]">{sectorName}</span>
        </nav>

        <div className="flex items-baseline gap-4 mb-6">
          <span className="label-mono text-[var(--gold)]">{useCode}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cream)]/60">
            · {sectorName}
          </span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-display tracking-tight text-balance max-w-4xl">
          {title}
        </h1>
        <p className="font-display italic text-xl lg:text-2xl text-[var(--gold-light)] mt-6 max-w-3xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-[var(--gold)] text-[var(--gold-light)] bg-[color-mix(in_oklab,var(--gold)_10%,transparent)]"
            >
              {c}
            </span>
          ))}
        </div>

        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-12 flex flex-wrap gap-4">
            {ctaPrimary && (
              <Link to={ctaPrimary.href} className="btn btn-primary">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.href} className="btn btn-on-navy">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}