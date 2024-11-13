import useUsers from "../../hooks/users/useUsers";
import User from "./User";

import "./userStyles/UserList.css";

export default function UsersList() {
  const {
    users,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = useUsers();

  console.log("UsersList: ", users);

  return (
    <div className="usersContainer">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="userList">
            <h1 className="usersListTitle">Usuarios</h1>
            {users.map((user) => (
              <div key={user.user_id}>
                <User user={user} />
              </div>
            ))}
          </div>
          <div className="userPageSelect">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Página {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
