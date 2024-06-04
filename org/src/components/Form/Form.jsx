import TextField from "../TextField";
import "./Form.css";

function Form() {
  return (
    <section className="form">
        <form >
            <h2>Rellena el formulario para crear el colaborador</h2>
            <TextField title="Nombre" placeholder="Ingresar nombre"/>
            <TextField title="Puesto" placeholder="Ingresar puesto"/>
            <TextField title="Foto" placeholder="Ingresar enlace de foto"/>

        </form>
    </section>
  );
}

export default Form;
