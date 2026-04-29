import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { useLang, t } from "../context/language.context.jsx";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <div className="contact-brand">POREOS</div>
          <span className="contact-tagline">
            {t(
              lang,
              "Private Wellness · Barcelona",
              "Bienestar Privado · Barcelona",
            )}
          </span>
          <div className="contact-details">
            {[
              {
                labelEn: "Phone",
                labelEs: "Teléfono",
                valueEn: "+34 632 99 67 97",
                valueEs: "+34 632 99 67 97",
              },
              {
                labelEn: "Location",
                labelEs: "Ubicación",
                valueEn: "Barcelona, Spain",
                valueEs: "Barcelona, España",
              },
              {
                labelEn: "Availability",
                labelEs: "Disponibilidad",
                valueEn: "By Private Appointment",
                valueEs: "Cita Privada",
              },
              {
                labelEn: "Contact",
                labelEs: "Contacto",
                valueEn: "Suli — 632 99 67 97",
                valueEs: "Suli — 632 99 67 97",
              },
            ].map((item) => (
              <div key={item.labelEn} className="contact-item">
                <span className="contact-item-label">
                  {t(lang, item.labelEn, item.labelEs)}
                </span>
                <span className="contact-item-value">
                  {t(lang, item.valueEn, item.valueEs)}
                </span>
              </div>
            ))}
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
          {sent ? (
            <p className="contact-sent-msg">
              {t(
                lang,
                "Thank you. We will respond within 24 hours.",
                "Gracias. Responderemos en 24 horas.",
              )}
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  {t(lang, "Full Name", "Nombre completo")}
                </label>
                <input
                  className="form-input"
                  name="name"
                  placeholder={t(lang, "Your name", "Tu nombre")}
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  {t(lang, "Message", "Mensaje")}
                </label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder={t(
                    lang,
                    "Tell us briefly what you're looking for...",
                    "Cuéntanos brevemente qué buscas...",
                  )}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
              </div>

              {error && (
                <p className="contact-error-msg">
                  {t(
                    lang,
                    "Something went wrong. Please try again.",
                    "Algo ha salido mal. Por favor, inténtalo de nuevo.",
                  )}
                </p>
              )}

              <button type="submit" className="form-submit" disabled={sending}>
                {sending
                  ? t(lang, "Sending…", "Enviando…")
                  : t(lang, "Send Message", "Enviar Mensaje")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
