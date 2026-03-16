import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useLang, t } from "../context/language.context";
import "../styles/Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch {
      setError(
        t(
          lang,
          "Invalid credentials. Please try again.",
          "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg-text">POREOS</div>

      <div className="login-card">
        <div className="login-logo">POREOS</div>
        <div className="login-subtitle">
          {t(lang, "Member Access", "Acceso de Miembro")}
        </div>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              {t(lang, "Password", "Contraseña")}
            </label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="login-submit" disabled={loading}>
            {loading
              ? t(lang, "Entering…", "Entrando…")
              : t(lang, "Enter", "Entrar")}
          </button>
        </form>

        <div className="login-footer">
          {t(lang, "Don't have an account?", "¿No tienes cuenta?")}{" "}
          <Link to="/signup">
            {t(lang, "Request access", "Solicitar acceso")}
          </Link>
        </div>
      </div>
    </div>
  );
}
