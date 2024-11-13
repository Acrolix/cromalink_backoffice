import { useEffect, useState } from "react";
import PostsService from "../../../services/posts/postsServices";

export default function usePosts(id = false) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (id) {
      PostsService.getPost(id)
        .then((response) => {
          setPosts(response.data);
          setTotalPages(response.last_page);
          setLoading(false);
        })
        .catch(() => {
          setPosts([]);
          setLoading(false);
        });
      return;
    }
    PostsService.getPosts({ page: currentPage })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, [id, currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return { posts, loading, goToNextPage, goToPreviousPage };
}
