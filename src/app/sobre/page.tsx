import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { sobre } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre — Westlink Capital",
  description: sobre.intro,
};

export default function SobrePage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>{sobre.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight leading-[1.05] md:text-5xl">
              {sobre.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              {sobre.intro}
            </p>
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden grayscale contrast-125">
            <Image
              src="/images/hero/escritorio-mood.jpeg"
              alt="Escritório da Westlink Capital"
              fill
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="max-w-3xl space-y-6">
          {sobre.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-mist">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="grain-light border-y border-ink/10 bg-fog py-20 md:py-28">
        <Container>
          <Eyebrow>{sobre.team.eyebrow}</Eyebrow>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sobre.team.members.map((member) => (
              <Reveal key={member.name}>
                <div className="relative aspect-[3/4] overflow-hidden grayscale">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {member.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-mist">
                  {member.role}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/sobre-mesa.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-30 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <Reveal className="relative z-[1] mx-auto max-w-2xl px-6 md:px-10">
          <Eyebrow tone="onDark">{sobre.purpose.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight leading-[1.1] md:text-4xl">
            {sobre.purpose.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {sobre.purpose.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-white/60">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow={sobre.concept.eyebrow}
            headline={sobre.concept.headline}
            intro={sobre.concept.intro}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sobre.concept.segments.map((segment, index) => (
              <FeatureCard
                key={segment.title}
                icon={segment.icon}
                title={segment.title}
                subtitle={segment.subtitle}
                description={segment.description}
                delayMs={index * 60}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
