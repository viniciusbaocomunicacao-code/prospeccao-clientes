import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/images/brand/logo-branco.png"
            alt={site.name}
            width={168}
            height={95}
            className="mb-5 h-9 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            {site.tagline}.
          </p>
        </div>

        <div>
          <p className="label on-dark mb-4">Navegação</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/55 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label on-dark mb-4">Contato</p>
          <address className="space-y-1 text-sm not-italic text-white/55">
            {site.address.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <p className="mt-4 text-sm text-white/55">
            WhatsApp: <span className="text-paper">{site.whatsapp.display}</span>
          </p>
          <p className="mt-1 text-sm text-white/55">
            Ouvidoria XP: {site.ouvidoriaXP}
          </p>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-8">
        <p className="text-xs leading-relaxed text-white/35">
          {site.legal.disclaimer}
        </p>
        <p className="mt-4 text-xs text-white/30">
          © {year} — {site.name} — Todos os direitos reservados — CNPJ{" "}
          {site.legal.cnpj}
        </p>
      </Container>
    </footer>
  );
}
