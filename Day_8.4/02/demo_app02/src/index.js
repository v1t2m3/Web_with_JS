import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

let time_now = new Date().toLocaleTimeString();
const timeCurrent = React.createElement(
    "h2",
    { id: "time" },
    "Hello, word!",
    React.createElement("h1", null, time_now)
);
const container = document.getElementById("root");
const root = createRoot(container);
const tiktok = () => root.render(timeCurrent);
setInterval(tiktok, 1000);
