/*
  ES6
*/

import React, { Component } from 'react'
import MapView from './components/MapView'
import NavbarContainer from './containers/NavbarContainer'
import _ from "lodash"
import './App.css'
import 'whatwg-fetch'


const markers = [
  {
    position: {
      lat: 40.731900,
      lng: -73.992811
    }
  },
  {
    position: {
      lat: 40.732136,
      lng: -73.995032
    }
  }
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      isFetchingData: true,
      users: []
    }
  }

  // componentDidMount() {
  //   // const url = 'https://api.spotify.com//v1/browse/new-releases'
  //   const url = 'https://accounts.spotify.com/authorize/?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09'
  //
  //   fetch(url)
  //   .then((response) => {
  //     return response.json()
  //   }).then((data) => {
  //     console.log(data)
  //   }).catch((ex) => {
  //     console.log('parsing failed', ex)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <div className="Map">
        <MapView
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={markers}
          onMarkerRightClick={_.noop}
        />
        </div>
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
