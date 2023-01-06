import "normalize.css";
import "sakura.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app/app";

const rootEl = document.querySelector("#root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error("Missing app root element");
}
