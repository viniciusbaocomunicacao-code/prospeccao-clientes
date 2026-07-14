export function Eyebrow({
  children,
  tone = "onLight",
}: {
  children: string;
  tone?: "onLight" | "onDark";
}) {
  return (
    <span className={`label ${tone === "onDark" ? "on-dark" : ""}`}>
      <span>{children}</span>
    </span>
  );
}
