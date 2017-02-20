import React, { Component } from 'react';
import {connect} from 'react-redux'

import * as actions from '../actions/getUsers'
import { bindActionCreators } from 'redux'
import UserList from './UserList'
import NewUser from './NewUser'
import UserShow from './UserShow'
import LogInPage from './LogInPage'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {newUserFormVisible: false, loginFormVisible: false}
    this.handleShowNewUser = this.handleShowNewUser.bind(this)
    this.handleShowLogin = this.handleShowLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleShowNewUser(event) {
    event.preventDefault()
    this.setState({newUserFormVisible: !this.state.newUserFormVisible})
  }

  handleShowLogin(event) {
    event.preventDefault()
    this.setState({loginFormVisible: !this.state.loginFormVisible})
  }

  handleLogout(event) {
    debugger
    event.preventDefault()
    this.props.actions.logoutUser()
  }

  render() {
    debugger
    return (
      <div className="wrap">
        <div className="App-header">
          <h1 className="header-text" id="header">Sit on your couch. Find love. </h1><br />
          <h3 className="header-text" id="subheader">We get it. We will show you only people who are close by.</h3>
        </div>
        <p>{localStorage.token ? "Logged in" : "Logged out"}</p>
        {localStorage.token ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="logout-button" onClick={this.handleLogout} type="submit">LOG OUT</button> : <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="login-button" onClick={this.handleShowLogin} type="submit">LOG IN</button> }

        {!localStorage.token ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="add-user-button" onClick={this.handleShowNewUser} type="submit">Add User</button> : null }

        {this.state.loginFormVisible && !localStorage.token? <LogInPage actions={this.props.actions} /> : null}
        {this.state.newUserFormVisible ? <NewUser actions={this.props.actions} users={this.props.users}/> : null}
        <UserList matches={this.props.matches} getUsers={this.props.getUsers} users={this.props.users} actions={this.props.actions}/>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {users: state.users, matches: state.matches}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
