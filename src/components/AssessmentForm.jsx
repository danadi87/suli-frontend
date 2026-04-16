import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang, t } from "../context/language.context";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/AssessmentForm.css";

// ── Step definitions ─────────────────────────────────────────────────────────
const STEPS = {
  en: [
    { n: "01", name: "Personal Details" },
    { n: "02", name: "Health & Medical" },
    { n: "03", name: "Fitness History" },
    { n: "04", name: "Lifestyle" },
    { n: "05", name: "Goals" },
  ],
  es: [
    { n: "01", name: "Datos Personales" },
    { n: "02", name: "Salud y Médico" },
    { n: "03", name: "Historial Físico" },
    { n: "04", name: "Estilo de Vida" },
    { n: "05", name: "Objetivos" },
  ],
};

const TOTAL_STEPS = 5;

// ── Reusable field components ─────────────────────────────────────────────────
function Field({ label, children, span }) {
  return (
    <div className={`field-group${span ? ` span-${span}` : ""}`}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

function Input({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}) {
  return (
    <input
      className="field-input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

function Select({ name, value, onChange, options }) {
  return (
    <div className="field-select-wrapper">
      <select
        className="field-select"
        name={name}
        value={value}
        onChange={onChange}
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

function Textarea({ name, value, onChange, placeholder }) {
  return (
    <textarea
      className="field-textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

function Tiles({ name, options, value, onChange, cols }) {
  return (
    <div className={`tile-group${cols ? ` cols-${cols}` : ""}`}>
      {options.map((o) => (
        <label key={o.value}>
          <input
            className="tile-input"
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(name, o.value)}
          />
          <span className="tile-label">
            {o.icon && <span className="tile-icon">{o.icon}</span>}
            <span className="tile-title">{o.label}</span>
            {o.sub && <span className="tile-sub">{o.sub}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

function CheckTiles({ name, options, values, onChange, cols }) {
  const toggle = (val) => {
    const next = values.includes(val)
      ? values.filter((v) => v !== val)
      : [...values, val];
    onChange(name, next);
  };
  return (
    <div className={`tile-group${cols ? ` cols-${cols}` : ""}`}>
      {options.map((o) => (
        <label key={o.value}>
          <input
            className="tile-input"
            type="checkbox"
            name={name}
            value={o.value}
            checked={values.includes(o.value)}
            onChange={() => toggle(o.value)}
          />
          <span className="tile-label">
            {o.icon && <span className="tile-icon">{o.icon}</span>}
            <span className="tile-title">{o.label}</span>
            {o.sub && <span className="tile-sub">{o.sub}</span>}
          </span>
        </label>
      ))}
    </div>
  );
}

function Scale({
  name,
  value,
  onChange,
  min = 1,
  max = 5,
  lowLabel,
  highLabel,
}) {
  const nums = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  return (
    <>
      <div className={`scale-group${max - min + 1 > 5 ? " cols-10" : ""}`}>
        {nums.map((n) => (
          <label key={n}>
            <input
              className="scale-input"
              type="radio"
              name={name}
              value={n}
              checked={String(value) === String(n)}
              onChange={() => onChange(name, n)}
            />
            <span className="scale-label">{n}</span>
          </label>
        ))}
      </div>
      {(lowLabel || highLabel) && (
        <div className="scale-legend">
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      )}
    </>
  );
}

// ── Initial form data
const INITIAL_DATA = {
  // Step 1
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  occupation: "",
  city: "",
  // Step 2
  injuries: "",
  medicalConditions: "",
  medications: "",
  painAreas: [],
  surgeries: "",
  pregnant: "",
  // Step 3
  fitnessLevel: "",
  yearsTraining: "",
  disciplines: [],
  trainingFrequency: "",
  lastActiveDate: "",
  // Step 4
  sleepHours: "",
  stressLevel: "",
  workType: "",
  dietType: "",
  alcoholFrequency: "",
  smokingStatus: "",
  // Step 5
  primaryGoal: "",
  secondaryGoals: [],
  timeframe: "",
  motivation: "",
  additionalNotes: "",
};

// ── Main component ─
export default function AssessmentForm() {
  const { lang } = useLang();
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const setField = (name, value) =>
    setData((prev) => ({ ...prev, [name]: value }));

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };
  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assessment submitted:", data);
    setSubmitted(true);
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  const steps = STEPS[lang];

  // ── Confirmation ──
  if (submitted) {
    return (
      <div className="assessment-page">
        <nav className="assessment-topbar">
          <Link to="/" className="assessment-topbar-logo">
            POREOS
          </Link>
          <div className="assessment-topbar-right">
            <span className="assessment-topbar-label">
              {t(lang, "Initial Assessment", "Valoración Inicial")}
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
          <div className="confirmation">
            <div className="confirmation-mark">
              <span className="confirmation-mark-inner">✓</span>
            </div>
            <h2 className="confirmation-title">
              {lang === "en" ? (
                <>
                  Assessment
                  <br />
                  <em>received.</em>
                </>
              ) : (
                <>
                  Valoración
                  <br />
                  <em>recibida.</em>
                </>
              )}
            </h2>
            <p className="confirmation-text">
              {t(
                lang,
                `Thank you, ${data.firstName}. Your initial assessment has been submitted. Suli will review your profile and reach out within 24 hours to arrange your first consultation.`,
                `Gracias, ${data.firstName}. Tu valoración inicial ha sido enviada. Suli revisará tu perfil y se pondrá en contacto contigo en 24 horas para organizar tu primera consulta.`,
              )}
            </p>
            <div className="confirmation-ref">
              {t(lang, "Reference", "Referencia")}: POREOS-
              {Date.now().toString(36).toUpperCase().slice(-6)}
            </div>
            <Link to="/" className="btn-return">
              {t(lang, "← Return to POREOS", "← Volver a POREOS")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Step panels ─
  const renderStep = () => {
    switch (step) {
      // ── STEP 1: Personal Details ──
      case 0:
        return (
          <div className="step-panel" key="s0">
            <span className="step-eyebrow">
              {t(lang, "Step 01 of 05", "Paso 01 de 05")}
            </span>
            <h2 className="step-heading">
              {lang === "en" ? (
                <>
                  <em>Tell us</em>
                  <br />
                  about yourself.
                </>
              ) : (
                <>
                  <em>Cuéntanos</em>
                  <br />
                  sobre ti.
                </>
              )}
            </h2>
            <p className="step-description">
              {t(
                lang,
                "Basic information helps Suli understand who you are before your first meeting.",
                "La información básica ayuda a Suli a conocerte antes de vuestro primer encuentro.",
              )}
            </p>
            <div className="form-grid">
              <Field label={t(lang, "First Name", "Nombre")}>
                <Input
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  placeholder={t(lang, "Your first name", "Tu nombre")}
                  required
                />
              </Field>
              <Field label={t(lang, "Last Name", "Apellido")}>
                <Input
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  placeholder={t(lang, "Your last name", "Tu apellido")}
                  required
                />
              </Field>
              <Field label={t(lang, "Age", "Edad")}>
                <Input
                  name="age"
                  value={data.age}
                  onChange={handleChange}
                  placeholder="e.g. 38"
                  type="number"
                />
              </Field>
              <Field label={t(lang, "Gender", "Género")}>
                <Select
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                  options={[
                    {
                      value: "",
                      label: t(lang, "Select...", "Seleccionar..."),
                    },
                    { value: "male", label: t(lang, "Male", "Masculino") },
                    { value: "female", label: t(lang, "Female", "Femenino") },
                    {
                      value: "other",
                      label: t(lang, "Prefer not to say", "Prefiero no decir"),
                    },
                  ]}
                />
              </Field>
              <Field label="Email">
                <Input
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  type="email"
                  required
                />
              </Field>
              <Field label={t(lang, "Phone", "Teléfono")}>
                <Input
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="+34 ..."
                  type="tel"
                />
              </Field>
              <Field label={t(lang, "Occupation", "Ocupación")}>
                <Input
                  name="occupation"
                  value={data.occupation}
                  onChange={handleChange}
                  placeholder={t(lang, "Your profession", "Tu profesión")}
                />
              </Field>
              <Field label={t(lang, "City", "Ciudad")}>
                <Input
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  placeholder={t(
                    lang,
                    "City of residence",
                    "Ciudad de residencia",
                  )}
                />
              </Field>
            </div>
          </div>
        );

      // ── STEP 2: Health & Medical ──
      case 1:
        return (
          <div className="step-panel" key="s1">
            <span className="step-eyebrow">
              {t(lang, "Step 02 of 05", "Paso 02 de 05")}
            </span>
            <h2 className="step-heading">
              {lang === "en" ? (
                <>
                  Health &<br />
                  <em>Medical history.</em>
                </>
              ) : (
                <>
                  Salud e<br />
                  <em>historial médico.</em>
                </>
              )}
            </h2>
            <p className="step-description">
              {t(
                lang,
                "All information is strictly confidential and used only to ensure your safety and programme design.",
                "Toda la información es estrictamente confidencial y se usa únicamente para garantizar tu seguridad y el diseño del programa.",
              )}
            </p>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Current Health", "Salud Actual")}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "Do you have any current injuries or pain?",
                    "¿Tienes alguna lesión o dolor actual?",
                  )}
                >
                  <Tiles
                    name="injuries"
                    value={data.injuries}
                    onChange={setField}
                    cols={3}
                    options={[
                      { value: "none", label: t(lang, "None", "Ninguno") },
                      {
                        value: "minor",
                        label: t(lang, "Minor discomfort", "Molestia leve"),
                      },
                      {
                        value: "moderate",
                        label: t(lang, "Moderate pain", "Dolor moderado"),
                      },
                      {
                        value: "chronic",
                        label: t(
                          lang,
                          "Chronic condition",
                          "Condición crónica",
                        ),
                      },
                    ]}
                  />
                </Field>
              </div>
              {data.injuries && data.injuries !== "none" && (
                <div
                  className="form-grid cols-1"
                  style={{ marginTop: "1.2rem" }}
                >
                  <Field
                    label={t(
                      lang,
                      "Which areas are affected?",
                      "¿Qué zonas están afectadas?",
                    )}
                  >
                    <CheckTiles
                      name="painAreas"
                      values={data.painAreas}
                      onChange={setField}
                      options={[
                        { value: "neck", label: t(lang, "Neck", "Cuello") },
                        {
                          value: "shoulder",
                          label: t(lang, "Shoulder", "Hombro"),
                        },
                        {
                          value: "back-upper",
                          label: t(lang, "Upper back", "Espalda alta"),
                        },
                        {
                          value: "back-lower",
                          label: t(lang, "Lower back", "Zona lumbar"),
                        },
                        { value: "hip", label: t(lang, "Hip", "Cadera") },
                        { value: "knee", label: t(lang, "Knee", "Rodilla") },
                        {
                          value: "ankle",
                          label: t(lang, "Ankle / Foot", "Tobillo / Pie"),
                        },
                        {
                          value: "wrist",
                          label: t(lang, "Wrist / Hand", "Muñeca / Mano"),
                        },
                      ]}
                    />
                  </Field>
                </div>
              )}
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Medical Background", "Antecedentes Médicos")}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "Known medical conditions (heart, diabetes, osteoporosis, etc.)",
                    "Condiciones médicas conocidas (corazón, diabetes, osteoporosis, etc.)",
                  )}
                >
                  <Textarea
                    name="medicalConditions"
                    value={data.medicalConditions}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      'List any relevant conditions, or write "None"',
                      'Indica las condiciones relevantes, o escribe "Ninguna"',
                    )}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "Current medications",
                    "Medicamentos actuales",
                  )}
                >
                  <Textarea
                    name="medications"
                    value={data.medications}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      'List any medications, or write "None"',
                      'Indica los medicamentos, o escribe "Ninguno"',
                    )}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "Previous surgeries or hospitalisations",
                    "Cirugías o hospitalizaciones previas",
                  )}
                >
                  <Input
                    name="surgeries"
                    value={data.surgeries}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      'Brief description or "None"',
                      'Descripción breve o "Ninguna"',
                    )}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "Are you currently pregnant or postpartum?",
                    "¿Estás embarazada o en período postparto?",
                  )}
                >
                  <Tiles
                    name="pregnant"
                    value={data.pregnant}
                    onChange={setField}
                    cols={3}
                    options={[
                      { value: "no", label: t(lang, "No", "No") },
                      {
                        value: "pregnant",
                        label: t(lang, "Pregnant", "Embarazada"),
                      },
                      {
                        value: "postpartum",
                        label: t(lang, "Postpartum", "Postparto"),
                      },
                      { value: "na", label: t(lang, "N/A", "N/A") },
                    ]}
                  />
                </Field>
              </div>
            </div>
          </div>
        );

      // ── STEP 3: Fitness History ──
      case 2:
        return (
          <div className="step-panel" key="s2">
            <span className="step-eyebrow">
              {t(lang, "Step 03 of 05", "Paso 03 de 05")}
            </span>
            <h2 className="step-heading">
              {lang === "en" ? (
                <>
                  Fitness
                  <br />
                  <em>experience.</em>
                </>
              ) : (
                <>
                  Experiencia
                  <br />
                  <em>física.</em>
                </>
              )}
            </h2>
            <p className="step-description">
              {t(
                lang,
                "Understanding your background allows Suli to calibrate your programme from day one.",
                "Conocer tu experiencia previa permite a Suli calibrar tu programa desde el primer día.",
              )}
            </p>

            <div className="field-section">
              <div className="field-section-title">
                {t(
                  lang,
                  "Current Fitness Level",
                  "Nivel de Condición Física Actual",
                )}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "How would you describe your current fitness level?",
                    "¿Cómo describirías tu nivel de condición física actual?",
                  )}
                >
                  <Tiles
                    name="fitnessLevel"
                    value={data.fitnessLevel}
                    onChange={setField}
                    options={[
                      {
                        value: "beginner",
                        label: t(lang, "Beginner", "Principiante"),
                        sub: t(
                          lang,
                          "Little or no regular exercise",
                          "Poco o ningún ejercicio regular",
                        ),
                      },
                      {
                        value: "intermediate",
                        label: t(lang, "Intermediate", "Intermedio"),
                        sub: t(
                          lang,
                          "Active 1–3 days/week",
                          "Activo 1–3 días/semana",
                        ),
                      },
                      {
                        value: "active",
                        label: t(lang, "Active", "Activo"),
                        sub: t(
                          lang,
                          "Active 3–5 days/week",
                          "Activo 3–5 días/semana",
                        ),
                      },
                      {
                        value: "advanced",
                        label: t(lang, "Advanced", "Avanzado"),
                        sub: t(
                          lang,
                          "High-performance training",
                          "Entrenamiento de alto rendimiento",
                        ),
                      },
                    ]}
                  />
                </Field>
              </div>
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Training Background", "Historial de Entrenamiento")}
              </div>
              <div className="form-grid">
                <Field
                  label={t(
                    lang,
                    "Years of training experience",
                    "Años de experiencia en entrenamiento",
                  )}
                >
                  <Select
                    name="yearsTraining"
                    value={data.yearsTraining}
                    onChange={handleChange}
                    options={[
                      {
                        value: "",
                        label: t(lang, "Select...", "Seleccionar..."),
                      },
                      {
                        value: "none",
                        label: t(
                          lang,
                          "None — just starting",
                          "Ninguna — estoy empezando",
                        ),
                      },
                      {
                        value: "<1",
                        label: t(lang, "Less than 1 year", "Menos de 1 año"),
                      },
                      { value: "1-3", label: t(lang, "1–3 years", "1–3 años") },
                      { value: "3-7", label: t(lang, "3–7 years", "3–7 años") },
                      { value: "7+", label: t(lang, "7+ years", "7+ años") },
                    ]}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "How often do you currently train?",
                    "¿Con qué frecuencia entrenas actualmente?",
                  )}
                >
                  <Select
                    name="trainingFrequency"
                    value={data.trainingFrequency}
                    onChange={handleChange}
                    options={[
                      {
                        value: "",
                        label: t(lang, "Select...", "Seleccionar..."),
                      },
                      {
                        value: "none",
                        label: t(lang, "Not at all", "En absoluto"),
                      },
                      {
                        value: "1-2",
                        label: t(
                          lang,
                          "1–2 times per week",
                          "1–2 veces por semana",
                        ),
                      },
                      {
                        value: "3-4",
                        label: t(
                          lang,
                          "3–4 times per week",
                          "3–4 veces por semana",
                        ),
                      },
                      {
                        value: "5+",
                        label: t(
                          lang,
                          "5+ times per week",
                          "5+ veces por semana",
                        ),
                      },
                    ]}
                  />
                </Field>
              </div>
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Previous Disciplines", "Disciplinas Previas")}
              </div>
              <Field
                label={t(
                  lang,
                  "Which of these have you practised before? (select all that apply)",
                  "¿Cuáles de estas disciplinas has practicado antes? (selecciona las que apliquen)",
                )}
              >
                <CheckTiles
                  name="disciplines"
                  values={data.disciplines}
                  onChange={setField}
                  options={[
                    { value: "yoga", label: "Yoga" },
                    { value: "pilates", label: "Pilates" },
                    {
                      value: "functional",
                      label: t(
                        lang,
                        "Functional Training",
                        "Entrenamiento Funcional",
                      ),
                    },
                    {
                      value: "running",
                      label: t(lang, "Running / Cycling", "Carrera / Ciclismo"),
                    },
                    {
                      value: "swimming",
                      label: t(lang, "Swimming", "Natación"),
                    },
                    { value: "crossfit", label: "CrossFit / HIIT" },
                    {
                      value: "martial",
                      label: t(lang, "Martial Arts", "Artes Marciales"),
                    },
                    {
                      value: "other",
                      label: t(lang, "Other", "Otro"),
                    },
                  ]}
                />
              </Field>
            </div>
          </div>
        );

      // ── STEP 4: Lifestyle ──
      case 3:
        return (
          <div className="step-panel" key="s3">
            <span className="step-eyebrow">
              {t(lang, "Step 04 of 05", "Paso 04 de 05")}
            </span>
            <h2 className="step-heading">
              {lang === "en" ? (
                <>
                  Your
                  <br />
                  <em>lifestyle.</em>
                </>
              ) : (
                <>
                  Tu
                  <br />
                  <em>estilo de vida.</em>
                </>
              )}
            </h2>
            <p className="step-description">
              {t(
                lang,
                "Training cannot be separated from how you live. These details shape the entire programme strategy.",
                "El entrenamiento no puede separarse de cómo vives. Estos detalles definen toda la estrategia del programa.",
              )}
            </p>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Rest & Recovery", "Descanso y Recuperación")}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "Average hours of sleep per night",
                    "Media de horas de sueño por noche",
                  )}
                >
                  <Tiles
                    name="sleepHours"
                    value={data.sleepHours}
                    onChange={setField}
                    cols={3}
                    options={[
                      {
                        value: "<5",
                        label: t(lang, "Under 5h", "Menos de 5h"),
                      },
                      {
                        value: "5-6",
                        label: t(lang, "5–6 hours", "5–6 horas"),
                      },
                      {
                        value: "6-7",
                        label: t(lang, "6–7 hours", "6–7 horas"),
                      },
                      {
                        value: "7-8",
                        label: t(lang, "7–8 hours", "7–8 horas"),
                      },
                      { value: "8+", label: t(lang, "8+ hours", "8+ horas") },
                    ]}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "Typical stress level (1 = very low, 5 = very high)",
                    "Nivel de estrés habitual (1 = muy bajo, 5 = muy alto)",
                  )}
                >
                  <Scale
                    name="stressLevel"
                    value={data.stressLevel}
                    onChange={setField}
                    min={1}
                    max={5}
                    lowLabel={t(lang, "Very low", "Muy bajo")}
                    highLabel={t(lang, "Very high", "Muy alto")}
                  />
                </Field>
              </div>
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Work & Daily Activity", "Trabajo y Actividad Diaria")}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "Nature of your work",
                    "Naturaleza de tu trabajo",
                  )}
                >
                  <Tiles
                    name="workType"
                    value={data.workType}
                    onChange={setField}
                    cols={3}
                    options={[
                      {
                        value: "desk",
                        label: t(
                          lang,
                          "Sedentary (desk-based)",
                          "Sedentario (oficina)",
                        ),
                      },
                      {
                        value: "mixed",
                        label: t(
                          lang,
                          "Mixed — some movement",
                          "Mixto — algo de movimiento",
                        ),
                      },
                      {
                        value: "active",
                        label: t(
                          lang,
                          "Physically active",
                          "Físicamente activo",
                        ),
                      },
                      {
                        value: "travel",
                        label: t(lang, "Frequent travel", "Viajes frecuentes"),
                      },
                    ]}
                  />
                </Field>
              </div>
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Nutrition & Habits", "Nutrición y Hábitos")}
              </div>
              <div className="form-grid">
                <Field
                  label={t(
                    lang,
                    "Diet / eating style",
                    "Dieta / estilo alimentario",
                  )}
                >
                  <Select
                    name="dietType"
                    value={data.dietType}
                    onChange={handleChange}
                    options={[
                      {
                        value: "",
                        label: t(lang, "Select...", "Seleccionar..."),
                      },
                      {
                        value: "omnivore",
                        label: t(lang, "Omnivore", "Omnívoro"),
                      },
                      {
                        value: "vegetarian",
                        label: t(lang, "Vegetarian", "Vegetariano"),
                      },
                      { value: "vegan", label: t(lang, "Vegan", "Vegano") },
                      {
                        value: "keto",
                        label: t(
                          lang,
                          "Ketogenic / Low-carb",
                          "Cetogénico / Bajo en carbohidratos",
                        ),
                      },
                      {
                        value: "mediterranean",
                        label: t(lang, "Mediterranean", "Mediterráneo"),
                      },
                      {
                        value: "other",
                        label: t(
                          lang,
                          "Other / No specific",
                          "Otro / Sin pauta",
                        ),
                      },
                    ]}
                  />
                </Field>
                <Field
                  label={t(lang, "Alcohol consumption", "Consumo de alcohol")}
                >
                  <Select
                    name="alcoholFrequency"
                    value={data.alcoholFrequency}
                    onChange={handleChange}
                    options={[
                      {
                        value: "",
                        label: t(lang, "Select...", "Seleccionar..."),
                      },
                      { value: "none", label: t(lang, "None", "Ninguno") },
                      {
                        value: "social",
                        label: t(
                          lang,
                          "Social / occasional",
                          "Social / ocasional",
                        ),
                      },
                      { value: "weekly", label: t(lang, "Weekly", "Semanal") },
                      { value: "daily", label: t(lang, "Daily", "Diario") },
                    ]}
                  />
                </Field>
              </div>
            </div>
          </div>
        );

      // ── STEP 5: Goals ──
      case 4:
        return (
          <div className="step-panel" key="s4">
            <span className="step-eyebrow">
              {t(lang, "Step 05 of 05", "Paso 05 de 05")}
            </span>
            <h2 className="step-heading">
              {lang === "en" ? (
                <>
                  Your
                  <br />
                  <em>goals.</em>
                </>
              ) : (
                <>
                  Tus
                  <br />
                  <em>objetivos.</em>
                </>
              )}
            </h2>
            <p className="step-description">
              {t(
                lang,
                "Be as specific as possible. The clearer the target, the more precisely the programme can be calibrated.",
                "Sé lo más específico posible. Cuanto más claro sea el objetivo, más preciso será el programa.",
              )}
            </p>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Primary Goal", "Objetivo Principal")}
              </div>
              <div className="form-grid cols-1">
                <Field
                  label={t(
                    lang,
                    "What is your single most important goal?",
                    "¿Cuál es tu objetivo más importante?",
                  )}
                >
                  <Tiles
                    name="primaryGoal"
                    value={data.primaryGoal}
                    onChange={setField}
                    options={[
                      {
                        value: "fat-loss",
                        label: t(lang, "Fat loss", "Pérdida de grasa"),
                      },
                      {
                        value: "muscle",
                        label: t(lang, "Strength & muscle", "Fuerza y músculo"),
                      },
                      {
                        value: "flexibility",
                        label: t(lang, "Flexibility", "Flexibilidad"),
                      },
                      {
                        value: "posture",
                        label: t(
                          lang,
                          "Posture & alignment",
                          "Postura y alineación",
                        ),
                      },
                      {
                        value: "stress",
                        label: t(
                          lang,
                          "Stress reduction",
                          "Reducción del estrés",
                        ),
                      },
                      {
                        value: "energy",
                        label: t(
                          lang,
                          "Energy & vitality",
                          "Energía y vitalidad",
                        ),
                      },
                      {
                        value: "rehab",
                        label: t(lang, "Rehabilitation", "Rehabilitación"),
                      },
                      {
                        value: "performance",
                        label: t(
                          lang,
                          "Athletic performance",
                          "Rendimiento deportivo",
                        ),
                      },
                    ]}
                  />
                </Field>
              </div>
            </div>

            <div className="field-section">
              <div className="field-section-title">
                {t(lang, "Timeline & Motivation", "Plazos y Motivación")}
              </div>
              <div className="form-grid">
                <Field label={t(lang, "Desired timeframe", "Plazo deseado")}>
                  <Select
                    name="timeframe"
                    value={data.timeframe}
                    onChange={handleChange}
                    options={[
                      {
                        value: "",
                        label: t(lang, "Select...", "Seleccionar..."),
                      },
                      {
                        value: "1mo",
                        label: t(
                          lang,
                          "1 month — immediate results",
                          "1 mes — resultados inmediatos",
                        ),
                      },
                      {
                        value: "3mo",
                        label: t(
                          lang,
                          "3 months — structured change",
                          "3 meses — cambio estructurado",
                        ),
                      },
                      {
                        value: "6mo",
                        label: t(
                          lang,
                          "6 months — lasting transformation",
                          "6 meses — transformación duradera",
                        ),
                      },
                      {
                        value: "ongoing",
                        label: t(
                          lang,
                          "Ongoing — lifestyle integration",
                          "Continuo — integración en el estilo de vida",
                        ),
                      },
                    ]}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "What is your main motivation?",
                    "¿Cuál es tu motivación principal?",
                  )}
                >
                  <Input
                    name="motivation"
                    value={data.motivation}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      "e.g. an event, health, performance...",
                      "ej. un evento, salud, rendimiento...",
                    )}
                  />
                </Field>
                <Field
                  label={t(
                    lang,
                    "Anything else Suli should know?",
                    "¿Hay algo más que Suli deba saber?",
                  )}
                  span={2}
                >
                  <Textarea
                    name="additionalNotes"
                    value={data.additionalNotes}
                    onChange={handleChange}
                    placeholder={t(
                      lang,
                      "Preferences, previous trainer experiences, expectations...",
                      "Preferencias, experiencias previas con entrenadores, expectativas...",
                    )}
                  />
                </Field>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // ── Render ──
  return (
    <div className="assessment-page">
      <nav className="assessment-topbar">
        <Link to="/" className="assessment-topbar-logo">
          POREOS
        </Link>
        <div className="assessment-topbar-right">
          <span className="assessment-topbar-label">
            {t(lang, "Initial Assessment", "Valoración Inicial")}
          </span>
          <LanguageSwitcher />
        </div>
      </nav>

      <div className="assessment-layout">
        {/* ── Sidebar ── */}
        <aside className="assessment-sidebar">
          <div className="assessment-sidebar-title">
            {lang === "en" ? (
              <>
                Client
                <br />
                Assessment
              </>
            ) : (
              <>
                Valoración
                <br />
                de Cliente
              </>
            )}
          </div>
          <div className="assessment-sidebar-subtitle">
            {t(lang, "Confidential · 5 minutes", "Confidencial · 5 minutos")}
          </div>

          <ul className="step-list">
            {steps.map((s, i) => {
              const status =
                i < step ? "done" : i === step ? "active" : "inactive";
              return (
                <li
                  key={s.n}
                  className={`step-item ${status}`}
                  onClick={() => i < step && setStep(i)}
                >
                  <div className="step-dot">
                    <div className="step-dot-inner" />
                  </div>
                  <div className="step-info">
                    <div className="step-number">
                      {t(lang, "Step", "Paso")} {s.n}
                    </div>
                    <div className="step-name">{s.name}</div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="sidebar-progress">
            <div className="sidebar-progress-label">
              {Math.round(progress)}% {t(lang, "complete", "completado")}
            </div>
            <div className="sidebar-progress-bar">
              <div
                className="sidebar-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </aside>

        {/* ── Main form ── */}
        <main className="assessment-main">
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

            <div className="step-nav">
              <button
                type="button"
                className="btn-back"
                onClick={back}
                disabled={step === 0}
              >
                ← {t(lang, "Back", "Atrás")}
              </button>

              {step < TOTAL_STEPS - 1 ? (
                <button type="submit" className="btn-next">
                  {t(lang, "Continue", "Continuar")} →
                </button>
              ) : (
                <button type="submit" className="btn-next submit">
                  {t(lang, "Submit Assessment", "Enviar Valoración")} →
                </button>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
