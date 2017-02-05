import React, { Component } from 'react'
import UserMatch from './UserMatchShow'



class UserDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { usermatches: [], matchesVisible: false}
    // this.showMatchesForUser = this.showMatchesForUser.bind(this)
  }

  // showMatchesForUser() {
  //   debugger
  //   this.props.actions.getMatchesForUser(this.props.user.id)
  //   return this.state.matches
  //   debugger
  //   // Have an action that queries usermatches table by a user, gets matches and distance for each match?
  //
  // }


render() {
  return (
      <ul>
        <p>Username: {this.props.location.state.user.name}</p>
        <p>Age: {this.props.location.state.user.age}</p>
        <p>Gender: {this.props.location.state.user.gender}</p>
        <p>Description: {this.props.location.state.user.description}</p>
        <p>Looking for: {this.props.location.state.user.looking_for}</p>
        <p>Street: {this.props.location.state.user.street}</p>
        <p>City: {this.props.location.state.user.city}</p>
        <p>State: {this.props.location.state.user.state}</p>
        <img src={this.props.location.state.user.image_url} />


      </ul>

    )
  }
}
export default UserDetail;

// <button onClick={this.showMatchesForUser}>Show Matches</button>
// {this.state.matchesVisible ? <UserMatch usermatches={this.state.usermatches} /> : null}
