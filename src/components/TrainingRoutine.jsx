import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang, t } from "../context/language.context";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/TrainingRoutine.css";

// ── Step definitions ──
const STEPS = {
  en: [
    { n: "01", name: "Discipline & Format" },
    { n: "02", name: "Schedule & Location" },
    { n: "03", name: "Physical Profile" },
    { n: "04", name: "Intensity & Equipment" },
    { n: "05", name: "Review & Confirm" },
  ],
  es: [
    { n: "01", name: "Disciplina y Formato" },
    { n: "02", name: "Horario y Ubicación" },
    { n: "03", name: "Perfil Físico" },
    { n: "04", name: "Intensidad y Equipamiento" },
    { n: "05", name: "Revisión y Confirmación" },
  ],
};

const TOTAL_STEPS = 5;

// ── Initial data ──
const INITIAL_DATA = {
  // Step 1
  disciplines: [],
  sessionFormat: "",
  sessionDuration: "",
  // Step 2
  sessionsPerWeek: "",
  preferredTime: "",
  location: "",
  locationNotes: "",
  // Step 3
  fitnessLevel: "",
  limitations: [],
  limitationNotes: "",
  bodyFocus: [],
  // Step 4
  intensityPreference: "",
  equipment: [],
  musicPreference: "",
  coachingStyle: "",
  // Step 5
  name: "",
  email: "",
  additionalNotes: "",
};

// ── Helpers ───
function DisciplineCard({ id, name, desc, rate, checked, onChange }) {
  return (
    <>
      <input
        className="discipline-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="discipline-card">
        <span className="discipline-check">✓</span>
        <div className="discipline-name">{name}</div>
        <div className="discipline-desc">{desc}</div>
        <div className="discipline-rate">{rate}</div>
      </label>
    </>
  );
}

