import React from "react";
import styles from "./Welcome.module.css";
import backgroundImage from "../images/welcome-background.jpg";

const Welcome = () => {
  return (
    <section
      id="welcome"
      className={`${styles.welcomeSection} d-flex justify-content-center align-items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.overlay} w-100 h-100 position-absolute`}></div>
      <div
        className={`${styles.content} container text-center text-white position-relative`}
        data-aos="fade-up"
      >
        <h2
          className={`${styles.title} display-4 font-weight-bold mb-4`}
          data-aos="fade-up"
        >
          Willkommen bei TopStyle
        </h2>
        <p
          className={`${styles.subtitle} lead mb-4`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Erleben Sie höchste Qualität in Haarpflege und Styling!
        </p>
        <a
          href="#contact"
          className={`${styles.button} btn btn-primary btn-lg`}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Jetzt Termin buchen
        </a>
      </div>
    </section>
  );
};

export default Welcome;
