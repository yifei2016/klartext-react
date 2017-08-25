import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.selectedWord
    }
    this.logChange = this.logChange.bind(this);
  }
  logChange(input) {
    return axios({
      method:'get',
      url:`http://localhost:8080/api/words/search?query=${input}`,
      headers: {'Accept': 'application/json'}
    })
    .then(function(response) {
      // response.data.forEach(word => {
      //   word.label = word.value;
      // })
      return {
        options: response.data
      }
    })
  }
  render() {
    return (
      <div>
      <Select.Async
        labelKey='value'
        loadOptions={this.logChange}
      />

      </div>
    )
  }
}

export default Search;
