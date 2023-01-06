import "normalize.css";
import "sakura.css";

import { createRoot } from "react-dom/client";

import { App } from "./app/app";

const rootEl = document.querySelector("#root");
if (rootEl) {
  createRoot(rootEl).render(<App />);
} else {
  throw new Error("Missing app root element");
}
