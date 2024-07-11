import "./OptionsList.css";

const OptionsList = ({ value, onChange }) => {
  const teams = [
    "Programacion",
    "Front End",
    "Data Sciense",
    "Devops",
    "UX y Diseno",
    "Movil",
    "Innovacion y Gestion",
  ];

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="options-list">
      <label>Equipos</label>
      <select value={value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
