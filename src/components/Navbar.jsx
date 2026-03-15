import React from "react";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <div>
      <nav id="navbar">
        <a href="#" className="nav-logo">
          POREOS
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" data-en="true">
              About
            </a>
            <a href="#about" data-es="true">
              Sobre Suli
            </a>
          </li>
          <li>
            <a href="#services" data-en="true">
              Services
            </a>
            <a href="#services" data-es="true">
              Servicios
            </a>
          </li>
          <li>
            <a href="#membership" data-en="true">
              Investment
            </a>
            <a href="#membership" data-es="true">
              Inversión
            </a>
          </li>
          <li>
            <a href="#consult" data-en="true">
              Consult
            </a>
            <a href="#consult" data-es="true">
              Consulta
            </a>
          </li>
          <li>
            <a href="#contact" data-en="true">
              Contact
            </a>
            <a href="#contact" data-es="true">
              Contacto
            </a>
          </li>
        </ul>
        <div className="lang-switch">
          <button
            className="lang-btn active"
            id="btn-en"
            onclick="setLang('en')"
          >
            EN
          </button>
          <div className="lang-divider"></div>
          <button className="lang-btn" id="btn-es" onclick="setLang('es')">
            ES
          </button>
        </div>
      </nav>
      ;
    </div>
  );
}
