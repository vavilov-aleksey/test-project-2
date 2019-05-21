import React, {PureComponent} from 'react';
import './tabs-user.css';
import {Avatar} from "../avatar/avatar";
import {Button} from "../button/button";
import UserInterests from "./user__interests";
import UserInfo from "./user__info";
import InfoLine from "../info-line/info-line";
import {connect} from "react-redux";

class TabsUser extends PureComponent {
  render(){
    const user = this.props.userInfo;
    return (
      <section className='main-card__user'>

        <div className="user__preview">
          <div className="user__avatar">
            <Avatar img={user.avatar}/>
          </div>
          <Button>Добавить в друзья</Button>
        </div>

        <div className="user__description">
          <InfoLine content={user.name} type={'nameUser'}/>
          <address>{user.city}</address>
          <UserInfo/>
          <UserInterests/>

        </div>
      </section>
    )
  }
}

export default connect(state => ({
  userInfo: state.data
}))(TabsUser);