import React, { Component } from 'react'

export default function UserMatch(props) {
  debugger
  return (
    <div>
      <p>Matched With: </p>
      <div>{props.usermatches.length > 0 ? null : "No matches"}</div>
        {props.usermatches.map((match, i) => {
          return (
              <ul key={i}>
                <li>Name: {match.name}</li>
                <li>Age: {match.age}</li>
                <li>Gender: {match.gender}</li>
                <li>Looking for: {match.looking_for}</li>
                <li>Description: {match.description}</li>
                <br /><br />
              </ul>
          )
        })}
    </div>
  )
}
