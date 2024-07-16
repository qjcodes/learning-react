import styles from "@/styles/components/Button.module.css";

const Button = ({ children, borderColor }) => {
  const buttonStyles = {
    backgroundColor: `${borderColor && "rgba(0,0,0,.9)"}`,
    borderColor: borderColor,
    boxShadow: `${borderColor ? "inset 0 0 12px 4px " + borderColor : ""}`,
    color: borderColor,
  };

  return (
    <button className={styles.button} style={buttonStyles} type="reset">
      {children}
    </button>
  );
};

export default Button;
