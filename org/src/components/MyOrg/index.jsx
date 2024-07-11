import { useState } from "react";
import "./MyOrg.css";

const MyOrg = ({ onShow }) => {
  //   const [show, setShow] = useState(true);

  //   const handleClik = () => {
  //     console.log("Mostrar/Ocultar elemento", show);
  //     setShow(!show)
  //   };
  return (
    <section className="org-section">
      <h3 className="title">Mi organizacion</h3>
      <img src="/img/add.png" alt="add" onClick={onShow} />
    </section>
  );
};

export default MyOrg;
