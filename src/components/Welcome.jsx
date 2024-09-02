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
      <div className={`${styles.overlay}`}></div>
      <div
        className={`${styles.content} container text-center text-white`}
        data-aos="fade-up"
      >
        <h2 className={`${styles.title} mb-4`} data-aos="fade-up">
          Willkommen bei TopStyle
        </h2>
        <p
          className={`${styles.subtitle} mb-4`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Erleben Sie höchste Qualität in Haarpflege und Styling!
        </p>
        <a
          href="#contact"
          className={`${styles.button}`}
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
