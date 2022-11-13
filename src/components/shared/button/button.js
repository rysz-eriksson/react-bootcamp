import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ onClick, btnClassName, children, type = 'button' }) => {
  return (
      <button type={type} onClick={onClick} className={btnClassName}>
        {children}
      </button>
    );
  };

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
}
  