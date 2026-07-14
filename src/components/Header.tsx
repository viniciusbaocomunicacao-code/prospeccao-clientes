"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/content";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/logo-branco.png"
            alt={site.name}
            width={168}
            height={95}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-paper" : "text-white/55 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppLink message={site.whatsapp.message} size="sm">
            Fale com especialistas
          </WhatsAppLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 pb-6 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded px-2 py-3 text-sm ${
                pathname === item.href ? "text-paper" : "text-white/55"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3">
            <WhatsAppLink message={site.whatsapp.message}>Fale com especialistas</WhatsAppLink>
          </div>
        </nav>
      )}
    </header>
  );
}
