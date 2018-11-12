import React, { Component } from 'react';
import { Button } from "./button";
import PropTypes from "prop-types";

const CounterText = ({ count }) => {
    return <h3>{`Counter now is: ${count}`}</h3>
};

CounterText.propTypes = {
    count: PropTypes.number.isRequired
};

export class Counter extends Component {
    state = {
        count: 0
    };

    onClick = () => {
        this.setState(({ count }) => ({
            count: ++count
        }))
    };

    render () {
        const { onClick } = this;
        const { count } = this.state;

        return (
            <div>
                <Button color={'#48e85d'} onClick={onClick} text={'Click to increase count'} />
                <CounterText count={count} />
            </div>
        )
    }
}
