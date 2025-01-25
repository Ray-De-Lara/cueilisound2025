import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProblemHighlight = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración en milisegundos
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);

  return (
    <section
      className="problem-highlight-container"
      data-aos="fade-right"
      data-aos-delay="1000"
    >
      <div className="image-container">
        <img src="/antiguo.jpg" alt="Evento con problemas de iluminación" />
      </div>
      <div className="text-container">
        <h2>¿Problemas con la calidad de tus eventos?</h2>
        <p>
          La iluminación inadecuada y el audio deficiente pueden arruinar
          cualquier experiencia. Nos enfocamos en resolver estos desafíos con
          soluciones innovadoras para garantizar que cada evento sea memorable y
          profesional.
        </p>
      </div>
    </section>
  );
};

export default ProblemHighlight;
