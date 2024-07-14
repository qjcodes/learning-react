import hexToRgba from "hex-to-rgba";
import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  const { team, collaborators, collaboratorDelete, colorUpdate, like } = props;
  const { id, title, primaryColor, secondaryColor } = team;

  const obj = {
    backgroundColor: hexToRgba(primaryColor, 0.6),
  };

  const titleStyle = {
    borderColor: primaryColor,
  };

  return (
    <>
      {collaborators.length > 0 && (
        <section className="team" style={obj}>
          <input
            type="color"
            className="team--color"
            value={primaryColor}
            onChange={(event) => colorUpdate(event.target.value, id)}
          />
          <h3 style={titleStyle}>{title}</h3>
          <div className="team__collaborators">
            {collaborators.map((collaborator, index) => (
              <Collaborator
                data={collaborator}
                key={index}
                primaryColor={primaryColor}
                collaboratorDelete={collaboratorDelete}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
