import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jv_prado@outlook.com",
      href: "mailto:jv_prado@outlook.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "(14) 99729-5849",
      href: "https://wa.me/5514997295849",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Jaú, SP - Brasil",
      href: "https://maps.google.com/?q=Jaú,SP",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/JVPrado1/",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jvprado1/",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:jv_prado@outlook.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section
      id="contato"
      className="py-20 bg-black/20 backdrop-blur-sm"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              conversar?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Gostaria de colaborar? Ou apenas quer dizer
            olá? Estou sempre aberto para novas oportunidades e conversas
            interessantes!
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl w-full"
          >
            <div className="space-y-6 mb-8">
              {/* Email - linha completa */}
              {(() => {
                const emailInfo = contactInfo[0];
                const EmailIcon = emailInfo.icon;
                return (
                  <a
                    href={emailInfo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200 group cursor-pointer"
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${emailInfo.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <EmailIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {emailInfo.title}
                      </h4>
                      <p className="text-gray-300">{emailInfo.value}</p>
                    </div>
                  </a>
                );
              })()}

              {/* Localização e WhatsApp - mesma linha */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.slice(1).map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200 group cursor-pointer"
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-200 hover:bg-white/20 cursor-pointer hover:scale-110`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t flex justify-center items-center border-white/10"
        >
          <p className="text-gray-400 mb-4">
            © 2025 Desenvolvido por João Victor Prado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
