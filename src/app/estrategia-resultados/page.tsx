import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { estrategiaResultados, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Estratégia & Resultados — Westlink Capital",
  description: estrategiaResultados.estrategia.intro,
};

export default function EstrategiaResultadosPage() {
  const { estrategia, resultados } = estrategiaResultados;

  return (
    <>
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>{estrategia.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              {estrategia.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              {estrategia.intro}
            </p>
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden grayscale contrast-125">
            <Image
              src="/images/generated/estrategia-mapa.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 pb-20 pt-16 md:pb-28">
        <Container>
          <ProcessSteps steps={estrategia.steps} />
        </Container>
      </section>

      <section className="grain relative overflow-hidden bg-graphite py-20 text-paper md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/resultados-janela.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-20 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite via-graphite/90 to-graphite" />
        </div>
        <Container className="relative z-[1]">
          <SectionHeading
            eyebrow={resultados.eyebrow}
            headline={resultados.headline}
            intro={resultados.intro}
            tone="onDark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resultados.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                tone="dark"
                delayMs={index * 60}
              />
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-white/60">
            {resultados.closing}
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight leading-[1.15] md:text-3xl">
            Vamos estruturar o diagnóstico da sua empresa?
          </h2>
          <WhatsAppLink message={site.whatsapp.message} tone="onLight">
            Fale com especialistas
          </WhatsAppLink>
        </Reveal>
      </section>
    </>
  );
}
