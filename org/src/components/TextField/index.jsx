import "./TextField.css";

const TextField = ({title, placeholder, name}) => {
  return (
    <div className="text-field">
      <label htmlFor={name}>{title}</label>
      <input type="text" placeholder={placeholder} name={name}/>
    </div>
  );
};

export default TextField;
