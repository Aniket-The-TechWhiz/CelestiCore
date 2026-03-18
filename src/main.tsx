
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { initializeConsentMode } from "./app/lib/consent";
  import "./styles/index.css";

  initializeConsentMode();

  createRoot(document.getElementById("root")!).render(<App />);
  