import React from "react";
import "../styles/Consultation.css";

export function Consultation() {
  return (
    <section className="consult" id="consult">
      <div className="consult-bg-text">POREOS</div>
      <div className="consult-inner reveal">
        <span
          className="section-label"
          style="text-align:center; display:block; margin-bottom: 1.5rem;"
          data-en
        >
          Private Consultation
        </span>
        <span
          className="section-label"
          style="text-align:center; display:block; margin-bottom: 1.5rem;"
          data-es
        >
          Consulta Privada
        </span>
        <h2 className="consult-title" data-en>
          Begin with a<br />
          <em>private conversation.</em>
        </h2>
        <h2 className="consult-title" data-es>
          Comienza con una
          <br />
          <em>conversación privada.</em>
        </h2>
        <p className="consult-text" data-en>
          Every client relationship begins with a confidential 30-minute
          consultation — no obligation, no sales process. Simply an honest
          conversation about where you are and what excellence looks like for
          you.
        </p>
        <p className="consult-text" data-es>
          Cada relación con un cliente comienza con una consulta confidencial de
          30 minutos — sin compromiso, sin proceso de venta. Simplemente una
          conversación honesta sobre dónde estás y cómo es la excelencia para
          ti.
        </p>
        <div className="consult-form">
          <input
            type="email"
            className="consult-input"
            id="consult-email-input"
            placeholder="Your email address"
          />
          <button className="consult-btn" data-en>
            Request →
          </button>
          <button className="consult-btn" data-es>
            Solicitar →
          </button>
        </div>
        <p className="consult-privacy" data-en>
          Your information is never shared. Response within 24 hours.
        </p>
        <p className="consult-privacy" data-es>
          Tu información nunca se comparte. Respuesta en 24 horas.
        </p>
      </div>
    </section>
  );
}
