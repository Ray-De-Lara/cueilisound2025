import React from "react";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">Cue Ilisound</a>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="mobile-menu hidden">
        <ul>
          <li>
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
