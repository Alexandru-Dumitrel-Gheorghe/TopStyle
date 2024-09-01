import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Anna Schmidt",
      text: "Ich habe mich sehr wohl gefühlt und bin zufrieden gegangen.",
    },
    {
      name: "Peter Becker",
      text: "Außergewöhnliche Professionalität und Liebe zum Detail.",
    },

    {
      name: "Rezensent von friseurenet.de",
      text: "Super netter Friseur! 16€ für ein Männerschnitt ist auch super! Gutes Handwerk! Kann ich nur weiterempfehlen 👍🏻",
    },
    {
      name: "Patrick Witte",
      text: "Guter Herren Frisör zum günstigen Preis. Man muss auch meistens nicht lange warten.",
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.title} data-aos="fade-up">
        Kundenstimmen
      </h2>
      <div className={styles.testimonialsList}>
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className={styles.testimonial}
            data-aos="fade-up"
          >
            <p>"{testimonial.text}"</p>
            <cite>- {testimonial.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
