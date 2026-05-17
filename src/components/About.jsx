import { useEffect, useRef } from "react";
import "../styles/About.css";
import { useLang, t } from "../context/language.context.jsx";
import aboutPhoto from "../assets/gym-setup.jpeg";

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
              "Suli brings a different discipline to wellness — one shaped by evidence, precision, and an uncompromising standard of results. Based in Barcelona, his private practice serves individuals who treat physical optimisation the way they treat everything else: seriously. Every programme is engineered around the client — their schedule, their physiology, their goals — and delivered with the discretion and professionalism of a trusted senior advisor.",
              "Suli aporta un enfoque diferente al bienestar: uno basado en la evidencia, la precisión y un nivel de exigencia sin concesiones en cuanto a los resultados. Con sede en Barcelona, su consulta privada atiende a personas que se toman la optimización física con la misma seriedad con la que se toman todo lo demás. Cada programa se diseña a medida del cliente —teniendo en cuenta su horario, su fisiología y sus objetivos— y se lleva a cabo con la discreción y la profesionalidad de un asesor de confianza.",
            )}
          </p>

          <p className="about-body reveal reveal-delay-2 mt-neg">
            {t(
              lang,
              "Suli is registered with the ROPEC, the Official Registry of Sports Professionals of Catalonia. Regulated by the Government of Catalonia, ROPEC accreditation confirms full professional qualification to deliver sports and performance coaching in the region — ensuring every client engages with a practitioner who meets recognised legal and professional standards. No ambiguity. No compromise.",
              "Suli está registrado en el ROPEC, el Registro Oficial de Profesionales del Deporte de Cataluña. Regulado por la Generalitat de Cataluña, la acreditación del ROPEC confirma la plena cualificación profesional para impartir entrenamiento deportivo y de rendimiento en la región, lo que garantiza que cada cliente cuente con un profesional que cumple con los estándares legales y profesionales reconocidos. Sin ambigüedades. Sin concesiones.",
            )}
          </p>
        </div>
      </section>
    </>
  );
}
