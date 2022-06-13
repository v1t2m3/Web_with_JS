import { Link } from "react-router-dom";
export default function Expenses() {
    let expensesID = 5000;
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Expenses</h2>
            <Link to={`/expenses/${expensesID}`} key={expensesID}>
                ID {expensesID}
            </Link>
        </main>
    );
}
