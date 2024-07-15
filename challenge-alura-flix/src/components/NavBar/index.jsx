import styles from "@/styles/components/NavBar.module.css";
import Logo from "@/assets/img/logo.png";
import Button from "@/components/Button";
import theme from "@/styles/theme"

const NavBar = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Alura Flix" className={styles.logo} />
      <div className={styles.buttons}>
        <Button borderColor={theme.colors.blue}>HOME</Button>
        <Button>NUEVO VIDEO</Button>
      </div>
    </header>
  );
};

export default NavBar;
