import { Component } from "react";
export default class IncreaseButton extends Component {
    constructor() {
        super();
        this.state = { value: 0, color: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "pink" });
        }, 5000);
    }
    componentWillUnmount() {
        alert("Stop");
    }
    render() {
        return (
            <div className="container">
                <h2 style={{ backgroundColor: this.state.color }}>
                    {this.state.value}
                </h2>
                <button
                    onClick={(e) => {
                        this.setState({ value: this.state.value + 1 });
                    }}
                >
                    Increase
                </button>
                <button
                    onClick={(e) => {
                        this.setState({ value: this.state.value - 1 });
                    }}
                >
                    Decrease
                </button>
            </div>
        );
    }
}
