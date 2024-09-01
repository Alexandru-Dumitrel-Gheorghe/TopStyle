import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Gallery.module.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // Animațiile se vor rula o singură dată
    });
  }, []);

  const images = [
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipN_stHw-5ZVvvlXtgDff2gM0KgqXvLHRbEYtW-s=s680-w680-h510",
      alt: "Description 1",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOh7WTC8sHbAH4IftfRQhb-wxbjZhBa_41Eu8k2=s680-w680-h510",
      alt: "Description 2",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPoHSVQ_uMo27k5ggJkQKy7m0_ZJaQFoaB0aAgA=s680-w680-h510",
      alt: "Description 3",
    },

    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMiXGYUhQDdoagijGY53uK6tvZvPuftMB88GaVM=s680-w680-h510",
      alt: "Description 6",
    },
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2 className={styles.galleryTitle} data-aos="fade-up">
        Galerie
      </h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem} data-aos="fade-up">
            <img
              src={image.src}
              alt={image.alt}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
