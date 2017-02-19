import $ from 'jquery';
import sessionApi from '../api/SessionApi'

export function loginSuccess() {
  return {type: "LOG_IN_SUCCESS"}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}



export function getMatchesForUser(id) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/user_matches/${id}`,
      type: "GET"
    }).done(function(resp){
      dispatch({
         type: "GET_MATCHES_FOR_USER",
         payload: resp
       })
  })
  }
}


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

export function getMatches() {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/matches',
      type: "GET",
    }).done(function(data){
      dispatch({type: "GET_MATCHES", payload: data})
    })
  }
}

export function getUserMatches(id) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/matches/${id}`,
      type: "GET",
    }).done(function(data){
      let matches = data.filter(function(match) { return match.id !== id})
      dispatch({type: "GET_MATCHES", payload: matches})
    })
  }
}

export function addUser(name, age, gender, looking_for, description, street, city, state, image_url) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/users',
      type: "POST",
      data: {user: {name: name, age: age, gender: gender, looking_for: looking_for, description: description, street: street, city: city, state: state, image_url: image_url}}
    }).done(function(resp){
      return dispatch({
         type: "ADD_USER",
         payload: resp
       })
  })
  }
}


export function editUser(id, name, age, gender, looking_for, description, street, city, state) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/users/${id}`,
      type: "PATCH",
      data: {user: {id: id, name: name, age: age, gender: gender, looking_for: looking_for, description: description, street: street, city: city, state: state}}
    }).done(function(resp){
      return dispatch({
         type: "EDIT_USER",
         payload: resp
       })
  })
  }
}

export function deleteUser(id, name, age, gender, looking_for, description, street, city, state, image_url) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/users/${id}`,
      type: "DELETE",
      data: {user: {id: id, name: name, age: age, gender: gender, looking_for: looking_for, description: description, street: street, city: city, state:state, image_url: image_url}}
    }).done(function(resp){
      return dispatch({
         type: "DELETE_USER",
         payload: {id: id, name: name, age: age, gender: gender, looking_for: looking_for, description: description, street: street, city: city, state: state, image_url: image_url}
       })
  })
  }
}
