import {combineReducers} from 'redux';
import users from './usersReducer';

const rootReducer = combineReducers({
  // short hand property names
  users
})

export default rootReducer;
