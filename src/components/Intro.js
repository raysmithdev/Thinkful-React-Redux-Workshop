/*
  ES6
*/

import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Intro = () => {
  return (
    <Jumbotron>
      <h1>Hello Students!</h1>
      <p>How ye are all still awake!</p>
    </Jumbotron>
  );
}

export default Intro

/*
  ES5
*/

// var React = require('react');
// var Jumbotron = require('react-bootstrap').Jumbotron;
//
// var Intro = function() {
//     return (
//       <Jumbotron>
//         <h1>Hello Students!</h1>
//         <p>How ye are all still awake!</p>
//       </Jumbotron>
//     );
// };
//
// module.exports = Intro
