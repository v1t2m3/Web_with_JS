import { Component } from "react";

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = { todoList: [], item: "" };
    }
    getItemValue = (e) => {
        this.setState({ item: e.target.value });
    };
    addItem = () => {
        if (this.state.item) {
            const newList = this.state.todoList;
            newList.push(this.state.item);
            this.setState({ todoList: newList, item: "" });
        }
    };
    render() {
        return (
            <div className="container col-6">
                <h1
                    className="title text-center bg-info py-3 my-5 "
                    style={{ color: "white" }}
                >
                    Todo App
                </h1>
                <div className="input-group d-flex ">
                    <input
                        style={{
                            borderRadius: "5px 0px 0px 5px",
                            borderColor: "cyan",
                        }}
                        className="col-10"
                        type="text"
                        placeholder="todo item"
                        onChange={this.getItemValue}
                    ></input>
                    <div className="btn btn-info col-2" onClick={this.addItem}>
                        Add Item
                    </div>
                </div>
                <div className="table-todolist my-5">
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Items</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todoList.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item}</td>
                                    <td>Not yet</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
