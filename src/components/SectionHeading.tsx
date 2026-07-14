import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  headline,
  intro,
  align = "left",
  tone = "onLight",
}: {
  eyebrow: string;
  headline: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "onLight" | "onDark";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
        {headline}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "onDark" ? "text-haze" : "text-mist"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
