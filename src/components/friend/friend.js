import React from 'react';
import PropTypes from 'prop-types';

import './friend.css';
import {Avatar} from "../avatar/avatar";

export const Friend = ({name, surname, city, status, img}) => {
  return (
    <>
      {name &&
          <li className='card__friend'>
            <div className="card__friend-avatar">
              <Avatar img={img}/>
            </div>
            <div className="card__friend-info">
              <div className="card__friend-name">
                {name} {surname}
              </div>
              {city && <address>{city}</address>}
              {status && <div className="card__friend-status">Online</div>}
            </div>
          </li>
      }
    </>
  )
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  city: PropTypes.string,
  status: PropTypes.bool
};

Friend.defaultProps = {
  name: null,
  surname: null,
  city: 'Город не известен',
  status: false
};
