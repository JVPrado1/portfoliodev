import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Freelancer",
      company: "nectho.",
      location: "Jaú, SP",
      period: "Ago 2024 - Presente",
      type: "Freelancer",
      description:
        "Desenvolvo aplicações web full stack, criação de sites institucionais, landing pages e sistemas personalizados para diversos clientes.",
      achievements: [
        "Desenvolveu site institucional para Conservatório Jauense de Música",
        "Criou aplicação Track by Track para avaliação musical",
        "Implementou soluções responsivas e modernas",
        "Trabalhou com React, TypeScript, Astro e Node.js",
      ],
      technologies: [
        "React",
        "Next.js",
        "Astro",
        "Wordpress",

        "Node.js",
        "Tailwind CSS",
        "Typescript",
      ],
      current: true,
    },
    {
      id: 2,
      title: "Professor de Teoria Musical e Musicalização Infantil",
      company: "Conservatório Jauense de Música",
      location: "Jaú, SP",
      period: "Fev 2024 - Presente",
      type: "Tempo Integral",
      description:
        "Leciono Teoria Musical para o Curso Técnico e Musicalização Infantil, sempre buscando novas formas de ensinar e aprender.",
      achievements: [
        "Desenvolveu currículo de teoria musical atualizado",
        "Aplicou tecnologia digital no ensino musical",
        "Trabalhou com diferentes faixas etárias",
        "Criou materiais didáticos personalizados",
      ],
      technologies: ["Leitura Musical", "Rítmica"],
      current: true,
    },
    {
      id: 3,
      title: "Professor de Guitarra e Violão",
      company: "Conservatório Jauense de Música",
      location: "Jaú, SP",
      period: "Ago 2021 - Presente",
      type: "Tempo Integral",
      description:
        "Ensino de guitarra e violão para alunos de diversos níveis, desde iniciantes até avançados, com foco em técnica e musicalidade.",
      achievements: [
        "Formou mais de 50 alunos em diferentes estilos musicais",
        "Desenvolveu metodologia própria de ensino",
        "Organizou recitais e apresentações dos alunos",
        "Integrou tecnologia digital no ensino musical",
      ],
      technologies: ["Educação Musical", "Performance"],
      current: true,
    },
    {
      id: 4,
      title: "Professor Multidisciplinar",
      company: "Colégio Preve Objetivo",
      location: "Jaú e Agudos, SP",
      period: "Fev 2022 - Ago 2024",
      type: "Tempo Integral",
      description:
        "Lecionei disciplinas de Robótica, Arte, Música e Educação Digital, integrando tecnologia com a prática pedagógica.",
      achievements: [
        "Desenvolveu projetos de robótica educacional",
        "Integrou programação com arte e música",
        "Preparou alunos para competições de robótica",
        "Criou metodologias interdisciplinares inovadoras",
      ],
      technologies: [
        "Python",
        "Scratch",
        "Lógica de Programação",
        "Resolução de Problemas",
        "Programação",
        "Tecnologia Educacional",
      ],
      current: false,
    },
    {
      id: 5,
      title: "Marketing e Auxiliar Administrativo TI",
      company: "Colégio Preve Objetivo",
      location: "Jaú, Agudos e Bauru, SP",
      period: "Jan 2021 - Ago 2024",
      type: "Tempo Integral",
      description:
        "Gestão de marketing digital e suporte administrativo voltado para o setor de tecnologia.",
      achievements: [
        "Gerenciou redes sociais das 3 unidades",
        "Implementou sistemas de gestão escolar",
        "Desenvolveu campanhas de marketing digital",
        "Otimizou processos administrativos com tecnologia",
      ],
      technologies: [
        "Marketing Digital",
        "Excel",
        "Google Workspace",
        "Redes Sociais",
      ],
      current: false,
    },
  ];

  const education = [
    {
      id: 1,
      title: "Tecnólogo em Sistemas para Internet",
      institution: "FATEC Jahu",
      period: "2014 - 2016",
      description:
        "Formação técnica em desenvolvimento web, programação e sistemas para internet.",
      grade: "Concluído",
    },

    {
      id: 2,
      title: "Licenciatura em Artes",
      institution: "UNISAGRADO",
      period: "2019 - 2022",
      description:
        "Formação em licenciatura com foco em artes visuais, música e pedagogia artística.",
      grade: "Concluído",
    },
    {
      id: 3,
      title: "Técnico em Guitarra",
      institution: "Conservatório Jauense de Música",
      period: "2019 - 2022",
      description:
        "Formação técnica especializada em guitarra, teoria musical e performance.",
      grade: "Concluído",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experiencia" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minhas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experiências
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experiências profissionais e formação acadêmica que moldaram minha
            carreira
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Building className="mr-3 text-purple-400" size={28} />
              Experiência Profissional
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                      exp.current
                        ? "bg-purple-500 border-purple-300 shadow-lg shadow-purple-500/50"
                        : "bg-gray-600 border-gray-400"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-purple-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                          Atual
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <span className="px-2 py-1 bg-blue-600/20 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-xs text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 text-blue-400" size={28} />
              Formação
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-sm text-gray-300 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Certifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Cursos e Certificações
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Harvard CS50x - Introduction to Computer Science
                    </span>
                    <span className="text-xs text-gray-400">2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      The Odin Project - Full Stack Path (Javascript)
                    </span>
                    <span className="text-xs text-gray-400">2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      freeCodeCamp - Full Stack Developer Certification
                    </span>
                    <span className="text-xs text-gray-400">2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      USP (Coursera) - Introdução à Ciência da Computação com
                      Python
                    </span>
                    <span className="text-xs text-gray-400">2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Origamid - Front End & UX/UI Design
                    </span>
                    <span className="text-xs text-gray-400">2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Udemy - Estrutura de Dados e Algoritmos + LeetCode
                    </span>
                    <span className="text-xs text-gray-400">2024</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-4">Idiomas</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Português</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full text-xs text-white font-semibold">
                      Nativo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Inglês</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-xs text-white font-semibold">
                      Avançado
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Espanhol</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full text-xs text-white font-semibold">
                      Básico
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
