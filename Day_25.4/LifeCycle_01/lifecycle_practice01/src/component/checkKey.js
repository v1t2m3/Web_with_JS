import { Component } from "react";

export default class CheckKey extends Component {
    constructor() {
        super();
        this.state = { yourKey: "" };
    }
    YourKey = (e) => {
        this.setState({ yourKey: e.key });
    };
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Your key: {this.state.yourKey}</h2>
                <input
                    className="form-control"
                    onKeyDown={(e) => {
                        this.YourKey(e);
                    }}
                ></input>
            </div>
        );
    }
}
