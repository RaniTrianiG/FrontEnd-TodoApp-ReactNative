import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import {logger} from 'redux-logger'; //log
import thunk from 'redux-thunk';

import appReducer from './reducers/index';

const middleware = applyMiddleware(thunk,logger, promise());
const store = createStore(appReducer, middleware);

export default store;
