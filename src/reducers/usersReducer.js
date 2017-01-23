export default function usersReducer(state=[], action) {
  switch(action.type) {
    case "GET_USERS":
      return state.concat(action.payload)
    case "ADD_USER":
      return [...state, action.payload]
    default: return state
  }
}
