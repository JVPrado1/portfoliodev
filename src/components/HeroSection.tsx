import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: "url('/teste.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro para manter legibilidade */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden relative">
                <img
                  src="/perfil-joao.webp"
                  alt="João"
                  className="w-full h-full object-cover scale-100 transform translate-x-1 translate-y-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white mb-4"
          >
            Olá, me chamo{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              João!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 md:mb-12 mb-8 max-w-3xl mx-auto"
          >
            <p className="mb-1">
              Professor que virou dev (ou dev que nunca deixou de ser
              professor).
            </p>
            <p>Transformo ideias em código.</p>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-16 mb-8 w-full max-w-lg mx-auto sm:max-w-none"
          >
            <button
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 hover:scale-[1.02] max-w-[60vw]"
              onClick={() => {
                document
                  .querySelector("#projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Ver Meus Projetos</span>
            </button>
            <a
              href="/curriculo-joao.pdf"
              download="Currículo - João Victor Prado - Desenvolvedor Full Stack.pdf"
              className="w-full max-w-[60vw] sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-200 text-center cursor-pointer  flex items-center justify-center space-x-2 hover:scale-[1.02]"
            >
              <Download size={20} />
              <span>Baixar CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6 md:mb-16 mb-0"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/JVPrado1/",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jvprado1/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:jv_prado@outlook.com",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-200 cursor-pointer hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className=" flex-col items-center  hidden md:flex"
          >
            <div className="p-2 rounded-full border-2 border-white/30 animate-bounce">
              <ArrowDown className="text-white" size={20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
