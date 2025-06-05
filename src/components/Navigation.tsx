import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Monitor,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para navegação com offset
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offset = 60; // 100px de offset para compensar o header
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { href: "#inicio", label: "Início", icon: Home },
    { href: "#sobre", label: "Sobre", icon: User },
    { href: "#habilidades", label: "Stack", icon: Code },
    { href: "#projetos", label: "Projetos", icon: Monitor },
    { href: "#experiencia", label: "Experiências", icon: Briefcase },
    { href: "#contato", label: "Contato", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              <img
                src="/prado-lettering.svg"
                alt="Logo João Victor Prado"
                className="h-35 w-auto text-white brightness-0 invert"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white/80 hover:text-white transition-all duration-200 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 hover:scale-105 transform cursor-pointer group"
                >
                  <item.icon
                    size={18}
                    className="group-hover:text-emerald-400 transition-colors duration-200"
                  />
                  <span className="group-hover:text-emerald-400 transition-colors duration-200">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 cursor-pointer relative z-[60]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Moved outside nav */}
      {isOpen && (
        <>
          {/* Full Screen Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-lg z-[55] md:hidden flex flex-col"
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-[70]">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center items-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="space-y-10 text-center w-full"
              >
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 + index * 0.05 }}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    className="block w-full text-white text-xl font-bold uppercase tracking-wider hover:text-emerald-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ touchAction: "manipulation" }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Separator */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="mx-8 my-8"
                >
                  <hr className="border-emerald-400 border-t-2" />
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4"
                >
                  <div className="flex justify-center space-x-8">
                    <a
                      href="https://github.com/JVPrado1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jvprado1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:jv_prado@outlook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.296l9.615-6.475h.749A1.636 1.636 0 0 1 24 5.457z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navigation;
