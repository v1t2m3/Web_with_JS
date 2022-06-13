import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
    // GET Request
    // state = {
    //     persons: [],
    // };

    // componentDidMount() {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/users`)
    //         .then((res) => {
    //             const persons = res.data;
    //             this.setState({ persons });
    //         })
    //         .catch((error) => console.log(error));
    // }
    // Post Request
    // state = { name: "" };
    state = { Id: "" };
    handleChange = (event) => {
        // this.setState({ name: event.target.value });
        this.setState({ Id: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios
            // Post Request
            // .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .delete(
                `https://jsonplaceholder.typicode.com/users/${this.state.Id}`
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        {/* Person Name: */}
                        Person ID:
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    {/* <button type="submit">Add</button> */}
                    <button type="submit">Delete</button>
                </form>
                {/* GET Request */}
                {/* <ul>
                    {this.state.persons.map((person) => (
                        <li>{person.name}</li>
                    ))}
                </ul> */}
            </div>
        );
    }
}
