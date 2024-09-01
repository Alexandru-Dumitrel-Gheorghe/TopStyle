import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Integrarea EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Înlocuiește cu Service ID-ul tău
        "YOUR_TEMPLATE_ID", // Înlocuiește cu Template ID-ul tău
        formData,
        "YOUR_USER_ID" // Înlocuiește cu User ID-ul tău
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Nachricht erfolgreich gesendet!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert(
            "Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut."
          );
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactBackground}></div>
      <h2 className={styles.title}>Kontaktieren Sie uns</h2>
      <div className={styles.contactDetails}>
        <p>Lochhauser Str. 37</p>
        <p>82175 Puchheim</p>
        <p>
          Tel: <a href="tel:08937965115">089 37965115</a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

        <label htmlFor="message">Nachricht:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textareaField}
        ></textarea>

        <button type="submit" className={styles.submitButton}>
          Senden
        </button>
      </form>
    </section>
  );
};

export default Contact;
