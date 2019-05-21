import React, {PureComponent} from 'react';
import InfoLine from "../info-line/info-line";
import {ReactComponent as ReactLogo} from "../../images/icon-plus.svg";
import FormInterest from "../form-interests/form-interests";
import {Interest} from "../interests/interests";
import {connect} from "react-redux";
import {delInterest} from "../../redux/Actions/data";

class UserInterests extends PureComponent {
  constructor(props){
    super(props);

    this.clickInterest = this.clickInterest.bind(this);
  }

  clickInterest = (e) => {
    this.props.delInterest(e.target.getAttribute('name'));
  };

  render(){
    const dataInterests = this.props.dataInterests;

    return(
      <div className="user__interests">
        <InfoLine
          content={'Интересы'}
        />
        <ReactLogo className='add-interest'/>
        <div className="user__interests-form">
          <FormInterest className={'interests-form'}/>
        </div>
        {dataInterests && dataInterests.map((item, id) => {
          return(
            <Interest key={id} onClick={this.clickInterest} name={item}>{item}</Interest>
          )
        })}
      </div>
    )
  }
}

export default connect(
  state => ({
    dataInterests: state.data.interests
  }),
  ({delInterest})
)(UserInterests);