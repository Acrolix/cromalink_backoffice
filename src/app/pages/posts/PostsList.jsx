import LoadingPage from "../../../commons/LoadingPage/LoadingPage";
import usePosts from "../../hooks/posts/usePosts";
import Post from "./Post";

import "./postsStyles/PostsList.css";

export default function PostsList() {
  const { posts, loading } = usePosts();
  return (
    <div className="postsListContainer">
      <h1 className="postsListTitle">Publicaciones</h1>
      <section className="postsList">
        {loading && <LoadingPage />}
        {posts.data?.data?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
      <div className="postsListFooter">
        <div className="postsListPageSelector">
          {posts.links?.map((link) => {
            return (
              <button
                key={link.url}
                className="postsListPageSelectorItem"
                onClick={() => navigator.push(link.url)}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
