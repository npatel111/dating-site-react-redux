import React, {Component} from 'react';
import UserShow from './UserShow'
import {Link} from 'react-router';

class UserList extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <ul >
        {this.props.users.map((user, i) => {
          return (
              <li key={i} >
                  <UserShow users={this.props.users} user={user} matches={this.props.matches} actions={this.props.actions}/>
              </li>
          )
        })}
        <br />
      </ul>
    )
  }
}

export default UserList;
