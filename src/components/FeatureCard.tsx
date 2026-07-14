import { Icon, IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  tone = "light",
  delayMs = 0,
}: {
  icon?: IconName;
  title: string;
  subtitle?: string;
  description: string;
  tone?: "light" | "dark";
  delayMs?: number;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal
      delayMs={delayMs}
      className={`${isDark ? "grain" : "grain-light"} flex h-full flex-col border-t p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-white/20 bg-graphite text-paper hover:border-white/40"
          : "border-ink/15 bg-fog text-ink hover:border-ink/30"
      }`}
    >
      {icon && (
        <div
          className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full border ${
            isDark ? "border-white/20 text-paper" : "border-ink/20 text-ink"
          }`}
        >
          <Icon name={icon} className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      {subtitle && (
        <p
          className={`mt-1 font-mono text-[0.68rem] uppercase tracking-wide ${
            isDark ? "text-haze" : "text-mist"
          }`}
        >
          {subtitle}
        </p>
      )}
      <p
        className={`mt-3 text-sm leading-relaxed ${
          isDark ? "text-white/60" : "text-mist"
        }`}
      >
        {description}
      </p>
    </Reveal>
  );
}
