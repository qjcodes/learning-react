import "./TextField.css";

const TextField = ({ title, placeholder, name, required, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor={name}>{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
