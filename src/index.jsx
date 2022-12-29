import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./index.css";
import App from "./App.jsx";
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
