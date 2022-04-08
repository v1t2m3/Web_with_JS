import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

// const hello = React.createElement(
//     "p",
//     { id: "message", className: "hello" },
//     "Hello word!"
// );
const item = ["Java Script", "Flutter", "Dart"];
const programing = React.createElement(
    "section",
    { className: "program" },
    React.createElement("h1", { id: "Program_Language" }, "Program language"),
    React.createElement(
        "ol",
        { id: "list_language" },
        item.map((coding, i) => React.createElement("li", { key: i }, coding))
    )
);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(programing);
