import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 hover:scale-105 transform cursor-pointer group"
      title={
        i18n.language === "pt" ? "Switch to English" : "Mudar para Português"
      }
    >
      <div className="group-hover:scale-110 transition-transform duration-200">
        <img
          src={
            i18n.language === "pt"
              ? "/bandeiras/usa.svg"
              : "bandeiras/brazil.svg"
          }
          alt={i18n.language === "pt" ? "USA Flag" : "Brazil Flag"}
          width="20"
          height="14"
          className="rounded-sm shadow-md border border-white/20"
        />
      </div>
      <span className="group-hover:text-emerald-400 transition-colors duration-200 font-medium">
        {i18n.language === "pt" ? "EN" : "PT"}
      </span>
    </button>
  );
};

export default LanguageSwitch;
