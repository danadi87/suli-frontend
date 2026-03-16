import { useLang } from "../context/language.context.jsx";
import "../styles/LanguageSwitcher.css";
// Styles are co-located in Navbar.css

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn${lang === "en" ? " active" : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <div className="lang-divider" />
      <button
        className={`lang-btn${lang === "es" ? " active" : ""}`}
        onClick={() => setLang("es")}
      >
        ES
      </button>
    </div>
  );
}
