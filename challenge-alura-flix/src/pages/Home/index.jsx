import { useContext } from "react";
import Banner from "@/components/Banner";
import styles from "@/styles/page/Home.module.css";
import CardContainer from "@/components/Card";
import { GlobalContext } from "@/context/GlobalContext";
import {useScrollContext} from "@/context/ScrollContext"

const Home = () => {
  const { state } = useContext(GlobalContext);
  const {elementRef} = useScrollContext()

  return (
    <main className={styles.container} >
      <Banner />
      <div className={styles.content} >
        {state.categories.map((category) => (
          <CardContainer {...category} key={category.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
