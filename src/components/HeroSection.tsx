import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Download,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-[60px] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative">
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Olá, me chamo{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              João!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Desenvolvedor Full Stack em constante evolução. Gosto de conhecer
            novas tecnologias e transformar ideias em aplicações funcionais!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full max-w-lg mx-auto sm:max-w-none"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
              onClick={() => {
                document
                  .querySelector("#projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Ver Meus Projetos</span>
            </motion.button>
            <motion.a
              href="/curriculo-joao.pdf"
              download="Currículo - João Victor Prado - Desenvolvedor Full Stack.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[60vw] sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-center cursor-pointer  flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Baixar CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-6 mb-16"
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
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border-2 border-white/30"
            >
              <ArrowDown className="text-white" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
