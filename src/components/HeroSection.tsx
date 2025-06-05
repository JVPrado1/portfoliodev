import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Detectar Chrome Mobile especificamente
    const isChromeMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      const isChrome = /Chrome/i.test(userAgent) && !/Edg/i.test(userAgent);
      return isMobile && isChrome;
    };

    const fixViewportHeight = () => {
      if (sectionRef.current) {
        // Para todos os browsers: usar altura fixa calculada uma vez
        const realHeight = window.innerHeight;
        sectionRef.current.style.height = `${realHeight}px`;
        sectionRef.current.style.minHeight = `${realHeight}px`;

        // Para Chrome mobile: adicionar fallback estático
        if (isChromeMobile()) {
          // Se a altura calculada for muito pequena, usar altura mínima segura
          const safeHeight = Math.max(realHeight, 600); // Mínimo 600px
          sectionRef.current.style.height = `${safeHeight}px`;
          sectionRef.current.style.minHeight = `${safeHeight}px`;
        }
      }
    };

    // Chrome Mobile: força recálculo quando barra de endereço some/aparece
    const handleChromeViewportChange = () => {
      if (isChromeMobile()) {
        setTimeout(fixViewportHeight, 150);
        setTimeout(fixViewportHeight, 300);
      } else {
        setTimeout(fixViewportHeight, 100);
      }
    };

    // Força o cálculo após carregamento
    const handleLoad = () => {
      setTimeout(fixViewportHeight, 100);
      if (isChromeMobile()) {
        setTimeout(fixViewportHeight, 500);
        setTimeout(fixViewportHeight, 1000);
      }
    };

    // Função removida - não precisamos de listener de scroll

    // Visual Viewport API específica para Chrome
    const handleVisualViewport = () => {
      if (window.visualViewport) {
        const height = window.visualViewport.height;
        if (sectionRef.current) {
          sectionRef.current.style.height = `${height}px`;
        }
      }
    };

    // Event listeners
    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleChromeViewportChange);
    window.addEventListener("orientationchange", handleChromeViewportChange);

    // Visual Viewport API (crucial para Chrome mobile)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewport);
    }

    // Execução inicial
    fixViewportHeight();

    // Para Chrome mobile: adicionar classe CSS específica
    if (isChromeMobile() && sectionRef.current) {
      sectionRef.current.classList.add("chrome-mobile-fix");
    }

    // Para Chrome mobile: abordagem mais simples
    if (isChromeMobile()) {
      // Chrome mobile: menos tentativas, mais espaçadas
      setTimeout(fixViewportHeight, 100);
      setTimeout(fixViewportHeight, 500);
      setTimeout(fixViewportHeight, 1500);
    } else {
      setTimeout(fixViewportHeight, 50);
      setTimeout(fixViewportHeight, 200);
      setTimeout(fixViewportHeight, 1000);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleChromeViewportChange);
      window.removeEventListener(
        "orientationchange",
        handleChromeViewportChange
      );

      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          handleVisualViewport
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="w-full relative overflow-hidden grid grid-rows-[4rem_1fr]"
      style={{
        height: "100vh", // Fallback inicial
        backgroundImage: "url('/teste.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro para manter legibilidade */}
      <div className="absolute inset-0 bg-black/85 z-0 "></div>

      {/* Espaço para o header */}
      <div className="row-start-1"></div>

      {/* Conteúdo principal */}
      <div className="row-start-2 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
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
              {t("hero.greeting")}{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                {t("hero.name")}
              </span>
              !
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-2xl text-white md:mb-12 mb-8 max-w-3xl mx-auto"
            >
              <p className="mb-1">{t("hero.subtitle1")}</p>
              <p>{t("hero.subtitle2")}</p>
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
                <span>{t("hero.viewProjects")}</span>
              </button>
              <a
                href="/curriculo-joao.pdf"
                download="Currículo - João Victor Prado - Desenvolvedor Full Stack.pdf"
                className="w-full max-w-[60vw] sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-200 text-center cursor-pointer  flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <Download size={20} />
                <span>{t("hero.downloadCV")}</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-6 md:mb-16 mb-16"
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
                  icon: FaWhatsapp,
                  href: "https://wa.me/5514997295849",
                  label: "WhatsApp",
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
              className=" flex-col items-center  hidden md:flex "
            >
              <div className="p-2 rounded-full border-2 border-white/30 animate-bounce">
                <ArrowDown className="text-white" size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
