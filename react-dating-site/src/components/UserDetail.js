import React, { Component } from 'react'
import UserMatch from './UserMatchShow'



class UserDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { usermatches: [], matchesVisible: false}
    // this.showMatchesForUser = this.showMatchesForUser.bind(this)
  }




render() {
  const divStyle = {
    maxHeight: "100%",
    backgroundImage: 'url(' + this.props.location.state.user.image_url + ')' ,
};
  return (
      <ul>
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={divStyle}>
            <h2 className="mdl-card__title-text">{this.props.location.state.user.name} </h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>Username: {this.props.location.state.user.name}</p>
            <p>Age: {this.props.location.state.user.age}</p>
            <p>Gender: {this.props.location.state.user.gender}</p>
            <p>Description: {this.props.location.state.user.description}</p>
            <p>Looking for: {this.props.location.state.user.looking_for}</p>
            <p>Street: {this.props.location.state.user.street}</p>
            <p>City: {this.props.location.state.user.city}</p>
            <p>State: {this.props.location.state.user.state}</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Contact {this.props.location.state.user.name}
            </a>
          </div>
        </div>
      </ul>

    )
  }
}
export default UserDetail;

// <button onClick={this.showMatchesForUser}>Show Matches</button>
// {this.state.matchesVisible ? <UserMatch usermatches={this.state.usermatches} /> : null}
