import type { Metadata } from "next";
import { Inter, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Westlink Capital — Assessoria de Investimento para Empresas",
  description:
    "Conectando o Interior ao Centro do Mercado Financeiro. Assessoria de investimento credenciada à XP, especializada no atendimento a empresas em São José do Rio Preto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
