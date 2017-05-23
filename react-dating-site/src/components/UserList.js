import React, {Component} from 'react';
import UserShow from './UserShow'
import {Link} from 'react-router';

class UserList extends Component {
  // debugger
  constructor(props) {
    super(props)
    this.state = {matches: []}
    // this.getMatches = this.getMatches.bind(this);
  }
  // RESTART HERE. WHEN GETTING LIST OF USERS, IF THEY ARE LOGGED IN WE NEED TO KNOW WHO IS LOGGED IN, THEN GET MATCHES FOR THAT USER. THEN THOSE MATCHES ARE WHO YOU show

  // check with props are. user? actions?
  // if logged in,this.props.users would actually be the matches. Otherwise keep as is.
  // if (this.props.session.logged_in) {
    // debugger
    // let id = this.props.session.user_id
    // this.props.actions.getMatchesForUser(id)
    // this.setState({ matches: this.props.matches})
  // }
  // componentWillUpdate() {
  //   // RESTART HERE decides userIS but then doesn't go into function again.
  //   debugger
  //   if (this.props.session.user_id) {
  //     // let id = this.props.session.user_id
  //     // this.props.actions.getMatchesForUser(id)
  //     // this.setState({ matches: this.props.matches})
  //     var userIs = this.state.matches
  //   } else {
  //     var userIs = this.props.users
  //   }
  // }
// need to call action and change state before something renders
// or pass matches to here
  // componentWillReceiveProps() {
  //   debugger
  //   if (this.props.session.user_id) {
  //     let id = this.props.session.user_id
  //     this.props.actions.getMatchesForUser(id)
  //     this.setState({ matches: this.props.matches})
  //     var userIs = this.state.matches
  //   } else {
  //     var userIs = this.props.users
  //   }
  // }

  render() {
    debugger
    if (localStorage.token && this.props.session.user_id) {
      debugger
      var userIs = this.props.matches[1].selectedMatches.map(obj => obj.user)

    } else {
      var userIs = this.props.users
    }
      return (
        <div className="mdl-grid">
          {userIs.map((user, i) => {
            return (
                <div key={i} className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp">
                    <UserShow session={this.props.session} users={this.props.users} user={user} matches={this.props.matches} actions={this.props.actions}/>
                </div>
            )
          })}
          <br />
        </div>
      )
  }
}

export default UserList;
