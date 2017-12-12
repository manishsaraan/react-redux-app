import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
const rootReducder = combineReducers({
     courses,
     authors
});

export default rootReducder;
