import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-description">
        ¿Listo para llevar tu evento al siguiente nivel? ¡Escríbenos!
      </p>
      <div className="contact-info">
        <a
          href="https://wa.me/4433890008"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="icon">
            <FaWhatsapp />
          </div>
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/cue_ilisound/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="icon">
            <FaInstagram />
          </div>
          Instagram
        </a>
        <a
          href="https://www.facebook.com/share/1FGg4h4za7/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div className="icon">
            <FaFacebook />
          </div>
          Facebook
        </a>
      </div>
    </section>
  );
};

export default Contact;
