import { useState } from "react";
import "./PostsList.css";
import { useEffect } from "react";
import API from "../../../api";
import Post from "./post/Post";
import LoadingPage from "../../../commons/LoadingPage/LoadingPage";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getPosts().then((data) => {
      setPosts(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="postsList">
      {loading && <LoadingPage />}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
