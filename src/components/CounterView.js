import React from 'react'
import { Button } from 'react-bootstrap'

const Counter = ({ count, incrementCounter }) => (
  <div>
    <Button bsStyle="success" onClick={incrementCounter}>Click Me!</Button>
    <p>Count is: { count }</p>
  </div>
);

export default Counter
