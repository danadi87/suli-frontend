import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";
import { useLang, t } from "../context/language.context.jsx";
import "../styles/SignUp.css";

const INITIAL = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [form, setForm] = useState(INITIAL);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError(
        t(lang, "Passwords do not match.", "Las contraseñas no coinciden."),
      );
      return;
    }
    if (form.password.length < 6) {
      setError(
        t(
          lang,
          "Password must be at least 6 characters.",
          "La contraseña debe tener al menos 6 caracteres.",
        ),
      );
      return;
    }

    setLoading(true);
    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...payload } = form;
      await signup(payload);
      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          t(
            lang,
            "Something went wrong. Please try again.",
            "Algo salió mal. Por favor, inténtalo de nuevo.",
          ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-bg-text">POREOS</div>

      <div className="signup-card">
        <div className="signup-logo">POREOS</div>
        <div className="signup-subtitle">
          {t(lang, "Request Access", "Solicitar Acceso")}
        </div>

        {error && <div className="signup-error">{error}</div>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {t(lang, "First Name", "Nombre")}
              </label>
              <input
                className="form-input"
                name="firstName"
                placeholder={t(lang, "First", "Nombre")}
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t(lang, "Last Name", "Apellido")}
              </label>
              <input
                className="form-input"
                name="lastName"
                placeholder={t(lang, "Last", "Apellido")}
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
              {t(lang, "Phone", "Teléfono")}{" "}
              <span style={{ opacity: 0.5 }}>
                {t(lang, "(optional)", "(opcional)")}
              </span>
            </label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder="+34 ..."
              value={form.phone}
              onChange={handleChange}
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
              placeholder={t(
                lang,
                "Minimum 6 characters",
                "Mínimo 6 caracteres",
              )}
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              {t(lang, "Confirm Password", "Confirmar Contraseña")}
            </label>
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              placeholder={t(lang, "Repeat password", "Repetir contraseña")}
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="signup-submit" disabled={loading}>
            {loading
              ? t(lang, "Requesting…", "Solicitando…")
              : t(lang, "Request Access", "Solicitar Acceso")}
          </button>
        </form>

        <div className="signup-footer">
          {t(lang, "Already a member?", "¿Ya eres miembro?")}{" "}
          <Link to="/login">{t(lang, "Sign in", "Iniciar sesión")}</Link>
        </div>
      </div>
    </div>
  );
}
