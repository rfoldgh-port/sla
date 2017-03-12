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
import SkiSearchResults from './components/ski-lift';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
		// <MuiThemeProvider>
<Provider store={store}>
	<div>
	 
		// {AppBarExampleIconButton}
		  <SkiSearch />
		  <SkiSearchResults />
		
	</div>
        </Provider>,
        document.getElementById('app')
    )
);