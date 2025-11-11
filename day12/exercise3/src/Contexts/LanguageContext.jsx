import { createContext, useState } from "react";

export const LanguageContext = createContext();

// Translations for multiple phrases
const translations = {
  en: {
    welcome: "Welcome to our app!",
    language: "Language",
    login: "Login",
    logout: "Logout",
    secretPage: "Secret Page",
    secretMessage: "Only logged-in users can see this!"
  },
  yo: {
    welcome: "Ẹ káàbọ̀ sí ohun èlò wa!",
    language: "Èdè",
    login: "Wọlé",
    logout: "Jade",
    secretPage: "Ojúewé Asiri",
    secretMessage: "Àwọn tó wọlé nìkan ló lè rí i!"
  },
  ig: {
    welcome: "Nnọọ na ngwa anyị!",
    language: "Asụsụ",
    login: "Banye",
    logout: "Pụọ",
    secretPage: "Okwu Nzuzo",
    secretMessage: "Naanị ndị nbanye nwere ike ịhụ ya!"
  },
  ha: {
    welcome: "Barka da zuwa aikace-aikacenmu!",
    language: "Harshe",
    login: "Shiga",
    logout: "Fita",
    secretPage: "Shafin Sirri",
    secretMessage: "Masu shiga kawai zasu iya ganin wannan!"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
