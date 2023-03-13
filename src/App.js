import LanguageSelector from "./components/LanguageSelector";
import TextualContent from "./components/TextualContent";
import { LanguageContextProvider } from "./store/languageContext";
import "./styles.css";

const App = () => {
  return (
    <LanguageContextProvider>
      <div className="container">
        <header>
          <LanguageSelector />
        </header>

        <TextualContent />
      </div>
    </LanguageContextProvider>
  );
};

export default App;
