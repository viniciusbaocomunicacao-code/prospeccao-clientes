import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { contato, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato — Westlink Capital",
  description: contato.intro,
};

const mapQuery = encodeURIComponent(`${site.address.lines.join(", ")}`);

export default function ContatoPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/contato-poltrona.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-30 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
        </div>
        <Reveal className="relative z-[1] mx-auto max-w-2xl px-6 md:px-10">
          <Eyebrow tone="onDark">{contato.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
            {contato.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            {contato.intro}
          </p>
          <div className="mt-8">
            <WhatsAppLink message={site.whatsapp.message}>
              Falar no WhatsApp
            </WhatsAppLink>
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2">
          <dl className="space-y-6">
            <div>
              <dt className="label">Endereço</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mist">
                {site.address.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="label">WhatsApp</dt>
              <dd className="mt-2 text-sm text-mist">{site.whatsapp.display}</dd>
            </div>
            <div>
              <dt className="label">Ouvidoria XP</dt>
              <dd className="mt-2 text-sm text-mist">{site.ouvidoriaXP}</dd>
            </div>
          </dl>

          <div className="h-80 overflow-hidden border border-ink/10 grayscale md:h-full md:min-h-[380px]">
            <iframe
              title="Localização da Westlink Capital"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
