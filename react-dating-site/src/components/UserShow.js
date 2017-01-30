import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'
import UserMatch from './UserMatchShow'
import {Link} from 'react-router';



class UserShow extends React.Component {
  debugger
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.showMatches = this.showMatches.bind(this)
    this.state = {matchesVisible: false, matches: [], editFormVisible: false, userInfo: {name: this.props.user.name, age: this.props.user.age, gender: this.props.user.gender, looking_for: this.props.user.looking_for, description: this.props.user.description, street: this.props.user.street, city: this.props.user.city, state: this.props.user.state}}
  }



  handleEdit(event) {
    // event.preventDefault()
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleChange(propertyName, event) {
    // debugger
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState({userInfo: Object.assign({}, this.state.userInfo, obj)})
    // debugger
  }

  handleSubmit(event) {
    // debugger
    event.preventDefault()
    this.props.actions.editUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.looking_for, this.state.userInfo.description, this.state.userInfo.street, this.state.userInfo.city, this.state.userInfo.state)
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleDelete(event) {
    // debugger
    this.props.actions.deleteUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.looking_for, this.state.userInfo.description, this.state.userInfo.street, this.state.userInfo.city, this.state.userInfo.state)
  }

  showMatches() {
    // debugger
    let id = this.props.user.id
    let looking_for = this.props.user.looking_for
    let gender = this.props.user.gender
    let matches = this.props.matches.filter(function(match) {
      return (match.id !== id && match.gender === looking_for && match.looking_for === gender)
    })
    this.setState({ matches: matches, matchesVisible: !this.state.matchesVisible})
  }

  render() {
    return(
      <div>
        <Link to={'/users/' + this.props.user.id }>
          <p>Username: {this.props.user.name}</p>
          <p>Age: {this.props.user.age}</p>
          <p>Gender: {this.props.user.gender}</p>
          <p>Description: {this.props.user.description}</p>
          <p>Looking for: {this.props.user.looking_for}</p>
          <p>Street: {this.props.user.street}</p>
          <p>City: {this.props.user.city}</p>
          <p>State: {this.props.user.state}</p>
          {this.state.matchesVisible ? <UserMatch usermatches={this.state.matches} /> : null}

        </Link>
        <button onClick={this.handleEdit}>Edit User</button>
        <button onClick={this.handleDelete}>Delete User</button>
        <button onClick={this.showMatches}>Show Matches</button>
        { this.state.editFormVisible ?
          <form onSubmit={this.handleSubmit} >
            Edit user: <br />
            <label>Name:</label>
            <input type="text" value={this.state.userInfo.name} onChange={this.handleChange.bind(this, "name")} /><br />
            <label>Age: </label>
            <input type="text" value={this.state.userInfo.age} onChange={this.handleChange.bind(this, "age")}/><br />
            <label>Gender: </label>
            Male <input type="radio" value="M" checked={this.state.userInfo.gender === "M"} onChange={this.handleChange.bind(this, "gender")} />
            Female <input type="radio" value="F" checked={this.state.userInfo.gender === "F"} onChange={this.handleChange.bind(this, "gender")}/><br />
            <label>Looking for:</label><br />
            Male <input type="radio" value="M" checked={this.state.userInfo.looking_for === "M"} onChange={this.handleChange.bind(this, "looking_for")} />
            Female <input type="radio" value="F" checked={this.state.userInfo.looking_for === "F"} onChange={this.handleChange.bind(this, "looking_for")}/><br />
            <label>Description: </label>
            <input type="text" value={this.state.userInfo.description} onChange={this.handleChange.bind(this, "description")}/><br />
            <label>Street Address: </label>
            <input type="text" value={this.state.userInfo.street} onChange={this.handleChange.bind(this, "street")}/><br />
            <label>City: </label>
            <input type="text" value={this.state.userInfo.city} onChange={this.handleChange.bind(this, "city")}/><br />
            <label>State: </label>
            <input type="text" value={this.state.userInfo.state} onChange={this.handleChange.bind(this, "state")}/><br />
            <input type="submit" />
          </form> : null}
      </div>
    )
  }
}


export default UserShow
