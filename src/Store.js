import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

//In order to attach redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));