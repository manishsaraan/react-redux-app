import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors){
  return {
    type : types.LOAD_AUTHOR_SUCCESS, authors
  };
}

//thunks goes here
export function loadAuthors(){
  return function(dispatch){
       return courseApi.getAllAuthors().then(authors => {
         dispatch(loadAuthorSuccess(authors));
       }).catch(error => {
         throw(error);
       });
  };
}
