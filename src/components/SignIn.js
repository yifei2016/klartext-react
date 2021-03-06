import React, {PropTypes,Component} from 'react';
import axios from 'axios';

class SignIn extends Component{
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  constructor(props){
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: ''
    }
    this.signIn=this.signIn.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }
  handleEmailInput(e){
    this.setState({
      emailInput: e.target.value
    })
  }
  handlePasswordInput(e){
    this.setState({
      passwordInput: e.target.value
    })
  }
  signIn(){
     let self = this;
     return axios({
      method:'put',
      url:'http://localhost:8080/api/users/auth',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      },
      data: {
        email: this.state.emailInput,
        password: this.state.passwordInput
      }
    })
    .then(function(response) {
       debugger

      sessionStorage.setItem('userName',response.data.user.name);
      sessionStorage.setItem('userEmail', response.data.user.email);
      sessionStorage.setItem('token', response.data.token);
      self.props.history.push('/mypage');//can not find history of undefined so use self bind this
    })
    .catch(function(error){
      debugger
    })
  }
  render(){
    return (
      <div className="container">
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input  type="email" className="form-control" id="inputEmail3" onChange={this.handleEmailInput} placeholder="Email"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input  type="password" className="form-control" id="inputPassword3" onChange={this.handlePasswordInput} placeholder="Password"/>
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <button  type="submit" className="btn btn-primary" onClick={this.signIn}>Sign in</button>
          </div>
        </div>
      </div>
    )
  }
}


export default SignIn;
