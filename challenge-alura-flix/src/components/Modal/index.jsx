import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import useModal from "@/hooks/useModal";
import useBodySize from "@/hooks/useBodySize";
import styles from "@/styles/components/Modal.module.css";
import theme from "@/styles/theme";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import IconClose from "@/assets/icons/icon-close.png";
import OptionsList from "@/components/OptionsList";
import useVideoForm from "@/hooks/useVideoForm";
import TextTask from "@/components/TextField/TextTask";

const Modal = () => {
  const { state } = useContext(GlobalContext);
  const { isOpen, selectedVideo, closeModal } = useModal();
  const { bodySize } = useBodySize();
  const {
    title,
    category,
    image,
    link,
    description,
    setTitle,
    setCategory,
    setImage,
    setLink,
    setDescription,
    handleSubmit,
    clearForm,
  } = useVideoForm(selectedVideo,closeModal);

  return (
    isOpen && (
      <>
        <div className={styles.overlay}></div>
        <section
          className={styles.dialog__container}
          style={{ height: `${bodySize.height}px` }}
        >
          <div className={styles.modal}>
            <button
              className={styles.form__close}
              type="button"
              onClick={() => closeModal()}
            >
              <img src={IconClose} alt="Icon Delete" />
            </button>
            <form
              method="dialog"
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <h2>Editar Card:</h2>
              <TextField
                name="title"
                title="Título"
                placeholder="¿qué es javascript?"
                value={title}
                onChange={setTitle}
              />
              <OptionsList
                name="categories"
                title="Categoria"
                value={category}
                defaultSelect="Seleccionar Categoria"
                options={state.categories.map((category) => category.name)}
                onChange={setCategory}
              />
              <TextField
                name="imageURL"
                title="Imagen"
                placeholder="https://example.com/example.png"
                value={image}
                onChange={setImage}
              />
              <TextField
                name="videoURL"
                title="Video"
                placeholder="https://youtube.com/q?=learning-react"
                value={link}
                onChange={setLink}
              />
              <TextTask
                name="description"
                title="Descripción"
                placeholder="Descripcion"
                value={description}
                onChange={setDescription}
              />
              <div className={styles.button__container}>
                <Button borderColor={theme.colors.blue} type="submit">
                  Guardar
                </Button>
                <Button onClick={clearForm} type="button">
                  Limpiar
                </Button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  );
};

export default Modal;
