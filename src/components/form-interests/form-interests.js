import React, {PureComponent} from 'react';
import './form-interests.css';
import {Button} from "../button/button";
import {connect} from "react-redux";
import {addInterest} from "../../redux/Actions/data";

class FormInterest extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      inputInterest: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitInterest = this.submitInterest.bind(this);
  }

  inputChange = (e) => {
    let val = e.target.value;
    this.setState({inputInterest: val})
  };

  submitInterest = (e) => {
    e.preventDefault();

    let doubleInterest = false;

    this.props.dataInterests.forEach(item => {
      if(item === this.state.inputInterest) doubleInterest = true
    });

    if(this.state.inputInterest && !doubleInterest){
      this.props.addInterest(this.state.inputInterest);
      this.setState({inputInterest: ''});
    }

    if(doubleInterest){
      alert(`Интерес: "${this.state.inputInterest}" уже есть в списке!`);
      this.setState({inputInterest: ''});
    }
  };

  render() {
    return(
      <form action='' className={this.props.className} onSubmit={this.submitInterest}>
        <fieldset>
          <legend>Добавление интереса</legend>
          <input onChange={this.inputChange}
                 value={this.state.inputInterest}
                 type="text"
                 placeholder='Введите название интереса'/>
          <Button type='submit'>Добавить интерес</Button>
        </fieldset>
      </form>
    )
  }
}

export default connect(state => ({
  dataInterests: state.data.interests
}), ({addInterest}))(FormInterest);
