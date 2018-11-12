import React, { Component } from 'react';
import { Teller } from "./teller";
import { Button } from "./button";

export const Hello = () => {
    return <h3>Hello World!</h3>;
};

export class SuperHello extends Component {
    state = {
        color: '#61dafb',
        text: 'Click me!'
    };

    onClick = () => {
        let textAfterClick = [
            'Wow, that was great!, Do it again',
            'Thank you, and now once more',
            'Try again!',
            'One more time...',
            'More clicks needed',
            'Click this text again',
            'Are you sure, you clicked it?',
            'Something went wrong. Please try again'
        ];
        this.setState(({ color }) => ({
            color: color === '#61dafb' ? '#ff0000' : '#61dafb',
            text: textAfterClick[Math.floor(Math.random() * textAfterClick.length)]
        }))
    };

    render () {
        const { color } = this.state;
        const { text } = this.state;
        const { onClick } = this;

        return (
            <div>
                <Button color={color} onClick={onClick} text={text} />
                <Teller color={color} />
            </div>
        )
    }
}

export const Welcome = ({ children }) => {
    return (
        <div className="Hello-world">
            {children}
        </div>
    )
};
