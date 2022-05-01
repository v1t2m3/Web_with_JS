import { useState, useEffect } from "react";

function Count() {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        if (number == 10) {
            setNumber(0);
        }
    }, [number]);
    return (
        <div className="container col-6 my-5 py-4 bg-info rounded-3">
            <h1 className="text-center text-light">{number}</h1>
            <button
                className="btn btn-primary mx-auto d-flex"
                onClick={(e) => {
                    setNumber(number + 1);
                }}
            >
                IncreaseButton
            </button>
        </div>
    );
}
export default Count;
