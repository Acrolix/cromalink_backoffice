import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as es from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
