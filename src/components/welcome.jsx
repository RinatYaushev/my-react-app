import React, { Component } from 'react';

function Hello() {
    return <h1>Hello World!</h1>;
}

class SuperHello extends Component {
    state = {
        color: '#ffffff'
    };
    toggleColor = () => {
        this.setState(({ color }) => ({
            color: color === '#ffffff' ? '#ff0000' : '#ffffff',
        }))
    };
    render () {
        const  { color } = this.state;

        return (
            <h1 style={{color: color}} onClick={this.toggleColor}>Super Hello World!</h1>
        )
    }
}

function Welcome() {
    return (
        <div>
            <Hello />
            <SuperHello />
        </div>
    )
}

export default Welcome
