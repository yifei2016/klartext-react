import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {selectReducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Search from './components/Search';
import Mypage from './components/Mypage';
////if component is not in router, then can not use props.route

let initialState = {
  selectedWord: 'yifei'
}

let rootReducer = combineReducers({
  selectedWord: selectReducer
})

const store = createStore(rootReducer, initialState);

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Search} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin"  component={SignIn}/>
      <Route exact path="/mypage" component={Mypage}/>
    </div>
  </Router>), document.getElementById('root'));

registerServiceWorker();
export {store};
