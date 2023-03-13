import { useContext } from "react";
import { existingLanguages } from "../locale";
import { LanguageContext } from "../store/languageContext";

const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(existingLanguages).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
