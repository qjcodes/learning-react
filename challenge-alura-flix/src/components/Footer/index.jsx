import styles from "@/styles/components/Footer.module.css";
import Logo from "@/assets/img/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Logo" />
    </footer>
  );
};

export default Footer;
