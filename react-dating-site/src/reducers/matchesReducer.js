export default function matchesReducer(state=[], action) {
  switch(action.type) {
    case "GET_MATCHES":
      return state.concat(action.payload)
    default: return state
  }
}
