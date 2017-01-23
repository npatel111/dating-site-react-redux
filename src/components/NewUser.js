import React, { Component } from 'react';
// import {connect} from 'react-redux'
import * as actions from '../actions/usersActions'
// import { bindActionCreators } from 'redux'
// import InventoryList from './InventoryList'



class NewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {username: "", age: "", gender: "", description: ""}
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let newId = this.props.users.length + 1
    this.props.actions.addUser(newId, this.state.username, this.state.age, this.state.gender, this.state.description)
    this.setState({username: "", age: "", gender: "", description: ""})
  }

  handleChange(propertyName, event) {
    // debugger
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState(obj)
  }

  render() {
    return (
      <form  onSubmit={this.handleClick} >
        Add new user: <br />
        <label>Name:</label>
        <input type="text" value={this.state.username} onChange={this.handleChange.bind(this, "username")} /><br />
        <label>Age: </label>
        <input type="text" value={this.state.age} onChange={this.handleChange.bind(this, "age")}/><br />
        <label>Gender: </label>
        <input type="text" value={this.state.gender} onChange={this.handleChange.bind(this, "gender")}/><br />
        <label>Description: </label>
        <input type="text" value={this.state.description} onChange={this.handleChange.bind(this, "description")}/><br />
        <input type="submit" />
      </form>
    );
  }
}

export default NewUser;
