import React,{PropTypes,Component} from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Search extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }//

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      display: 'none',
      lang: '',
      flag: '',
      klass: '',
      inflection: '',
      words: [],
      authenticated: false,
      exampel: '',
      interpretation: ''
    }
    this.logChange = this.logChange.bind(this);
    this.selectedOption = this.selectedOption.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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
        options: response.data//options is built in by select model
      }
    })
  }
  handleExample(e){
      this.example = e.target.value
  }
  handleInterpretation(e){
     this.example = e.target.value
  }
  handleCreate(){
    debugger
    var sessionStorageUser = sessionStorage.getItem('userName');
    var sessionStorageToken = sessionStorage.getItem('token');
    if (sessionStorageUser === null) {
      //this.props.history.push('/signin');
       this.props.history.push('/signin');
    } else {
      return axios({
        method:'post',
        url:`http://localhost:8080/api/users/1/posts`,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
            'X-Auth-Token': sessionStorageToken
          },
          data: {
            'body': this.body,
            'interp': this.interp
          }
        })
        .then(function(response) {
          debugger
          return {

          }
        })
      }
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
      return (
        <div className="inputsArea">
          <Select.Async
            labelKey='value'
            className='select'
            loadOptions={this.logChange}
            onChange={this.selectedOption}
          />

          <div>
            <textarea className="form-control select" rows="3" onChange={this.handleExample} placeholder="Example"></textarea>
            <textarea className="form-control select" rows="3" onChange={this.handleInterpretation}  placeholder="Interpretation"></textarea>
            <div className="d-flex justify-content-around">
              <button  type="button" className="btn btn-success" onClick={this.handleCreate}>Create post</button>
            </div>
          </div>
        </div>
      )
    }else {
      var word = this.state.words.map(word=><li key={word.body} className="list-group-item">
        <span>{word.body}</span>, <span>{word.interp}</span> <span className="flag-icon flag-icon-gb"></span></li>)
      return (
        <div>

        <div className="inputsArea">

          <Select.Async
            labelKey='value'
            loadOptions={this.logChange}
            onChange={this.selectedOption}
          />
          <div className="card" id='cardPart'>
            <div className="card-block">
              <h4 className="card-title d-flex justify-content-center">{this.state.selected}
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

          <div className="createPost">
            <textarea className="form-control" rows="3" placeholder="Example"></textarea>
            <textarea className="form-control" rows="3" placeholder="Interpretation"></textarea>
            <div className="d-flex justify-content-around">
              <button  type="button" className="btn btn-success" onClick={this.handleCreate}>Create post</button>
            </div>
          </div>
        </div>
         </div>
      )
    }
    }
}
export default Search;
