import { Reveal } from "@/components/Reveal";

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="grid gap-8 md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal
            delayMs={index * 70}
            className="relative border-t border-ink/15 pt-5"
          >
            <span className="font-mono text-xs tracking-widest text-mist">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
              {step.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {step.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
