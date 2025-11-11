import { NavLink } from "react-router-dom";
import "./Navbar.css"; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/skills">
          Skills
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
