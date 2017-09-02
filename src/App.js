import React, { Component,PropTypes } from 'react';
//import { Link } from 'react-router-dom';
// import { Overlay, Popover} from 'react-bootstrap';
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

    //this.click = this.click.bind(this);
  }
  componentWillReceiveProps(e){
    this.setState(function(prevState,props){
      return { target: e.target, show: !this.state.show };
    });
  }
  //click(){
    //this.context.router.history.push('/signin')
  //}//to see if we can retrive history here in container component, history can not be used in nested component, such as Search
  render() {
    return (
      // <div >
      //   {/* <nav className="navbar navbar-toggleable-lg navbar-inverse bg-inverse">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link to="/">Home</Link>
      //       </li>
      //     </ul>
      //     <button
      //       type="button"
      //       className="btn btn-secondary signUp navbar-toggler-right"
      //       data-toggle="collapse"
      //       onClick={this.componentWillReceiveProps}
      //       ><i className="fa fa-lg fa-user" aria-hidden="true"></i>
      //     </button>
      //     <Overlay
      //       show={this.state.show}
      //       target={this.state.target}
      //       placement="bottom"
      //       container={this}
      //       containerPadding={20}
      //       >
      //         <Popover className='popover' id="popover-contained" >
      //           <div className="d-flex justify-content-around">
      //             <Link className='authenticationButton' to="/signin">Sign in</Link>
      //             <Link to="/signup">Sign up</Link>
      //           </div>
      //         </Popover>
      //       </Overlay>
      //     </nav> */}
          <Search />
    );
  }
}
export default App;
