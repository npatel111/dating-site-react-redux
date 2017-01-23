import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import NewUser from './components/NewUser'
import UserList from './components/UserList'
import UserShow from './components/UserShow'

const Routes = (
    <Route path="/" component={App}>
      <IndexRoute path='/' component={App} />
      <Route path="/users" component={App} >
        <Route path='/users/:id'  component={UserShow} />
      </Route>
        // {/* routes go here */}
    </Route>
)


module.exports = Routes
