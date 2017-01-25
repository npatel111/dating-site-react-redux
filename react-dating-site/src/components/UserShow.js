import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'
import {Link} from 'react-router';



class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.state = {editFormVisible: false, userInfo: {name: "", age: "", gender: "", description: ""}}
  }

  handleEdit(event) {
    event.preventDefault()
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  render() {
    return(
      <div>
        <Link to={'/users/' + this.props.user.id }>
          <p>{this.props.user.name}</p>
          <p>{this.props.user.age}</p>
          <p>{this.props.user.gender}</p>
          <p>{this.props.user.description}</p>
        </Link>
        <button type="submit">Edit User</button>
      </div>
    )
  }
}


export default UserShow
