import { useEffect, useRef } from "react";
import "../styles/Membership.css";
import { useLang, t } from "../context/language.context.jsx";

const PLANS = [
  {
    price: "€420",
    featured: false,
    en: {
      tier: "Essential",
      name: "The Practice",
      note: "Five-session pack · Single discipline",
      features: [
        "5 private sessions in chosen discipline",
        "Initial movement assessment",
        "Personalised session programming",
        "In-home or company facility sessions",
        "Session notes and progress tracking",
      ],
      cta: "Begin Here",
    },
    es: {
      tier: "Esencial",
      name: "La Práctica",
      note: "Pack de cinco sesiones · Una disciplina",
      features: [
        "5 sesiones privadas en la disciplina elegida",
        "Valoración inicial de movimiento",
        "Programación de sesiones personalizada",
        "Sesiones en domicilio o instalaciones de empresa",
        "Notas de sesión y seguimiento del progreso",
      ],
      cta: "Comenzar Aquí",
    },
  },
  {
    price: "€1,200",
    featured: true,
    en: {
      tier: "Signature",
      name: "The Residency",
      note: "Monthly · 8 sessions · Integrated approach",
      badge: "Most Selected",
      features: [
        "8 private sessions across disciplines",
        "Comprehensive biometric assessment",
        "Cross-modal programming (Yoga, Pilates, Functional)",
        "Priority scheduling & same-day availability",
        "Lifestyle & recovery protocol design",
        "At-home or company space sessions",
      ],
      cta: "Reserve Your Place",
    },
    es: {
      tier: "Programa Insignia",
      name: "La Residencia",
      note: "Mensual · 8 sesiones · Enfoque integrado",
      badge: "Más Elegido",
      features: [
        "8 sesiones privadas entre disciplinas",
        "Valoración biométrica completa",
        "Programación multimodal (Yoga, Pilates, Funcional)",
        "Prioridad en agenda y disponibilidad el mismo día",
        "Diseño de protocolo de estilo de vida y recuperación",
        "Sesiones en domicilio o espacio de empresa",
      ],
      cta: "Reservar tu Lugar",
    },
  },
  {
    price: "€2,500",
    featured: false,
    en: {
      tier: "Elite",
      name: "The Retainer",
      note: "Monthly · Unlimited access · Full advisory",
      features: [
        "Unlimited sessions within monthly period",
        "Full lifestyle integration consultancy",
        "Corporate & executive wellness workshops",
        "Nutritional alignment guidance",
        "Sessions at your home or company facilities",
        "Direct line access to Suli — 7 days",
      ],
      cta: "Arrange a Call",
    },
    es: {
      tier: "Élite",
      name: "El Retainer",
      note: "Mensual · Acceso ilimitado · Asesoría completa",
      features: [
        "Sesiones ilimitadas dentro del período mensual",
        "Consultoría de integración de estilo de vida completa",
        "Talleres de bienestar corporativo y ejecutivo",
        "Orientación de alineación nutricional",
        "Sesiones en tu domicilio o instalaciones de empresa",
        "Línea directa con Suli — 7 días",
      ],
      cta: "Organizar una Llamada",
    },
  },
];

export default function Membership() {
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
    <section className="membership" id="membership" ref={ref}>
      <div className="membership-inner">
        <div className="membership-header reveal">
          <span
            className="section-label"
            style={{ textAlign: "center", display: "block" }}
          >
            {t(lang, "Investment", "Inversión")}
          </span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            {lang === "en" ? (
              <>
                Select your
                <br />
                <em>programme.</em>
              </>
            ) : (
              <>
                Elige tu
                <br />
                <em>programa.</em>
              </>
            )}
          </h2>
          <p className="membership-subhead">
            {t(
              lang,
              "All programmes include a complimentary initial assessment and bespoke protocol design.",
              "Todos los programas incluyen una valoración inicial gratuita y un diseño de protocolo a medida.",
            )}
          </p>
        </div>
        <div className="plans-grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.price}
              className={[
                "plan",
                plan.featured ? "featured-plan" : "",
                "reveal",
                i > 0 ? `reveal-delay-${i}` : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {plan[lang].badge && (
                <div className="plan-badge">{plan[lang].badge}</div>
              )}
              <span className="plan-tier">{plan[lang].tier}</span>
              <h3 className="plan-name">{plan[lang].name}</h3>
              <div className="plan-price">{plan.price}</div>
              <span className="plan-price-note">{plan[lang].note}</span>
              <ul className="plan-features">
                {plan[lang].features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#consult" className="plan-cta">
                {plan[lang].cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
