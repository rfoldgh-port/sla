

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';
import {removeSkiFavorite} from '../actions/index';
import {showSkiResorts} from '../actions/index';


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
    this.props.dispatch(showSkiResorts());
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
          					<li>
                      <div className="card-container-business">
                        <div className="card">
                           <div className="card-image waves-effect waves-block waves-light">
                             <div className="business-image"><img className="activator" src={this.props.favorite.image_url} /></div>
                           </div>
                           <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{this.props.favorite.name}<i className="material-icons right">more_vert</i></span>
                             <p><a href={this.props.favorite.url}>Link to business</a></p>
                             {addButton}
                             {removeButton}
                           </div>
                           <div className="card-reveal">
                             <span className="card-title grey-text text-darken-4">{this.props.favorite.name}<i className="material-icons right">close</i></span>
                             <div><p>Rating: </p><img src={this.props.favorite.rating_img_url_large} /></div>
                             <div><p>Number of Reviews: {this.props.favorite.review_count}</p></div>
                           </div>
                        </div>
                      </div>
          					</li>
                </div>

            );
         }
}

export default connect()(SkiListItem);
