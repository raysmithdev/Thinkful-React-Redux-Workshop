/*
  ES6
*/

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import { store, history } from './store'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      { /* Tell the Router to use our enhanced history */ }
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

/*
  ES5
*/

// var React = require('react');
// var render = require('react-dom').ReactDOM;
// var App = require('./App');
// require('./index.css');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider)';
//var injectTapEventPlugin = require('react-tap-event-plugin)';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
// ReactDOM.render(
//   <MuiThemeProvider>
//    <App />
//   </MuiThemeProvider>,
//   document.getElementById('root')
// );
