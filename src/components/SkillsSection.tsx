import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import {
  Code,
  Database,
  Server,
  Cloud,
  Smartphone,
  Wrench,
} from "lucide-react";
// Ícones específicos das tecnologias
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaFigma,
  FaLinux,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAstro,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiPostman,
  SiVite,
  SiEslint,
  SiPrettier,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const { t } = useTranslation();

  // Mapeamento de skills para ícones específicos das tecnologias
  const skillIcons: { [key: string]: any } = {
    React: FaReact,
    "Next.js": SiNextdotjs,
    Astro: SiAstro,
    TypeScript: SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "JavaScript ES6+": SiJavascript,
    "HTML5 & CSS3": SiHtml5,
    "Node.js": FaNodeJs,
    Python: FaPython,
    "Express.js": SiExpress,
    Fastify: SiFastify,
    "API REST": SiExpress,
    "JWT & Auth": SiExpress,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    AWS: FaAws,
    Docker: FaDocker,
    Linux: FaLinux,
    "React Native": SiReact,
    "Git/GitHub": FaGitAlt,
    Postman: SiPostman,
    Figma: FaFigma,
    Vite: SiVite,
    ESLint: SiEslint,
    Prettier: SiPrettier,
  };

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      icon: Code,
      color: "from-emerald-500 to-emerald-600",
      skills: [
        "React",
        "Next.js",
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript ES6+",
        "HTML5 & CSS3",
      ],
    },
    {
      title: t("skills.categories.backend"),
      icon: Server,
      color: "from-sky-500 to-sky-600",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "Fastify",
        "API REST",
        "JWT & Auth",
      ],
    },
    {
      title: t("skills.categories.database"),
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: t("skills.categories.devops"),
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Docker", "Linux"],
    },
    {
      title: t("skills.categories.mobile"),
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      skills: ["React Native"],
    },
    {
      title: t("skills.categories.tools"),
      icon: Wrench,
      color: "from-cyan-500 to-teal-500",
      skills: ["Git/GitHub", "Postman", "Figma", "Vite", "ESLint", "Prettier"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (_: React.TouchEvent) => {
    if (!startX.current) return;
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX.current || !isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    // Minimum swipe distance
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swipe left - next slide
      } else {
        prevSlide(); // Swipe right - previous slide
      }
    }

    startX.current = 0;
    isDragging.current = false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="habilidades" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center md:mb-12 mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("skills.title")}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              {t("skills.titleHighlight")}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, _) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-200 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 bg-gradient-to-r ${category.color} rounded-lg mr-3`}
                >
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, _) => {
                  const SkillIcon = skillIcons[skill] || Code;
                  // Mapeamento de cores do gradiente para cores sólidas para os ícones
                  const getIconColor = (colorClass: string) => {
                    if (colorClass.includes("emerald"))
                      return "text-emerald-400";
                    if (colorClass.includes("sky")) return "text-sky-400";
                    if (colorClass.includes("green")) return "text-green-400";
                    if (
                      colorClass.includes("orange") ||
                      colorClass.includes("red")
                    )
                      return "text-orange-400";
                    if (
                      colorClass.includes("indigo") ||
                      colorClass.includes("blue")
                    )
                      return "text-blue-400";
                    if (
                      colorClass.includes("cyan") ||
                      colorClass.includes("teal")
                    )
                      return "text-cyan-400";
                    return "text-white";
                  };

                  return (
                    <div
                      key={skill}
                      className="flex items-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-200 group h-10"
                    >
                      <SkillIcon
                        size={16}
                        className={`mr-2 opacity-80 group-hover:opacity-100 transition-all duration-200 ${getIconColor(category.color)} group-hover:scale-110 flex-shrink-0`}
                      />
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200 text-sm leading-tight">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Card Container */}
            <div
              className="overflow-hidden"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {skillCategories.map((category, _) => (
                  <div
                    key={category.title}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 flex flex-col h-72">
                      {/* Category Header */}
                      <div className="flex items-center mb-4">
                        <div
                          className={`p-2 bg-gradient-to-r ${category.color} rounded-lg mr-3`}
                        >
                          <category.icon className="text-white" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill, _) => {
                          const SkillIcon = skillIcons[skill] || Code;
                          // Mapeamento de cores do gradiente para cores sólidas para os ícones
                          const getIconColor = (colorClass: string) => {
                            if (colorClass.includes("emerald"))
                              return "text-emerald-400";
                            if (colorClass.includes("sky"))
                              return "text-sky-400";
                            if (colorClass.includes("green"))
                              return "text-green-400";
                            if (
                              colorClass.includes("orange") ||
                              colorClass.includes("red")
                            )
                              return "text-orange-400";
                            if (
                              colorClass.includes("indigo") ||
                              colorClass.includes("blue")
                            )
                              return "text-blue-400";
                            if (
                              colorClass.includes("cyan") ||
                              colorClass.includes("teal")
                            )
                              return "text-cyan-400";
                            return "text-white";
                          };

                          return (
                            <div
                              key={skill}
                              className="flex items-center p-2 bg-white/5 rounded-lg border border-white/10 h-10"
                            >
                              <SkillIcon
                                size={14}
                                className={`mr-2 opacity-80 transition-opacity duration-200 ${getIconColor(category.color)} flex-shrink-0`}
                              />
                              <span className="text-gray-300 font-medium text-xs leading-tight">
                                {skill}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-emerald-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Swipe Instruction */}
          <p className="text-center text-gray-400 text-sm mt-3">
            {t("skills.swipeInstruction")}
          </p>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t("skills.otherSkills")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {(t("skills.softSkills", { returnObjects: true }) as string[]).map(
              (skill: string, _: number) => (
                <div
                  key={skill}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-white font-medium hover:border-emerald-500 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-sky-600/20 transition-all duration-200 text-sm"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
