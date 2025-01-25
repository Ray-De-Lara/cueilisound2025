import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración en milisegundos
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);

  const team = [
    {
      name: "Ray De Lara",
      role: "Diseñador Audiovisual",
      photo: "/tecnicos/ray.png",
    },
    {
      name: "Stefano Lara",
      role: "Técnico de Sonido",
      photo: "/tecnicos/stefano.png",
    },
    {
      name: "Gabriel Ramirez Mendoza",
      role: "Ingeniero de Iluminación",
      photo: "/tecnicos/gabo.png",
    },
    {
      name: "Ruben 'Ckorto' Suarez",
      role: "Ilustrador Digital",
      photo: "/tecnicos/ruben.png",
    },
  ];

  return (
    <section className="about-us" id="about">
      <div className="textAU">
        <h2>Sobre Nosotros</h2>
        <p>
          En CueIlisound, transformamos espacios en experiencias inolvidables.
          Nuestro equipo de profesionales combina tecnología de vanguardia con
          creatividad para ofrecer soluciones personalizadas de video mapping,
          audio e iluminación.
        </p>
      </div>
      <div className="team-section" data-aos="fade-right">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
