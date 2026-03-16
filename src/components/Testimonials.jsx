import { useEffect, useRef } from "react";
import "../styles/Testimonials.css";
import { useLang, t } from "../context/language.context.jsx";

const TESTIMONIALS = [
  {
    name: "C.A.",
    en: {
      text: "Working with Suli is unlike anything I've experienced. There are no wasted sessions, no generic plans. He understands that my time has a value — and he respects it absolutely.",
      role: "Managing Director, Private Equity · Barcelona",
    },
    es: {
      text: "Trabajar con Suli es algo que no había experimentado antes. No hay sesiones perdidas, ni planes genéricos. Él entiende que mi tiempo tiene valor — y lo respeta absolutamente.",
      role: "Director General, Private Equity · Barcelona",
    },
  },
  {
    name: "R.M.",
    en: {
      text: "I travel constantly. Suli built me a programme I can follow anywhere — and when I'm in Barcelona, he's available exactly when I need him. The discretion and quality are unmatched.",
      role: "Founder & CEO · Technology Group · Barcelona",
    },
    es: {
      text: "Viajo constantemente. Suli me diseñó un programa que puedo seguir en cualquier lugar — y cuando estoy en Barcelona, él está disponible exactamente cuando lo necesito.",
      role: "Fundador y CEO · Grupo Tecnológico · Barcelona",
    },
  },
  {
    name: "S.K.",
    en: {
      text: "I came to Suli after years of conventional training that yielded little. Within three months the structural improvements were measurable by my own physicians. This is precision at a different level.",
      role: "Surgeon · Private Practice · Barcelona",
    },
    es: {
      text: "Llegué a Suli tras años de entrenamiento convencional con escasos resultados. En tres meses, las mejoras estructurales eran medibles por mis propios médicos. Esto es precisión a otro nivel.",
      role: "Cirujano · Práctica Privada · Barcelona",
    },
  },
];

export default function Testimonials() {
  const { lang } = useLang();
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

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div>
            <span className="section-label">
              {t(lang, "Client Experiences", "Experiencias de Clientes")}
            </span>
            <h2 className="section-title">
              {lang === "en" ? (
                <>
                  Words from
                  <br />
                  <em style={{ color: "var(--tan)" }}>private members.</em>
                </>
              ) : (
                <>
                  Palabras de
                  <br />
                  <em style={{ color: "var(--tan)" }}>miembros privados.</em>
                </>
              )}
            </h2>
          </div>
          <p className="testimonials-note">
            {t(
              lang,
              "Identities protected at client request.",
              "Identidades protegidas a petición del cliente.",
            )}
            <br />
            {t(
              lang,
              "All testimonials are genuine.",
              "Todos los testimonios son reales.",
            )}
          </p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t2, i) => (
            <div
              key={t2.name}
              className={`testi-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
            >
              <div className="testi-quote-mark">"</div>
              <p className="testi-text">{t2[lang].text}</p>
              <div className="testi-client">
                <div className="testi-name">{t2.name}</div>
                <div className="testi-role">{t2[lang].role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
