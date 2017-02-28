// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {skiLiftReducer} from './reducers/index';

export default createStore(skiLiftReducer, applyMiddleware(thunk));

// export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));