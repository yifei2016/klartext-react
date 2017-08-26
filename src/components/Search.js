import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      display: 'none',
      lang: '',
      flag: '',
      klass: ''
    }
    this.logChange = this.logChange.bind(this);
    this.selectedOption = this.selectedOption.bind(this);
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
  selectedOption(selected){
    if(selected.lang === 'sv'){
    this.setState({
      selected: selected,
      display: 'block',
      klass: selected.klass,
      flag: 'flag-icon flag-icon-se'
    })
  }else {
    this.setState({
      selected: selected,
      display: 'block',
      klass: selected.klass,
      flag: 'flag-icon flag-icon-en'
    })
  }
    var sendValue = selected.inflection || []
    if(sendValue.indexOf(selected.value === -1)){
      sendValue.unshift(selected.value)
    }

    return axios({
      method:'get',
      url:`http://localhost:8080/api/posts/search?query=${sendValue}`,
      headers: {'Accept': 'application/json'}

    })
    .then(function(response) {

    }.bind(this))
  }
  render() {

    if(this.state.display === 'none'){
      debugger
      return (<Select.Async
        labelKey='value'
        loadOptions={this.logChange}
        onChange={this.selectedOption}
      />)
    }else if(this.state.display === 'block'){
      debugger
      return (
        <div>
          <Select.Async
            labelKey='value'
            loadOptions={this.logChange}
            onChange={this.selectedOption}
          />
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">fdf{this.state.selected}
                <span className={this.state.flag}></span>
                <span>{this.state.klass}</span></h4>
                <p className="card-text">Some quthe card's content.</p>
              </div>
            </div>
          </div>
        )
      }
    }
}

export default Search;
