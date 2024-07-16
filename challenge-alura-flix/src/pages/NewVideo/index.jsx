import styles from "@/styles/pages/NewVideo.module.css";
import Form from "@/pages/NewVideo/Form";

const NewVideo = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.content__header}>
          <h1>Nuevo video</h1>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>
        <Form />
      </section>
    </main>
  );
};

export default NewVideo;
