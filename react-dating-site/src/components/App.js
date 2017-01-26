import React, { Component } from 'react';
import {connect} from 'react-redux'
// import getUsers from '../actions/getUsers'
// import addUser from '../actions/addUser'
import * as actions from '../actions/getUsers'
import { bindActionCreators } from 'redux'
import UserList from './UserList'
import NewUser from './NewUser'
import UserShow from './UserShow'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to a dating site! Here are all the users</h2>
        </div>
        <NewUser actions={this.props.actions} users={this.props.users}/><br />
        <UserList getUsers={this.props.getUsers} users={this.props.users} actions={this.props.actions}/>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {users: state.users}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
