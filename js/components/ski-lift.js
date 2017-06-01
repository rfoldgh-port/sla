import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';
import Footer from './footer';


export class SkiSearchResults extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
	console.log(this.props.searchSkiResorts);
	console.log(this.props.skiFavorite);
		let businesses;
		let favorites;
		if(this.props.searchSkiResorts){
			 businesses = this.props.searchSkiResorts.businesses.map(function(item){

								return (<SkiListItem favorite={item}/>);
			});
		} else if (this.props.skiFavorite){
			favorites = this.props.skiFavorite.favorites.map(function(item){
								return (<SkiListItem favorite={item} />);
				});
		}

    if (businesses){
      var bottom= ({bottom: 'auto'});
    } else{
        var bottom= ({bottom: '0'});
    }

	return (

    <div className="SkiListFavorite">
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo right"></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li><a href="/#/">Home</a></li>
                  <li><a href="/#/search-form">Search for Resorts</a></li>
                  <li><a href="/#/favorites">Favorites</a></li>
                </ul>
              </div>
            </nav>

            <div>
    					<div className="searchResults">
    						<ul>
    							{businesses}
    						</ul>
    					</div>
    					<div className="favorites">
    						<ul>
    							{favorites}
    						</ul>
    					</div>
    				</div>


            <Footer bottom={bottom} />

    </div>



		);
	}
};//END CLASS

const mapStateToProps = (state, props) => ({
    searchSkiResorts: state.searchSkiResorts,
	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiSearchResults);
