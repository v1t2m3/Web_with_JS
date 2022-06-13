import { Link, NavLink } from "react-router-dom";
export default function Invoices() {
    let invoiceID = 1150;
    let invoice2ID = 2150;
    return (
        <main className="invoices" style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
            <NavLink
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "green" : "",
                    };
                }}
                to={`/invoices/${invoiceID}`}
                key={invoiceID}
            >
                ID {invoiceID}
            </NavLink>
        </main>
    );
}
