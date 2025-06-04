import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Brain,
} from "lucide-react";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Track by Track",
      description:
        "O projeto permite que os usuários avaliem músicas individualmente, calculem uma média para o álbum, registrem o histórico de escutas e compartilhem opiniões com a comunidade.",
      image: "trackbytrack.webp",
      category: "web",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Firebase",
        "Spotify API",
      ],
      github: "https://github.com",
      demo: "https://www.trackbytrackapp.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Banda Plano Marshall",
      description:
        "Landing page desenvolvida para a banda Plano Marshall, desenvolvida com Astro, TypeScript e Tailwind CSS.",
      image: "plano-marshall.webp",
      category: "web",
      technologies: ["Astro", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/JVPrado1/bandaplanomarshall",
      demo: "https://bandaplanomarshall.com.br",
      featured: true,
    },
    {
      id: 3,
      title: "Conservatório Jauense de Música",
      description:
        "Site institucional desenvolvido para o Conservatório Jauense de Música, apresentando informações sobre cursos, professores e eventos musicais.",
      image: "conservatorio.webp",
      category: "web",
      technologies: ["Astro", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 4,
      title: "Profi",
      description:
        "Aplicativo e webapp para professores particulares gerenciarem alunos, horários, pagamentos e rendimentos de forma integrada e simplificada.",
      image: "profi.webp",
      category: "web",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Express",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      status: "development",
    },
    {
      id: 5,
      title: "uTeach",
      description:
        "Estudo de landing page responsiva utilizando HTML e CSS puro.",
      image: "uteach.webp",
      category: "web",
      technologies: ["HTML", "CSS"],
      github: "https://github.com",
      demo: "https://jvprado1.github.io/uteach-landing-page/",
      featured: false,
    },
    {
      id: 6,
      title: "Pedra, papel e tesoura",
      description:
        "Jogo clássico de pedra, papel e tesoura desenvolvido com HTML, CSS e JavaScript puro. Implementa lógica de pontuação, animações suaves e design responsivo como projeto prático do currículo do Odin Project.",
      image: "odin.webp",
      category: "logica",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://jvprado1.github.io/odin-rock-papper-scissors/",
      featured: false,
    },
    {
      id: 7,
      title: "Projeto Scratch - CS50x",
      description:
        "Projeto Scratch desenvolvido como parte do curso CS50x de Harvard, um curso de introdução à ciência da computação com foco em lógica e programação.",
      image: "scratch.webp",

      category: "logica",
      technologies: ["Scratch"],
      github: "https://github.com",
      demo: "scratch.mit.edu/projects/1122699936/",
      featured: false,
    },
  ];

  const filters = [
    { id: "todos", label: "Todos", icon: Globe },
    { id: "web", label: "Web", icon: Code },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "logica", label: "Lógica", icon: Brain },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : activeFilter === "mobile"
        ? projects.filter(
            (project) =>
              project.category === "mobile" || project.category === "web"
          )
        : projects.filter((project) => project.category === activeFilter);

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
        duration: 0.4,
      },
    },
  };

  return (
    <section id="projetos" className="py-20 bg-white/5 w-full" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Confira alguns dos meus projetos mais recentes que demonstram minhas
            habilidades e meus conhecimentos.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-200 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover scale-100 transition-transform duration-200 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Destaque
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                  {project.github !== "https://github.com" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-200 cursor-pointer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {(project.demo !== "https://demo.com" ||
                    project.demo.includes("github.io") ||
                    project.demo.includes("scratch.mit.edu") ||
                    project.demo.includes("trackbytrack")) && (
                    <a
                      href={
                        project.demo.startsWith("scratch.mit.edu")
                          ? `https://${project.demo}`
                          : project.demo
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium text-sm cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      <span>Acessar</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Status Badge */}
                {project.status && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold">
                      Em Desenvolvimento
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, _) => (
                      <span
                        key={_}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4 mt-auto">
                  {(project.demo !== "https://demo.com" ||
                    project.demo.includes("github.io") ||
                    project.demo.includes("scratch.mit.edu") ||
                    project.demo.includes("trackbytrack")) && (
                    <a
                      href={
                        project.demo.startsWith("scratch.mit.edu")
                          ? `https://${project.demo}`
                          : project.demo
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium text-sm cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      <span>Acessar</span>
                    </a>
                  )}
                  {project.github !== "https://github.com" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors duration-200 font-medium text-sm cursor-pointer"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://github.com/JVPrado1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
          >
            <Github size={20} />
            <span>Ver mais no GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
