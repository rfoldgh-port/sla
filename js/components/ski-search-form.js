

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';
import {showSkiResorts} from '../actions/index';

export class SearchForm extends React.Component { 
    constructor(props) {
        super(props);      

		this.searchSkiLifts = this.searchSkiLifts.bind(this);
		// this.addFavorite = this.addFavorite.bind(this);
		this.showSkiFavorite = this.showSkiFavorite.bind(this);
		
    }

    searchSkiLifts(event){
       event.preventDefault();
        this.props.dispatch(getSkiInfo(this.inputText.value));
	}
	
	// addFavorite(event){
		// event.preventDefault();
		// this.props.dispatch(addSkiFavorite(this.inputText.value));
		
	// }
    
	showSkiFavorite(event){
		event.preventDefault();
		this.props.dispatch(showSkiResorts());
	}


     render() {
        
        let form;
              form = ( <form className="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <input type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <button type='submit' id="search-button">Search</button>
				<button type='submit' id="show-favorites" onClick={this.showSkiFavorite}>Show Favorites</button>
				
                
                &nbsp;
            </form>); //JSX syntax where you can use html markup as JS objects
			
            
            return (
			
                <div className="searchForm">
				<h1>Welcome to the Ski Lift App!</h1>
				<a class="google-button" href='/auth/google'><img src='../images/sign-in-with-google.png'/></a>
                    {form}
                </div>
    
            );
         }
}

export default connect()(SearchForm);