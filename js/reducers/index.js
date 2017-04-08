import {LOGGED_OUT_SUCCESS,LOGGED_OUT_FAILURE,LOGGED_IN_SUCCESS, LOGGED_IN_FAILURE, GET_SKI_INFO_SUCCESS,GET_SKI_INFO_FAILURE,SHOW_SKI_RESORT,ADD_SKI_FAVORITE_SUCCESS,ADD_SKI_FAVORITE_FAILURE,REMOVE_SKI_FAVORITE_SUCCESS,REMOVE_SKI_FAVORITE_FAILURE,SHOW_SKI_RESORT_SUCCESS,SHOW_SKI_RESORT_FAILURE} from '../actions/index';


const initialSkiState = { userSkiResorts: [],
                          user: null,
                          resort_name: '',
            					    country: '',
            						  searchSkiResorts: null,
            						  skiFavorite: null,
            						  resort_country: '',
                          resort_rating: null,
            						  error: null,
                          };



export const skiLiftReducer = (state=initialSkiState, action) => {


	console.log(state);

    switch(action.type){

        case LOGGED_IN_SUCCESS:

        return {...state, user: action.info};

        case LOGGED_IN_FAILURE:

        return {...state, error: action.error};

        case LOGGED_OUT_SUCCESS:

        return {...state, user: null};

        case LOGGED_OUT_FAILURE:

        return {...state, error: action.error};

        case GET_SKI_INFO_SUCCESS:

        return {...state,searchSkiResorts: action.info};

        case SHOW_SKI_RESORT_SUCCESS:

		return {...state, skiFavorite: action.favorite.favorites};

        case SHOW_SKI_RESORT_FAILURE:

		return {...state, error: action.error};

		case ADD_SKI_FAVORITE_SUCCESS:

		return {...state, message: action.favorite};

		case  ADD_SKI_FAVORITE_FAILURE:

		return {...state, error: action.error};

		case  REMOVE_SKI_FAVORITE_SUCCESS:

		return {...state, message: action.favorite};

		case  REMOVE_SKI_FAVORITE_FAILURE:

		return {...state, error: action.error};

        default:
            return state; //default is to keep same state that you had before.
    }
};
