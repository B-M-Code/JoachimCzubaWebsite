import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./Contact.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";

const PACKAGE_OPTIONS = [
  { value: "Pakiet podstawowy", label: "Pakiet podstawowy" },
  { value: "Pakiet standard", label: "Pakiet standard" },
  { value: "Pakiet premium", label: "Pakiet premium" },
  { value: "Pakiet indywidualny", label: "Pakiet indywidualny" },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgrgvwj");

  const [selectedPackage, setSelectedPackage] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [activeLabels, setActiveLabels] = useState({
    name: false,
    surname: false,
    email: false,
    message: false,
  });

  const handleFocus = (field) => {
    setActiveLabels((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setActiveLabels((prev) => ({
      ...prev,
      [field]: !!values[field].trim(),
    }));
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    setActiveLabels((prev) => ({
      ...prev,
      [field]: !!value.trim() || prev[field],
    }));
  };

  const toggleLabelClass = (field) =>
    `${styles.label} ${activeLabels[field] ? styles.selected : ""}`;

  const handleSelectOption = (value) => {
    setSelectedPackage(value);
    setIsSelectOpen(false);
  };

  if (state.succeeded) {
    return (
      <div className={styles.message_wrapper}>
        <span class="material-symbols-outlined">schedule_send</span>
        <p>
          Dziękuję za wiadomość! <br />
          Odezwę się najszybciej jak to możliwe.
        </p>
      </div>
    );
  }

  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.gradient}></div>
          <div className={styles.img}></div>
        </div>
      </main>

      <SubPageHeaderBlock
        title={"Kontakt"}
        text={
          "Gotowy, żeby zacząć budować swoją formę? Napisz do mnie, a razem ustalimy najlepszy plan działania i ruszymy do pracy."
        }
        subtext={"Im szybciej zaczniesz, tym szybciej zobaczysz efekty."}
      />

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={toggleLabelClass("name")}>
            Imie
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            onChange={handleChange("name")}
          />

          <label htmlFor="surname" className={toggleLabelClass("surname")}>
            Nazwisko
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            required
            onFocus={() => handleFocus("surname")}
            onBlur={() => handleBlur("surname")}
            onChange={handleChange("surname")}
          />
          <ValidationError
            prefix="Nazwisko"
            field="surname"
            errors={state.errors}
          />

          <label htmlFor="email" className={toggleLabelClass("email")}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            onChange={handleChange("email")}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="package">Pakiet</label>

          <select
            id="package"
            name="package"
            required
            value={selectedPackage}
            onChange={() => {}}
            className={styles.nativeSelectHidden}
          >
            <option value="" disabled>
              Wybierz pakiet
            </option>
            {PACKAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className={styles.customSelectWrapper}>
            <div
              className={`${styles.customSelect} ${
                isSelectOpen ? styles.opened : ""
              }`}
            >
              <span
                className={styles.customSelectTrigger}
                onClick={() => setIsSelectOpen((prev) => !prev)}
              >
                {selectedPackage || "Wybierz pakiet"}
              </span>

              <div className={styles.customOptions}>
                {PACKAGE_OPTIONS.map((option) => (
                  <span
                    key={option.value}
                    className={`${styles.customOption} ${
                      selectedPackage === option.value ? styles.selection : ""
                    }`}
                    onClick={() => handleSelectOption(option.value)}
                  >
                    {option.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ValidationError
            prefix="Pakiet"
            field="package"
            errors={state.errors}
          />

          <label htmlFor="message" className={toggleLabelClass("message")}>
            Wiadomość
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Twoja wiadomość..."
            required
          />
          <ValidationError
            prefix="Wiadomość"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Wysyłanie..." : "Wyślij"}
          </button>

          <ValidationError errors={state.errors} />
        </form>
        <div className={styles.bg_gradient}></div>
        <div className={styles.bg}></div>
      </section>
    </>
  );
}
