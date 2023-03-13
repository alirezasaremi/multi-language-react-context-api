// components/TextualContent.js

import { useContext } from "react";
import { LanguageContext, Translate } from "../store/languageContext";

const TextualContent = () => {
  const { userLanguage } = useContext(LanguageContext);

  return (
    <div className={userLanguage === "fa" ? "rtl-text" : null}>
      <h1>
        <Translate textKey="title" />
      </h1>
      <p>
        <Translate textKey="description" />
      </p>
      <p>
        <Translate textKey="aboutMe" />
        <a href="https://alirezasaremi.com" target="_blank">
          <Translate textKey="author" />
        </a>
      </p>
    </div>
  );
};

export default TextualContent;
