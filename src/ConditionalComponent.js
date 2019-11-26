import React, {Component} from 'react';

export default class ConditionalComponent extends Component {
    state = {
        toggle: false,
        color: 'red'
    };

    onClickButtonTrue = () => {
        this.setState({toggle: true, color: 'black'});
    };

    onClickButtonFalse = () => {
        this.setState({toggle: false, color: 'red'});
    };

    render() {
        const {toggle, color} = this.state;
        const style = {
            backgroundColor: color
        }
        console.log(toggle);
        // if (toggle) {
        //     return (
        //         <div>
        //             <button style={style} onClick={this.onClickButtonFalse}>토글버튼</button>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <button style={style} onClick={this.onClickButtonTrue}>토글버튼</button>
        //         </div>
        //     )
        // }
        return (
            <div>
                {
                    !toggle
                        ? <button style={style} onClick={this.onClickButtonTrue}>토글버튼</button>
                        : <button style={style} onClick={this.onClickButtonFalse}>토글버튼</button>
                }
            </div>
        )
    }
}
















