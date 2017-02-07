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
// import './index.css';

export const store = configureStore();
store.dispatch(actions.getUsers())
store.dispatch(actions.getMatches())

ReactDOM.render(
  (<Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/users/:id" component={UserDetail} />
      </Router>
  </Provider>),
  document.getElementById('container')
);
