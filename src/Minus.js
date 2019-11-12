import React from "react";

export default class Minus extends React.Component {
    render() {
        const {handleDecrease} = this.props;
        return (
            <button onClick={handleDecrease}>빼기</button>
        )
    }
}
