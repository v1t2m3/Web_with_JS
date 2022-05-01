import { useState } from "react";
import LogIn2 from "./LogInPage2";
export default function HomePage2() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const fnc_setlogin = () => {
        setLogin(false);
        setPassword("");
        setUser("");
    };
    console.log(user, password, login);
    if (!login) {
        return (
            <div className="col-4 mx-auto">
                <form>
                    <div className="d-flex justify-content-center my-5">
                        <i
                            className="bi bi-apple"
                            style={{
                                fontSize: "8rem",
                                display: "flex",
                                margin: "auto 0",
                            }}
                        ></i>
                    </div>
                    <h1 className="text-center my-5">Please Log In!</h1>
                    <div className="mb-3">
                        <label className="form-lable">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        ></input>
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-lable">Password</label>
                        <input
                            type="Password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="d-grid">
                        <button
                            className="btn btn-info"
                            type="button"
                            onClick={() => {
                                setLogin(true);
                            }}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    } else
        return <LogIn2 user={user} password={password} value={fnc_setlogin} />;
}
