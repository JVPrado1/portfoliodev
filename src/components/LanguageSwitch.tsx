import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language || "pt"; // Fallback para pt se undefined
    const newLang = currentLang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      onTouchEnd={(e) => {
        e.preventDefault();
        toggleLanguage();
      }}
      className="flex items-center space-x-2 px-3 py-2 text-white/80 md:hover:text-white transition-all duration-200 rounded-lg md:hover:bg-white/10 md:hover:scale-105 active:scale-95 active:bg-white/20 transform cursor-pointer group focus:outline-none focus:ring-0 select-none"
      style={{
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        touchAction: "manipulation",
      }}
      title={
        (i18n.language || "pt") === "pt"
          ? "Switch to English"
          : "Mudar para Português"
      }
    >
      <div className="md:group-hover:scale-110 transition-transform duration-200">
        <img
          src={
            (i18n.language || "pt") === "pt"
              ? "/bandeiras/usa.svg"
              : "bandeiras/brazil.svg"
          }
          alt={(i18n.language || "pt") === "pt" ? "USA Flag" : "Brazil Flag"}
          className="w-6 h-4 min-w-6 min-h-4 max-w-6 max-h-4 object-cover rounded-sm shadow-md border border-white/20 select-none"
          draggable={false}
          style={{
            pointerEvents: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        />
      </div>
      <span className="md:group-hover:text-emerald-400 transition-colors duration-200 font-medium select-none">
        {(i18n.language || "pt") === "pt" ? "EN" : "PT"}
      </span>
    </button>
  );
};

export default LanguageSwitch;
