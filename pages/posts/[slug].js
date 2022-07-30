import React from "react";
import { blogsService } from "../../services/blogsService";

export async function getStaticPaths() {
  const { posts } = await blogsService.getSlugs;
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await blogsService.getSlug(slug);
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 80000,
  };
}

const BlogPost = ({ post }) => {
  return (
    <div className="pageContainer">
      <h1>{post.title}</h1>
    </div>
  );
};

export default BlogPost;
