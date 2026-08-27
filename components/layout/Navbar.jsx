import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontWeight: isActive ? 700 : 500,
  opacity: isActive ? 1 : 0.8,
});

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" style={linkStyle} end>Domov</NavLink>
      <NavLink to="/shop" style={linkStyle}>Znižano</NavLink>
      <NavLink to="/about" style={linkStyle}>Izdelki</NavLink>
      <NavLink to="/faq" style={linkStyle}>O meni</NavLink>
      <NavLink to="/contact" style={linkStyle}>Kontakt</NavLink>
    </nav>
  );
}
