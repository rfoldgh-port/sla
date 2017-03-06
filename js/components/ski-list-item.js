

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';


export class SkiListItem extends React.Component { 
    constructor(props) {
        super(props);      

		this.addFavorite = this.addFavorite.bind(this);
    }
	
	addFavorite(event){
		event.preventDefault();
		this.props.dispatch(addSkiFavorite(this.props.favorite));
		
	}
    


     render() {
        
        
			
            return (
			
                <div className="searchForm">
					<li>{this.props.favorite.name}<button class="add-favorite" onClick={this.addFavorite}>Click Here to Save</button></li>
                </div>
    
            );
         }
}

export default connect()(SkiListItem);