/*
  ES6
*/

/*
  - This is a stateless component also known as a dumb component also known as a
    presentational component ? Huh... what??
    basically it means that we only want this component to render something to the UI
    and if we need to pass data to this component we do so via props.

  - Below you see we define the component as a function ( const UserWidget = () => { ... })
    that takes props as an argument meaning inside the component persuming that we passed props
     to the component, we can access them for example doing { props.name } or { props.age}
    presuming we passed a name and age prop to this component
*/

import React from 'react'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const UserWidget = (props) => (
  <Card>
    <CardHeader
      title={props.name.first + " " + props.name.last}
      subtitle={props.cell}
      avatar={props.picture.medium}
    />
    <CardActions>
      <FlatButton label="DELETE" secondary={true} />
    </CardActions>
  </Card>
);

export default UserWidget

/*
  ES5
*/

// var React = require('react');
// var Card, CardActions, CardHeader = require('material-ui/Card');
// var FlatButton = require('material-ui/FlatButton');
//
// var UserWidget = function(props) {
//   return (
//     <Card>
//       <CardHeader
//         title={props.name.first + " " + props.name.last}
//         subtitle={props.cell}
//         avatar={props.picture.medium}
//       />
//       <CardActions>
//         <FlatButton label="Action1" />
//         <FlatButton label="DELETE" secondary={true} />
//       </CardActions>
//     </Card>
//   );
// }
//
// export default UserWidget
