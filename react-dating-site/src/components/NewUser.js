import React, { Component } from 'react';
// import {connect} from 'react-redux'
import * as actions from '../actions/getUsers'
// import { bindActionCreators } from 'redux'
// import InventoryList from './InventoryList'



class NewUser extends Component {
  debugger
  constructor(props) {
    super(props)
    this.state = {name: "", age: "", gender: "", description: ""}
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    debugger
    event.preventDefault()
    this.props.actions.addUser(this.state.name, this.state.age, this.state.gender, this.state.description)
    this.setState({name: "", age: "", gender: "", description: ""})
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
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} /><br />
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
