import styles from "@/styles/components/TextField.module.css";

const TextField = (props) => {
  const {
    title,
    placeholder,
    name,
    required = false,
    value,
    onChange,
    type = "text",
    maxWidth = "100%",
    borderColor = "var(--blue)",
  } = props;

  const colorError = "#E53935";

  const stylesInput = {
    borderColor: required ? colorError : borderColor,
    color: required ? colorError : "",
  };

  return (
    <div className={styles.field__group} style={{ maxWidth: maxWidth }}>
      <label htmlFor={name} style={{ color: required ? colorError : "" }}>
        {title}
      </label>
      <input
        className={required ? styles.error : ""}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={stylesInput}
      />
    </div>
  );
};

export default TextField;
