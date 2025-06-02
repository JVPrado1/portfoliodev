import { useState } from "react";
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:scale-105 transform cursor-pointer"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </motion.a>
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] md:hidden w-[90vw] max-w-sm"
            style={{ touchAction: "manipulation" }}
          >
            <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all duration-200 group cursor-pointer select-none"
                    style={{ touchAction: "manipulation" }}
                  >
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:scale-105 transition-transform duration-200">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navigation;
