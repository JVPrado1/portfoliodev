import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Server,
  Cloud,
  Smartphone,
  Wrench,
} from "lucide-react";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
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
      title: "Backend",
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
      title: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Docker", "Linux"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      skills: ["React Native"],
    },
    {
      title: "Ferramentas & Tech",
      icon: Wrench,
      color: "from-cyan-500 to-teal-500",
      skills: ["Git/GitHub", "Postman", "Figma", "Vite", "ESLint", "Prettier"],
    },
  ];

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
    <section id="habilidades" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que compõem minha stack de desenvolvimento
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, _) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, _) => (
                  <div
                    key={skill}
                    className="flex items-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200`}
                    ></div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200 text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Outras competências
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Comunicação",
              "Trabalho em Equipe",
              "Resolução de Problemas",
              "Criatividade",
              "Adaptabilidade",
              "Pensamento Crítico",
              "Gestão de Tempo",
              "Aprendizado Contínuo",
              "Empatia",
              "Organização",
              "Proatividade",
              "Clean Code",
              "SEO",
            ].map((skill, _) => (
              <div
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-white font-medium hover:border-emerald-500 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-sky-600/20 transition-all duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
