import { useEffect, useRef } from "react";
import "../styles/Services.css";
import { useLang, t } from "../context/language.context.jsx";
import imgYoga from "../assets/yoga_class.jpeg";
import imgYogaEmpty from "../assets/yoga_class_empty_1.jpeg";
import imgPilates from "../assets/pilates_mat_with_people_1.jpeg";
import imgPilatesStudio from "../assets/pilates-studio-interior.jpeg";
import imgFunctional from "../assets/functional_training_1.jpeg";
import imgPersonal from "../assets/personal_training_1.jpeg";
import imgPersonal2 from "../assets/personal_training_5.jpeg";

const PILLARS = [
  {
    n: "01",
    img: imgYogaEmpty,
    en: {
      title: "Precision Over Volume",
      text: "Fewer, more intentional sessions yield superior outcomes. Each movement is programmed with biomechanical exactness, eliminating the inefficiency of conventional training.",
    },
    es: {
      title: "Precisión Sobre Volumen",
      text: "Menos sesiones, más intencionales, generan resultados superiores. Cada movimiento está programado con exactitud biomecánica, eliminando la ineficiencia del entrenamiento convencional.",
    },
  },
  {
    n: "02",
    img: imgPilatesStudio,
    en: {
      title: "Science as Foundation",
      text: "Every protocol is grounded in peer-reviewed research. Progress is tracked, measured, and adjusted with the same rigour as a performance laboratory.",
    },
    es: {
      title: "La Ciencia como Base",
      text: "Cada protocolo se basa en investigación científica contrastada. El progreso se registra, mide y ajusta con el mismo rigor que un laboratorio de rendimiento.",
    },
  },
  {
    n: "03",
    img: imgPersonal2,
    en: {
      title: "Absolute Discretion",
      text: "Sessions take place at your residence, your company's dedicated space, or exclusive partner facilities in Barcelona. Your practice — and your results — remain entirely confidential.",
    },
    es: {
      title: "Discreción Absoluta",
      text: "Las sesiones se realizan en tu domicilio, en el espacio dedicado de tu empresa o en instalaciones exclusivas en Barcelona. Tu práctica — y tus resultados — son completamente confidenciales.",
    },
  },
];

const SERVICES = [
  {
    n: "01",
    img: imgYoga,
    en: {
      icon: "01 — Yoga",
      name: "Private Yoga",
      desc: "Vinyasa, Hatha, and Yin sessions curated entirely to your physiology, schedule, and intention. Available at your home, rooftop, or partner location. Each session is a private ritual — not a class.",
      rate: "From €90 · 60 or 90-minute format",
    },
    es: {
      icon: "01 — Yoga",
      name: "Yoga Privado",
      desc: "Sesiones de Vinyasa, Hatha y Yin diseñadas según tu fisiología, horario e intención. Disponibles en tu domicilio, terraza o espacio asociado. Cada sesión es un ritual privado, no una clase.",
      rate: "Desde €90 · Formato de 60 o 90 minutos",
    },
  },
  {
    n: "02",
    img: imgPilates,
    en: {
      icon: "02 — Pilates",
      name: "Mat Pilates",
      desc: "One-to-one Pilates Mat sessions focused on structural alignment, postural intelligence, and deep functional strength. Conducted at your home or dedicated space — the precision of a private studio without the group experience.",
      rate: "From €95 · Private session format",
    },
    es: {
      icon: "02 — Pilates",
      name: "Pilates Mat",
      desc: "Sesiones individuales de Pilates Mat orientadas a la alineación estructural, la inteligencia postural y la fuerza funcional profunda. En tu domicilio o espacio dedicado, con la precisión de un estudio privado.",
      rate: "Desde €95 · Formato de sesión privada",
    },
  },
  {
    n: "03",
    img: imgFunctional,
    en: {
      icon: "03 — Functional Training",
      name: "Functional Performance Training",
      desc: "Evidence-based functional training designed around your body's mechanics, performance goals, and daily demands. Sessions conducted at your home, your company's gym, or a partner facility in Barcelona. Measurable progress. No wasted movements.",
      rate: "From €110 · In-home or company facility",
    },
    es: {
      icon: "03 — Entrenamiento Funcional",
      name: "Entrenamiento Funcional de Alto Rendimiento",
      desc: "Entrenamiento funcional basado en evidencia, diseñado en torno a la mecánica de tu cuerpo, tus objetivos de rendimiento y tus exigencias diarias. En tu domicilio, el gimnasio de tu empresa o una instalación asociada en Barcelona. Progreso medible.",
      rate: "Desde €110 · En domicilio o instalaciones de empresa",
    },
  },
];

