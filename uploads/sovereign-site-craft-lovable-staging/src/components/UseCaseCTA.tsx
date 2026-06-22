import { Link } from "@tanstack/react-router";

export function UseCaseCTA() {
  return (
    <section
      className="section section-navy relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 80%, rgba(183,132,31,0.18), transparent 55%)",
      }}
    >
      <div className="container-1200 py-20 lg:py-28">
        <p className="label-mono text-[var(--gold)]">Next step</p>
        <h2 className="mt-4 text-4xl lg:text-5xl font-display tracking-tight max-w-3xl">
          Ver el Cognitive Server dentro de su perímetro.
        </h2>
        <p className="mt-6 max-w-2xl text-[var(--cream)]/75 leading-relaxed">
          Una demostración guiada de 45 minutos sobre su propio caso. Sin formularios
          intermediarios, sin datos enviados a terceros.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn btn-primary">
            Solicitar una demostración
          </Link>
          <Link to="/resources" className="btn btn-on-navy">
            Descargar el one-pager
          </Link>
        </div>
      </div>
    </section>
  );
}