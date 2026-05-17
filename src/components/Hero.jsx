import "../styles/Hero.css";
import { useLang, t } from "../context/language.context.jsx";
import heroPhoto from "../assets/suli-pt.png";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-grain" />
      <div className="hero-line" />

      <img
        className="hero-photo"
        src={heroPhoto}
        alt="Suli"
        onError={(e) => (e.target.style.display = "none")}
      />
      <div className="hero-photo-overlay" />
      <div className="hero-photo-fade" />

      <div className="hero-content">
        <span className="hero-eyebrow">
          {t(
            lang,
            "Barcelona — Private Wellness",
            "Barcelona — Bienestar Privado",
          )}
        </span>

        <h1 className="hero-title">
          {lang === "en" ? (
            <>
              Performance
              <br />
              Refined to
              <br />
              <em>Precision.</em>
            </>
          ) : (
            <>
              Rendimiento
              <br />
              Elevado a la
              <br />
              <em>Precisión.</em>
            </>
          )}
        </h1>

        <p className="hero-subtitle">
          {t(
            lang,
            "Private wellness consultancy for those who expect the same standard of excellence from their body as from every other area of their life.",
            "Consultoría de bienestar privado para quienes exigen el mismo nivel de excelencia de su cuerpo que de cualquier otra área de su vida.",
          )}
        </p>

        <div className="hero-cta-group">
          <a href="#consult" className="btn-primary">
            {t(lang, "Request a Consultation", "Solicitar una Consulta")}
          </a>
          <a href="#services" className="btn-ghost">
            {t(lang, "Explore Services", "Ver Servicios")}
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
