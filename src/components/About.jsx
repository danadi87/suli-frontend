import React from "react";
import "../styles/About.css";

export function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-image-col">
          <img
            className="about-photo"
            src="./assets/0d7f98a3-4539-40ee-b191-382ae8ebd46a.JPEG"
            alt="Suli"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #4C3D19, #354024)";
            }}
          />
          <div className="about-photo-tint"></div>
          <div className="about-accent">
            <div className="about-accent-stat">12+</div>
            <div className="about-accent-label" data-en>
              Years of Private Practice
            </div>
            <div className="about-accent-label" data-es>
              Años de Práctica Privada
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label reveal" data-en="true">
            About
          </span>
          <span className="section-label reveal" data-es="true">
            Sobre Suli
          </span>

          <h2 className="section-title reveal reveal-delay-1" data-en="true">
            Not a trainer.
            <br />A <em>performance</em>
            <br />
            architect.
          </h2>
          <h2 className="section-title reveal reveal-delay-1" data-es="true">
            No es un entrenador.
            <br />
            Es un <em>arquitecto</em>
            <br />
            del rendimiento.
          </h2>

          <p className="about-body reveal reveal-delay-2" data-en="true">
            Suli is a Barcelona-based luxury wellness consultant specialising in
            bespoke physical optimisation for executives, entrepreneurs, and
            high-net-worth individuals. With advanced certifications in Vinyasa
            Yoga, Pilates Mat, and Functional Performance Training, he has built
            a private practice serving discerning clients who demand measurable
            results with absolute discretion.
          </p>
          <p className="about-body reveal reveal-delay-2" data-es="true">
            Suli es un consultor de bienestar de alto nivel con sede en
            Barcelona, especializado en optimización física a medida para
            ejecutivos, emprendedores y particulares de alto poder adquisitivo.
            Con certificaciones avanzadas en Yoga Vinyasa, Pilates Mat y
            Entrenamiento Funcional de Alto Rendimiento, ha desarrollado una
            práctica privada para clientes exigentes que buscan resultados
            medibles con absoluta discreción.
          </p>

          <p
            className="about-body reveal reveal-delay-2"
            style={{ marginTop: "-1rem;" }}
            data-en="true"
          >
            His methodology bridges evidence-based movement science with the
            demands of elite performance — delivering training experiences held
            to the same standard as private banking or concierge medicine.
          </p>
          <p
            className="about-body reveal reveal-delay-2"
            style={{ marginTop: "-1rem;" }}
            data-es="true"
          >
            Su metodología une la ciencia del movimiento basada en evidencia con
            las exigencias del rendimiento de élite, ofreciendo una experiencia
            de entrenamiento a la altura de la banca privada o la medicina de
            concierge.
          </p>

          <div className="about-credentials reveal reveal-delay-3">
            <div className="credential-item">
              <div className="credential-title">Yoga Alliance RYT</div>
              <div className="credential-sub">Vinyasa · Hatha · Yin</div>
            </div>
            <div className="credential-item">
              <div className="credential-title" data-en="true">
                Pilates Mat Certified
              </div>
              <div className="credential-title" data-es="true">
                Pilates Mat Certificado
              </div>
              <div className="credential-sub" data-en="true">
                Precision Movement Specialist
              </div>
              <div className="credential-sub" data-es="true">
                Especialista en Movimiento
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-title">ACE Personal Training</div>
              <div className="credential-sub" data-en="true">
                Functional Performance
              </div>
              <div className="credential-sub" data-es="true">
                Entrenamiento Funcional
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-header">
            <div>
              <span className="section-label reveal" data-en="true">
                Philosophy
              </span>
              <span className="section-label reveal" data-es="true">
                Filosofía
              </span>
              <h2
                className="section-title reveal reveal-delay-1"
                data-en="true"
              >
                Three principles.
                <br />
                <em>Zero</em> compromise.
              </h2>
              <h2
                className="section-title reveal reveal-delay-1"
                data-es="true"
              >
                Tres principios.
                <br />
                <em>Cero</em> concesiones.
              </h2>
            </div>
            <p
              className="philosophy-intro reveal reveal-delay-2"
              data-en="true"
            >
              Every POREOS programme is built on the same intellectual
              foundation that governs world-class performance institutions —
              where precision, privacy, and progressive science are
              non-negotiable standards, not optional upgrades.
            </p>
            <p
              className="philosophy-intro reveal reveal-delay-2"
              data-es="true"
            >
              Cada programa de POREOS se construye sobre la misma base
              intelectual que rige las instituciones de rendimiento de clase
              mundial: donde la precisión, la privacidad y la ciencia progresiva
              son estándares innegociables, no mejoras opcionales.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="pillar-number">01</div>
              <div className="pillar-title" data-en="true">
                Precision Over Volume
              </div>
              <div className="pillar-title" data-es="true">
                Precisión Sobre Volumen
              </div>
              <p className="pillar-text" data-en="true">
                Fewer, more intentional sessions yield superior outcomes. Each
                movement is programmed with biomechanical exactness, eliminating
                the inefficiency of conventional training.
              </p>
              <p className="pillar-text" data-es="true">
                Menos sesiones, más intencionales, generan resultados
                superiores. Cada movimiento está programado con exactitud
                biomecánica, eliminando la ineficiencia del entrenamiento
                convencional.
              </p>
            </div>
            <div className="pillar reveal reveal-delay-1">
              <div className="pillar-number">02</div>
              <div className="pillar-title" data-en="true">
                Science as Foundation
              </div>
              <div className="pillar-title" data-es="true">
                La Ciencia como Base
              </div>
              <p className="pillar-text" data-en="true">
                Every protocol is grounded in peer-reviewed research. Progress
                is tracked, measured, and adjusted with the same rigour as a
                performance laboratory.
              </p>
              <p className="pillar-text" data-es="true">
                Cada protocolo se basa en investigación científica contrastada.
                El progreso se registra, mide y ajusta con el mismo rigor que un
                laboratorio de rendimiento.
              </p>
            </div>
            <div className="pillar reveal reveal-delay-2">
              <div className="pillar-number">03</div>
              <div className="pillar-title" data-en="true">
                Absolute Discretion
              </div>
              <div className="pillar-title" data-es="true">
                Discreción Absoluta
              </div>
              <p className="pillar-text" data-en="true">
                Sessions take place at your residence, your company's dedicated
                space, or exclusive partner facilities in Barcelona. Your
                practice — and your results — remain entirely confidential.
              </p>
              <p className="pillar-text" data-es="true">
                Las sesiones se realizan en tu domicilio, en el espacio dedicado
                de tu empresa o en instalaciones exclusivas en Barcelona. Tu
                práctica — y tus resultados — son completamente confidenciales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
