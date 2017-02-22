export default function userMatchesReducer(state=[], action) {
  switch(action.type) {

    case "GET_MATCHES_FOR_USER":
    // does this change state back to all users though?
    debugger
      let payload_ids = action.payload.map((person) => person.match_id)
      let new_state = state.matches.filter((user) => payload_ids.includes(user.id))
      return new_state
    default: return state
  }
}
