import Link from "next/link";

import MarkerIcon from "../../../public/marker-icon.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-between gap-4 bg-white px-4 py-4 shadow-md sm:flex-row sm:px-8 lg:px-16">
      <h1 className="text-3xl font-extrabold text-slate-800">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src={MarkerIcon}
            alt="Ícone de um marcador no mapa"
            width={40}
            height={40}
          />
          <span>BRAZMAP</span>
        </Link>
      </h1>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/"
          className="text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          Sobre
        </Link>
        <Link
          href="/"
          className="text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          IA no Brasil
        </Link>
        <Link
          href="/"
          className="font-semibold text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          Mapa Interativo
        </Link>
        <Link
          href="/"
          className="text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
