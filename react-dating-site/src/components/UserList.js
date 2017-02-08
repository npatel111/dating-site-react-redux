import React, {Component} from 'react';
import UserShow from './UserShow'
import {Link} from 'react-router';

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let item1 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    let item2 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    let item3 = this.props.users[Math.floor(Math.random()*this.props.users.length)];
    let users = [item1, item2, item3]
    if (users[2] !== undefined) {
      return (
        <div className="mdl-grid">

          {[item1, item2, item3].map((user, i) => {
            return (
                <div key={i} className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp">
                    <UserShow users={this.props.users} user={user} matches={this.props.matches} actions={this.props.actions}/>
                </div>
            )
          })}
          <br />
        </div>
      )} else {
        return null
      }
  }
}

export default UserList;
