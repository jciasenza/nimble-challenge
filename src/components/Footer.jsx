import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const whatsapp = "+5491158094982";

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

          <div className="flex gap-6 text-[22px]">
            <a
              className="hover:text-green-400 hover:scale-125 transition-all duration-300"
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/jciasenza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/juan-carlos-iasenza-8119501a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:iasenzajuancarlos@gmail.com"
              className="hover:text-red-400 hover:scale-125 transition-all duration-300"
            >
              <FaEnvelope />
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
