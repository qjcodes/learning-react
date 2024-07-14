import { useState } from "react";
import Button from "../Button";
import OptionsList from "../OptionsList";
import Field from "../Field";
import "./Form.css";

function Form({ teams, registerCollaborator, createTeam }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, job, photo, team };
    registerCollaborator(data);
  };

  const handleNewTeam = (event) => {
    event.preventDefault();
    const data = { title, primaryColor: color };
    createTeam(data);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Field
          title="Nombre"
          placeholder="Ingresar nombre"
          required
          value={name}
          onChange={setName}
        />
        <Field
          title="Puesto"
          placeholder="Ingresar puesto"
          required
          value={job}
          onChange={setJob}
        />
        <Field
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
          value={photo}
          onChange={setPhoto}
        />
        <OptionsList value={team} onChange={setTeam} teams={teams} />
        <Button>Crear</Button>
      </form>

      <form onSubmit={handleNewTeam}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Field
          title="Titulo"
          placeholder="Ingresar titulo"
          required
          value={title}
          onChange={setTitle}
        />
        <Field
          title="Color"
          placeholder="Ingresar el color en Hex"
          required
          value={color}
          onChange={setColor}
          type="color"
        />

        <Button>Registrar Equipo</Button>
      </form>
    </section>
  );
}

export default Form;
