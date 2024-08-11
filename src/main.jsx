import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import App from "./app/App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import * as es from "./locales/es.json";
import * as en from "./locales/en.json";
import { BrowserRouter } from "react-router-dom";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
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
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
