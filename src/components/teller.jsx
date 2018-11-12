import React  from 'react';
import PropTypes from 'prop-types';

export const Teller = ({ color }) => {
    return (
        <div>
            <h4>Current button text color is</h4>
            <h4 style={{color}}>{color}</h4>
        </div>
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
