import React, {Component} from 'react';
import axios from 'axios';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signup = this.signup.bind(this);
  }
  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handleName(e){
    this.setState({
      name: e.target.value
    })
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  signup(){
    return axios({
      method:'post',
      url:'http://localhost:8080/api/users/register',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      },
      data: {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      }
    })
    .then(function(response) {
      debugger

    })
    .catch(function(error){
      debugger
    })
  }
  render (){
    return (
      <div className="container">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" onChange={this.handleEmail} className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" onChange={this.handleName} className="form-control" id="inputName" placeholder="Name"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" onChange={this.handlePassword} className="form-control" id="inputPassword3" placeholder="Password"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                  <button type="submit" onClick={this.signup} className="btn btn-primary">Sign up</button>
                </div>
              </div>
          </div>
        )
      }
    }

export default SignUp;
