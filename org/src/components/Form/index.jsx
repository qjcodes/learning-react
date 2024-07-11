import { useState } from "react";
import Button from "../Button";
import OptionsList from "../OptionsList";
import TextField from "../TextField";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, job, photo, team };

    console.log(data);
  };
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField
          title="Nombre"
          placeholder="Ingresar nombre"
          required
          value={name}
          onChange={setName}
        />
        <TextField
          title="Puesto"
          placeholder="Ingresar puesto"
          required
          value={job}
          onChange={setJob}
        />
        <TextField
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
          value={photo}
          onChange={setPhoto}
        />
        <OptionsList value={team} onChange={setTeam} />
        <Button>Crear</Button>
      </form>
    </section>
  );
}

export default Form;
