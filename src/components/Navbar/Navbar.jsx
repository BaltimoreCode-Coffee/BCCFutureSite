// src/components/Navbar.jsx
import "./Navbar.module.css";

function Navbar() {
  return (
    <nav style={{ background: "#240D57", padding: "1rem" }}>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
        }}
      >
        <li>Event</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Sponsor</li>
        <li>Volunteer</li>
      </ul>
    </nav>
  );
}

export default Navbar;
