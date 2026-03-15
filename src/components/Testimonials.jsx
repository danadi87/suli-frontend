import React from "react";
import "../styles/Testimonials.css";

export function Testimonials() {
  return (
    <div>
      <section className="testimonials" id="testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <div>
              <span className="section-label" data-en="true">
                Client Experiences
              </span>
              <span className="section-label" data-es="true">
                Experiencias de Clientes
              </span>
              <h2 className="section-title" style="color: var(--cream)" data-en>
                Words from
                <br />
                <em style="color:var(--tan)">private members.</em>
              </h2>
              <h2 className="section-title" style="color: var(--cream)" data-es>
                Palabras de
                <br />
                <em style="color:var(--tan)">miembros privados.</em>
              </h2>
            </div>
            <p className="testimonials-note" data-en="true">
              Identities protected at client request.
              <br />
              All testimonials are genuine.
            </p>
            <p className="testimonials-note" data-es="true">
              Identidades protegidas a petición del cliente.
              <br />
              Todos los testimonios son reales.
            </p>
          </div>
          <div className="testi-grid">
            <div className="testi-card reveal">
              <div className="testi-quote-mark">"</div>
              <p className="testi-text" data-en="true">
                Working with Suli is unlike anything I've experienced. There are
                no wasted sessions, no generic plans. He understands that my
                time has a value — and he respects it absolutely.
              </p>
              <p className="testi-text" data-es="true">
                Trabajar con Suli es algo que no había experimentado antes. No
                hay sesiones perdidas, ni planes genéricos. Él entiende que mi
                tiempo tiene valor — y lo respeta absolutamente.
              </p>
              <div className="testi-client">
                <div className="testi-name">C.A.</div>
                <div className="testi-role" data-en="true">
                  Managing Director, Private Equity · Barcelona
                </div>
                <div className="testi-role" data-es="true">
                  Director General, Private Equity · Barcelona
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-1">
              <div className="testi-quote-mark">"</div>
              <p className="testi-text" data-en="true">
                I travel constantly. Suli built me a programme I can follow
                anywhere — and when I'm in Barcelona, he's available exactly
                when I need him. The discretion and quality are unmatched.
              </p>
              <p className="testi-text" data-es="true">
                Viajo constantemente. Suli me diseñó un programa que puedo
                seguir en cualquier lugar — y cuando estoy en Barcelona, él está
                disponible exactamente cuando lo necesito. La discreción y la
                calidad son incomparables.
              </p>
              <div className="testi-client">
                <div className="testi-name">R.M.</div>
                <div className="testi-role" data-en="true">
                  Founder & CEO · Technology Group · Barcelona
                </div>
                <div className="testi-role" data-es="true">
                  Fundador y CEO · Grupo Tecnológico · Barcelona
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-quote-mark">"</div>
              <p className="testi-text" data-en="true">
                I came to Suli after years of conventional training that yielded
                little. Within three months the structural improvements were
                measurable by my own physicians. This is precision at a
                different level.
              </p>
              <p className="testi-text" data-es="true">
                Llegué a Suli tras años de entrenamiento convencional con
                escasos resultados. En tres meses, las mejoras estructurales
                eran medibles por mis propios médicos. Esto es precisión a otro
                nivel.
              </p>
              <div className="testi-client">
                <div className="testi-name">S.K.</div>
                <div className="testi-role" data-en="true">
                  Surgeon · Private Practice · Barcelona
                </div>
                <div className="testi-role" data-es="true">
                  Cirujano · Práctica Privada · Barcelona
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
