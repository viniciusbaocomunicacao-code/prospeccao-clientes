import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { solucoes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções — Westlink Capital",
  description: solucoes.headline,
};

export default function SolucoesPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>{solucoes.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              {solucoes.headline}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow={solucoes.frentes.eyebrow}
            headline={solucoes.frentes.headline}
            intro={solucoes.frentes.intro}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solucoes.frentes.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delayMs={index * 60}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/solucoes-mesa.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-25 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/75" />
        </div>
        <Container className="relative z-[1]">
          <SectionHeading
            eyebrow={solucoes.financeiras.eyebrow}
            headline={solucoes.financeiras.headline}
            intro={solucoes.financeiras.intro}
            tone="onDark"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {solucoes.financeiras.items.map((item, index) => (
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
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight leading-[1.15] md:text-3xl">
            Qual dessas frentes faz mais sentido para o momento da sua empresa?
          </h2>
          <WhatsAppLink message={site.whatsapp.message} tone="onLight">
            Fale com especialistas
          </WhatsAppLink>
        </Reveal>
      </section>
    </>
  );
}
