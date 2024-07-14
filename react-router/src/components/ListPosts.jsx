import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { search } from "../api/api";

const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);
  return (
    <section className="posts container">
      {posts.map((post) => {
        const { id, title, metadescription, categoria } = post;
        return (
          <Link
            to={`/posts/${id}`}
            className={`post__card post-card--${categoria}`}
            key={id}
          >
            <article>
              <h3 className="post-card__title">{title}</h3>
              <p className="post-card__meta">{metadescription}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default ListPosts;
