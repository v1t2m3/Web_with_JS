import { useParams } from "react-router-dom";

export default function Expense() {
    let params = useParams();
    return (
        <div>
            <h2>Expense Detail</h2>
            <p>Expense: {params.expenseID}</p>
        </div>
    );
}
