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
export const showSkiResortSuccess = (data) => ({
	type: SHOW_SKI_RESORT_SUCCESS,
	favorite: data	
});

export const SHOW_SKI_RESORT_FAILURE = 'SHOW_SKI_RESORT_FAILURE';
export const showSkiResortFailure = (error) => ({
    type: SHOW_SKI_RESORT_FAILURE,
	error: error
});


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
export const removeSkiFavoriteSuccess = (data) => ({
    type: REMOVE_SKI_FAVORITE_SUCCESS,
	favorite: data
	
});

export const REMOVE_SKI_FAVORITE_FAILURE = 'REMOVE_SKI_FAVORITE_FAILURE';
export const removeSkiFavoriteFailure = (error) => ({
    type: REMOVE_SKI_FAVORITE_FAILURE,
	error: error
});


export const showSkiResorts = () => dispatch => {
	
    const url = '/ski-favorites';
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
        dispatch(showSkiResortSuccess(data))
    )
    .catch(error =>
        dispatch(showSkiResortFailure(error))
    );
};

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
	
    const request = {url: '/ski-favorites', method: "POST" , credentials: "same-origin",  
	body: JSON.stringify({skiFavorite: favorite}), 
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
        dispatch(addSkiFavoriteSuccess(data))
    )
    .catch(error =>
        dispatch(addSkiFavoriteFailure(error))
    );
};

export const removeSkiFavorite = (favorite) => dispatch => {
	
    const request = {url:"/ski-favorites", method:"DELETE" , credentials: "same-origin",
	body: JSON.stringify({skiFavorite: favorite}), 
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