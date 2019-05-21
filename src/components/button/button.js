import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({children, ...attrs}) => {
  return(
    <button {...attrs}>
      {children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  children: ''
};
