import { site } from "@/lib/content";

function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm5.8 14.08c-.25.7-1.22 1.29-2 1.45-.55.11-1.26.2-3.67-.79-3.08-1.27-5.06-4.4-5.21-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.23 1.06-2.53.28-.3.6-.38.8-.38h.58c.19 0 .43-.07.68.52.25.6.86 2.1.94 2.25.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.07.18-.2.76-.87.96-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.35.07.13.07.72-.18 1.42Z" />
    </svg>
  );
}

export function WhatsAppLink({
  message,
  variant = "solid",
  tone = "onDark",
  size = "default",
  children,
  className = "",
}: {
  message: string;
  variant?: "solid" | "outline";
  tone?: "onDark" | "onLight";
  size?: "default" | "sm";
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full font-medium tracking-wide transition-[background-color,border-color,transform] duration-200 hover:scale-[1.03] active:scale-[0.98]";
  const sizes = size === "sm" ? "px-5 py-2.5 text-xs" : "px-7 py-3.5 text-sm";

  const onDarkSolid = "bg-paper text-ink hover:bg-white/85";
  const onLightSolid = "bg-ink text-paper hover:bg-ink/85";
  const onDarkOutline =
    "border border-white/30 text-paper hover:border-white hover:bg-white/5";
  const onLightOutline =
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5";

  const styles =
    variant === "solid"
      ? tone === "onDark"
        ? onDarkSolid
        : onLightSolid
      : tone === "onDark"
        ? onDarkOutline
        : onLightOutline;

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${styles} ${className}`}
    >
      {children}
      <WhatsAppIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref(site.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp com a ${site.name}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:bg-ink/85"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
