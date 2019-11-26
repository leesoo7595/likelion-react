import React, {Component} from 'react';

export default class Btn extends Component {

    state = {
        color: 'white'
    };

    getRandomRgb = () => {
        const randomRgb = [];
        for (let i = 0; i < 6; i++) {
            const value = this.getRandomValue();
            randomRgb.push(value);

        }
        return `#${randomRgb.join('')}`
    };

    getRandomValue = () => {
        const hexList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        return hexList[Math.floor(Math.random() * hexList.length)];
    };

    onChangeColor = () => {
        const rgb = this.getRandomRgb();
        console.log('rgb', rgb);
        this.setState({color: rgb})
    };

    onChangeRed = () => {
        this.setState({color: 'red'})
    };

    onChangeBlue = () => {
        this.setState({color: 'blue'})
    };

    onChangeGreen = () => {
        this.setState({color: 'green'})
    };

    componentDidUpdate() {
        const {color} = this.state;
        if (color === 'red') {
            alert('red btn!')
        }
        if (color === 'blue') {
            alert('blue btn!')
        }
        if (color === 'green') {
            alert('green btn!')
        }
    }

    render() {
        const {color} = this.state;
        const style = {
            backgroundColor: color
        };
        return (
            <div>
                <button style={style} onClick={this.onChangeColor}>
                    hello
                </button>
                <button onClick={this.onChangeRed}>
                    red
                </button>
                <button onClick={this.onChangeBlue}>
                    blue
                </button>
                <button onClick={this.onChangeGreen}>
                    green
                </button>
            </div>
        )
    }
}