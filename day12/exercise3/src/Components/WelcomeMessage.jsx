import { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";

const WelcomeMessage = () => {
  const { language, translations } = useContext(LanguageContext);

  return <h2>{translations[language].welcome}</h2>;
};

export default WelcomeMessage;
