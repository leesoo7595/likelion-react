import React, {Component} from 'react';

export default class Clock extends Component {

    state = {
        date: new Date()
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        console.log('mount!');
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    };

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.tick}>새로고침!</button>
            </div>
        );
    }
}