import { useContext, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import styles from "@/styles/pages/NewVideo.module.css";
import theme from "@/styles/theme";
import TextField from "@/components/TextField";
import OptionsList from "@/components/OptionsList";
import Button from "@/components/Button";
import useVideoForm from "@/hooks/useVideoForm";
import TextTask from "@/components/TextField/TextTask";

const Form = () => {
  const { state } = useContext(GlobalContext);

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
    errors,
  } = useVideoForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__title}>
        <div className={styles.form__line} />
        <h2>Crear Tarjeta</h2>
        <div className={styles.form__line} />
      </div>
      <div className={styles.group__first}>
        <TextField
          name="title"
          title="Título"
          placeholder="Título del video"
          value={title}
          onChange={setTitle}
          maxWidth="470px"
          required={errors.title}
          borderColor="rgba(255, 255, 255, 0.08)"
        />

        <OptionsList
          name="category"
          title="Categoria"
          value={category}
          defaultSelect="Escoja una categoría"
          options={state.categories.map((category) => category.name)}
          onChange={setCategory}
          maxWidth="573px"
          required={errors.category}
          borderColor="rgba(255, 255, 255, 0.08)"
        />
      </div>
      <div className={styles.group__second}>
        <TextField
          name="image"
          title="Imagen"
          placeholder="link de la imagen"
          value={image}
          onChange={setImage}
          required={errors.image}
          borderColor="rgba(255, 255, 255, 0.08)"
        />
        <TextField
          name="link"
          title="Video"
          placeholder="Link del video"
          value={link}
          onChange={setLink}
          required={errors.link}
          borderColor="rgba(255, 255, 255, 0.08)"
        />
      </div>
      <div className={styles.group__third}>
        <TextTask
          name="description"
          title="Descripción"
          placeholder="¿De qué se trata este vídeo?"
          value={description}
          onChange={setDescription}
          maxWidth="calc(50% - 20px)"
          required={errors.description}
          borderColor="rgba(255, 255, 255, 0.08)"
          height="182px"
        />
      </div>

      <div className={styles.form__buttons}>
        <Button borderColor={theme.colors.blue} type="submit">
          Guardar
        </Button>
        <Button onClick={clearForm} type="button">
          Limpiar
        </Button>
      </div>
    </form>
  );
};

export default Form;
