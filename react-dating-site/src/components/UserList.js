import React, {Component} from 'react';
import UserShow from './UserShow'
import {Link} from 'react-router';

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  render() {

      return (
        <div className="mdl-grid">

          {this.props.users.map((user, i) => {
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
