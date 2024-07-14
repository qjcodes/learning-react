import { FavoritesContext } from "context/Favorites";
import { useContext } from "react";

function useFavoritesContext() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  function addFavorite(newFavorite) {
    const duplicateFavorite = favorites.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorites];
    if (!duplicateFavorite) {
      newList.push(newFavorite);
      return setFavorites(newList);
    }

    newList = favorites.filter((item) => item.id !== newFavorite.id);
    return setFavorites(newList);
  }
  return { favorites, addFavorite };
}

export default useFavoritesContext;
