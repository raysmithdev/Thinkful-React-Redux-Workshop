/*
  ES6
*/

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

render(
  <App />,
  document.getElementById('root')
);

/*
  ES5
*/

// var React = require('react');
// var render = require('react-dom').ReactDOM;
// var App = require('./App');
// require('./index.css');
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
