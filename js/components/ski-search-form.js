

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';

export class SearchForm extends React.Component { 
    constructor(props) {
        super(props);      

		this.searchSkiLifts = this.searchSkiLifts.bind(this);
		this.addFavorite = this.addFavorite.bind(this);
    }

    searchSkiLifts(event){
       event.preventDefault();
        this.props.dispatch(getSkiInfoSuccess(this.inputText.value));
	}
	
	addFavorite(event){
		event.preventDefault();
		this.props.dispatch(addSkiFavorite(this.inputText.value));
		
	}
    


    render() {
        
        let form;
              form = ( <form className="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <input type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <button type='submit' id="search-button">Search</button>
				<button type='submit' id="add-favorite">Save Favorite</button>
				
                
                &nbsp;
            </form>); //JSX syntax where you can use html markup as JS objects
			
            
            return (
			
                <div className="searchForm">
				<h1>Welcome to the Ski Lift App!</h1>
                    {form}
                </div>
    
            );
        }
}

export default connect()(SearchForm);