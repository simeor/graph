import React from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";

const Blog = ({ post }) => {
  const { slug, title, author, coverPhoto, datePublished } = post;
  const [year, month, day] = datePublished.split("-");
  const router = useRouter();

  return (
    <div
      className={style.blogContainer}
      onClick={() => router.push(`/posts/${slug}`)}
    >
      <h1>{title}</h1>
      <h5>{author.name}</h5>
      <img className={style.img} src={coverPhoto.url} alt={title} />
      <p>{`${day}-${month}-${year}`}</p>
    </div>
  );
};

export default Blog;
