import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <div className="container py-5">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Ruma Khan</p>
                    <p className="text-sub">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                    <button className="btn btn-primary">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);
