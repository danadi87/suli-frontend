import { useEffect, useRef } from "react";
import "../styles/About.css";
import { useLang, t } from "../context/language.context.jsx";
import aboutPhoto from "../assets/pilates-studio-interior.jpeg";

export default function About() {
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
    <>
      {/*Manifesto*/}
      <div className="manifesto">
        <div className="manifesto-inner">
          <p className="manifesto-quote">
            {lang === "en" ? (
              <>
                "The body is not a project to be fixed.
                <br />
                It is a <span>precision instrument</span> to be calibrated."
              </>
            ) : (
              <>
                "El cuerpo no es un proyecto a reparar.
                <br />
                Es un <span>instrumento de precisión</span> que hay que
                calibrar."
              </>
            )}
          </p>
          <span className="manifesto-attr">— Suli · Wellness Philosophy</span>
        </div>
      </div>

      {/*About*/}
      <section className="about" id="about" ref={ref}>
        <div className="about-image-col">
          <img
            className="about-photo"
            src={aboutPhoto}
            alt="Suli"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #4C3D19, #354024)";
            }}
          />
          <div className="about-photo-tint" />
          <div className="about-accent">
            <div className="about-accent-stat">12+</div>
            <div className="about-accent-label">
              {t(lang, "Years of Private Practice", "Años de Práctica Privada")}
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label reveal">
            {t(lang, "About", "Sobre Suli")}
          </span>

          <h2 className="section-title reveal reveal-delay-1">
            {lang === "en" ? (
              <>
                Not a trainer.
                <br />A <em>performance</em>
                <br />
                architect.
              </>
            ) : (
              <>
                No es un entrenador.
                <br />
                Es un <em>arquitecto</em>
                <br />
                del rendimiento.
              </>
            )}
          </h2>

          <p className="about-body reveal reveal-delay-2">
            {t(
              lang,
              "Suli is a Barcelona-based luxury wellness consultant specialising in bespoke physical optimisation for executives, entrepreneurs, and high-net-worth individuals. With advanced certifications in Vinyasa Yoga, Pilates Mat, and Functional Performance Training, he has built a private practice serving discerning clients who demand measurable results with absolute discretion.",
              "Suli es un consultor de bienestar de alto nivel con sede en Barcelona, especializado en optimización física a medida para ejecutivos, emprendedores y particulares de alto poder adquisitivo. Con certificaciones avanzadas en Yoga Vinyasa, Pilates Mat y Entrenamiento Funcional de Alto Rendimiento, ha desarrollado una práctica privada para clientes exigentes que buscan resultados medibles con absoluta discreción.",
            )}
          </p>

          <p className="about-body reveal reveal-delay-2 mt-neg">
            {t(
              lang,
              "His methodology bridges evidence-based movement science with the demands of elite performance — delivering training experiences held to the same standard as private banking or concierge medicine.",
              "Su metodología une la ciencia del movimiento basada en evidencia con las exigencias del rendimiento de élite, ofreciendo una experiencia de entrenamiento a la altura de la banca privada o la medicina de concierge.",
            )}
          </p>

          <div className="about-credentials reveal reveal-delay-3">
            <div className="credential-item">
              <div className="credential-title">Yoga Alliance RYT</div>
              <div className="credential-sub">Vinyasa · Hatha · Yin</div>
            </div>
            <div className="credential-item">
              <div className="credential-title">
                {t(lang, "Pilates Mat Certified", "Pilates Mat Certificado")}
              </div>
              <div className="credential-sub">
                {t(
                  lang,
                  "Precision Movement Specialist",
                  "Especialista en Movimiento",
                )}
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-title">ACE Personal Training</div>
              <div className="credential-sub">
                {t(lang, "Functional Performance", "Entrenamiento Funcional")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
