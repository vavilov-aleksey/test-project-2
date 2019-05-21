import React, {PureComponent} from 'react';
import MainCard from "./components/main-card/main-card";
import {connect} from "react-redux";
import {nameLocalStorage} from './constants';

class App extends PureComponent{

  doSomethingBeforeUnload = () => {
    localStorage.setItem(nameLocalStorage, JSON.stringify(this.props.data))
  };

  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      return this.doSomethingBeforeUnload();
    });
  };

  componentDidMount() {
    this.setupBeforeUnloadListener();
  }

  render(){
    return (
      <MainCard/>
    );
  }
}

export default connect(state => ({
  data: state.data
}))(App);
