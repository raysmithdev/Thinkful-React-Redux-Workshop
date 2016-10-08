/*
  ES6
*/

import React, { Component } from 'react'
import Intro from './components/Intro'
import Loader from './components/Loader'
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
    const url = 'http://api.randomuser.me/?results=100'

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
        <Intro
          name="Ray Smith"
          text="Day2 where still alive!"
        />
        {this.state.isFetchingData ? <Loader /> : ' '}
        <ul>
          {this.state.users.map((user, index) => {
            return <li key={index}>{user.email}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;

/*
  ES5
*/

// var React = require ('react');
// var Intro = require('./components/Intro');
// var Loader = require('./components/Loader');
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
//            <Intro
//              name="Ray Smith"
//                text="Day2 where still alive!"
//                />
//              {this.state.isFetchingData ? <Loader /> : ' '}
//              <ul>
//                {this.state.users.map((user, index) => {
//                  return <li key={index}>{user.email}</li>
//                })}
//              </ul>
//           </div>
//          );
//     }
// });
//
// module.exports = App;
