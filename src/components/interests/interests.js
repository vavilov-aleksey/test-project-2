import React from 'react';
import PropTypes from 'prop-types';
import './interests.css';
import {ReactComponent as ReactLogo} from '../../images/icon-close.svg';

export const Interest = ({children, onClick, ...attrs}) => {
  return(
    <div className='interest' onClick={onClick} {...attrs}>
      {children}
      <ReactLogo/>
    </div>
  )
};

Interest.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Interest.defaultProps = {
  children: '',
  onClick: () => {}
};