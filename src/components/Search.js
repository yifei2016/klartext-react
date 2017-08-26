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
      klass: '',
      inflection: '',
      words: []
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
      selected: selected.value,
      display: 'block',
      klass: selected.klass,
      flag: 'flag-icon flag-icon-se',
      inflection: selected.inflection
    })
  }else {
    this.setState({
      selected: selected.value,
      display: 'block',
      klass: selected.klass,
      flag: 'flag-icon flag-icon-gb',
      inflection: selected.inflection
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

      var words = response.data.map(word => {
        return {body: word.body, interp: word.interp}
      })

      this.setState({
        words: words
      })

    }.bind(this))
  }
  render() {
    if(this.state.display === 'none'){
      return (<Select.Async
        labelKey='value'
        loadOptions={this.logChange}
        onChange={this.selectedOption}
      />)
    }else if(this.state.display === 'block'){
      var word = this.state.words.map(word=><li key={word.body} className="list-group-item">
        <span>{word.body}</span>, <span>{word.interp}</span> <span className="flag-icon flag-icon-gb"></span></li>)
      return (
        <div>
          <Select.Async
            labelKey='value'
            loadOptions={this.logChange}
            onChange={this.selectedOption}
          />
          <div className="card d-flex justify-content-center" id="cardPart">
            <div className="card-block">
              <h4 className="card-title">{this.state.selected}
                <span className={this.state.flag}></span>
                <span>{this.state.klass}</span>
              </h4>
              <p className="d-flex justify-content-between">{this.state.inflection}</p>
              <h6 className="card-text d-flex justify-content-between">Examples</h6>
            </div>
            <ul className="list-group list-group-flush">
              {word}
            </ul>
          </div>
        </div>
      )
    }
    }
}

export default Search;
