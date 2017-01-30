import React, { Component } from 'react';
// import {connect} from 'react-redux'
import * as actions from '../actions/getUsers'
// import { bindActionCreators } from 'redux'
// import InventoryList from './InventoryList'



class NewUser extends Component {
  // debugger
  constructor(props) {
    super(props)
    this.state = {name: "", age: "", gender: "", looking_for: "", description: "", street: "", city: "", state: ""}
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    // debugger
    event.preventDefault()
    this.props.actions.addUser(this.state.name, this.state.age, this.state.gender, this.state.looking_for, this.state.description, this.state.street, this.state.city, this.state.state)
    this.setState({name: "", age: "", gender: "", description: "", looking_for: "", street: "", city: "", state: ""})
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
        <label>Pick a Username:</label>
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} /><br />
        <label>Age: </label>
        <input type="text" value={this.state.age} onChange={this.handleChange.bind(this, "age")}/><br />
        <label>Gender: </label><br />
        Male <input type="radio" value="M" checked={this.state.gender === "M"} onChange={this.handleChange.bind(this, "gender")} />
        Female <input type="radio" value="F" checked={this.state.gender === "F"} onChange={this.handleChange.bind(this, "gender")}/><br />
        <label>Looking for:</label><br />
        Male <input type="radio" value="M" checked={this.state.looking_for === "M"} onChange={this.handleChange.bind(this, "looking_for")} />
        Female <input type="radio" value="F" checked={this.state.looking_for === "F"} onChange={this.handleChange.bind(this, "looking_for")}/><br />
        <label>Description: </label>
        <input type="text" value={this.state.description} onChange={this.handleChange.bind(this, "description")}/><br />
        <label>Street Address: </label>
        <input type="text" value={this.state.street} onChange={this.handleChange.bind(this, "street")}/><br />
        <label>City: </label>
        <input type="text" value={this.state.city} onChange={this.handleChange.bind(this, "city")}/><br />
        <label>State: </label>
        <input type="text" value={this.state.state} onChange={this.handleChange.bind(this, "state")}/><br />
        <input type="submit" />
      </form>
    );
  }
}

export default NewUser;
