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

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: "React", icon: FaReact, color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-800 to-black" },
    { name: "Astro", icon: SiAstro, color: "from-orange-500 to-red-500" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-blue-600 to-blue-800",
    },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-green-700" },
    { name: "Express", icon: SiExpress, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-800" },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "from-teal-400 to-blue-500",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-black/20 backdrop-blur-sm"
      ref={ref}
    >
      <div className="container flex flex-col mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem sou{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              eu?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 flex-start ">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl text-left font-bold text-white mb-7 ">
              Breve resumo
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Desenvolvedor Full Stack e professor com experiência em
                Robótica, Educação Digital, Música e Arte, unindo tecnologia e
                criatividade para uma abordagem multidisciplinar no ensino.
              </p>
              <p>
                Trabalho com tecnologias como React, Node.js, Next.js, Astro,
                Express para APIs REST, MongoDB/PostgreSQL, TypeScript e
                TailwindCSS, com flexibilidade para adaptar ferramentas conforme
                as necessidades do projeto.
              </p>
              <p>
                Tenho conhecimento de versionamento com Git, uso de containers
                com Docker, design e prototipação com Figma, e comunicação
                eficiente em equipes via Slack.
              </p>
            </div>

            <a
              href="/curriculo-joao.pdf"
              download="Currículo - João Victor Prado - Desenvolvedor Full Stack.pdf"
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 inline-block text-center cursor-pointer hover:scale-[1.02]"
            >
              Download CV
            </a>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-left">
              Principais Tecnologias
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
