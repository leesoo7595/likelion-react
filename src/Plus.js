import React from "react";

export default class Plus extends React.Component {
    render() {
        const {handleIncrease} = this.props;
        return (
            <button onClick={handleIncrease}>더하기</button>
        )
    }
}
