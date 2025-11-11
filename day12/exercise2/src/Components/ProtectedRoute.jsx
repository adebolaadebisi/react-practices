import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page.</p>;
  }

  return children;
};

export default ProtectedRoute;
