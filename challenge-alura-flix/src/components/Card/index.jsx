import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import styles from "@/styles/components/CardContainer.module.css";
import Card from "@/components/Card/Card";

const CardContainer = ({ id, name, color }) => {
  const { state } = useContext(GlobalContext);
  const { containerRef, handleMouseDown, handleMouseMove, handleMouseUp } =
    useHorizontalScroll();

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
        {state.videos.map(
          (video) =>
            video.category === id && (
              <Card video={video} key={video.id} color={color} />
            )
        )}
      </section>
    </section>
  );
};

export default CardContainer;
