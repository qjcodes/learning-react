import styles from "@/styles/components/TextField.module.css";

const TextField = (props) => {
    const {
      title,
      placeholder,
      name,
      required,
      value,
      onchange,
      type = "text",
    } = props;

  const handleChange = (event) => {
    onchange(event.target.value);
  };
  return (
    <div className={styles.form__group}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onchange={handleChange}
      />
    </div>
  );
};

export default TextField;
