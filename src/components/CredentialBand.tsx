import Image from "next/image";
import { Icon, IconName } from "@/components/Icon";

const credentials: { label: string; detail: string; icon: IconName }[] = [
  {
    icon: "building",
    label: "1º escritório",
    detail: "Credenciado XP com DNA PJ",
  },
  {
    icon: "shieldCheck",
    label: "CVM 178/23",
    detail: "Assessoria de Investimento registrada",
  },
  {
    icon: "link",
    label: "Parceria",
    detail: "XP Investimentos",
  },
  {
    icon: "mapPin",
    label: "São José do Rio Preto",
    detail: "Sede no Noroeste Paulista",
  },
];

export function CredentialBand() {
  return (
    <div className="grain relative grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden border border-white/10 bg-ink md:grid-cols-4 md:divide-y-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/hero-home.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.14] grayscale contrast-125"
        />
      </div>
      {credentials.map((item) => (
        <div
          key={item.label}
          className="relative z-[1] px-6 py-7 text-center md:text-left"
        >
          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-paper md:mx-0">
            <Icon name={item.icon} className="h-4 w-4" />
          </div>
          <p className="font-display text-lg font-semibold tracking-tight text-paper">
            {item.label}
          </p>
          <p className="mt-1 text-xs leading-snug text-haze">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
