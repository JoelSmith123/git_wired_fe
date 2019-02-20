import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';


import UserSession from './Tools/UserSession.js'

// TO DO - REMOVE THIS --> // ReactDOM.render(<App user:{ user }/>, document.getElementById('root'));
ReactDOM.render(<App user={ new UserSession }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
