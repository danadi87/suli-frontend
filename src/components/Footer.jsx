import React from "react";
import "../styles/Footer.css";

export function Footer() {
  return (
    <div>
      <footer>
        <span class="footer-copy">© 2026 POREOS · Suli · Barcelona</span>
        <div class="footer-legal">
          <a href="#" data-en="true">
            Privacy
          </a>
          <a href="#" data-es="true">
            Privacidad
          </a>
          <a href="#" data-en="true">
            Terms
          </a>
          <a href="#" data-es="true">
            Términos
          </a>
          <a href="#" data-en="true">
            Discretion Policy
          </a>
          <a href="#" data-es="true">
            Política de Discreción
          </a>
        </div>
      </footer>
    </div>
  );
}
