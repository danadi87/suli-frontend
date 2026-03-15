import React from "react";
import "../styles/Hero.css";

export function Hero() {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-texture"></div>
        <div className="hero-grain"></div>
        <div className="hero-line"></div>

        <img
          className="hero-photo"
          src="PHOTO-2026-03-05-08-57-51.jpg"
          alt="Suli"
          onerror="this.style.display='none'"
        />
        <div className="hero-photo-overlay"></div>
        <div className="hero-photo-fade"></div>

        <div className="hero-content">
          <span className="hero-eyebrow" data-en>
            Barcelona — Private Wellness
          </span>
          <span className="hero-eyebrow" data-es>
            Barcelona — Bienestar Privado
          </span>

          <h1 className="hero-title" data-en>
            Performance
            <br />
            Refined to
            <br />
            <em>Precision.</em>
          </h1>
          <h1 className="hero-title" data-es>
            Rendimiento
            <br />
            Elevado a la
            <br />
            <em>Precisión.</em>
          </h1>

          <p className="hero-subtitle" data-en>
            Private wellness consultancy for those who expect the same standard
            of excellence from their body as from every other area of their
            life.
          </p>
          <p className="hero-subtitle" data-es>
            Consultoría de bienestar privado para quienes exigen el mismo nivel
            de excelencia de su cuerpo que de cualquier otra área de su vida.
          </p>

          <div className="hero-cta-group">
            <a href="#consult" className="btn-primary" data-en>
              Request a Consultation
            </a>
            <a href="#consult" className="btn-primary" data-es>
              Solicitar una Consulta
            </a>
            <a href="#services" className="btn-ghost" data-en>
              Explore Services
            </a>
            <a href="#services" className="btn-ghost" data-es>
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      <div className="manifesto">
        <div className="manifesto-inner">
          <p className="manifesto-quote" data-en>
            "The body is not a project to be fixed.
            <br />
            It is a <span>precision instrument</span> to be calibrated."
          </p>
          <p className="manifesto-quote" data-es>
            "El cuerpo no es un proyecto a reparar.
            <br />
            Es un <span>instrumento de precisión</span> que hay que calibrar."
          </p>
          <span className="manifesto-attr">— Suli · Wellness Philosophy</span>
        </div>
      </div>
    </div>
  );
}
