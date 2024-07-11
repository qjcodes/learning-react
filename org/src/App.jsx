import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MyOrg from "./components/MyOrg";

function App() {
  const [showForm, setShowForm] = useState(true);

  const changeShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <Header />
      {showForm && <Form />}
      <MyOrg onShow={changeShowForm} />
    </div>
  );
}

export default App;
