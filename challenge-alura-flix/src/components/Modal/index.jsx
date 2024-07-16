import { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import useModal from "@/hooks/useModal";
import styles from "@/styles/components/Modal.module.css";
import useBodySize from "@/hooks/useBodySize";
import TextField from "../TextField";
import Button from "../Button";
import theme from "@/styles/theme";
import IconClose from "@/assets/icons/icon-close.png";

const Modal = () => {
  const { state } = useContext(GlobalContext);
  const { isOpen, selectedVideo, closeModal } = useModal();
  const { bodySize } = useBodySize();

  const { title, setTitle } = useState("");
  const { category, setCategory } = useState("");
  const { image, setImage } = useState("");
  const { link, setLink } = useState("");
  const { description, setDescription } = useState("");

  return (
    isOpen && (
      <>
        <div className={styles.overlay}></div>
        <section
          className={styles.dialog__container}
          style={{ height: `${bodySize.height}px` }}
        >
          <dialog
            open={!!selectedVideo}
            onClose={() => closeModal()}
            className={styles.modal}
          >
            <form method="dialog" className={styles.form}>
              <button formMethod="dialog" className={styles.form__close}>
                <img src={IconClose} alt="Icon Delete" />
              </button>
              <h2>Editar Card:</h2>
              <TextField
                name="title"
                title="Título"
                placeholder="¿qué es javascript?"
                required
                value={title}
                onChange={setTitle}
              />
              <TextField
                title="Categoria"
                placeholder="Holaa"
                required
                value="test"
              />
              <TextField
                name="imageURL"
                title="Imagen"
                placeholder="https://example.com/example.png"
                required
                value={image}
                onChange={setImage}
              />
              <TextField
                name="videoURL"
                title="Video"
                placeholder="https://youtube.com/q?=learning-react"
                required
                value={link}
                onChange={setLink}
              />
              <TextField
                name="description"
                title="Descripción"
                placeholder="Descripcion"
                required
                value={description}
                onChange={setDescription}
              />
              <Button borderColor={theme.colors.blue}>Guardar</Button>
              <Button>Limpiar</Button>
            </form>
          </dialog>
        </section>
      </>
    )
  );
};

export default Modal;
