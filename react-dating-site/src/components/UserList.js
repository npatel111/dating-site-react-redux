import React, {Component} from 'react';
import UserShow from './UserShow'
import {Link} from 'react-router';

class UserList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    // debugger
    return (
      <ul className="list-group col-lg-6 col-lg-offset-3">
        {this.props.users.map((user, i) => {
          return (
              <li key={i} className="list-group-item">
                  <UserShow users={this.props.users} user={user} actions={this.props.actions}/>
              </li>
          )
        })}
        <br />
      </ul>
    )
  }
}

export default UserList;
