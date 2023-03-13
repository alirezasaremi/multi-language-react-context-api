import { createContext, useContext, useState } from "react";
import { localeList } from "../locale";

export const LanguageContext = createContext({
  userLanguage: "en",
  locale: localeList.en
});

export function LanguageContextProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  const languageProvider = {
    userLanguage,
    locale: localeList[userLanguage],
    userLanguageChange: (selectedLanguage) => {
      setUserLanguage(selectedLanguage);
      window.localStorage.setItem("lang", selectedLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={languageProvider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Translate({ textKey }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.locale[textKey] || textKey;
}
