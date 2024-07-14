import { Link } from "react-router-dom";
import styles from "./link.module.css";

const HeaderLink = ({ children, url }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
};

export default HeaderLink;
