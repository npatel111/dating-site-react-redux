import React, {Component} from 'react';
import {Link} from 'react-router';

class UserList extends Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.state = {editFormVisible: false, user: null, userInfo: {username: "", age: "", gender: "", description: ""}}
  }
  // debugger
  handleEdit(event) {
    debugger
    event.preventDefault()
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  render() {
    return (
      <ul className="list-group col-lg-6 col-lg-offset-3">
        {this.props.users.map((user, i) => {
          return (
            <div key={i}>
              <li key={i} className="list-group-item"><Link to={`/users/${user.id}`} >Name: {user.username}, Age: {user.age}, Gender: {user.gender}, Description: {user.description}</Link>
                <button onClick={this.handleEdit} type="submit">Edit user</button>
              </li>
            {this.state.editFormVisible ?
                <form onSubmit={this.handleClick} >
                  Edit this user: <br />
                  <label>Name:</label>
                  <input type="text" value={user.username}  /><br />
                  <label>Age: </label>
                  <input type="text" value={user.age} /><br />
                  <label>Gender: </label>
                  <input type="text" value={user.gender} /><br />
                  <label>Description: </label>
                  <input type="text" value={user.description}/><br />
                  <input type="submit" />
                </form>
               : null}


            </div>
          )
        })}
        <br />
      </ul>
    )
  }

}

export default UserList;
