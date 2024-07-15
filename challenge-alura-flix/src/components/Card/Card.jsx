import styles from "@/styles/components/Card.module.css";
import IconDelete from "@/assets/icons/icon-delete.png"
import IconEdit from "@/assets/icons/icon-edit.png"

const Card = ({ id, title, image, link, description, category, color }) => {
  const cardStyles = {
    borderRadius: "15px 15px 0 0",
    borderColor: color,
    boxShadow: `${color ? "inset 0 0 17px 8px " + color : ""}`,
  };

  const actionStyles = {
    borderColor: color,
    boxShadow: `${color ? "inset 0 -4px 5px 3px " + color : ""}`,
  };

  return (
    <section className={styles.card}>
      <div style={cardStyles}>
        <img src={image} alt={title} className={styles.card__img} />
      </div>
      <section className={styles.actions} style={actionStyles}>
        <div className={styles.action__delete}>
          <img src={IconDelete} alt="Icon Delete" />
          <p>borrar</p>
        </div>
        <div className={styles.action__edit}>
          <img src={IconEdit} alt="Icon Edit" />
          <p>editar</p>
        </div>
      </section>
    </section>
  );
};

export default Card;
