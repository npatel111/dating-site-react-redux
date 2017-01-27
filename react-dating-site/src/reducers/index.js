import {combineReducers} from 'redux';
import users from './usersReducer';
import matches from './matchesReducer'

const rootReducer = combineReducers({
  // short hand property names
  users,
  matches
})

export default rootReducer;
