import { createStore, applyMiddleware } from 'redux';
import loginReducer from './LoginReducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const compositeEnhancer = composeWithDevTools;

export default function generateStore() {
  const store = createStore(loginReducer, compositeEnhancer(applyMiddleware(thunk)));
  return store;
}
