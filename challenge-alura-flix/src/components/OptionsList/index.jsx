import styles from "@/styles/components/OptionsList.module.css";

const OptionsList = (props) => {
  const {
    name,
    title,
    value,
    defaultSelect = "Seleccionar",
    options = [],
    onChange,
    maxWidth = "100%",
    required = false,
    borderColor = "var(--blue)",
  } = props;

  const colorError = "#E53935";

  const stylesSelect = {
    borderColor: required ? colorError : borderColor,
    color: required ? colorError : "",
  };

  return (
    <div className={styles.option} style={{ maxWidth: maxWidth }}>
      <label htmlFor={name} style={{ color: required ? colorError : "" }}>
        {title}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        style={stylesSelect}
      >
        <option value="" disabled>
          {defaultSelect}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
