import React, {Component} from 'react';

export default class Input extends Component {
    state = {
        title: ''
    };

    handleChangeInput = (e) => {
        this.setState({title: e.target.value});
        console.log('evt', e);
        console.log('title', this.state.title);
     };

    render() {
        const {title} = this.state;
        return (
            <input type="text" value={title} name={'title'} onChange={this.handleChangeInput}/>
        )
    }
}