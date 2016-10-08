/*
  ES6
*/

import React, { PropTypes } from 'react'
import { Jumbotron } from 'react-bootstrap'

const Intro = (props) => {
  return (
    <Jumbotron>
      <h1>Hello {props.name}!</h1>
      <p>{props.text}</p>
    </Jumbotron>
  );
}

Intro.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

export default Intro

/*
  ES5
*/

// var React = require('react');
// var Jumbotron = require('react-bootstrap').Jumbotron;
//
// var Intro = function(props) {
//     return (
//       <Jumbotron>
//         <h1>Hello {props.name}</h1>
//         <p>{props.text}</p>
//       </Jumbotron>
//     );
// };
// Intro.propTypes = {
//   name: React.PropTypes.string,
//   text: React.PropTypes.string,
// }
//
// module.exports = Intro
