import React from 'react';
import Plus from './Plus';
import Minus from './Minus';

function FuncBtn({name}) {
    return (
        <button>
            {name}버튼
        </button>
    )
}

class Input extends React.Component {
    // static defaultProps = {
    //   name: '이수'
    // };

    state = {
        click: 0
    };

    onClickBtn = () => {
        console.log('clicked!');
        const {click} = this.state;
        this.setState({click: click + 1})
    };

    render() {
        console.log(this.state.click);
        return (
            <button onClick={this.onClickBtn}/>
        )
    }
}

export default class App extends React.Component {

    state = {
        click: 0,
    };

    handleIncrease = () => {
        const {click} = this.state;
        this.setState({click: click + 1});
    };

    handleDecrease = () => {
        const {click} = this.state;
        this.setState({click: click - 1});
    };

    render() {
        const {click} = this.state;
        const name = '이수';
        const style = {
            height: '100vh',
            backgroundColor: 'black',
            color: 'white'
        };
        return (
            <div style={style}>
                <Plus handleIncrease={this.handleIncrease}/>
                {click}
                <Minus handleDecrease={this.handleDecrease}/>
            </div>
        );
    }
}
