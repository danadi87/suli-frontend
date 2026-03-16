import "../styles/Footer.css";
import { useLang, t } from "../context/language.context.jsx";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer>
      <span className="footer-copy">
        © {new Date().getFullYear()} POREOS · Suli · Barcelona
      </span>
      <div className="footer-legal">
        <a href="#">{t(lang, "Privacy", "Privacidad")}</a>
        <a href="#">{t(lang, "Terms", "Términos")}</a>
        <a href="#">{t(lang, "Discretion Policy", "Política de Discreción")}</a>
      </div>
    </footer>
  );
}
