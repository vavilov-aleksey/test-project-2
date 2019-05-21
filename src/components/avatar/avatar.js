import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

export const Avatar = ({img, classname}) => {
  return(
    <img src={img} className={classname} alt=""/>
  )
};

Avatar.propTypes = {
  img: PropTypes.string.isRequired
};
