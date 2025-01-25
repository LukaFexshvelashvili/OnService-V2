import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./main/App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="OnService-V2/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
