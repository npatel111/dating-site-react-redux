import {browserHistory} from 'react-router';

export default function sessionReducer(state = {}, action) {
  debugger
  switch(action.type) {
    case "LOG_IN_SUCCESS":
    debugger
      return Object.assign({}, state, { user_id: action.payload.user.id, logged_in: !!localStorage.token})
    case "LOG_OUT_SUCCESS":
    debugger
      return !!localStorage.token
    default:
      return state;
  }
}
