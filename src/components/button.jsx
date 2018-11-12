import React from "react";
import PropTypes from "prop-types";

export const Button = ({color, onClick, text}) => {
    return <button style={{color: color}} className="Funny-button" onClick={onClick}>{text}</button>
};

Button.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
