

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';
import {removeSkiFavorite} from '../actions/index';


export class SkiListItem extends React.Component { 
    constructor(props) {
        super(props);      

		this.addFavorite = this.addFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this); //specific item (this) would be specific to this item, so in this case, that specific search result(ski resort result).
    }
	
	addFavorite(event){
		event.preventDefault();
		this.props.dispatch(addSkiFavorite(this.props.favorite));
		
	}
    
	removeFavorite(event){
		event.preventDefault();
		this.props.dispatch(removeSkiFavorite(this.props.favorite));
	}


     render() {
        
        
			
            return (
			
                <div className="searchForm">
					<li>{this.props.favorite.name}<button class="add-favorite" onClick={this.addFavorite}>Click Here to Save</button><button class="remove-favorite" onClick={this.removeFavorite}>Click Here to Remove</button></li>
                </div>
    
            );
         }
}

export default connect()(SkiListItem);