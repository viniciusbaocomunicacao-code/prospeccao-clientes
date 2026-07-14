import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FeatureCard } from "@/components/FeatureCard";
import { CredentialBand } from "@/components/CredentialBand";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { home, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink pb-32 pt-20 text-paper md:pb-40 md:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/hero-home.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-35 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        </div>

        <Container className="relative z-[1]">
          <div className="hero-in">
            <Eyebrow tone="onDark">{home.eyebrow}</Eyebrow>
          </div>
          <h1 className="hero-in hero-in-delay-1 mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {home.headline[0]}
            <br />
            <span className="font-normal text-white/60">{home.headline[1]}</span>
          </h1>
          <p className="hero-in hero-in-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            {home.subhead}
          </p>
          <div className="hero-in hero-in-delay-3 mt-9">
            <WhatsAppLink message={site.whatsapp.message}>
              {home.cta}
            </WhatsAppLink>
          </div>
        </Container>
      </section>

      <Container className="relative z-10 -mt-16 md:-mt-20">
        <Reveal>
          <CredentialBand />
        </Reveal>
      </Container>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>{home.pillarsEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight leading-[1.1] md:text-4xl">
              {home.pillarsHeadline}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {home.pillars.map((pillar, index) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                delayMs={index * 60}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="grain relative overflow-hidden bg-graphite py-24 text-paper md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/resultados-janela.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.16] grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-graphite/85 to-graphite" />
        </div>
        <Container className="relative z-[1] flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow tone="onDark">{site.tagline}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight leading-[1.1] md:text-4xl">
              Pronto para levar sua empresa ao centro do mercado financeiro?
            </h2>
          </Reveal>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <WhatsAppLink message={site.whatsapp.message}>
              {home.cta}
            </WhatsAppLink>
            <Link
              href="/solucoes"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:border-white hover:bg-white/5"
            >
              Ver soluções
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
