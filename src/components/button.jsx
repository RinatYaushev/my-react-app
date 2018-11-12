import React, { Component } from "react";
import { Teller } from './teller';
import PropTypes from "prop-types";

export class Button extends Component {

    static propTypes = {
        isTeller: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: () => {}
    };

    constructor(props) {
        super(props);
        this.colors = [
            '#9400D3',
            '#4B0082',
            '#0000FF',
            '#00FF00',
            '#FFFF00',
            '#FF7F00',
            '#FF0000'
        ];
        this.state = {
            color: this.randomPicker(this.colors),
            text: props.text
        };
    }

    randomPicker = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    };

    onClick = () => {
        this.props.onClick();

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

        const { text } = this.props;

        this.setState(() => ({
            color: this.randomPicker(this.colors),
            text: text === 'Click to increase count' ?
                'Click to increase count' :
                this.randomPicker(textAfterClick)
        }))
    };

    render () {
        const { color, text } = this.state;
        const { isTeller } = this.props;

        if (isTeller) {
            return (
                <div>
                    <button style={{color: color}} className="Funny-button" onClick={this.onClick}>{text}</button>
                    <Teller color={color} />
                </div>
            )
        }

        return <button style={{color: color}} className="Funny-button" onClick={this.onClick}>{text}</button>
    }
}
