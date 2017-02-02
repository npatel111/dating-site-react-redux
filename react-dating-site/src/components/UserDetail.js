import React, { Component } from 'react'

export default function UserDetail(props) {
  // debugger


  return (
      <ul>
        <p>Username: {props.location.state.user.name}</p>
        <p>Age: {props.location.state.user.age}</p>
        <p>Gender: {props.location.state.user.gender}</p>
        <p>Description: {props.location.state.user.description}</p>
        <p>Looking for: {props.location.state.user.looking_for}</p>
        <p>Street: {props.location.state.user.street}</p>
        <p>City: {props.location.state.user.city}</p>
        <p>State: {props.location.state.user.state}</p>
        <img src={props.location.state.user.image_url} />
      </ul>

  )
}
