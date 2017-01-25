import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// export default function configureStore() {
//   return createStore(rootReducer);
// }

//I'm not sure where initialState comes from?
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(){
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
