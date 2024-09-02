import React from "react";
import { FaClock } from "react-icons/fa";
import styles from "./OpeningHours.module.css";

const OpeningHours = () => {
  return (
    <section id="opening-hours" className={styles.openingHoursSection}>
      <h2 className={styles.title}>Öffnungszeiten</h2>
      <div className={styles.hoursContainer}>
        <FaClock className={styles.icon} />
        <div className={styles.hoursList}>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Montag</span>
            <span className={styles.time}>Geschlossen</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Dienstag</span>
            <span className={styles.time}>09:00–19:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Mittwoch</span>
            <span className={styles.time}>09:00–19:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Donnerstag</span>
            <span className={styles.time}>09:00–19:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Freitag</span>
            <span className={styles.time}>09:00–19:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Samstag</span>
            <span className={styles.time}>09:00–19:00</span>
          </div>
          <div className={styles.hoursItem}>
            <span className={styles.day}>Sonntag</span>
            <span className={styles.time}>Geschlossen</span>
          </div>
        </div>
      </div>
      <a href="#contact" className={styles.button}>
        Jetzt Termin buchen
      </a>
    </section>
  );
};

export default OpeningHours;
