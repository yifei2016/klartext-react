import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Popover} from 'react-bootstrap';

import Search from './components/Search.js';
import './App.css';

class App extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {  show: false };
    this.componentWillReceiveProps = function(event) {
      this.setState({ target: event.target, show: !this.state.show });
    }
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  componentWillReceiveProps(e){
    this.setState(function(prevState,props){
      return { target: e.target, show: !this.state.show };
    });

  }
  render() {
    return (
      <div >
        <nav className="navbar navbar-toggleable-lg navbar-inverse bg-inverse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">dasdsa</Link>
            </li>
          </ul>
          <button onClick={this.componentWillReceiveProps}
            className="btn btn-secondary signUp navbar-toggler-right"
            data-toggle="collapse"
            type="button"
            ><i className="fa fa-lg fa-user" aria-hidden="true"></i>
          </button>
          <Overlay
            show={this.state.show}
            target={this.state.target}
            placement="bottom"
            container={this}
            containerPadding={20}
            >
              <Popover  id="popover-contained" >
                <div className="d-flex justify-content-around">
                  <button type="button" className="signin btn btn-link">Sign up</button>
                  <button  type="button"  className="signin btn btn-link">Sign in</button>
                </div>
              </Popover>
            </Overlay>
          </nav>
          <Search />
        </div>

    );
  }
}
export default App;
