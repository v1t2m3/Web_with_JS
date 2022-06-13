import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Invoice() {
    let params = useParams();

    return (
        <div className="invoice">
            <h2>Invoice Detail</h2>
            <p>Invoice: {params.invoiceID}</p>
        </div>
    );
}
