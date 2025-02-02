import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./variables.css";
import "./index.css";
import "./animations.css";
import App from "./main/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./languages/translations";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="OnService-V2/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
