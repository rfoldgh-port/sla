import React from 'react';
import SearchFormContainer from "./ski-search-form";

export default class Homepage extends React.Component { 
    constructor(props) {
        super(props);   

	
    }   
	
  
    render() {
	
	return (
				
					<div className="SkiListFavorite">
						<h1>Welcome to the Ski Lift App!</h1>
						<p>Here you can search for ski resorts by region. Feel free to save them to your account for use later!</p>
						<SearchFormContainer />
					</div>
				
            

		);
	}
};//END CLASS
        
// const mapStateToProps = (state, props) => ({

// });


