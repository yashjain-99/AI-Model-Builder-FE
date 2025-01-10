import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NavStateProvider from "@/context/NavStateContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavStateProvider>
      <App />
    </NavStateProvider>
  </StrictMode>
);
