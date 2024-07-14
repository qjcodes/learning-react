import useFavoritesContext from "hooks/useFavoritesContext";
import styles from "./card.module.css";
import IconFavorite from "./img/icon-favorite.png";
import NonFavoriteIcon from "./img/non-favorite-icon.png";
import { Link } from "react-router-dom";

const Card = ({ id, layer, title }) => {
  const { favorites, addFavorite } = useFavoritesContext();
  const isFavorite = favorites.some((fav) => fav.id === id);
  const icon = isFavorite ? IconFavorite : NonFavoriteIcon;
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={`/${id}`}>
        <img src={layer} alt={title} className={styles.card__layer} />
        <h2 className={styles.card__title}>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Icon Favorite"
        className={styles.card__favorite}
        onClick={() => addFavorite({ id, title, layer })}
      />
    </div>
  );
};

export default Card;
