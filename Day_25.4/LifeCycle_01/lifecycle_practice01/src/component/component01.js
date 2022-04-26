import { Component } from "react";
export default class NameText extends Component {
    constructor() {
        super();
    }
    componentWillUnmount() {
        alert("Sao xoa vay pa!");
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Nguyen Van Tam</h1>
            </div>
        );
    }
}
