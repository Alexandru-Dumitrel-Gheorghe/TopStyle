import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Prices from "./components/Prices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: "phone", // Dezactivează AOS pe telefoane pentru a evita conflicte
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Prices />
      <Gallery />
      <Testimonials />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
