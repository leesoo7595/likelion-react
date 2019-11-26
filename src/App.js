import React, {Component} from 'react';
import ConditionalComponent from "./ConditionalComponent";
import Register from "./Register";

class ListBtn extends Component {

    render() {
        const nameList = ['a', 'b', 'c', 'd', 'e'];
        return (
            <div>
                {
                    nameList.map((e, i) => {
                        return <button key={i}>{e}</button>
                    })
                }
            </div>
        );
    }
}

export default class App extends Component {

    render() {
        return (
            <Register />
        );
    }
}

class ParentButton extends Component {
    state = {
        color: 'green'
    };
    render() {
        const {color} = this.state;
        return (
            <ColorButton color={color}/>
        )
    }
}

class ColorButton extends Component {
    render() {
        const {color} = this.props;
        const style = {
            backgroundColor: color
        };
        return (
            <button style={style} />
        )
    }
}

class ToggleInput extends Component {

    state = {
        input: '',
        toggle: false
    };

    onToggleBtn = () => {
        const {toggle} = this.state;
        this.setState({toggle: !toggle})
    };

    onChangeInput = e => {
        this.setState({input: e.target.value})
    };

    render() {
        const {toggle} = this.state;

        return (
            <div>
                <button onClick={this.onToggleBtn}>
                    input아 나와라
                </button>
                {
                    toggle
                        ? <input type="text" value={'input'} onChange={this.onChangeInput}/>
                        : null
                }
            </div>
        )
    }
}
