import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [from, setform] = useState({});
    function handleChange() {
        setform({ ...from, [event.target.name]: event.target.value });
    }
    function handleSummit() {}
    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div className="custom-input">
                    <input
                        name="username"
                        value={form.username || ""}
                        onGhange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <input
                        name="email"
                        value={form.email || ""}
                        onGhange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <input
                        name="password"
                        value={form.password || ""}
                        onGhange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default App;
