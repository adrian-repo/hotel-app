import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store, { initRooms } from './store'

store.dispatch(initRooms(13));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
  