export default function Services() {
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
    <div ref={ref}>
      {/*Philosophy*/}
      <section className="philosophy" id="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-header">
            <div>
              <span className="section-label reveal">
                {t(lang, "Philosophy", "Filosofía")}
              </span>
              <h2 className="section-title reveal reveal-delay-1">
                {lang === "en" ? (
                  <>
                    Three principles.
                    <br />
                    <em>Zero</em> compromise.
                  </>
                ) : (
                  <>
                    Tres principios.
                    <br />
                    <em>Cero</em> concesiones.
                  </>
                )}
              </h2>
            </div>
            <p className="philosophy-intro reveal reveal-delay-2">
              {t(
                lang,
                "Every POREOS programme is built on the same intellectual foundation that governs world-class performance institutions — where precision, privacy, and progressive science are non-negotiable standards, not optional upgrades.",
                "Cada programa de POREOS se construye sobre la misma base intelectual que rige las instituciones de rendimiento de clase mundial: donde la precisión, la privacidad y la ciencia progresiva son estándares innegociables, no mejoras opcionales.",
              )}
            </p>
          </div>

          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className={`pillar reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              >
                <div className="pillar-photo">
                  <img src={p.img} alt={p[lang].title} />
                </div>
                <div className="pillar-number">{p.n}</div>
                <div className="pillar-title">{p[lang].title}</div>
                <p className="pillar-text">{p[lang].text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Services*/}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <span className="section-label reveal">
                {t(lang, "Services", "Servicios")}
              </span>
              <h2 className="section-title reveal reveal-delay-1">
                {lang === "en" ? (
                  <>
                    Curated for
                    <br />
                    <em>exceptional</em> lives.
                  </>
                ) : (
                  <>
                    Diseñados para
                    <br />
                    vidas <em>excepcionales.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="services-note reveal">
              {t(
                lang,
                "All services available at your home, your company's gym or dedicated space, or at exclusive partner facilities across Barcelona.",
                "Todos los servicios disponibles en tu domicilio, en el gimnasio o espacio de tu empresa, o en instalaciones exclusivas en Barcelona.",
              )}
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.n}
                className={`service-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              >
                <div className="service-card-photo">
                  <img src={s.img} alt={s[lang].name} />
                </div>
                <span className="service-icon">{s[lang].icon}</span>
                <h3 className="service-name">{s[lang].name}</h3>
                <p className="service-desc">{s[lang].desc}</p>
                <span className="service-rate">{s[lang].rate}</span>
              </div>
            ))}
            <div className="service-card featured reveal">
              <div className="featured-content">
                <span className="service-icon">
                  {t(lang, "04 — Signature", "04 — Programa Insignia")}
                </span>
                <h3 className="service-name">
                  {t(lang, "The POREOS Experience", "La Experiencia POREOS")}
                </h3>
                <p className="service-desc">
                  {t(
                    lang,
                    "The flagship programme for clients who require a fully integrated approach. Combining Yoga, Pilates Mat, and Functional Training into one bespoke programme, managed by Suli personally. Sessions at your home, your company's dedicated space, or exclusive partner facilities throughout Barcelona. Available on a monthly retainer or intensive basis.",
                    "El programa insignia para clientes que necesitan un enfoque completamente integrado. Combina Yoga, Pilates Mat y Entrenamiento Funcional en un programa a medida, gestionado personalmente por Suli. Sesiones en tu domicilio, el espacio de tu empresa o instalaciones exclusivas en Barcelona.",
                  )}
                </p>
                <span className="service-rate">
                  {t(
                    lang,
                    "By private arrangement · Barcelona only",
                    "Mediante acuerdo privado · Solo en Barcelona",
                  )}
                </span>
              </div>
              <div className="featured-image">
                <img
                  src={imgPersonal}
                  alt="The POREOS Experience"
                  className="featured-photo"
                />
                <div className="featured-image-pattern" />
                <div className="featured-image-text">POREOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
