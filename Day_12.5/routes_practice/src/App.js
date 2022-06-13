import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div></div>
            </header> */}
            <nav>
                <Link to="/invoices">Invoices</Link> | {""}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
