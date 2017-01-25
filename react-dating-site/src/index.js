import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './stores/configureStore';
import * as actions from '../src/actions/getUsers'
import { Provider } from 'react-redux';
import App from '../src/components/App';
import UserShow from '../src/components/UserShow'
import UserList from '../src/components/UserShow'
import UserDetail from '../src/components/UserDetail'

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

export const store = configureStore();
store.dispatch(actions.getUsers())//got an error here

ReactDOM.render(
  (<Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path='/users' component={UserList} >
            <Route path="/users/:id" component={UserDetail} />
          </Route>
        </Route>
      </Router>
  </Provider>),
  document.getElementById('container')
);
