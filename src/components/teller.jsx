import React, { Fragment }  from 'react';
import PropTypes from 'prop-types';

export const Teller = ({ color }) => {
    return (
        <Fragment>
            <h5>Current button text color is</h5>
            <h5 style={{color}}>{color}</h5>
        </Fragment>
    )
};

Teller.propTypes = {
    color: PropTypes.string.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string
};

Teller.defaultProps = {
    func: () => {},
    number: 0,
    string: ''
};
