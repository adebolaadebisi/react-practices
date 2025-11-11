import { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage if available
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Function to toggle theme and save to localStorage
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
