import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Alert from "./alert";
import Calculate from "./calculator.js";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(
//     <Alert text={"Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."} />
// );
root.render(<Calculate />);
