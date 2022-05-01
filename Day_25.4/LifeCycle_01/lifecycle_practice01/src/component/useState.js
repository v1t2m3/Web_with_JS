import { useState } from "react";
export default function Increase() {
    const [number, setnumber] = useState(0);
    return (
        <div className="container col-6 bg-dark my-5 py-3 rounded-3">
            <h2 className="text-center text-light">{number}</h2>
            <button
                className="btn btn-primary d-flex mx-auto"
                onClick={() => {
                    setnumber(number + 1);
                }}
            >
                Click me
            </button>
        </div>
    );
}
