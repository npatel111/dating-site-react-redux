import {browserHistory} from 'react-router';

// state used to be !!sessionStorage.jwt, should it be !!localStorage.token?
export default function sessionReducer(state = !!localStorage.token=="undefined", action) {
  // debugger
  switch(action.type) {
    case "LOG_IN_SUCCESS":
    // debugger
      return !!localStorage.token
    default:
      return state;
  }
}
