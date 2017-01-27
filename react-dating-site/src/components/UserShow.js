import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'
import UserMatch from './UserMatchShow'
import {Link} from 'react-router';



class UserShow extends React.Component {
  // debugger
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.showMatches = this.showMatches.bind(this)
    this.state = {matchesVisible: false, matches: null, editFormVisible: false, userInfo: {name: this.props.user.name, age: this.props.user.age, gender: this.props.user.gender, description: this.props.user.description}}
  }

// componentDidMount(){
//   this.setState({ matches: this.showMatches()})
//
// }


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
    this.props.actions.editUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.description)
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleDelete(event) {
    // debugger
    this.props.actions.deleteUser(this.props.user.id, this.state.userInfo.name, this.state.userInfo.age, this.state.userInfo.gender, this.state.userInfo.description)
  }

  showMatches() {
    debugger
    let id = this.props.user.id
    let matches = this.props.matches.filter(function(match) {
      return (match.id !== id)
    })
    this.setState({ matches: matches, matchesVisible: !this.state.matchesVisible})
  }

  render() {
    return(
      <div>
        <Link to={'/users/' + this.props.user.id }>
          <p>{this.props.user.name}</p>
          <p>{this.props.user.age}</p>
          <p>{this.props.user.gender}</p>
          <p>{this.props.user.description}</p>
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
            <input type="text" value={this.state.userInfo.gender} onChange={this.handleChange.bind(this, "gender")}/><br />
            <label>Description: </label>
            <input type="text" value={this.state.userInfo.description} onChange={this.handleChange.bind(this, "description")}/><br />
            <input type="submit" />
          </form> : null}
      </div>
    )
  }
}


export default UserShow
