import Banner from "components/Banner";
import styles from "./favorites.module.css";
import Title from "components/Title";
import useFavoritesContext from "hooks/useFavoritesContext";
import Card from "components/Card";

const Favorites = () => {
  const { favorites } = useFavoritesContext();
  return (
    <>
      <Banner img="favorites" color="#00BF63" />
      <Title>
        <h1>Mis favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorites.map((favorite) => (
          <Card {...favorite} key={favorite.id} />
        ))}
      </section>
    </>
  );
};

export default Favorites;
