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
      id: 6,
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
      id: 3,
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
      id: 4,
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
      id: 5,
      title: "Projeto Scratch - CS50x",
      description:
        "Projeto Scratch desenvolvido como parte do curso CS50x de Harvard, um curso de introdução à ciência da computação com foco em lógica e programação.",
      image: "scratch.webp",

      category: "logica",
      technologies: ["Scratch"],
      github: "https://github.com",
      demo: "https://demo.com",
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projetos"
      className="py-20 bg-black/20 backdrop-blur-sm"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Alguns dos meus trabalhos mais recentes que demonstram minhas
            habilidades e criatividade
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.demo === "https://demo.com" ? (
                    <div className="p-3 bg-white/10 rounded-full text-gray-500 cursor-not-allowed">
                      <ExternalLink size={20} />
                    </div>
                  ) : (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}

                  {project.github === "https://github.com" ? (
                    <div className="p-3 bg-white/10 rounded-full text-gray-500 cursor-not-allowed">
                      <Github size={20} />
                    </div>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                    Destaque
                  </div>
                )}

                {/* Development Status Badge */}
                {project.status === "development" && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-semibold rounded-full">
                    Em desenvolvimento
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies - Always at bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-xs text-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links - Always at bottom */}
                  <div className="flex space-x-4">
                    {project.demo === "https://demo.com" ? (
                      <span className="flex items-center space-x-2 text-gray-500 font-medium text-sm">
                        <ExternalLink size={16} />
                        <span>Em breve</span>
                      </span>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium text-sm cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}

                    {project.github === "https://github.com" ? (
                      <span className="flex items-center space-x-2 text-gray-500 font-medium text-sm">
                        <Github size={16} />
                        <span>Indisponível</span>
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm cursor-pointer"
                      >
                        <Github size={16} />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Gostou dos meus projetos? Vamos conversar sobre o seu próximo
            projeto!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
          >
            Iniciar Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
