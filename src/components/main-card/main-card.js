import React, {PureComponent} from 'react';
import './main-card.css';
import {Tabs} from "../tabs/tabs";
import TabsUser from "../tabs-user/tabs-user";
import {TabsFriends} from "../tabs-friends/tabs-friends";
import Baron from 'react-baron/dist/es5';
import 'react-baron/src/styles.css';

class MainCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTab: 'profile',//friends || profile
    };
    this.onClickTabItem = this.onClickTabItem.bind(this)
  }

  onClickTabItem = (event) => {
    this.setState({
      isTab: event.target.getAttribute('name'),
    });
  };

  render() {
    const {isTab} = this.state;
    return (
      <main className='main-card'>

        <nav className="main-card__tabs">
          <Tabs onClick={this.onClickTabItem} isActive={isTab === 'profile'} nameTabs='profile'>Профиль</Tabs>
          <Tabs onClick={this.onClickTabItem} isActive={isTab === 'friends'} nameTabs='friends'>Друзья пользователя</Tabs>
        </nav>

        <Baron>
          {isTab === 'profile' && <TabsUser/>}
          {isTab === 'friends' && <TabsFriends/>}
        </Baron>

      </main>
    )
  }
}

export default MainCard;
