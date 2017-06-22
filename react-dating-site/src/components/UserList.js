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

  render() {
    // debugger
    if (localStorage.token && this.props.session.user_id) {
      // debugger
      var userIs = this.props.matches[1].selectedMatches.map(obj => obj.user)
      var usermatches = userIs;
    } else if (localStorage.token && !this.props.session.user_id) {
      // debugger
      var userIs = this.props.users
      var storageUser = window.localStorage.getItem('usermatches');
      if (storageUser) {
          try {
            var usermatches = JSON.parse(storageUser);
            var userIs = usermatches[1].selectedMatches.map(obj => obj.user)
          } catch (e) {
            window.localStorage.removeItem('user');
          }
        }
    // return this.currentUser;
      // var userIs = this.props.usermatches[1].selectedMatches.map(obj => obj.user)
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
