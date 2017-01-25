import $ from 'jquery';

export function addUser(name,age, gender, description) {
  debugger
  return function(dispatch) {
    debugger
    $.ajax({
      url: 'http://localhost:3000/users',
      type: "POST",
      data: {user: {name: name, age: age, gender: gender, description: description}}
    }).done(function(resp){
      return dispatch({
         type: "ADD_USER",
         payload: resp
       })
  })
  }
}

// export default function createArtist(artist){
//   return function(dispatch){
//     $.ajax({
//       url: "http://localhost:3000/artists",
//       type: 'POST',
//       data: {artist: { mb_id: artist.mb_id, name: artist.name, display_name: artist.display_name } },
//       headers: { authorization: localStorage.jwt }
//     }).done(function(response){
//       return dispatch({type: "GET_SONGS", payload: response})
//     })
//   }
// }
