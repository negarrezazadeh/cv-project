import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all text-sm shadow-md border border-gray-300"
    >
      {i18n.language === "fa" ? "English" : "فارسی"}
    </button>
  );
}
