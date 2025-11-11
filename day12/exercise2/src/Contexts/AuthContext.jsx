import { createContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login function
  const login = (username, password) => {
    // For simplicity, accept any username/password
    const loggedUser = { username };
    setUser(loggedUser);
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
