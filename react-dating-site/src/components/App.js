import React, { Component } from 'react';
import {connect} from 'react-redux'

import * as actions from '../actions/getUsers'
import { bindActionCreators } from 'redux'
import EditUser from './EditUser'
import UserList from './UserList'
import NewUser from './NewUser'
import UserShow from './UserShow'
import LogInPage from './LogInPage'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {editFormVisible: false, newUserFormVisible: false, loginFormVisible: false, usermatches: []}
    this.handleShowNewUser = this.handleShowNewUser.bind(this)
    this.handleShowLogin = this.handleShowLogin.bind(this)
    this.handleShowEditForm = this.handleShowEditForm.bind(this)
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

  handleShowEditForm(event) {
    event.preventDefault()
    this.setState({editFormVisible: !this.state.editFormVisible})
  }

  handleLogout(event) {
    // debugger
    event.preventDefault()
    this.props.actions.logoutUser()
  }

  render() {
    if (this.props.session.user_id) {
      var id = this.props.session.user_id
      var currentUser = this.props.users.filter(function (user) {
          return (user.id === id);
      });
      if (currentUser && currentUser.length > 0) {
        debugger
        var usermatches = this.props.matches;
        currentUser = currentUser[0]
        localStorage.user_id = currentUser.id
        window.localStorage.setItem('user', JSON.stringify(currentUser))
        window.localStorage.setItem('usermatches', JSON.stringify(this.props.matches))
      }
    }

    // debugger
    return (
      <div className="wrap">
        <div className="App-header">
          <h1 className="header-text" id="header">Are you too tired? You can still find love. </h1><br />
          <h3 className="header-text" id="subheader">We get it. We will show you only people who are close by.</h3>
        </div>
        {localStorage.user_id ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="logout-button" onClick={this.handleLogout} type="submit">LOG OUT</button> : <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="login-button" onClick={this.handleShowLogin} type="submit">LOG IN</button> }
        {!localStorage.user_id ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="add-user-button" onClick={this.handleShowNewUser} type="submit">Add User</button> : null }
        {this.state.editFormVisible ? <EditUser user={currentUser} /> : null }
        {localStorage.user_id ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.handleShowEditForm} type="submit">Edit User</button> : null }
        {this.state.loginFormVisible && !localStorage.token? <LogInPage actions={this.props.actions} /> : null}
        {this.state.newUserFormVisible ? <NewUser actions={this.props.actions} users={this.props.users}/> : null}
        <UserList usermatches={usermatches} session={this.props.session} matches={this.props.matches} getUsers={this.props.getUsers} users={this.props.users} actions={this.props.actions}/>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {users: state.users, matches: state.matches, session: state.session}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
