import { Component } from "react";
class Calculate extends Component {
    constructor() {
        super();
        this.state = {
            numberA: 0,
            numberB: 0,
            operator: "",
            valueResult: 0,
        };
    }
    cal = (operator) => {
        switch (operator) {
            case "+":
                this.setState({
                    valueResult:
                        parseFloat(this.state.numberA) +
                        parseFloat(this.state.numberB),
                });
                break;
            case "-":
                this.setState({
                    valueResult:
                        parseFloat(this.state.numberA) -
                        parseFloat(this.state.numberB),
                });
                break;
            case "x":
                this.setState({
                    valueResult:
                        parseFloat(this.state.numberA) *
                        parseFloat(this.state.numberB),
                });
                break;
            case "/":
                this.setState({
                    valueResult:
                        parseFloat(this.state.numberA) /
                        parseFloat(this.state.numberB),
                });
                break;
            default:
                break;
        }
    };
    render() {
        return (
            <div className="container">
                <Number
                    //type="number"
                    className="NumberA"
                    onKeyUp={(e) => {
                        this.setState({ numberA: e.target.value });
                    }}
                />
                <br></br>
                <Number
                    //type="number"
                    className="NumberB"
                    onKeyUp={(e) => {
                        this.setState({ numberB: e.target.value });
                    }}
                />
                <br></br>
                <Result text={this.state.valueResult} />
                <br></br>
                <ButtonA
                    className={"Add btn btn-info mx-3"}
                    onClick={(e) => {
                        this.cal("+");
                    }}
                    label={"+"}
                />
                <ButtonA
                    className={"Sub btn btn-info mx-3"}
                    onClick={(e) => {
                        this.cal("-");
                    }}
                    label={"-"}
                />
                <ButtonA
                    className={"Multi btn btn-info mx-3"}
                    onClick={(e) => {
                        this.cal("x");
                    }}
                    lable={"x"}
                />
                <ButtonA
                    className={"Div btn btn-info mx-3"}
                    label={"/"}
                    onClick={(e) => {
                        this.cal("/");
                    }}
                />
            </div>
        );
    }
}
class Number extends Component {
    render() {
        return (
            <div>
                <input
                    className={this.props.className}
                    type="number"
                    onKeyUp={this.props.onKeyUp}
                ></input>
            </div>
        );
    }
}
class Result extends Component {
    render() {
        return (
            <div>
                <p>Result: {this.props.text} </p>
            </div>
        );
    }
}
class ButtonA extends Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                {this.props.label}
            </div>
        );
    }
}
export default Calculate;
