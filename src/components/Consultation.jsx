import { useEffect, useRef, useState } from "react";
import "../styles/Consultation.css";
import { useLang, t } from "../context/language.context.jsx";

export default function Consultation() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation request:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="consult" id="consult" ref={ref}>
      <div className="consult-bg-text">POREOS</div>
      <div className="consult-inner reveal">
        <span
          className="section-label"
          style={{
            textAlign: "center",
            display: "block",
            marginBottom: "1.5rem",
          }}
        >
          {t(lang, "Private Consultation", "Consulta Privada")}
        </span>
        <h2 className="consult-title">
          {lang === "en" ? (
            <>
              Begin with a<br />
              <em>private conversation.</em>
            </>
          ) : (
            <>
              Comienza con una
              <br />
              <em>conversación privada.</em>
            </>
          )}
        </h2>
        <p className="consult-text">
          {t(
            lang,
            "Every client relationship begins with a confidential 30-minute consultation — no obligation, no sales process. Simply an honest conversation about where you are and what excellence looks like for you.",
            "Cada relación con un cliente comienza con una consulta confidencial de 30 minutos — sin compromiso, sin proceso de venta. Simplemente una conversación honesta sobre dónde estás y cómo es la excelencia para ti.",
          )}
        </p>
        {submitted ? (
          <p className="consult-confirmed">
            {t(
              lang,
              "Thank you. We will be in touch within 24 hours.",
              "Gracias. Nos pondremos en contacto en 24 horas.",
            )}
          </p>
        ) : (
          <form className="consult-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="consult-input"
              placeholder={t(
                lang,
                "Your email address",
                "Tu dirección de correo",
              )}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="consult-btn">
              {t(lang, "Request →", "Solicitar →")}
            </button>
          </form>
        )}
        <span className="consult-privacy">
          {t(
            lang,
            "Your information is never shared. Response within 24 hours.",
            "Tu información nunca se comparte. Respuesta en 24 horas.",
          )}
        </span>
      </div>
    </section>
  );
}
