import 'isomorphic-fetch';

//Instantiate Actions
export const GET_SKI_INFO_SUCCESS = 'GET_SKI_INFO_SUCCESS';//Create a function and a variable, function we use in the component. In the reducer, we use the constant, the variable. Instead of checking the type with a string, we check the type with a variable. 
export const getSkiInfoSuccess = (data) => ({
    type: GET_SKI_INFO_SUCCESS,
	info: data

});

export const GET_SKI_INFO_FAILURE = 'GET_SKI_INFO_FAILURE';
export const getSkiInfoFailure = (data, error) => ({
	type: GET_SKI_INFO_FAILURE,
	error: error
	
});

export const SHOW_SKI_RESORT_SUCCESS = 'SHOW_SKI_RESORT';


export const ADD_SKI_FAVORITE_SUCCESS = 'ADD_SKI_FAVORITE_SUCCESS';
export const addSkiFavoriteSuccess = (data) => ({
    type: ADD_SKI_FAVORITE_SUCCESS,
	favorite: data

});

export const ADD_SKI_FAVORITE_FAILURE = 'ADD_SKI_FAVORITE_FAILURE';
export const addSkiFavoriteFailure = (error) => ({
    type: ADD_SKI_FAVORITE_FAILURE,
	error: error
});


export const REMOVE_SKI_FAVORITE_SUCCESS = 'REMOVE_SKI_FAVORITE_SUCCESS';
export const removeSkiFavoriteSuccess = () => ({
    type: REMOVE_SKI_FAVORITE_SUCCESS
});

export const REMOVE_SKI_FAVORITE_FAILURE = 'REMOVE_SKI_FAVORITE_FAILURE';
export const removeSkiFavoriteFailure = () => ({
    type: REMOVE_SKI_FAVORITE_FAILURE
});

export const getSkiInfo = (location) => dispatch => {
    const url = '/yelp-search?location='+ location;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(getSkiInfoSuccess(data))
    )
    .catch(error =>
        dispatch(getSkiInfoFailure(error))
    );
};


export const addSkiFavorite = (favorite) => dispatch => {
	
    const url = '/yelp-search?location='+ favorite; 
   return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
 .then(response => response.json())
    .then(data =>
        dispatch(addSkiFavoriteSuccess(data))
    )
    .catch(error =>
        dispatch(addSkiFavoriteFailure(error))
    );
};

export const removeSkiFavorite = (data) => dispatch => {
	
    const request = {url:"/ski-favorite-removed", method:"PUT" , 
	body: JSON.stringify({skiFavorite: data}), 
	headers: { 'Accept': 'application/json, text/plain, /', 'Content-Type': 'application/json' }};
	
    return fetch(request.url,request).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
 .then(response => response.json())
    .then(data =>
        dispatch(removeSkiFavoriteSuccess(data))
    )
    .catch(error =>
        dispatch(removeSkiFavoriteFailure(error))
    );
};