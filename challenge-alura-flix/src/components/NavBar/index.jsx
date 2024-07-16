import styles from "@/styles/components/NavBar.module.css";
import Logo from "@/assets/img/logo.png";
import Button from "@/components/Button";
import theme from "@/styles/theme";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Alura Flix" className={styles.logo} />
      <div className={styles.buttons}>
        <Link to="/">
          <Button borderColor={theme.colors.blue}>HOME</Button>
        </Link>
        <Link to="/new-video">
          <Button>NUEVO VIDEO</Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
