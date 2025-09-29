import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Mapa Interativo",
  description: "Mapa Interativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body suppressHydrationWarning className={`flex flex-col gap-4`}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
