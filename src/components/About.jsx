import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about" className={styles.aboutSection} data-aos="fade-up">
      <h2 className={styles.title}>Über Uns</h2>
      <p className={styles.description}>
        TopStyle ist ein Friseursalon, der sich darauf spezialisiert hat,
        unseren Kunden die besten Dienstleistungen anzubieten. Unser Team aus
        Fachleuten verwendet moderne Techniken und hochwertige Produkte, um
        sicherzustellen, dass Ihr Haar und Ihr Bart stets perfekt aussehen.
      </p>
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipPseSk_6Pva8zhoRpUZMQuSdPAZLgtMNU9iusnD=s680-w680-h510"
        alt="Über TopStyle"
        className={styles.aboutImage}
        data-aos="fade-up"
      />
    </section>
  );
};

export default About;
