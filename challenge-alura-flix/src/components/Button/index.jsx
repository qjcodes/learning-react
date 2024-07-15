import styles from "@/styles/components/Button.module.css";

const Button = ({ children, borderColor }) => {
  const buttonStyles = {
    borderColor: borderColor,
    boxShadow: `${borderColor ? "inset 0 0 12px 4px " + borderColor : ""}`,
    color: borderColor,
  };

  return (
    <button className={styles.button} style={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
