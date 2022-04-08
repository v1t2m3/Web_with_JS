import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

let time_now = new Date().toLocaleTimeString();
// const timeCurrent = React.createElement(
//     "h2",
//     { id: "time" },
//     "Hello, word!",
//     React.createElement("h1", null, time_now)
// );
const timeCurrent = (
    <div>
        <h1 style={{ color: "red" }}>Hello, world!</h1>
        <h2 style={{ color: "blue" }}>{time_now}</h2>
    </div>
);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(timeCurrent);
