import { createStore, applyMiddleware, combineReducers } from 'redux';
/* import reducers from './rootReducer/index'; */
import loginReducer from './LoginReducer/index';
import apiReducer from './apiReducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  login: loginReducer,
  api: apiReducer,
});

const compositeEnhancer = composeWithDevTools;

export const store = createStore(rootReducer, compositeEnhancer(applyMiddleware(thunk)));
