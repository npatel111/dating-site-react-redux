export default function usersReducer(state=[], action) {
  switch(action.type) {
    case "GET_USERS":
      return state.concat(action.payload)
    case "ADD_USER":
      return [...state, action.payload]
    case "EDIT_USER":
    debugger
    // does it switch up order if you edit something?
      let obj = state.filter(function(obj) { return obj.id === action.payload.id})
      let index = state.indexOf(obj[0])
      return state.slice(0, index).concat(action.payload).concat(state.slice(index + 1))
    case "DELETE_USER":
      let user = state.filter(function(obj) { return obj.id === action.payload.id})
      let i = state.indexOf(user[0])
      return state.slice(0, i).concat(state.slice(i + 1))
    case "GET_MATCHES":
      return state
    default: return state
  }
}
