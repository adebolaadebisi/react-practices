import { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);

  return (
    <div>
      <label htmlFor="language-select">{translations[language].language}: </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="yo">Yoruba</option>
        <option value="ig">Igbo</option>
        <option value="ha">Hausa</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
