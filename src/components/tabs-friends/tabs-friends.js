import React from 'react';
import {dataUser} from '../../data/user';

import './tabs-friends.css';
import {Friend} from "../friend/friend";

export const TabsFriends = () => {
  return(
    <ul className='main-card__friends'>
      {
        dataUser.friends.map((elem, id) => {
          return(
            <Friend key={id} name={elem.name} surname={elem.surname} city={elem.city} status={elem.isOnline} img={elem.avatar}/>
          )
        })
      }
    </ul>
  )
};

