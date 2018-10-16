import { combineReducers } from 'redux';

import dataheroes from './Heroes';

const appReducer = combineReducers({
    heroes : dataheroes
});

export default appReducer;