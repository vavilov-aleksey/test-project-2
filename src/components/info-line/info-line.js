import React, {PureComponent} from 'react';
import './info-line.css';
import {ReactComponent as ReactLogo} from '../../images/icon-edit.svg';
import {connect} from "react-redux";
import {editEmail, editMaritalStatus, editNameUser, editPhone} from "../../redux/Actions/data";

class InfoLine extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      descState: '',
      descStateName: '',
      edit: false,
      editName: false,
      type: ''
    };

    this.changeDesc = this.changeDesc.bind(this);
    this.changeDescName = this.changeDescName.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
    this.changeEditName = this.changeEditName.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

  }

  componentDidMount() {
    if (this.props.desc) this.setState({
      descState: this.props.desc,
      type: this.props.type
    });
    if (this.props.content && this.props.type === 'nameUser') {
      this.setState({
        descStateName: this.props.content,
        type: this.props.type
      })
    }
  }

  changeDesc = (e) => {
    this.setState({descState: e.target.value});
  };

  changeDescName = (e) => {
    this.setState({descStateName: e.target.value});
  };

  changeEdit = () => this.setState({edit: true});
  changeEditName = () => this.setState({editName: true});

  onMouseOut = () => {
    this.setState({edit: false});
    this.setState({editName: false});
    if (this.state.type === 'phone') this.props.editPhone(this.state.descState);
    if (this.state.type === 'email') this.props.editEmail(this.state.descState);
    if (this.state.type === 'maritalStatus') this.props.editMaritalStatus(this.state.descState);
    if (this.state.type === 'nameUser') this.props.editNameUser(this.state.descStateName);

  };

  render() {
    const {desc, content, type} = this.props;
    const {edit, editName, descState, descStateName} = this.state;

    return (
      <div className={desc ? 'info-line' : 'info-line-full'}>
        <div className="info-line__content">
          {!editName && type === 'nameUser' && <h1>{descStateName}</h1>}
          {editName &&
          <input type="text"
                 defaultValue={descStateName}
                 onBlur={this.onMouseOut}
                 onMouseOut={this.onMouseOut}
                 onChange={this.changeDescName}
                 autoFocus="autofocus"/>}
          {type !== 'nameUser' && content}
          {type === 'nameUser' && <ReactLogo onClick={this.changeEditName}/>}
        </div>
        {desc &&
        <div className="info-line__desc">
          {edit && <input type="text"
                          defaultValue={descState}
                          onBlur={this.onMouseOut}
                          onMouseOut={this.onMouseOut}
                          onChange={this.changeDesc}
                          autoFocus="autofocus"/>}
          {!edit && type === 'email' && <a href={`mailto:${descState}`}>{descState}</a>}
          {!edit && type === 'phone' && <a href={`tel:${descState}`}>{descState}</a>}
          {!edit && type !== 'email' && type !== 'phone' && descState}
          <ReactLogo onClick={this.changeEdit}/>
        </div>
        }
      </div>
    )
  }
}

export default connect(state => ({}),
  ({editPhone, editEmail, editMaritalStatus, editNameUser})
)(InfoLine);