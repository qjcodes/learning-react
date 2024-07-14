import { useParams } from "react-router-dom";
import styles from "./player.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";
import { find } from "api/api";

const Player = () => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    find(`/videos/${id}`, setVideo);
  }, [id]);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner img="player" color="#58b9ae" />
      <Title>
        <h1>PLayer</h1>
      </Title>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
