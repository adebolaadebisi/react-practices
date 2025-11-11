import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#fff" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h2>Welcome to your Theme Switcher App!</h2>
        <p>All components change colors based on the theme.</p>
      </main>
    </div>
  );
}

export default App;
