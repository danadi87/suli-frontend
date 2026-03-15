import React from "react";
import "../styles/Services.css";

export function Services() {
  return (
    <div>
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <span className="section-label reveal" data-en="true">
                Services
              </span>
              <span className="section-label reveal" data-es="true">
                Servicios
              </span>
              <h2
                className="section-title reveal reveal-delay-1"
                data-en="true"
              >
                Curated for
                <br />
                <em>exceptional</em> lives.
              </h2>
              <h2
                className="section-title reveal reveal-delay-1"
                data-es="true"
              >
                Diseñados para
                <br />
                vidas <em>excepcionales.</em>
              </h2>
            </div>
            <p className="services-note reveal" data-en="true">
              All services available at your home, your company's gym or
              dedicated space, or at exclusive partner facilities across
              Barcelona.
            </p>
            <p className="services-note reveal" data-es="true">
              Todos los servicios disponibles en tu domicilio, en el gimnasio o
              espacio de tu empresa, o en instalaciones exclusivas en Barcelona.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <span className="service-icon" data-en="true">
                01 — Yoga
              </span>
              <span className="service-icon" data-es="true">
                01 — Yoga
              </span>
              <h3 className="service-name" data-en="true">
                Private Yoga
              </h3>
              <h3 className="service-name" data-es="true">
                Yoga Privado
              </h3>
              <p className="service-desc" data-en="true">
                Vinyasa, Hatha, and Yin sessions curated entirely to your
                physiology, schedule, and intention. Available at your home,
                rooftop, or partner location. Each session is a private ritual —
                not a class.
              </p>
              <p className="service-desc" data-es="true">
                Sesiones de Vinyasa, Hatha y Yin diseñadas según tu fisiología,
                horario e intención. Disponibles en tu domicilio, terraza o
                espacio asociado. Cada sesión es un ritual privado, no una
                clase.
              </p>
              <span className="service-rate" data-en="true">
                From €90 · 60 or 90-minute format
              </span>
              <span className="service-rate" data-es="true">
                Desde €90 · Formato de 60 o 90 minutos
              </span>
            </div>

            <div className="service-card reveal reveal-delay-1">
              <span className="service-icon" data-en="true">
                02 — Pilates
              </span>
              <span className="service-icon" data-es="true">
                02 — Pilates
              </span>
              <h3 className="service-name" data-en="true">
                Mat Pilates
              </h3>
              <h3 className="service-name" data-es="true">
                Pilates Mat
              </h3>
              <p className="service-desc" data-en="true">
                One-to-one Pilates Mat sessions focused on structural alignment,
                postural intelligence, and deep functional strength. Conducted
                at your home or dedicated space — the precision of a private
                studio without the group experience.
              </p>
              <p className="service-desc" data-es="true">
                Sesiones individuales de Pilates Mat orientadas a la alineación
                estructural, la inteligencia postural y la fuerza funcional
                profunda. En tu domicilio o espacio dedicado, con la precisión
                de un estudio privado.
              </p>
              <span className="service-rate" data-en="true">
                From €95 · Private session format
              </span>
              <span className="service-rate" data-es="true">
                Desde €95 · Formato de sesión privada
              </span>
            </div>

            <div className="service-card reveal reveal-delay-2">
              <span className="service-icon" data-en="true">
                03 — Functional Training
              </span>
              <span className="service-icon" data-es="true">
                03 — Entrenamiento Funcional
              </span>
              <h3 className="service-name" data-en="true">
                Functional Performance Training
              </h3>
              <h3 className="service-name" data-es="true">
                Entrenamiento Funcional de Alto Rendimiento
              </h3>
              <p className="service-desc" data-en="true">
                Evidence-based functional training designed around your body's
                mechanics, performance goals, and daily demands. Sessions
                conducted at your home, your company's gym, or a partner
                facility in Barcelona. Measurable progress. No wasted movements.
              </p>
              <p className="service-desc" data-es="true">
                Entrenamiento funcional basado en evidencia, diseñado en torno a
                la mecánica de tu cuerpo, tus objetivos de rendimiento y tus
                exigencias diarias. En tu domicilio, el gimnasio de tu empresa o
                una instalación asociada en Barcelona. Progreso medible. Sin
                movimientos innecesarios.
              </p>
              <span className="service-rate" data-en="true">
                From €110 · In-home or company facility
              </span>
              <span className="service-rate" data-es="true">
                Desde €110 · En domicilio o instalaciones de empresa
              </span>
            </div>

            <div className="service-card featured reveal">
              <div className="featured-content">
                <span className="service-icon" data-en="true">
                  04 — Signature
                </span>
                <span className="service-icon" data-es="true">
                  04 — Programa Insignia
                </span>
                <h3 className="service-name" data-en="true">
                  The POREOS Experience
                </h3>
                <h3 className="service-name" data-es="true">
                  La Experiencia POREOS
                </h3>
                <p className="service-desc" data-en="true">
                  The flagship programme for clients who require a fully
                  integrated approach. Combining Yoga, Pilates Mat, and
                  Functional Training into one bespoke programme, managed by
                  Suli personally. Sessions at your home, your company's
                  dedicated space, or exclusive partner facilities throughout
                  Barcelona. Available on a monthly retainer or intensive basis.
                </p>
                <p className="service-desc" data-es="true">
                  El programa insignia para clientes que necesitan un enfoque
                  completamente integrado. Combina Yoga, Pilates Mat y
                  Entrenamiento Funcional en un programa a medida, gestionado
                  personalmente por Suli. Sesiones en tu domicilio, el espacio
                  de tu empresa o instalaciones exclusivas en Barcelona.
                  Disponible con retainer mensual o en formato intensivo.
                </p>
                <span className="service-rate" data-en="true">
                  By private arrangement · Barcelona only
                </span>
                <span className="service-rate" data-es="true">
                  Mediante acuerdo privado · Solo en Barcelona
                </span>
              </div>
              <div className="featured-image">
                <div className="featured-image-pattern"></div>
                <div className="featured-image-text">POREOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
