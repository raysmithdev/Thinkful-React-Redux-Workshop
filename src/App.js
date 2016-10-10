/*
  ES6
*/

import React, { Component } from 'react'
import Loader from './components/Loader'
import UserWidget from './components/UserWidget'
import NavBar from './components/NavBar'
import './App.css'
import 'whatwg-fetch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isFetchingData: true,
      users: []
    }
  }

  componentDidMount() {
    const url = 'http://api.randomuser.me/?results=400'

    fetch(url)
    .then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data.results)
      this.setState({
        isFetchingData: false,
        users: data.results
      })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isFetchingData ? <Loader text="Loading content below. Please wait!"/> : <NavBar /> }
        {this.state.users.map((user, index) => {
          return <UserWidget key={index} {...user} />
        })}
      </div>
    );
  }
}

export default App;

/*
  ES5
*/

// var React = require ('react');
// var Loader = require('./components/Loader');
// var UserWidget = require('./components/UserWidget');
// var NavBar = require('./components/NavBar');
// require('./App.css');
// require(''whatwg-fetch'');
//
// var App = React.createClass({
//
//        getInitialState: function() {
//          return {
//            isFetchingData: true,
//            users: []
//          }
//        },
//
//        componentDidMount: function() {
//          const url = 'http://api.randomuser.me/?results=100'
//
//          fetch(url)
//            .then(function(response) {
//              return response.json()
//            }).then(function(data) {
//              console.log(data.results)
//              this.setState({
//                isFetchingData: false,
//                users: data.results
//              })
//            }).catch(function(ex) {
//              console.log('parsing failed', ex)
//            })
//        },
//
//     render: function() {
//       return (
//          <div className="App">
//            {this.state.isFetchingData ? <Loader text="Loading content below. Please wait!"/> : <NavBar />}
//              {this.state.users.map((user, index) => {
//                return <UserWidget key={index} {...user} />
//              })}
//           </div>
//          );
//     }
// });
//
// module.exports = App;
