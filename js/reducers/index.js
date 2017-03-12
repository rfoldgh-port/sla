import {GET_SKI_INFO_SUCCESS,GET_SKI_INFO_FAILURE,SHOW_SKI_RESORT,ADD_SKI_FAVORITE_SUCCESS,ADD_SKI_FAVORITE_FAILURE,REMOVE_SKI_FAVORITE_SUCCESS,REMOVE_SKI_FAVORITE_FAILURE,SHOW_SKI_RESORT_SUCCESS,SHOW_SKI_RESORT_FAILURE} from '../actions/index';


const initialSkiState = {userSkiResorts: [],
                          user_id: null,
                          resort_name: '',
					      country: '',
						  searchSkiResorts: null,
						  skiFavorite: null,
						  resort_country: '',
                          resort_rating: null,
						  error: null
                          };



export const skiLiftReducer = (state=initialSkiState, action) => {
    

	console.log(state);
    
    switch(action.type){
        case GET_SKI_INFO_SUCCESS:

        return {...state,searchSkiResorts: action.info};
		      
        case SHOW_SKI_RESORT_SUCCESS:
		
		return {...state, skiFavorite: action.favorite};
		
        case SHOW_SKI_RESORT_FAILURE:
		
		return {...state, error: action.error};
		
		case ADD_SKI_FAVORITE_SUCCESS:
		
		return {...state, skiFavorite: action.favorite};		

		case  ADD_SKI_FAVORITE_FAILURE:
		
		return {...state, error: action.error};

		case  REMOVE_SKI_FAVORITE_SUCCESS:

		return {...state, skiFavorite: action.favorite};
		
		case  REMOVE_SKI_FAVORITE_FAILURE:

		return {...state, error: action.error};

        default:
            return state; //default is to keep same state that you had before.
    }
};
