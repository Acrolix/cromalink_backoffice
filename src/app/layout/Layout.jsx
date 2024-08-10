import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Layout() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <h1>Layout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
