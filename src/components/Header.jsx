import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>TopStyle</h1>
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          <li>
            <a href="#welcome" onClick={closeMenu}>
              Startseite
            </a>
          </li>
          <li>
            <a href="#prices" onClick={closeMenu}>
              Preise
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenu}>
              Galerie
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeMenu}>
              Kundenstimmen
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Über Uns
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
