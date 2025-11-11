import { useContext } from "react";
import { FavoritesContext } from "../Contexts/FavoritesContext";

const RecipeItem = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const toggleFavorite = () => {
    isFavorite(recipe) ? removeFavorite(recipe) : addFavorite(recipe);
  };

  return (
    <li>
      {recipe}{" "}
      <span
        onClick={toggleFavorite}
        className={isFavorite(recipe) ? "favorite" : "not-favorite"}
      >
        {isFavorite(recipe) ? "yes" : "no"}
      </span>
    </li>
  );
};

export default RecipeItem;
