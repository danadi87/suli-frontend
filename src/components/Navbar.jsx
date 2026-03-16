import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang, t } from "../context/language.context.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", en: "About", es: "Sobre Suli" },
    { href: "#services", en: "Services", es: "Servicios" },
    { href: "#membership", en: "Membership", es: "Suscripción" },
    { href: "#consult", en: "Consult", es: "Consulta" },
    { href: "#login", en: "Login", es: "Iniciar sesión" },
  ];

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        POREOS
      </a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{t(lang, l.en, l.es)}</a>
          </li>
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
