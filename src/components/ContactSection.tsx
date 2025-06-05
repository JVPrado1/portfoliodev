import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/JVPrado1/",
      color: "hover:text-emerald-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jvprado1/",
      color: "hover:text-sky-400",
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.me/5514997295849",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-white/5 w-full" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("contact.title")}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
            ?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle2")}
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
            {/* Botões de Contato - WhatsApp e Email lado a lado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto sm:max-w-none"
            >
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5514997295849"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[60vw] sm:w-auto flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:bg-[#20c760] group"
              >
                <FaWhatsapp
                  size={20}
                  className="mr-3 group-hover:scale-110 transition-transform duration-200"
                />
                <span>
                  <span className="hidden sm:inline">
                    {t("contact.whatsapp")}
                  </span>
                  <span className="sm:hidden">
                    {t("contact.whatsappMobile")}
                  </span>
                </span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:jv_prado@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[60vw] sm:w-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-[1.02] group"
              >
                <Mail
                  size={20}
                  className="mr-3 group-hover:scale-110 transition-transform duration-200"
                />
                <span>{t("contact.sendEmail")}</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, _) => (
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
          <p className="text-gray-400 mb-4">{t("contact.footer")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
