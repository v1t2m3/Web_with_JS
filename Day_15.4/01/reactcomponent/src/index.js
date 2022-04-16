import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PlusAB from "./hello";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PlusAB a={2} b={3} />);
