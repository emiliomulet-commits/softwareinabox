export function FigCaption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-center font-mono uppercase mt-3"
      style={{
        color: "var(--gold)",
        letterSpacing: "0.15em",
        fontSize: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}
