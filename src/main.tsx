import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NavStateProvider from "@/context/NavStateContextProvider.tsx";
import CreateModelModalStateProvider from "./context/CreateModelModalStateContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavStateProvider>
      <CreateModelModalStateProvider>
        <App />
      </CreateModelModalStateProvider>
    </NavStateProvider>
  </StrictMode>
);
