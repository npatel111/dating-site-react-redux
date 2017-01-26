import $ from 'jquery';

export function getUsers() {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/users',
      type: "GET",
    }).done(function(data){
      dispatch({type: "GET_USERS", payload: data})
    })
  }
}

export function addUser(name, age, gender, description) {
  return function(dispatch) {
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

export function editUser(id, name, age, gender, description) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/users/${id}`,
      type: "PATCH",
      data: {user: {id: id, name: name, age: age, gender: gender, description: description}}
    }).done(function(resp){
      // debugger
      return dispatch({
         type: "EDIT_USER",
         payload: resp
       })
  })
  }
}
