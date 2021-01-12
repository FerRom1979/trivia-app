import { combineReducers } from 'redux';
import loginReducer from '../LoginReducer/index';
import apiReducer from '../apiReducer/index';
import counterReducer from '../pointCounterReducer/index';

const reducers = combineReducers({
  login: loginReducer,
  api: apiReducer,
  counter: counterReducer,
});
export default reducers;
