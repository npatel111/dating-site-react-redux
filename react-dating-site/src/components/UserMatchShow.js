import React, { Component } from 'react'

export default function UserMatch(props) {
  debugger
  return (
    <div>
      <p>Matched With: </p>
      {props.usermatches.map((match) => {
        return (


            <ul>
              <li>Name: {match.name}</li>
              <li>Age: {match.age}</li>
              <li>Gender: {match.gender}</li>
              <li>Description: {match.description}</li>
              <br /><br/>
            </ul>
        
        )
      })}
    </div>
  )
}
