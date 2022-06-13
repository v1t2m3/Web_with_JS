import React from "react";
import { createRoot } from "react-dom/client";
import PersonList from "./component/PersonList";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PersonList />);
