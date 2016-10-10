/*
  ES6
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
      <FlatButton label="Action1" />
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
