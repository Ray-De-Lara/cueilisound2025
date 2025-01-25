import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ onDiscoverMore }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración en milisegundos
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);
  return (
    <header className="header-container " id="home">
      <div className="header-content" data-aos="fade-right">
        <h1>
          Haz de tus eventos una aventura única con <span>CUEILISOUND</span>
        </h1>
        <p>
          Lleva tus producciones al siguiente nivel con nuestras soluciones de
          videomapping, audio e iluminación profesional.
        </p>
        <button className="cta-button" onClick={onDiscoverMore}>
          Descubre más
        </button>
      </div>
      <div className="header-video" data-aos="fade-left">
        <video src="/video.mp4" controls muted autoPlay loop></video>
      </div>
    </header>
  );
};

export default Header;
