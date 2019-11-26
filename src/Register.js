import React, {Component} from 'react';

export default class Register extends Component {

    state = {
        value: {
            id: '',
            pw: ''
        }
    };

    onChangeId = e => {
        this.setState({id: e.target.value})
    };

    onChangePw = e => {
        this.setState({pw: e.target.value})
    };

    onChange = e => {
        this.setState({value: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
        const form = new FormData(e.currentTarget);
        fetch('http:/localhost:3000/api', {
            method: 'post',
            body: form
        })
            .then(() => console.log('success'))
            .catch(e => console.log(e));
    };

    render() {
        const {id, pw} = this.state;
        return (
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input type="text" value={id} />
                <input type="password" value={pw} />
                <button type={'submit'}>제출</button>
            </form>
        );
    }
}