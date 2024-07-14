import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "./logo-alura.png";
import HeaderLink from "components/Link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <section className={styles.header__logo}>
          <img src={Logo} alt="Logo Alura" />
          <span>Cinema</span>
        </section>
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favorites">Favorite</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
