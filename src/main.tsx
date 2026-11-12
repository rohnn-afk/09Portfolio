import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../public/fonts/fonts.css";
import "./index.css";
import App from "./App";
const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
const app = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
