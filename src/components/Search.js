import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import Autocomplete from 'react-autocomplete';
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
   debugger
   this.setState({select: e.target.value})
 }
  logChange(e) {

    axios({
      method:'get',
      url:`http://localhost:8080/api/words/search?query=${this.state.select}`,
      headers: {'Accept': 'application/json'}
    })
    .then(function(response) {

    })
  }
  render() {
    return (
      <Autocomplete
        getItemValue={(item) => item.label}
        items={[
          { label: 'apple' },
          { label: 'banana' },
          { label: 'pear' }
        ]}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        value={this.state.select}
        onChange={this.handleChange}
        onSelect={this.logChange}
      />
    )
  }
}

export default Search;
