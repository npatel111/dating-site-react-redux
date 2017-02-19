import {combineReducers} from 'redux';
import users from './usersReducer';
import matches from './matchesReducer'
import userMatches from './userMatchesReducer'
import session from './sessionReducer'

const rootReducer = combineReducers({
  // short hand property names
  users,
  matches,
  session
})

export default rootReducer;
