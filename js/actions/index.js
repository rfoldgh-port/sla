import 'isomorphic-fetch';

//Instantiate Actions
export const GET_SKI_INFO = 'GET_SKI_INFO';//Create a function and a variable, function we use in the component. In the reducer, we use the constant, the variable. Instead of checking the type with a string, we check the type with a variable. 
export const SHOW_SKI_RESORT = 'SHOW_SKI_RESORT';
export const ADD_SKI_FAVORITE_SUCCESS = 'ADD_SKI_FAVORITE_SUCCESS';
export const ADD_SKI_FAVORITE_FAILURE = 'ADD_SKI_FAVORITE_FAILURE';
export const REMOVE_SKI_FAVORITE_SUCCESS = 'REMOVE_SKI_FAVORITE_SUCCESS';
export const REMOVE_SKI_FAVORITE_FAILURE = 'REMOVE_SKI_FAVORITE_FAILURE';