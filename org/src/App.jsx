import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MyOrg from "./components/MyOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/qjcodes.png",
      name: "Freddy Quea",
      job: "Dev FullStack",
      favorite: true,
    },
    {
      id: uuid(),
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      favorite: false,
    },
    {
      id: uuid(),
      team: "Programacion",
      photo: "https://github.com/genesysR-dev.png",
      name: "Genesys Rondon",
      job: "Software Developer and Instructor",
      favorite: false,
    },
    {
      id: uuid(),
      team: "UX y Diseno",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructor at Alura Latam",
      favorite: false,
    },
    {
      id: uuid(),
      team: "Innovacion y Gestion",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzales",
      job: "Dev FullStack",
      favorite: false,
    },
    {
      id: uuid(),
      team: "Programacion",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Alura Head and Instructor",
      favorite: true,
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programacion",
      primaryColor: "#57c278",
      secondaryColor: "#D9f7e9",
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      id: uuid(),
      title: "Data Sciense",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      id: uuid(),
      title: "UX y Diseno",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      id: uuid(),
      title: "Movil",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      id: uuid(),
      title: "Innovacion y Gestion",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ]);

  const changeShowForm = () => {
    setShowForm(!showForm);
  };

  const registerCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const collaboratorDelete = (id) => {
    const result = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(result);
  };

  const colorUpdate = (color, id) => {
    const result = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(result);
  };

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const like = (id) => {
    const result = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite;
      }
      return collaborator;
    });
    setCollaborators(result);
  };

  return (
    <div>
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      )}
      <MyOrg onShow={changeShowForm} />
      {teams.map((team, index) => (
        <Team
          team={team}
          key={index}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.title
          )}
          collaboratorDelete={collaboratorDelete}
          colorUpdate={colorUpdate}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
