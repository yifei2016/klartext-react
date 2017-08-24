import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import {actionSelectedWord} from '../actions/index';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.selectedWord
    }
    this.handleChange = this.handleChange.bind(this);
     this.logChange = this.logChange.bind(this);
  }
 handleChange(e){
   this.setState({select: e})

 }
  logChange() {
    debugger
    axios.create({
  baseURL: `http://localhost:8080/api/words/search?query=${this.state.select}`,
  headers: {'Accept': 'application/json'}
})
    .then(function(response) {
  debugger
    })
  }
  render() {

    return (
      <Select
         name="form-field-name"
        value='yifei'
         onInputChange={this.handleChange}
        loadOptions={this.logChange}
        placeholder='Select'
      />
    )
  }
}

export default Search;
