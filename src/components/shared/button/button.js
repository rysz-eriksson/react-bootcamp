import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ onClick, children, type = 'button' }) => {
    return (
      <button type={type} onClick={onClick}>
        {children}
      </button>
    );
  };

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
}
  