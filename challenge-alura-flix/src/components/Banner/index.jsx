import styles from "@/styles/components/Banner.module.css";
import BannerImg from "@/assets/img/banner.png";
import Player from "@/assets/img/player.png";

const Banner = () => {
  return (
    <section className={styles.container}>
      <section className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__title}>
            <h2>Front End</h2>
          </div>
          <div className={styles.wrapper__content}>
            <h3>Challenge React</h3>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
        </div>
        <img src={Player} alt="" />
      </section>
      <div
        className={styles.banner__layer}
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className={styles.banner__gradient} />
      </div>
    </section>
  );
};

export default Banner;
