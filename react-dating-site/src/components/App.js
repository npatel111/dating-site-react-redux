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
    this.state = {newUserFormVisible: false}
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow(event) {
    event.preventDefault()
    this.setState({newUserFormVisible: !this.state.newUserFormVisible})
  }

  render() {
    return (
      <div className="wrap">
        <div className="App-header">
          <h1 className="header-text" id="header">Sit on your couch. Find love. </h1><br />
          <h3 className="header-text" id="subheader">We get it. We will show you only people who are close by.</h3>
          <LogInPage actions={this.props.actions}/>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="add-user-button" onClick={this.handleShow} type="submit">Add User</button>
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
