import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiAstro,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  const technologies = [
    { name: "React", icon: FaReact, color: "from-sky-400 to-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-800 to-black" },
    { name: "Astro", icon: SiAstro, color: "from-orange-500 to-red-500" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-sky-600 to-sky-800",
    },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-green-700" },
    { name: "Express", icon: SiExpress, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-800" },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "from-emerald-400 to-sky-500",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white/5 w-full" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center md:mb-12 mb-10"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              {t("about.title")}
            </span>{" "}
            <span className="text-white">{t("about.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white text-center lg:text-left hidden lg:block">
              {t("about.briefTitle")}
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>

            <div className="text-center lg:text-left mt-8 lg:mt-0 lg:mb-0 mb-5">
              <a
                href="/curriculo-joao.pdf"
                download="Currículo - João Victor Prado - Desenvolvedor Full Stack.pdf"
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 inline-block text-center cursor-pointer hover:scale-[1.02]"
              >
                {t("about.downloadCV")}
              </a>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white text-left">
              {t("about.mainTechnologies")}
            </h3>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-4">
              {technologies.map((tech, _) => (
                <div
                  key={tech.name}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-2 bg-gradient-to-r ${tech.color} rounded-full group-hover:scale-110 transition-transform duration-200`}
                    >
                      <tech.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-xs">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile List */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {technologies.map((tech, _) => (
                <div
                  key={tech.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-200 group flex items-center"
                >
                  <div
                    className={`p-2 bg-gradient-to-r ${tech.color} rounded-full mr-3 group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}
                  >
                    <tech.icon className="text-white" size={18} />
                  </div>
                  <div className="text-white font-semibold text-xs">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
