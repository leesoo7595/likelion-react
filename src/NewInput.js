import React, {Component} from 'react';

export default class NewInput extends Component {

    state = {
        input: ''
    };

    onChangeInput = (e) => {
        this.setState({input: e.target.value})
    };

    render() {
        const {input} = this.state;
        return (
            <div>
                <input type="text" value={input} onChange={this.onChangeInput}/>
            </div>
        );
    }
}
