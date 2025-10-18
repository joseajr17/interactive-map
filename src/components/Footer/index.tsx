import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiBrazil } from "react-icons/gi";

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center pb-5 text-center gap-2"
      data-test="footer-content"
    >
      <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-1">
        <span>Copyright &copy; {new Date().getFullYear()} -</span>
        <Link
          href="/"
          className="flex items-center gap-1 font-medium text-slate-800 hover:text-slate-800/80"
          data-test="footer-title"
        >
          Brasil Interativo <GiBrazil className="w-4 h-4" />
        </Link>
      </p>

      <div className="flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/joseajr17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition"
          data-test="github-link"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/joseantonio1712/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500  transition"
          data-test="linkedin-link"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=josejr017.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-500 transition"
          data-test="email-link"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </footer>
  );
}
