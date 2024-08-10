import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import App from "./app/App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import "./index.css";
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
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
