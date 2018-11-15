import React, { Component, Fragment } from 'react';
import { Button } from "./button";
import PropTypes from "prop-types";

const CounterText = ({ count }) => {
    return <h5>{`Counter now is: ${count}`}</h5>
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
        const { count } = this.state;

        return (
            <Fragment>
                <Button isTeller={false} onClick={this.onClick} text={'Click to increase count'} />
                <CounterText count={count} />
            </Fragment>
        )
    }
}
