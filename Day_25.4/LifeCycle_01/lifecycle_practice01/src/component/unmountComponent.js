import { Component } from "react";
import NameText from "./component01";
export default class Hello extends Component {
    constructor() {
        super();
        this.state = { display: true };
    }

    render() {
        if (this.state.display) {
            return (
                <div className="container">
                    <NameText />
                    <button
                        onClick={(e) => {
                            this.setState({ display: false });
                        }}
                    >
                        Delete Component
                    </button>
                </div>
            );
        } else {
            return;
        }
    }
}
