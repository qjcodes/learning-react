import styles from "./banner.module.css";

const Banner = ({ img, color }) => {
  return (
    <div
      className={styles.layer}
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
      <div
        className={styles.layer__gradient}
        style={{ background: `${color}` }}
      ></div>
    </div>
  );
};

export default Banner;
