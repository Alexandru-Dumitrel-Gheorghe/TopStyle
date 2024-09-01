import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Prices.module.css";

const Prices = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    if (openCategory === index) {
      setOpenCategory(null); // Închide categoria dacă este deja deschisă
    } else {
      setOpenCategory(index); // Deschide categoria selectată
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Lasă animațiile să fie declanșate de fiecare dată când apare secțiunea
    });
  }, []);

  const contentRef = useRef([]);

  useEffect(() => {
    contentRef.current.forEach((el, idx) => {
      if (el) {
        if (openCategory === idx) {
          el.style.maxHeight = el.scrollHeight + "px";
        } else {
          el.style.maxHeight = "0px";
        }
      }
    });
  }, [openCategory]);

  return (
    <section id="prices" className={styles.pricesSection} data-aos="fade-up">
      <h2>Preise</h2>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h3
            onClick={() => toggleCategory(index)}
            className={`${styles.categoryTitle} ${
              openCategory === index ? styles.active : ""
            }`}
          >
            {category.category}
            <span className={styles.arrow}>
              {openCategory === index ? "▲" : "▼"}
            </span>
          </h3>
          <div
            ref={(el) => (contentRef.current[index] = el)}
            className={`${styles.servicesList}`}
          >
            {category.services.map((service, idx) => (
              <div key={idx} className={styles.serviceItem}>
                <span className={styles.serviceName}>{service.name}</span>
                <span className={styles.servicePrice}>{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const categories = [
  {
    category: "Damen",
    services: [
      { name: "Waschen, schneiden, föhnen (lang)", price: "ab 33 €" },
      { name: "Waschen, schneiden, föhnen (kurz)", price: "ab 27 €" },
      { name: "Ansatzfarbe (kurzer Ansatz)", price: "ab 35 €" },
      { name: "Ansatzfarbe (mittlerer Ansatz)", price: "ab 40 €" },
      { name: "Ansatzfarbe (großer Ansatz)", price: "ab 45 €" },
      { name: "Tönung bis Schulterlänge", price: "ab 45 €" },
      { name: "Tönung ab Schulterlänge", price: "ab 55 €" },
      { name: "Glossing / Abmattierung", price: "ab 25 €" },
      { name: "Strähnen (ganzer Kopf)", price: "ab 90 €" },
      { name: "Strähnen (Oberkopf & Seiten)", price: "ab 50 €" },
      { name: "Balayage", price: "ab 160 €" },
      { name: "Dauerwelle (kurz)", price: "ab 55 €" },
      { name: "Dauerwelle (mittel)", price: "ab 75 €" },
      { name: "Dauerwelle (lang)", price: "ab 95 €" },
      { name: "Intensivpflege", price: "ab 10 €" },
      { name: "Kreatin - Behandlung", price: "ab 160 €" },
      { name: "Waschen, föhnen", price: "ab 18 €" },
      { name: "Styling inkl. W/F", price: "ab 37 €" },
      { name: "Wimpern färben", price: "ab 8 €" },
      { name: "Augenbrauen färben", price: "ab 10 €" },
      { name: "Augenbrauen zupfen", price: "ab 10 €" },
    ],
  },
  {
    category: "Herren",
    services: [
      { name: "Trockenhaarschnitt", price: "18 €" },
      { name: "Waschen inkl. Massage", price: "5 €" },
      { name: "Waschen + Schneiden + Föhnen", price: "28 €" },
      { name: "Trockenhaarschnitt + Bartrasur", price: "12 €" },
      { name: "Bartrasur", price: "10 €" },
      { name: "Kinderhaarschnitt", price: "10 €" },
      { name: "Augenbrauen Zupfen", price: "6 €" },
      { name: "Gesichts-Haarentfernung mit Wachs", price: "ab 10 €" },
      { name: "All-Inclusive-Paket", price: "44 €" },
    ],
  },
];

export default Prices;
