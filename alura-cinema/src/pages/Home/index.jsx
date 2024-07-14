import Banner from "components/Banner";
import Card from "components/Card";
import styles from "./index.module.css";
import Title from "components/Title";
import { useEffect, useState } from "react";
import { find } from "api/api";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    find("/videos", setVideos);
  }, []);
  return (
    <>
      <Banner img="home" color="#154580" />
      <Title>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Title>

      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
};

export default Home;
