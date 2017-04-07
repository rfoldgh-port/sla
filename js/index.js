
require('babel-polyfill');

//var actions = require('./actions/index');
import React from 'react';
import ReactDOM from 'react-dom';

var Provider = require('react-redux').Provider;
import store from './store';

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var browserHistory = router.browserHistory;
var IndexRoute = router.IndexRoute;
var Link = router.Link;

import SkiSearchResults from './components/ski-lift';
import SkiListFavorite from './components/ski-lift-favorite';
import App from './components/app';
import Homepage from './components/homepage';
import SearchFormContainer from './components/ski-search-form';



document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Homepage} />
            <Route path="search-form" component ={SearchFormContainer} />
      			<Route path="favorites" component={SkiListFavorite} />
      			<Route path="search" component ={SkiSearchResults} />
          </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
  );
});
