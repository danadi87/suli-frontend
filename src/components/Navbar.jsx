import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang, t } from "../context/language.context.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/about", en: "About", es: "Sobre Suli" },
    { to: "/services", en: "Services", es: "Servicios" },
    { to: "/membership", en: "Membership", es: "Suscripción" },
    { to: "/consultation", en: "Consult", es: "Consulta" },
    { to: "/login", en: "Login", es: "Iniciar sesión" },
  ];

  return (
    <nav id="navbar" className={`${scrolled || !isHome ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        POREOS
      </Link>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to}>{t(lang, l.en, l.es)}</Link>
          </li>
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
