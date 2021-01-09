import { combineReducers } from 'redux';
import loginReducer from '../LoginReducer/index';
import apiReducer from '../apiReducer/index';

const reducers = combineReducers({
  login: loginReducer,
  api: apiReducer,
});
export default reducers;
