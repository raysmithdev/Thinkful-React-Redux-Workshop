/*
  ES6
*/

import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const Loader = () => (
    <CircularProgress
      size={60}
      thickness={6}
      min={100}
      className="Loader"
    />
);

export default Loader

/*
  ES5
*/

// var React = require ('react');
// var CircularProgress = require ('material-ui/CircularProgress');
//
// var Loader = function() {
//   return (
//     <CircularProgress
//       size={60}
//       thickness={6}
//       min={100}
//       className="Loader"
//     />
//   );
// }
//
// export default Loader;
