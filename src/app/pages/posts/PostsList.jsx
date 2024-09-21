import LoadingPage from "../../../commons/LoadingPage/LoadingPage";
import usePosts from "../../hooks/posts/usePosts";
import Post from "./Post";

import "./postsStyles/PostsList.css";

export default function PostsList() {
  const { posts, loading } = usePosts();
  return (
    <section className="postsList">
      {loading && <LoadingPage />}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
