import { useEffect, useState } from "react";
import api from "../../../api";

export default function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getComments(postId).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [postId]);

  return { comments, loading };
}
