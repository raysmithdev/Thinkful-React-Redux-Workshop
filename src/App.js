/*
  ES6
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Thinkful React Workshop</h2>
        </div>
        <Intro />
      </div>
    );
  }
}

export default App;

/*
  ES5
*/

// var React = require ('react');
// var logo = require ('./logo.svg');
// var Intro = require('./Intro');
// require('./App.css');
//
// var App = React.createClass({
//     render: function() {
//       return (
//         <div className="App">
//           <div className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h2>Welcome to React</h2>
//           </div>
//            <Intro />
//         </div>
//       );
//     }
// });
//
// module.exports = App;
