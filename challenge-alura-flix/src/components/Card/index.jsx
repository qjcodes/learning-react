import Card from "@/components/Card/Card";
import styles from "@/styles/components/CardContainer.module.css";
import { useEffect, useRef, useState } from "react";
import { find } from "@/api/api";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const CardContainer = ({ id, name, color }) => {
  const [videos, setVideos] = useState([]);
  const {containerRef, handleMouseDown, handleMouseMove, handleMouseUp} = useHorizontalScroll()

  useEffect(() => {
    find(`/videos/?category=${id}`, setVideos);
  }, []);
  // console.log(name, "=>", videos);

  return (
    <section className={styles.container}>
      <div className={styles.card__title} style={{ backgroundColor: color }}>
        <h3>{name}</h3>
      </div>
      <section
        className={styles.content}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {videos.map((video) => (
          <Card {...video} key={video.id} color={color} />
        ))}
      </section>
    </section>
  );
};

export default CardContainer;
