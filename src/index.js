import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {selectReducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import SignIn from './components/SignIn'

let initialState = {
  selectedWord: 'yifei'
}

let rootReducer = combineReducers({
  selectedWord: selectReducer
})

const store = createStore(rootReducer, initialState);

ReactDOM.render((
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn}/>
    </Switch>
  </BrowserRouter>), document.getElementById('root'));

registerServiceWorker();
export {store};
