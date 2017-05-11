

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

      let largeImage = this.props.favorite.image_url;
      largeImage = largeImage.slice(0,-6);
      largeImage = largeImage + "o.jpg";

            return (

                <div className="searchForm">
          					<li className="ski-list-li">
                      <div className="card-container-business">
                        <div className="card medium">
                           <div className="card-image waves-effect waves-block waves-light">
                             <div className="business-image"><img className="activator" src={largeImage} /></div>
                           </div>
                           <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{this.props.favorite.name}<i className="material-icons right">more_vert</i></span>
                             <p><a className="link-to-business" href={this.props.favorite.url}>Link to business</a></p>
                             {addButton}
                             {removeButton}
                           </div>
                           <div className="card-reveal">
                             <span className="card-title grey-text text-darken-4">{this.props.favorite.name}<i className="material-icons right">close</i></span>
                             <div><p className="ski-lift-rating">Rating: </p><img className="star-rating" src={this.props.favorite.rating_img_url_large} /></div>
                             <div><p className="number-of-reviews">Number of Reviews: {this.props.favorite.review_count}</p></div>
                           </div>
                        </div>
                      </div>
          					</li>
                </div>

            );
         }
}

export default connect()(SkiListItem);
