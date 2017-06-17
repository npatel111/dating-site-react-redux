export default function matchesReducer(state=[{allMatches: []}, {selectedMatches: []}] , action) {
  switch(action.type) {
    case "GET_MATCHES":
      return [{allMatches: state[0].allMatches.concat(action.payload)}, {selectedMatches: state[1].selectedMatches}]
    case "GET_MATCHES_FOR_USER":
    // debugger
    // does this change state back to all users though? Check for bugs
    //selected matches is just a list of users, but for each user there should be a distance
      let match_ids = action.payload.map((person) => person.match_id)
      let matchIdsWithDistance = action.payload.map(function(person) {
          var Obj = {}
          Obj["distance"] = person.distance
          Obj["match_id"] = person.match_id
          return Obj
      })
      let selectedMatches = state[0].allMatches.filter((user) => match_ids.includes(user.id))
      let selectedMatchesWithDistance = selectedMatches.map(function(person) {
          var Obj={}
          var distance = matchIdsWithDistance.filter((obj) => obj.match_id === person.id)[0].distance
          Obj["user"] = person
      	  Obj["user"]["distance"] = distance
          return Obj
      })
      return [{allMatches: state[0].allMatches}, {selectedMatches: selectedMatchesWithDistance}]
    default: return state
  }
}
//

//
// gives array of objects {distance: distance, match_id: match_id}

// selectedMatches are the users
// so need to make hash where [match: match_info]{user: user_info, distance}
//
// selectedMatches.map(function(person) {
//     var Obj={}
//     var distance = new_payload_ids.filter((obj) => obj.match_id === person.id)[0].distance
//     Obj["user"] = person
// 	  Obj["user"]["distance"] = distance
//     return Obj
// })
