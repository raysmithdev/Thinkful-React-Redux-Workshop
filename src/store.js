import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import logger from 'redux-logger'

import {  } from './reducers'

const middleware = [
  logger()
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


export const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  {},
  enhancers
)

export const history = syncHistoryWithStore(browserHistory, store)
