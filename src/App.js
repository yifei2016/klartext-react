import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Search from './components/Search.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedWord:this.props.selectedWord
    }
  }

  render() {
    return (
      <Search selectedWord={this.state.selectedWord}/>
    );
  }
}
function mapStateToProps(state){

  return {
    selectedWord: state.selectedWord
  }
}
export default connect(mapStateToProps)(App);
