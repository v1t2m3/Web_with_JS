import React from "react";
import { createRoot } from "react-dom/client";
import Car from "./classComp";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Car color={"red"} />);
