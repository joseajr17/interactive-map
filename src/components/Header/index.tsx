import Link from "next/link";

import MarkerIcon from "../../../public/marker-icon.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-between gap-4 bg-white px-4 py-4 shadow-md sm:flex-row sm:px-8 lg:px-16 fixed top-0 z-50">
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
          <span>Brasil Interativo</span>
        </Link>
      </h1>

      <nav className="flex items-center gap-4 sm:gap-6">
        <a
          href="#summary"
          className="text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          Resumo
        </a>

        <a
          href="#map"
          className="font-semibold text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          Mapa Interativo
        </a>

        <a
          href="#ai-br"
          className="text-slate-600 transition-colors duration-300 hover:text-blue-600"
        >
          IA no Brasil
        </a>
      </nav>
    </header>
  );
}
