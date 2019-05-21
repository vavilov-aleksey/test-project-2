import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export const Tabs = ({children, isActive, onClick, nameTabs}) => {
  return(
    <div className={`${isActive ? 'active ' : ''}tabs`} onClick={onClick} name={nameTabs}>
      {children}
    </div>
  )
};

Tabs.propTypes = {
  children: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  nameTabs: PropTypes.string,
};

Tabs.defaultProps = {
  children: '',
  isActive: false,
  onClick: () => {},
  nameTabs: ''
};