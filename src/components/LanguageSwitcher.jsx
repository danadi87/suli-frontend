import React from "react";
import "../styles/LanguageSwitcher.css";

export function LanguageSwitcher() {
  function setLang(lang) {
    // Show/hide all bilingual elements
    document.querySelectorAll("[data-en]").forEach((el) => {
      el.classList.toggle("lang-hidden", lang !== "en");
    });
    document.querySelectorAll("[data-es]").forEach((el) => {
      el.classList.toggle("lang-hidden", lang !== "es");
    });
    // Update button states
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    document.getElementById("btn-es").classList.toggle("active", lang === "es");
  }

  // Update email placeholder
  const emailInput = document.getElementById("consult-email-input");
  if (emailInput) {
    emailInput.placeholder =
      lang === "es" ? "Tu dirección de correo" : "Your email address";
  }

  // Init on load — English by default
  document.addEventListener("DOMContentLoaded", () => setLang("en"));

  // Custom cursor
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");

  document.addEventListener("mousemove", (e) => {
    const mx = e.clientX,
      my = e.clientY;
    cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    ring.style.transform = `translate(${mx - 18}px, ${my - 18}px)`;
  });

  document
    .querySelectorAll("a, button, .pillar, .service-card, .testi-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(2)";
        ring.style.opacity = "1";
        ring.style.transform += " scale(1.5)";
      });
      el.addEventListener("mouseleave", () => {
        ring.style.opacity = "0.5";
      });
    });
}
