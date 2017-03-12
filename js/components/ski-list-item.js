

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
        
        	 var buttonColor = {
				backgroundColor: "blue",
				margin: ".5em"
			};
			let addButton;
			let removeButton;
			if(this.props.favorite._id){
					removeButton = (<button style={buttonColor} className="btn waves-effect waves-light" onClick={this.removeFavorite}>Click Here to Remove</button>);
			} else {
				addButton = (<button style={buttonColor} className="btn waves-effect waves-light" onClick={this.addFavorite}>Click Here to Save</button>);
			}
            return (
			
                <div className="searchForm">
					<li><div className="card horizontal">
							<div className="card-image">
								<img src={this.props.favorite.image_url}/>
							</div>
							<div className="card-content">
								<p>{this.props.favorite.name}</p>
								<p>Yelp Rating: {this.props.favorite.rating}</p>
							</div>
							<div className="card-action">
								{addButton}{removeButton}
							</div>
						</div>
					</li>
                </div>
    
            );
         }
}

export default connect()(SkiListItem);