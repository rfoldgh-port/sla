//import * as actions from './actions/index';
//import store from './store';
//
//store.dispatch(actions.newGame());
//store.dispatch(actions.guessNumber(10));
//console.log(store.getState());
//
////node index.js test run


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import SkiSearch from './components/ski-search-form';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
<Provider store={store}>
          <SkiSearch />
        </Provider>,
        document.getElementById('app')
    )
);