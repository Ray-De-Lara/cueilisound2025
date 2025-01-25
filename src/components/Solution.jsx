import React, { useEffect } from "react";
import { FaLightbulb, FaMusic, FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Solution = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración en milisegundos
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);
  return (
    <>
      <section className="solution-container" data-aos="fade-up">
        <div className="solution-content">
          <h2>
            ¿Por que preferir a <span>CueIlisound</span>?
          </h2>
          <p>
            Nuestra solución combina tecnología avanzada de videomapping, audio
            e iluminación para transformar tus eventos en experiencias
            inolvidables. Creamos ambientes impactantes que aseguran la mejor
            calidad y dejan una impresión duradera en tu público.
          </p>
          <img src="/nuevo.jpg" alt="Solución de evento profesional" />
        </div>
      </section>
      <div className="solution-benefits">
        <div className="benefit-card">
          <FaLightbulb className="benefit-icon" style={{ color: "#FFD700" }} />
          <h3 className="benefit-title">Innovación Tecnológica</h3>
          <p className="benefit-description">
            Utilizamos herramientas y técnicas de última generación para crear
            eventos inolvidables.
          </p>
        </div>
        <div className="benefit-card">
          <FaMusic className="benefit-icon" style={{ color: "#FF6F61" }} />
          <h3 className="benefit-title">Audio Impecable</h3>
          <p className="benefit-description">
            Experiencia sonora perfecta con equipos de alta fidelidad para cada
            ocasión.
          </p>
        </div>
        <div className="benefit-card">
          <FaCogs className="benefit-icon" style={{ color: "#4CAF50" }} />
          <h3 className="benefit-title">Eficiencia Garantizada</h3>
          <p className="benefit-description">
            Montaje y soporte técnico rápido y eficiente en cada evento.
          </p>
        </div>
      </div>
    </>
  );
};

export default Solution;
