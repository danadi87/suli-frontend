import React from "react";
import "../styles/Contact.css";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <div className="contact-brand">POREOS</div>
          <div className="contact-tagline" data-en>
            Private Wellness · Barcelona
          </div>
          <div className="contact-tagline" data-es>
            Bienestar Privado · Barcelona
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-label" data-en>
                Phone
              </span>
              <span className="contact-item-label" data-es>
                Teléfono
              </span>
              <span className="contact-item-value">+34 632 99 67 97</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label" data-en>
                Location
              </span>
              <span className="contact-item-label" data-es>
                Ubicación
              </span>
              <span className="contact-item-value" data-en>
                Barcelona, Spain
              </span>
              <span className="contact-item-value" data-es>
                Barcelona, España
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label" data-en>
                Availability
              </span>
              <span className="contact-item-label" data-es>
                Disponibilidad
              </span>
              <span className="contact-item-value" data-en>
                By Private Appointment
              </span>
              <span className="contact-item-value" data-es>
                Cita Privada
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label" data-en>
                Contact
              </span>
              <span className="contact-item-label" data-es>
                Contacto
              </span>
              <span className="contact-item-value">Suli — 632 99 67 97</span>
            </div>
          </div>
          <div className="contact-social">
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label" data-en>
                Full Name
              </label>
              <label className="form-label" data-es>
                Nombre completo
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Your name / Tu nombre"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label" data-en>
                Message
              </label>
              <label className="form-label" data-es>
                Mensaje
              </label>
              <textarea
                className="form-textarea"
                placeholder="Tell us briefly what you're looking for... / Cuéntanos brevemente qué buscas..."
              ></textarea>
            </div>
            <button className="form-submit" data-en>
              Send Message
            </button>
            <button className="form-submit" data-es>
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
