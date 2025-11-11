import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 Student Dashboard</h2>
      <div className="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/grades">Grades</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