function RoutineTiles({ name, options, value, onChange }) {
  return (
    <div className="routine-tile-group">
      {options.map((o) => (
        <label key={o.value}>
          <input
            className="routine-tile-input"
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(name, o.value)}
          />
          <span className="routine-tile-label">
            <span className="routine-tile-title">{o.label}</span>
            {o.sub && <span className="routine-tile-sub">{o.sub}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

function RoutineCheckTiles({ name, options, values, onChange }) {
  const toggle = (val) => {
    const next = values.includes(val)
      ? values.filter((v) => v !== val)
      : [...values, val];
    onChange(name, next);
  };
  return (
    <div className="routine-tile-group">
      {options.map((o) => (
        <label key={o.value}>
          <input
            className="routine-tile-input"
            type="checkbox"
            name={name}
            value={o.value}
            checked={values.includes(o.value)}
            onChange={() => toggle(o.value)}
          />
          <span className="routine-tile-label">
            <span className="routine-tile-title">{o.label}</span>
            {o.sub && <span className="routine-tile-sub">{o.sub}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

function RoutineField({ label, children, span }) {
  return (
    <div className={`routine-field-group${span ? ` span-${span}` : ""}`}>
      <label className="routine-field-label">{label}</label>
      {children}
    </div>
  );
}

function RoutineSelect({ name, value, onChange, options }) {
  return (
    <div className="routine-select-wrapper">
      <select
        className="routine-select"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function TrainingRoutine() {
  const { lang } = useLang();
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const setField = (name, value) =>
    setData((prev) => ({ ...prev, [name]: value }));

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const toggleDiscipline = (val) => {
    const current = data.disciplines;
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    setField("disciplines", next);
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };
  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Training routine submitted:", data);
    setSubmitted(true);
  };

  const steps = STEPS[lang];

  // Sidebar summary values
  const summaryItems = [
    {
      key: t(lang, "Disciplines", "Disciplinas"),
      val:
        data.disciplines.length > 0
          ? data.disciplines.join(", ")
          : t(lang, "—", "—"),
    },
    {
      key: t(lang, "Frequency", "Frecuencia"),
      val: data.sessionsPerWeek || "—",
    },
    {
      key: t(lang, "Location", "Ubicación"),
      val: data.location || "—",
    },
    {
      key: t(lang, "Intensity", "Intensidad"),
      val: data.intensityPreference || "—",
    },
  ];

  // ── Confirmation ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="routine-page">
        <nav className="routine-topbar">
          <Link to="/" className="routine-topbar-logo">
            POREOS
          </Link>
          <div className="routine-topbar-right">
            <span className="routine-topbar-label">
              {t(lang, "Training Routine", "Rutina de Entrenamiento")}
            </span>
            <LanguageSwitcher />
          </div>
        </nav>
        <div
          style={{
            paddingTop: "65px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="routine-confirmation">
            <span className="routine-confirm-mark">◈</span>
            <h2 className="routine-confirm-title">
              {lang === "en" ? (
                <>
                  Programme
                  <br />
                  <em>requested.</em>
                </>
              ) : (
                <>
                  Programa
                  <br />
                  <em>solicitado.</em>
                </>
              )}
            </h2>
            <p className="routine-confirm-text">
              {t(
                lang,
                `Your training preferences have been received. Suli will design a bespoke programme based on your profile and be in touch within 24 hours.`,
                "Tus preferencias de entrenamiento han sido recibidas. Suli diseñará un programa a medida basado en tu perfil y se pondrá en contacto en 24 horas.",
              )}
            </p>
            <div className="routine-confirm-ref">
              {t(lang, "Reference", "Referencia")}: POREOS-RT-
              {Date.now().toString(36).toUpperCase().slice(-6)}
            </div>
            <Link
              to="/"
              className="btn-return"
              style={{
                background: "var(--tan)",
                color: "var(--kombu)",
                padding: "0.9rem 2.5rem",
                display: "inline-block",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
            >
              {t(lang, "← Return to POREOS", "← Volver a POREOS")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Step panels ─────────────────────────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      // ── STEP 1: Discipline & Format ──────────────────────────────────────
      case 0:
        return (
          <div className="routine-step-panel" key="r0">
            <span className="routine-eyebrow">
              {t(lang, "Step 01 of 05", "Paso 01 de 05")}
            </span>
            <h2 className="routine-heading">
              {lang === "en" ? (
                <>
                  Choose your
                  <br />
                  <em>disciplines.</em>
                </>
              ) : (
                <>
                  Elige tus
                  <br />
                  <em>disciplinas.</em>
                </>
              )}
            </h2>
            <p className="routine-description">
              {t(
                lang,
                "Select the disciplines you want to include. You may combine multiple for an integrated programme.",
                "Selecciona las disciplinas que deseas incluir. Puedes combinar varias para un programa integrado.",
              )}
            </p>

            <div className="discipline-grid">
              {[
                {
                  id: "yoga",
                  val: "yoga",
                  icon: "🧘",
                  en: {
                    name: "Private Yoga",
                    desc: "Vinyasa, Hatha or Yin — calibrated to your physiology and intention.",
                    rate: "From €90 / session",
                  },
                  es: {
                    name: "Yoga Privado",
                    desc: "Vinyasa, Hatha o Yin — calibrado a tu fisiología e intención.",
                    rate: "Desde €90 / sesión",
                  },
                },
                {
                  id: "pilates",
                  val: "pilates",
                  icon: "🏋️",
                  en: {
                    name: "Mat Pilates",
                    desc: "Structural alignment, postural intelligence and deep functional strength.",
                    rate: "From €95 / session",
                  },
                  es: {
                    name: "Pilates Mat",
                    desc: "Alineación estructural, inteligencia postural y fuerza funcional profunda.",
                    rate: "Desde €95 / sesión",
                  },
                },
                {
                  id: "functional",
                  val: "functional",
                  icon: "⚡",
                  en: {
                    name: "Functional Training",
                    desc: "Evidence-based movement science — measurable progress, no wasted effort.",
                    rate: "From €110 / session",
                  },
                  es: {
                    name: "Entrenamiento Funcional",
                    desc: "Ciencia del movimiento basada en evidencia — progreso medible, sin esfuerzo perdido.",
                    rate: "Desde €110 / sesión",
                  },
                },
              ].map((d) => (
                <DisciplineCard
                  key={d.id}
                  id={d.id}
                  icon={d.icon}
                  name={d[lang].name}
                  desc={d[lang].desc}
                  rate={d[lang].rate}
                  checked={data.disciplines.includes(d.val)}
                  onChange={() => toggleDiscipline(d.val)}
                />
              ))}
            </div>

            <div className="routine-section" style={{ marginTop: "2.5rem" }}>
              <div className="routine-section-title">
                {t(lang, "Session Format", "Formato de Sesión")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "Preferred session format",
                  "Formato de sesión preferido",
                )}
              >
                <RoutineTiles
                  name="sessionFormat"
                  value={data.sessionFormat}
                  onChange={setField}
                  options={[
                    {
                      value: "1-on-1",
                      label: t(lang, "1-on-1 private", "Privada 1 a 1"),
                      sub: t(lang, "Recommended", "Recomendado"),
                    },
                    {
                      value: "couple",
                      label: t(lang, "Couples / pairs", "Pareja / dúo"),
                    },
                    {
                      value: "corporate",
                      label: t(
                        lang,
                        "Small group (3–5)",
                        "Grupo pequeño (3–5)",
                      ),
                    },
                  ]}
                />
              </RoutineField>

              <RoutineField
                label={t(
                  lang,
                  "Preferred session duration",
                  "Duración de sesión preferida",
                )}
              >
                <RoutineTiles
                  name="sessionDuration"
                  value={data.sessionDuration}
                  onChange={setField}
                  options={[
                    { value: "45", label: t(lang, "45 minutes", "45 minutos") },
                    { value: "60", label: t(lang, "60 minutes", "60 minutos") },
                    { value: "90", label: t(lang, "90 minutes", "90 minutos") },
                    {
                      value: "flexible",
                      label: t(lang, "Flexible", "Flexible"),
                    },
                  ]}
                />
              </RoutineField>
            </div>
          </div>
        );

      // ── STEP 2: Schedule & Location ──────────────────────────────────────
      case 1:
        return (
          <div className="routine-step-panel" key="r1">
            <span className="routine-eyebrow">
              {t(lang, "Step 02 of 05", "Paso 02 de 05")}
            </span>
            <h2 className="routine-heading">
              {lang === "en" ? (
                <>
                  Schedule &<br />
                  <em>location.</em>
                </>
              ) : (
                <>
                  Horario y<br />
                  <em>ubicación.</em>
                </>
              )}
            </h2>
            <p className="routine-description">
              {t(
                lang,
                "All sessions come to you. Suli works at your home, your company facilities, or selected partner locations in Barcelona.",
                "Todas las sesiones son en tu espacio. Suli trabaja en tu domicilio, las instalaciones de tu empresa o localizaciones asociadas en Barcelona.",
              )}
            </p>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Frequency", "Frecuencia")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "How many sessions per week?",
                  "¿Cuántas sesiones por semana?",
                )}
              >
                <RoutineTiles
                  name="sessionsPerWeek"
                  value={data.sessionsPerWeek}
                  onChange={setField}
                  options={[
                    {
                      value: "1",
                      label: t(lang, "1× per week", "1× por semana"),
                    },
                    {
                      value: "2",
                      label: t(lang, "2× per week", "2× por semana"),
                    },
                    {
                      value: "3",
                      label: t(lang, "3× per week", "3× por semana"),
                    },
                    {
                      value: "4-5",
                      label: t(lang, "4–5× per week", "4–5× por semana"),
                    },
                    { value: "daily", label: t(lang, "Daily", "Diario") },
                    {
                      value: "tbd",
                      label: t(lang, "TBD / discuss", "Por definir"),
                    },
                  ]}
                />
              </RoutineField>

              <RoutineField
                label={t(
                  lang,
                  "Preferred time of day",
                  "Franja horaria preferida",
                )}
              >
                <RoutineTiles
                  name="preferredTime"
                  value={data.preferredTime}
                  onChange={setField}
                  options={[
                    {
                      value: "early-morning",
                      label: t(lang, "Early morning", "Madrugada"),
                      sub: "6–8am",
                    },
                    {
                      value: "morning",
                      label: t(lang, "Morning", "Mañana"),
                      sub: "8–12pm",
                    },
                    {
                      value: "midday",
                      label: t(lang, "Midday", "Mediodía"),
                      sub: "12–2pm",
                    },
                    {
                      value: "afternoon",
                      label: t(lang, "Afternoon", "Tarde"),
                      sub: "2–6pm",
                    },
                    {
                      value: "evening",
                      label: t(lang, "Evening", "Noche"),
                      sub: "6–9pm",
                    },
                    {
                      value: "flexible",
                      label: t(lang, "Flexible", "Flexible"),
                    },
                  ]}
                />
              </RoutineField>
            </div>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Location Preference", "Preferencia de Ubicación")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "Primary location for sessions",
                  "Ubicación principal para las sesiones",
                )}
              >
                <RoutineTiles
                  name="location"
                  value={data.location}
                  onChange={setField}
                  options={[
                    {
                      value: "home",
                      label: t(lang, "My home", "Mi domicilio"),
                      sub: t(lang, "Suli comes to you", "Suli viene a ti"),
                    },
                    {
                      value: "company",
                      label: t(
                        lang,
                        "Company facilities",
                        "Instalaciones de empresa",
                      ),
                      sub: t(
                        lang,
                        "Office gym / space",
                        "Gimnasio / espacio de oficina",
                      ),
                    },
                    {
                      value: "partner",
                      label: t(
                        lang,
                        "Partner facility",
                        "Instalación asociada",
                      ),
                      sub: t(
                        lang,
                        "Barcelona locations",
                        "Ubicaciones en Barcelona",
                      ),
                    },
                    {
                      value: "outdoor",
                      label: t(lang, "Outdoor / rooftop", "Exterior / azotea"),
                      sub: t(
                        lang,
                        "Barcelona park or terrace",
                        "Parque o terraza en Barcelona",
                      ),
                    },
                  ]}
                />
              </RoutineField>
              <RoutineField
                label={t(
                  lang,
                  "Address or additional location notes",
                  "Dirección o notas adicionales sobre la ubicación",
                )}
              >
                <input
                  className="routine-input"
                  name="locationNotes"
                  value={data.locationNotes}
                  onChange={handleChange}
                  placeholder={t(
                    lang,
                    "Street, neighbourhood, building access notes...",
                    "Calle, barrio, instrucciones de acceso...",
                  )}
                />
              </RoutineField>
            </div>
          </div>
        );

      // ── STEP 3: Physical Profile ─────────────────────────────────────────
      case 2:
        return (
          <div className="routine-step-panel" key="r2">
            <span className="routine-eyebrow">
              {t(lang, "Step 03 of 05", "Paso 03 de 05")}
            </span>
            <h2 className="routine-heading">
              {lang === "en" ? (
                <>
                  Physical
                  <br />
                  <em>profile.</em>
                </>
              ) : (
                <>
                  Perfil
                  <br />
                  <em>físico.</em>
                </>
              )}
            </h2>
            <p className="routine-description">
              {t(
                lang,
                "This defines the starting point of your programme. Be honest — there is no wrong answer.",
                "Esto define el punto de partida de tu programa. Sé honesto — no hay respuesta incorrecta.",
              )}
            </p>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Current Level", "Nivel Actual")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "Where would you honestly place yourself today?",
                  "¿Dónde te situarías honestamente hoy?",
                )}
              >
                <RoutineTiles
                  name="fitnessLevel"
                  value={data.fitnessLevel}
                  onChange={setField}
                  options={[
                    {
                      value: "restart",
                      label: t(lang, "Restarting", "Reiniciando"),
                      sub: t(
                        lang,
                        "Long break from exercise",
                        "Larga pausa del ejercicio",
                      ),
                    },
                    {
                      value: "beginner",
                      label: t(lang, "Beginner", "Principiante"),
                      sub: t(
                        lang,
                        "New to structured training",
                        "Nuevo en el entrenamiento",
                      ),
                    },
                    {
                      value: "intermediate",
                      label: t(lang, "Intermediate", "Intermedio"),
                      sub: t(
                        lang,
                        "Some consistent training",
                        "Algo de entrenamiento regular",
                      ),
                    },
                    {
                      value: "active",
                      label: t(lang, "Active", "Activo"),
                      sub: t(
                        lang,
                        "Training regularly",
                        "Entrenando regularmente",
                      ),
                    },
                    {
                      value: "advanced",
                      label: t(lang, "Advanced", "Avanzado"),
                      sub: t(
                        lang,
                        "High performance base",
                        "Base de alto rendimiento",
                      ),
                    },
                  ]}
                />
              </RoutineField>
            </div>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Physical Limitations", "Limitaciones Físicas")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "Any areas to be careful with? (select all that apply)",
                  "¿Alguna zona que requiera cuidado? (selecciona todas las que apliquen)",
                )}
              >
                <RoutineCheckTiles
                  name="limitations"
                  options={[
                    { value: "none", label: t(lang, "None", "Ninguna") },
                    { value: "neck", label: t(lang, "Neck", "Cuello") },
                    { value: "shoulder", label: t(lang, "Shoulder", "Hombro") },
                    {
                      value: "lower-back",
                      label: t(lang, "Lower back", "Lumbar"),
                    },
                    {
                      value: "upper-back",
                      label: t(lang, "Upper back", "Espalda alta"),
                    },
                    { value: "hip", label: t(lang, "Hip", "Cadera") },
                    { value: "knee", label: t(lang, "Knee", "Rodilla") },
                    { value: "ankle", label: t(lang, "Ankle", "Tobillo") },
                    { value: "wrist", label: t(lang, "Wrist", "Muñeca") },
                  ]}
                  values={data.limitations}
                  onChange={setField}
                />
              </RoutineField>
              {data.limitations.length > 0 &&
                !data.limitations.includes("none") && (
                  <RoutineField
                    label={t(
                      lang,
                      "Briefly describe the limitation(s)",
                      "Describe brevemente las limitaciones",
                    )}
                  >
                    <textarea
                      className="routine-textarea"
                      name="limitationNotes"
                      value={data.limitationNotes}
                      onChange={handleChange}
                      placeholder={t(
                        lang,
                        "e.g. chronic lower back — herniated disc L4/L5",
                        "ej. lumbar crónica — hernia discal L4/L5",
                      )}
                    />
                  </RoutineField>
                )}
            </div>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Body Focus Areas", "Zonas de Enfoque")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "Which areas do you want to prioritise? (select all that apply)",
                  "¿Qué zonas quieres priorizar? (selecciona las que apliquen)",
                )}
              >
                <RoutineCheckTiles
                  name="bodyFocus"
                  options={[
                    {
                      value: "core",
                      label: t(lang, "Core & stability", "Core y estabilidad"),
                    },
                    {
                      value: "upper",
                      label: t(lang, "Upper body", "Tren superior"),
                    },
                    {
                      value: "lower",
                      label: t(lang, "Lower body", "Tren inferior"),
                    },
                    { value: "glutes", label: t(lang, "Glutes", "Glúteos") },
                    { value: "posture", label: t(lang, "Posture", "Postura") },
                    {
                      value: "mobility",
                      label: t(lang, "Mobility", "Movilidad"),
                    },
                    {
                      value: "balance",
                      label: t(lang, "Balance", "Equilibrio"),
                    },
                    {
                      value: "full-body",
                      label: t(lang, "Full body", "Cuerpo completo"),
                    },
                  ]}
                  values={data.bodyFocus}
                  onChange={setField}
                />
              </RoutineField>
            </div>
          </div>
        );

      // ── STEP 4: Intensity & Equipment ────────────────────────────────────
      case 3:
        return (
          <div className="routine-step-panel" key="r3">
            <span className="routine-eyebrow">
              {t(lang, "Step 04 of 05", "Paso 04 de 05")}
            </span>
            <h2 className="routine-heading">
              {lang === "en" ? (
                <>
                  Intensity &<br />
                  <em>environment.</em>
                </>
              ) : (
                <>
                  Intensidad y<br />
                  <em>entorno.</em>
                </>
              )}
            </h2>
            <p className="routine-description">
              {t(
                lang,
                "Your ideal training atmosphere. These preferences shape the feel and structure of every session.",
                "Tu ambiente de entrenamiento ideal. Estas preferencias definen la sensación y estructura de cada sesión.",
              )}
            </p>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Intensity Preference", "Preferencia de Intensidad")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "How hard do you want to work?",
                  "¿Con qué intensidad quieres trabajar?",
                )}
              >
                <div className="intensity-track">
                  {[
                    {
                      val: "restorative",
                      labelEn: "Restorative",
                      labelEs: "Restaurador",
                      heights: [12, 12, 12, 12, 12],
                    },
                    {
                      val: "gentle",
                      labelEn: "Gentle",
                      labelEs: "Suave",
                      heights: [16, 20, 20, 16, 12],
                    },
                    {
                      val: "moderate",
                      labelEn: "Moderate",
                      labelEs: "Moderado",
                      heights: [20, 28, 36, 28, 20],
                    },
                    {
                      val: "challenging",
                      labelEn: "Challenging",
                      labelEs: "Exigente",
                      heights: [24, 32, 40, 48, 40],
                    },
                    {
                      val: "maximum",
                      labelEn: "Maximum",
                      labelEs: "Máximo",
                      heights: [28, 36, 44, 52, 60],
                    },
                  ].map((lvl) => (
                    <label key={lvl.val}>
                      <input
                        className="intensity-input"
                        type="radio"
                        name="intensityPreference"
                        value={lvl.val}
                        checked={data.intensityPreference === lvl.val}
                        onChange={() =>
                          setField("intensityPreference", lvl.val)
                        }
                      />
                      <span className="intensity-label">
                        <span className="intensity-bar-wrap">
                          {lvl.heights.map((h, i) => (
                            <span
                              key={i}
                              className="intensity-bar"
                              style={{ height: `${h}px` }}
                            />
                          ))}
                        </span>
                        <span className="intensity-text">
                          {t(lang, lvl.labelEn, lvl.labelEs)}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </RoutineField>
            </div>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Available Equipment", "Equipamiento Disponible")}
              </div>
              <RoutineField
                label={t(
                  lang,
                  "What do you have available? (Suli brings what is needed)",
                  "¿Con qué cuentas? (Suli trae lo necesario)",
                )}
              >
                <RoutineCheckTiles
                  name="equipment"
                  options={[
                    {
                      value: "none",
                      label: t(
                        lang,
                        "Nothing — start from zero",
                        "Nada — empezar de cero",
                      ),
                    },
                    {
                      value: "mat",
                      label: t(lang, "Yoga mat", "Esterilla yoga"),
                    },
                    {
                      value: "weights",
                      label: t(lang, "Free weights", "Pesas libres"),
                    },
                    {
                      value: "bands",
                      label: t(lang, "Resistance bands", "Bandas elásticas"),
                    },
                    {
                      value: "kettlebell",
                      label: t(lang, "Kettlebell(s)", "Kettlebell(s)"),
                    },
                    {
                      value: "balls",
                      label: t(
                        lang,
                        "Foam roller / balls",
                        "Rodillo / pelotas",
                      ),
                    },
                    {
                      value: "gym",
                      label: t(lang, "Full gym setup", "Gimnasio completo"),
                    },
                    { value: "trx", label: "TRX / Suspension trainer" },
                  ]}
                  values={data.equipment}
                  onChange={setField}
                />
              </RoutineField>
            </div>

            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Session Environment", "Entorno de Sesión")}
              </div>
              <div className="routine-form-grid">
                <RoutineField
                  label={t(
                    lang,
                    "Music during sessions?",
                    "¿Música durante las sesiones?",
                  )}
                >
                  <RoutineTiles
                    name="musicPreference"
                    value={data.musicPreference}
                    onChange={setField}
                    options={[
                      {
                        value: "yes-ambient",
                        label: t(
                          lang,
                          "Yes — ambient / soft",
                          "Sí — ambiental / suave",
                        ),
                      },
                      {
                        value: "yes-energetic",
                        label: t(lang, "Yes — energetic", "Sí — energética"),
                      },
                      {
                        value: "no",
                        label: t(lang, "No — silence", "No — silencio"),
                      },
                      {
                        value: "flexible",
                        label: t(lang, "Flexible", "Flexible"),
                      },
                    ]}
                  />
                </RoutineField>
                <RoutineField
                  label={t(
                    lang,
                    "Preferred coaching style",
                    "Estilo de coaching preferido",
                  )}
                >
                  <RoutineTiles
                    name="coachingStyle"
                    value={data.coachingStyle}
                    onChange={setField}
                    options={[
                      {
                        value: "technical",
                        label: t(
                          lang,
                          "Technical & precise",
                          "Técnico y preciso",
                        ),
                        sub: t(
                          lang,
                          "Detailed cues, corrections",
                          "Indicaciones detalladas",
                        ),
                      },
                      {
                        value: "motivating",
                        label: t(
                          lang,
                          "Motivating & energetic",
                          "Motivador y enérgico",
                        ),
                      },
                      {
                        value: "calm",
                        label: t(
                          lang,
                          "Calm & meditative",
                          "Tranquilo y meditativo",
                        ),
                      },
                      {
                        value: "adaptive",
                        label: t(
                          lang,
                          "Adaptive to the session",
                          "Adaptable a la sesión",
                        ),
                      },
                    ]}
                  />
                </RoutineField>
              </div>
            </div>
          </div>
        );

      // ── STEP 5: Review & Confirm ─────────────────────────────────────────
      case 4:
        return (
          <div className="routine-step-panel" key="r4">
            <span className="routine-eyebrow">
              {t(lang, "Step 05 of 05", "Paso 05 de 05")}
            </span>
            <h2 className="routine-heading">
              {lang === "en" ? (
                <>
                  Review &<br />
                  <em>confirm.</em>
                </>
              ) : (
                <>
                  Revisa y<br />
                  <em>confirma.</em>
                </>
              )}
            </h2>
            <p className="routine-description">
              {t(
                lang,
                "Add your contact details so Suli can send your personalised programme within 24 hours.",
                "Añade tus datos de contacto para que Suli pueda enviarte tu programa personalizado en 24 horas.",
              )}
            </p>

            {/* Summary review */}
            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Your Selection Summary", "Resumen de tu Selección")}
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    key: t(lang, "Disciplines", "Disciplinas"),
                    val: data.disciplines.length
                      ? data.disciplines.join(", ")
                      : "—",
                  },
                  {
                    key: t(lang, "Format", "Formato"),
                    val: data.sessionFormat || "—",
                  },
                  {
                    key: t(lang, "Duration", "Duración"),
                    val: data.sessionDuration
                      ? `${data.sessionDuration} min`
                      : "—",
                  },
                  {
                    key: t(lang, "Frequency", "Frecuencia"),
                    val: data.sessionsPerWeek || "—",
                  },
                  {
                    key: t(lang, "Time", "Horario"),
                    val: data.preferredTime || "—",
                  },
                  {
                    key: t(lang, "Location", "Ubicación"),
                    val: data.location || "—",
                  },
                  {
                    key: t(lang, "Fitness level", "Nivel"),
                    val: data.fitnessLevel || "—",
                  },
                  {
                    key: t(lang, "Intensity", "Intensidad"),
                    val: data.intensityPreference || "—",
                  },
                ].map((item) => (
                  <div key={item.key} className="routine-summary-item">
                    <span className="routine-summary-key">{item.key}</span>
                    <span className="routine-summary-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="routine-section">
              <div className="routine-section-title">
                {t(lang, "Contact Details", "Datos de Contacto")}
              </div>
              <div className="routine-form-grid">
                <RoutineField label={t(lang, "Full Name", "Nombre completo")}>
                  <input
                    className="routine-input"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    placeholder={t(
                      lang,
                      "Your full name",
                      "Tu nombre completo",
                    )}
                  />
                </RoutineField>
                <RoutineField label="Email">
                  <input
                    className="routine-input"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </RoutineField>
                <RoutineField
                  label={t(
                    lang,
                    "Anything else? (optional)",
                    "¿Algo más? (opcional)",
                  )}
                  span={2}
                >
                  <textarea
                    className="routine-textarea"
                    name="additionalNotes"
                    value={data.additionalNotes}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      "Additional context, specific requests...",
                      "Contexto adicional, solicitudes específicas...",
                    )}
                  />
                </RoutineField>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="routine-page">
      <nav className="routine-topbar">
        <Link to="/" className="routine-topbar-logo">
          POREOS
        </Link>
        <div className="routine-topbar-right">
          <span className="routine-topbar-label">
            {t(lang, "Training Routine", "Rutina de Entrenamiento")}
          </span>
          <LanguageSwitcher />
        </div>
      </nav>

      <div className="routine-layout">
        {/* ── Main ── */}
        <main className="routine-main">
          <form
            onSubmit={
              step === TOTAL_STEPS - 1
                ? handleSubmit
                : (e) => {
                    e.preventDefault();
                    next();
                  }
            }
          >
            {renderStep()}

            <div className="routine-nav">
              <button
                type="button"
                className="routine-btn-back"
                onClick={back}
                disabled={step === 0}
              >
                ← {t(lang, "Back", "Atrás")}
              </button>
              {step < TOTAL_STEPS - 1 ? (
                <button type="submit" className="routine-btn-next">
                  {t(lang, "Continue", "Continuar")} →
                </button>
              ) : (
                <button type="submit" className="routine-btn-next submit">
                  {t(lang, "Request My Programme", "Solicitar Mi Programa")} →
                </button>
              )}
            </div>
          </form>
        </main>

        {/* ── Sidebar ── */}
        <aside className="routine-sidebar">
          <div className="routine-sidebar-title">
            {t(lang, "Your Programme", "Tu Programa")}
          </div>

          <ul className="routine-steps">
            {steps.map((s, i) => {
              const status = i < step ? "done" : i === step ? "active" : "";
              return (
                <li
                  key={s.n}
                  className={`routine-step-item ${status}`}
                  onClick={() => i < step && setStep(i)}
                  style={{ cursor: i < step ? "pointer" : "default" }}
                >
                  <span className="routine-step-num">{s.n}</span>
                  <span className="routine-step-text">{s.name}</span>
                </li>
              );
            })}
          </ul>

          <div className="routine-summary-box">
            <div className="routine-summary-label">
              {t(lang, "Selection so far", "Selección hasta ahora")}
            </div>
            {summaryItems.map((item) => (
              <div key={item.key} className="routine-summary-item">
                <span className="routine-summary-key">{item.key}</span>
                <span className="routine-summary-val">{item.val}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
