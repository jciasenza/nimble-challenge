import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">
              Juan Carlos Iasenza
            </h2>
            <p className="text-sm text-gray-400">
              Desarrollador Frontend & Fullstack
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/jciasenza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/juan-carlos-iasenza-8119501a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:iasenzajuancarlos@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Juan Carlos Iasenza. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
