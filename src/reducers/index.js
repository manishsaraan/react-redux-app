import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducder = combineReducers({
     courses,
     authors,
     ajaxCallsInProgress
});

export default rootReducder;
