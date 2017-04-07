

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {removeSkiFavorite} from '../actions/index';


export class SkiListFavorite extends React.Component {
    constructor(props) {
        super(props);
		    this.removeFavorite = this.removeFavorite.bind(this); //specific item (this) would be specific to this item, so in this case, that specific search result(ski resort result).
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

			let removeButton;
			if(this.props.favorite._id){
					removeButton = (<button style={buttonColor} className="btn waves-effect waves-light" onClick={this.removeFavorite}>Click Here to Remove</button>);
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
								{addButton}
								{removeButton}
							</div>
						</div>
					</li>
                </div>

            );
         }
}

export default connect()(SkiListFavorite);
