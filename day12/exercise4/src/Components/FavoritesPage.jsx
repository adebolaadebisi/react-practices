import { useContext } from "react";
import { FavoritesContext } from "../Contexts/FavoritesContext";

const FavoritesPage = () => {
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>No favorites yet!</p>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe}>{recipe}</li>
        ))}
      </ul>
      <button onClick={clearFavorites}>Clear All Favorites</button>
    </div>
  );
};

export default FavoritesPage;
