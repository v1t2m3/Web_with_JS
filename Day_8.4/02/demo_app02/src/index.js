import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
const tiktok = () => {
    root.render(
        React.createElement(
            "h2",
            { id: "time" },
            "Hello, word!",
            React.createElement("h1", null, new Date().toLocaleTimeString())
        )
    );
};
setInterval(tiktok, 1000);
