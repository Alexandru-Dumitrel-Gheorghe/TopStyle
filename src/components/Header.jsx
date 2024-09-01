import React, { useState, useEffect } from "react";
import AOS from "aos"; // Importă AOS
import "aos/dist/aos.css";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => {
      AOS.refresh(); // Forțează refresh-ul AOS după schimbarea stării meniului
    }, 0);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo} data-aos="fade-down">
          TopStyle
        </h1>
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
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
            <a href="#welcome">Startseite</a>
          </li>
          <li>
            <a href="#prices">Preise</a>
          </li>
          <li>
            <a href="#gallery">Galerie</a>
          </li>
          <li>
            <a href="#testimonials">Kundenstimmen</a>
          </li>
          <li>
            <a href="#about">Über Uns</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
