import { useEffect, useState } from "react";
import PostsService from "../../../services/posts/postsServices";

export default function usePosts(id = false) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      PostsService.getPost(id).then((data) => {
        setPosts(data);
        setLoading(false);
      });
      return;
    }
    PostsService.getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [id]);

  return { posts, loading };
}
