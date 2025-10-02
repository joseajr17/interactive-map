import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
