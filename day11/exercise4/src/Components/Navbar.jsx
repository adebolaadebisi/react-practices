import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Nigerian Cities Explorer</h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cities">Cities</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
