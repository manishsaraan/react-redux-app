import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';
import {  benginAjaxCall } from './ajaxStatusActions';

export function loadAuthorSuccess(authors){
  return {
    type : types.LOAD_AUTHOR_SUCCESS, authors
  };
}

//thunks goes here
export function loadAuthors(){
  return function(dispatch){
       dispatch(benginAjaxCall());
       return courseApi.getAllAuthors().then(authors => {
         dispatch(loadAuthorSuccess(authors));
       }).catch(error => {
         throw(error);
       });
  };
}
