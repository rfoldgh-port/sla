// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {skiLiftReducer} from './reducers/index';
import thunk from 'redux-thunk';



export default createStore(skiLiftReducer, applyMiddleware(thunk));

// export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));