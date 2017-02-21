import {GET_SKI_INFO,SHOW_SKI_RESORT,ADD_SKI_FAVORITE_SUCCESS,ADD_SKI_FAVORITE_FAILURE,REMOVE_SKI_FAVORITE_SUCCESS,REMOVE_SKI_FAVORITE_FAILURE} from '../actions/index';


const initialSkiState = {userSkiResorts: [],
                          user_id: null,
                          resort_name: '',
					      country: '',
						  seachSkiResorts: [],
						  resort_name: '',
						  resort_country: '',
                          resort_rating: null
                          };



export const skiLiftReducer = (state=initialSkiState, action) => {
    

	console.log(state);
    
    switch(action.type){
        case GET_SKI_INFO:

        return {...state};
		   
		   
        case SHOW_SKI_RESORT:
		
		return {...state};
		
		case ADD_SKI_FAVORITE_SUCCESS:
		
		return {...state};		

		case  ADD_SKI_FAVORITE_FAILURE:
		
		return {...state};

		case  REMOVE_SKI_FAVORITE_SUCCESS:

		return {...state};
		
		case  REMOVE_SKI_FAVORITE_FAILURE:

		return {...state};

        default:
            return state; //default is to keep same state that you had before.
    }
};
