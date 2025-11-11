import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import LoginForm from "./LoginForm";

const UserPanel = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Not logged in:</p>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default UserPanel;
