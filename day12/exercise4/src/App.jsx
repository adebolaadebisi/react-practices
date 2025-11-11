import { FavoritesProvider } from "./Contexts/FavoritesContext";
import RecipeList from "./Components/RecipeList";
import FavoritesPage from "./Components/FavoritesPage";
import "./index.css";

function App() {
  return (
    <FavoritesProvider>
      <div className="app-container">
        <h1>Nigerian Recipe App</h1>
        <RecipeList />
        <FavoritesPage />
      </div>
    </FavoritesProvider>
  );
}

export default App;
