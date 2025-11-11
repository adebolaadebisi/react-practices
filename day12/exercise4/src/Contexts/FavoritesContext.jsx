import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    if (!favorites.includes(recipe)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (recipe) => {
    setFavorites(favorites.filter((item) => item !== recipe));
  };

  const isFavorite = (recipe) => favorites.includes(recipe);

  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
