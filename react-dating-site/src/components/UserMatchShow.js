import React, { Component } from 'react'
//are selected matches objects?
//could sort them here?
export default function UserMatch(props) {
  // debugger
  return (
    <div>
      <p>Matched With: </p>
      <div>{props.usermatches[1].selectedMatches.length > 0 ? null : "No matches"}</div>
        {props.usermatches[1].selectedMatches.map((match, i) => {
          return (
              <ul key={i}>
                <li>Name: {match.user.name}</li>
                <li>Age: {match.user.age}</li>
                <li>Gender: {match.user.gender}</li>
                <li>Looking for: {match.user.looking_for}</li>
                <li>Description: {match.user.description}</li>
                <li>Distance from you: {match.user.distance}m</li>
                <br /><br />
              </ul>
          )
        })}
    </div>
  )
}
