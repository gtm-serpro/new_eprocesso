import "@fortawesome/fontawesome-free/css/all.min.css";
import "@govbr-ds/core/dist/core.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
