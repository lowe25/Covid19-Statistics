import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Covid 19 Statistics</h1>
        <ul
          className={isMobile ? "nav-menu-mobile" : "nav-menu"}
          onClick={() => setIsMobile(false)}>
          <NavLink to="/" className="nav-links">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="nav-links">
            <li>About</li>
          </NavLink>
          <NavLink to="/tblGlo" className="nav-links">
            <li>Global Cases Table</li>
          </NavLink>
        </ul>
        <button className="burger-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
