import styles from "./footer.module.css";
import Logo from "./logo-alura.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__title}>
        Desarrollado por <img src={Logo} alt="Alura" />
      </h2>
    </footer>
  );
};

export default Footer;
