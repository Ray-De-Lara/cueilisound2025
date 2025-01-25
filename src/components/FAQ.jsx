import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es el videomapping y cómo puede beneficiar a mi evento?",
      answer:
        "El videomapping es una técnica de proyección que transforma cualquier superficie en una pantalla dinámica. En tu evento, puede crear efectos visuales impresionantes que capturen la atención del público.",
    },
    {
      question: "¿Ofrecen soporte técnico durante el evento?",
      answer:
        "Sí, nuestro equipo técnico estará presente para garantizar que todo funcione correctamente y resolver cualquier inconveniente que pueda surgir.",
    },
    {
      question: "¿Qué tipo de eventos cubren sus servicios?",
      answer:
        "Ofrecemos servicios para eventos corporativos, bodas, conciertos, ferias, exposiciones y cualquier evento que requiera un impacto visual y sonoro profesional.",
    },
    {
      question: "¿Los servicios son personalizables?",
      answer:
        "Absolutamente. Diseñamos soluciones a medida para adaptarnos a las necesidades específicas de cada cliente y evento.",
    },
    {
      question: "¿Qué equipos utilizan para sus servicios?",
      answer:
        "Contamos con proyectores de alta gama, sistemas de sonido profesional, y equipos de iluminación de última generación para garantizar los mejores resultados.",
    },
    {
      question: "¿Cómo puedo contratar sus servicios?",
      answer:
        "Puedes contactarnos a través de nuestras redes sociales para agendar una consulta inicial. Estamos aquí para ayudarte.",
    },
  ];

  return (
    <section className="faq-container" id="faq">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
