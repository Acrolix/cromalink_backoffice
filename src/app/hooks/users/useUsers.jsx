import { useEffect, useState } from "react";
import UsersService from "../../../services/users/usersServices";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    UsersService.getUsers({ page: currentPage })
      .then((response) => {
        setUsers(response.data);
        setTotalPages(response.last_page);
        setLoading(false);
      })
      .catch(() => {
        setUsers([]);
        setLoading(false);
      });
  }, [currentPage]);

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

  return {
    users,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  };
}
