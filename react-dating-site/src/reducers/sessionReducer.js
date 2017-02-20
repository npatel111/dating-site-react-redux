import {browserHistory} from 'react-router';

export default function sessionReducer(state = !!localStorage.token=="undefined", action) {
  // debugger
  switch(action.type) {
    case "LOG_IN_SUCCESS":
    // debugger
      return !!localStorage.token
    case "LOG_OUT_SUCCESS":
    debugger
      return !!localStorage.token
    default:
      return state;
  }
}
