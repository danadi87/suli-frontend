import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/Consultation.css";
import { useLang, t } from "../context/language.context.jsx";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Consultation() {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
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
          <>
            <form
              className="consult-form consult-form--full"
              onSubmit={handleSubmit}
            >
              <input
                className="consult-input"
                type="text"
                name="name"
                placeholder={t(lang, "Your name", "Tu nombre")}
                value={form.name}
                onChange={handleChange}
                required
                disabled={sending}
              />
              <input
                className="consult-input"
                type="email"
                name="email"
                placeholder={t(
                  lang,
                  "Your email address",
                  "Tu dirección de correo",
                )}
                value={form.email}
                onChange={handleChange}
                required
                disabled={sending}
              />
              <textarea
                className="consult-input consult-textarea"
                name="message"
                placeholder={t(
                  lang,
                  "Tell us briefly what you're looking for...",
                  "Cuéntanos brevemente qué buscas...",
                )}
                value={form.message}
                onChange={handleChange}
                disabled={sending}
              />
              <button type="submit" className="consult-btn" disabled={sending}>
                {sending
                  ? t(lang, "Sending…", "Enviando…")
                  : t(lang, "Request →", "Solicitar →")}
              </button>
            </form>

            {error && (
              <p className="consult-error">
                {t(
                  lang,
                  "Something went wrong. Please try again.",
                  "Algo ha salido mal. Por favor, inténtalo de nuevo.",
                )}
              </p>
            )}
          </>
        )}

        <span className="consult-privacy">
          {t(
            lang,
            "Your information is never shared. Response within 24 hours.",
            "Tu información nunca se comparte. Respuesta en 24 horas.",
          )}
        </span>

        {/* ── Client forms entry points ── */}
        <div className="consult-forms-row">
          <p className="consult-forms-label">
            {t(
              lang,
              "Already decided? Complete your intake forms directly:",
              "¿Ya lo has decidido? Completa tus formularios directamente:",
            )}
          </p>
          <div className="consult-forms-btns">
            <Link to="/assessment" className="consult-form-btn">
              <span className="consult-form-btn-label">
                {t(lang, "Initial Assessment", "Valoración Inicial")}
              </span>
              <span className="consult-form-btn-sub">
                {t(
                  lang,
                  "5 min · Health & background",
                  "5 min · Salud y antecedentes",
                )}
              </span>
            </Link>
            <Link
              to="/training-routine"
              className="consult-form-btn consult-form-btn-dark"
            >
              <span className="consult-form-btn-label">
                {t(lang, "Training Routine", "Rutina de Entrenamiento")}
              </span>
              <span className="consult-form-btn-sub">
                {t(
                  lang,
                  "5 min · Customise your programme",
                  "5 min · Personaliza tu programa",
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
