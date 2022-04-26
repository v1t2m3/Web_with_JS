import { Component } from "react";

export default class LogIn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-4 mx-auto">
                <form>
                    <div className="d-flex justify-content-center my-5">
                        <i
                            class="bi bi-meta"
                            style={{
                                fontSize: "8rem",
                                display: "flex",
                                margin: "auto 0",
                            }}
                        ></i>
                    </div>
                    <h1 className="text-center my-5">Welcome Tam Nguyen!</h1>
                    <div className="d-grid">
                        <button
                            className="btn btn-primary"
                            onClick={this.props.value}
                        >
                            {this.props.text}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
