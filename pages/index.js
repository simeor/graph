import Blog from "../components/Blog";
import { blogsService } from "../services/blogsService";

export async function getStaticProps() {
  const { posts } = await blogsService.getBlogs;
  return {
    props: {
      posts,
    },
    revalidate: 80000,
  };
}
export default function Home({ posts }) {
  return (
    <div className="main">
      <div className="grid-container">
        {posts.map((post) => {
          return <Blog post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}
