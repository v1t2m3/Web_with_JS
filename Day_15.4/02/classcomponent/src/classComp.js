import React from "react";
class Car extends React.Component {
    render() {
        return <p>This is {this.props.color} Car</p>;
    }
}
export default Car;
