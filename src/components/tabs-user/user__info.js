import React, {PureComponent} from 'react';
import InfoLine from "../info-line/info-line";
import {connect} from "react-redux";

class UserInfo extends PureComponent{
  render(){
    const user = this.props.userInfo;
    return(
      <div className="user__info">
        <InfoLine
          content={'Семейное положение'}
          desc={user.maritalStatus}
          type={'maritalStatus'}
        />
        <InfoLine
          content={'Телефон'}
          desc={user.phone}
          type={'phone'}
        />
        <InfoLine
          content={'E-mail'}
          desc={user.email}
          type={'email'}
        />
      </div>
    )
  }
}

export default connect(state => ({
  userInfo: state.data
}))(UserInfo);
