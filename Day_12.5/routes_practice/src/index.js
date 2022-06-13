import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./invoices";
import Expenses from "./expenses";
import Invoice from "./invoice";
import Expense from "./expense";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route
                    index
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Let's invoices or expenses to contiune</p>
                        </main>
                    }
                />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="invoices/:invoiceID" element={<Invoice />} />
                <Route path="expenses/:expenseID" element={<Expense />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>404 Not Found</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);
