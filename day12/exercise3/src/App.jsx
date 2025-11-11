import { LanguageProvider } from "./Contexts/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <LanguageSelector />
        <WelcomeMessage />
        <p>This is some extra text that can also be translated!</p>
      </div>
    </LanguageProvider>
  );
}

export default App;

