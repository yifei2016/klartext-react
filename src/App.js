import React, { Component } from 'react';
import './App.css';

import Search from './components/Search.js';
import Button from 'react-bootstrap/lib/Button';
import {ButtonToolbar, Overlay, Popover} from 'react-bootstrap';
class App extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {  show: false };
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  componentWillReceiveProps(e){
    this.setState({ target: e.target, show: !this.state.show },function (){

    });

  }
  render() {

    return (
      <div >
      <nav className="navbar navbar-toggleable-lg navbar-inverse bg-inverse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link nav-item active" >Home </a>
          </li>
        </ul>
        <ButtonToolbar>
        <Button  onClick={this.componentWillReceiveProps}>
          <i className="fa fa-lg fa-user" aria-hidden="true"></i>
        </Button>
        <Overlay
           show={this.state.show}
           target={this.state.target}
           placement="bottom"
           container={this}
           containerPadding={20}
         >
           <Popover id="popover-contained" title="dsf" >
             <div className="d-flex justify-content-around">
               <button type="button" className="signin btn btn-link">Sign up</button>
               <button  type="button"  className="signin btn btn-link">Sign in</button>

             </div>
           </Popover>
         </Overlay>
       </ButtonToolbar>
     </nav>
       <Search />
    </div>

    );
  }
}
export default App;
