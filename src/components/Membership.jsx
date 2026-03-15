import React from "react";
import "../styles/Membership.css";

export function Membership() {
  return (
    <div>
      <section className="membership" id="membership">
        <div className="membership-inner">
          <div className="membership-header reveal">
            <span
              className="section-label"
              style="text-align:center; display:block;"
              data-en="true"
            >
              Investment
            </span>
            <span
              className="section-label"
              style="text-align:center; display:block;"
              data-es="true"
            >
              Inversión
            </span>
            <h2
              className="section-title"
              style="text-align:center;"
              data-en="true"
            >
              Select your
              <br />
              <em>programme.</em>
            </h2>
            <h2
              className="section-title"
              style="text-align:center;"
              data-es="true"
            >
              Elige tu
              <br />
              <em>programa.</em>
            </h2>
            <p className="membership-subhead" data-en="true">
              All programmes include a complimentary initial assessment and
              bespoke protocol design.
            </p>
            <p className="membership-subhead" data-es="true">
              Todos los programas incluyen una valoración inicial gratuita y un
              diseño de protocolo a medida.
            </p>
          </div>
          <div className="plans-grid">
            <div className="plan reveal">
              <span className="plan-tier" data-en="true">
                Essential
              </span>
              <span className="plan-tier" data-es="true">
                Esencial
              </span>
              <h3 className="plan-name" data-en="true">
                The Practice
              </h3>
              <h3 className="plan-name" data-es="true">
                La Práctica
              </h3>
              <div className="plan-price">€420</div>
              <div className="plan-price-note" data-en="true">
                Five-session pack · Single discipline
              </div>
              <div className="plan-price-note" data-es="true">
                Pack de cinco sesiones · Una disciplina
              </div>
              <ul className="plan-features">
                <li data-en="true">5 private sessions in chosen discipline</li>
                <li data-es="true">
                  5 sesiones privadas en la disciplina elegida
                </li>
                <li data-en="true">Initial movement assessment</li>
                <li data-es="true">Valoración inicial de movimiento</li>
                <li data-en="true">Personalised session programming</li>
                <li data-es="true">Programación de sesiones personalizada</li>
                <li data-en="true">In-home or company facility sessions</li>
                <li data-es="true">
                  Sesiones en domicilio o instalaciones de empresa
                </li>
                <li data-en="true">Session notes and progress tracking</li>
                <li data-es="true">
                  Notas de sesión y seguimiento del progreso
                </li>
              </ul>
              <a href="#consult" className="plan-cta" data-en="true">
                Begin Here
              </a>
              <a href="#consult" className="plan-cta" data-es="true">
                Comenzar Aquí
              </a>
            </div>

            <div className="plan featured-plan reveal reveal-delay-1">
              <div className="plan-badge" data-en="true">
                Most Selected
              </div>
              <div className="plan-badge" data-es="true">
                Más Elegido
              </div>
              <span className="plan-tier" data-en="true">
                Signature
              </span>
              <span className="plan-tier" data-es="true">
                Programa Insignia
              </span>
              <h3 className="plan-name" data-en="true">
                The Residency
              </h3>
              <h3 className="plan-name" data-es="true">
                La Residencia
              </h3>
              <div className="plan-price">€1,200</div>
              <div className="plan-price-note" data-en="true">
                Monthly · 8 sessions · Integrated approach
              </div>
              <div className="plan-price-note" data-es="true">
                Mensual · 8 sesiones · Enfoque integrado
              </div>
              <ul className="plan-features">
                <li data-en="true">8 private sessions across disciplines</li>
                <li data-es="true">8 sesiones privadas entre disciplinas</li>
                <li data-en="true">Comprehensive biometric assessment</li>
                <li data-es="true">Valoración biométrica completa</li>
                <li data-en="true">
                  Cross-modal programming (Yoga, Pilates, Functional)
                </li>
                <li data-es="true">
                  Programación multimodal (Yoga, Pilates, Funcional)
                </li>
                <li data-en="true">
                  Priority scheduling & same-day availability
                </li>
                <li data-es="true">
                  Prioridad en agenda y disponibilidad el mismo día
                </li>
                <li data-en="true">Lifestyle & recovery protocol design</li>
                <li data-es="true">
                  Diseño de protocolo de estilo de vida y recuperación
                </li>
                <li data-en="true">At-home or company space sessions</li>
                <li data-es="true">
                  Sesiones en domicilio o espacio de empresa
                </li>
              </ul>
              <a href="#consult" className="plan-cta" data-en="true">
                Reserve Your Place
              </a>
              <a href="#consult" className="plan-cta" data-es="true">
                Reservar tu Lugar
              </a>
            </div>

            <div className="plan reveal reveal-delay-2">
              <span className="plan-tier" data-en="true">
                Elite
              </span>
              <span className="plan-tier" data-es="true">
                Élite
              </span>
              <h3 className="plan-name" data-en="true">
                The Retainer
              </h3>
              <h3 className="plan-name" data-es="true">
                El Retainer
              </h3>
              <div className="plan-price">€2,500</div>
              <div className="plan-price-note" data-en="true">
                Monthly · Unlimited access · Full advisory
              </div>
              <div className="plan-price-note" data-es="true">
                Mensual · Acceso ilimitado · Asesoría completa
              </div>
              <ul className="plan-features">
                <li data-en="true">Unlimited sessions within monthly period</li>
                <li data-es="true">
                  Sesiones ilimitadas dentro del período mensual
                </li>
                <li data-en="true">Full lifestyle integration consultancy</li>
                <li data-es="true">
                  Consultoría de integración de estilo de vida completa
                </li>
                <li data-en="true">Corporate & executive wellness workshops</li>
                <li data-es="true">
                  Talleres de bienestar corporativo y ejecutivo
                </li>
                <li data-en="true">Nutritional alignment guidance</li>
                <li data-es="true">Orientación de alineación nutricional</li>
                <li data-en="true">
                  Sessions at your home or company facilities
                </li>
                <li data-es="true">
                  Sesiones en tu domicilio o instalaciones de empresa
                </li>
                <li data-en="true">Direct line access to Suli — 7 days</li>
                <li data-es="true">Línea directa con Suli — 7 días</li>
              </ul>
              <a href="#consult" className="plan-cta" data-en="true">
                Arrange a Call
              </a>
              <a href="#consult" className="plan-cta" data-es="true">
                Organizar una Llamada
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
