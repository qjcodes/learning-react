import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({ data, primaryColor, collaboratorDelete, like }) => {
  const { id, name, job, photo, team, favorite } = data;
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="collaborator--delete"
        onClick={() => collaboratorDelete(id)}
      />
      <div
        className="collaborator__header"
        style={{ backgroundColor: primaryColor }}
      >
        <img src={photo} alt={name} />
      </div>
      <div className="collaborator__info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        {favorite ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Collaborator;
