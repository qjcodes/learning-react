import "./Field.css";

const Field = (props) => {
  const {
    title,
    placeholder,
    name,
    required,
    value,
    onChange,
    type = "text",
  } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={`field field--${type}`}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
