import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import styles from "@/styles/page/Home.module.css";
import { find } from "@/api/api";
import CardContainer from "../../components/Card";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    find("/categories", setCategories);
  }, []);

  // console.log(categories);
  return (
    <main className={styles.container}>
      <Banner />
      <div className={styles.content}>
        {categories.map((category) => (
          <CardContainer {...category} key={category.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
