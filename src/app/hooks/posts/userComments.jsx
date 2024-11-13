import { useEffect, useState } from "react";
import APIPosts from "../../../services/posts/postsServices";

export default function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIPosts.getComments(postId)
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(() => {
        setComments([]);
        setLoading(false);
      });
  }, [postId]);

  return { comments, loading };
}
