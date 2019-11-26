import React, {Component} from 'react';

export default class Layout extends Component {

    render() {
        const {children} = this.props;
        const style = {
            backgroundColor: 'black'
        };
        return (
            <div style={style}>
                {children}
            </div>
        )
    }
}