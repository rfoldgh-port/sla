

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
		 
		 var buttonColor = {
				backgroundColor: "#ff1100"
		 };
        
        let form;
              form = ( <div><form className="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <input className ="ski-lift-input" type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <div className="seach-favorite-buttons"><button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="search-button">Search</button>
				<button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="show-favorites" onClick={this.showSkiFavorite}>Show Favorites</button></div>
				
                
                &nbsp;
            </form></div>); //JSX syntax where you can use html markup as JS objects
			
            
            return (
			
                <div className="searchForm">
					<div className="row">
						<h1>Welcome to the Ski Lift App!</h1>
						<p>Here you can search for ski resorts by region. Feel free to save them to your account for use later!</p>
						<a className="google-button" href='/auth/google'><img className="google-image" src='../images/sign-in-with-google.png'/></a>
						<div>{form}</div>
					</div>
                </div>
    
            );
         }
}

export default connect()(SearchForm);