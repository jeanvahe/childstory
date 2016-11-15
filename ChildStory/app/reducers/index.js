import { combineReducers } from 'redux';
import reducer from './reducer';
import storysets from './storysets';

const rootReducer = combineReducers({
  reducer,
  storysets
});

export default rootReducer;
