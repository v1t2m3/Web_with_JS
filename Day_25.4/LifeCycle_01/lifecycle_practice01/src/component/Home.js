import { Component } from "react";
import LogIn from "./LogInPage";

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = { isLogIn: null };
    }
    logOut = () => {
        this.setState({ isLogIn: false });
    };
    render() {
        if (this.state.isLogIn) {
            return <LogIn text="Log out" value={this.logOut} />;
        } else {
            return (
                <div className="col-4 mx-auto">
                    <form>
                        <div className="d-flex justify-content-center my-5">
                            <i
                                class="bi bi-apple"
                                style={{
                                    fontSize: "8rem",
                                    display: "flex",
                                    margin: "auto 0",
                                }}
                            ></i>
                        </div>
                        <h1 className="text-center my-5">Please Log In!</h1>

                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-lable"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            ></input>
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-lable"
                            >
                                Password
                            </label>
                            <input
                                type="Password"
                                className="form-control"
                                id="exampleInputPassword1"
                            ></input>
                        </div>
                        <div className="d-grid">
                            <button
                                className="btn btn-info"
                                type="button"
                                onClick={(e) => {
                                    this.setState({ isLogIn: true });
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
