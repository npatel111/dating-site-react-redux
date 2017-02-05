export default function matchesReducer(state=[{allMatches: []}, {selectedMatches: []}] , action) {
  switch(action.type) {
    case "GET_MATCHES":
      return [{allMatches: state[0].allMatches.concat(action.payload)}, {selectedMatches: state[1].selectedMatches}]
    case "GET_MATCHES_FOR_USER":
    // does this change state back to all users though?
      let payload_ids = action.payload.map((person) => person.match_id)
      let new_state = state[0].allMatches.filter((user) => payload_ids.includes(user.id))
      return [{allMatches: state[0].allMatches}, {selectedMatches: new_state}]
    default: return state
  }
}
