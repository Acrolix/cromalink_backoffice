import { useEffect, useState } from "react";
import api from "../../../api";

export default function usePosts(id = false) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.getPost(id).then((data) => {
        setPosts(data);
        setLoading(false);
      });
      return;
    }
    api.getPosts().then((data) => {
      setPosts(data.data);
      setLoading(false);
    });
  }, [id]);

  return { posts, loading };
}
