import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {selectReducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';

let initialState = {
  selectedWord: 'yifei'
}

let rootReducer = combineReducers({
  selectedWord: selectReducer
})

const store = createStore(rootReducer, initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
export {store};
