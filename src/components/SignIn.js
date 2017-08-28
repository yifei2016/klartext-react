import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.signIn=this.signIn.bind(this);
  }
  signIn(){
    debugger
  }
  render(){
    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input  type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input  type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary" onClick={this.signIn}>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn;
