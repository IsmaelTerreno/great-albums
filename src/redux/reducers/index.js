import { combineReducers } from 'redux';
import album from './album';

const rootReducer = combineReducers({
  albums: album
});

export default rootReducer;
