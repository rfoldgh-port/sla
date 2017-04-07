import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';


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
	return (

    <div className="SkiListFavorite">
            <nav>
              <div class="nav-wrapper">
                <a href="#" class="brand-logo right"></a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
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


      <footer class="page-footer">
           <div class="container">
             <div class="row">
               <div class="col l6 s12">
                 <h5 class="white-text">Footer Content</h5>
               </div>
               <div class="col l4 offset-l2 s12">
               </div>
             </div>
           </div>
           <div class="footer-copyright">
             <div class="container">
            <p> © 2014 Copyright Text</p>
             <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
             </div>
           </div>
      </footer>

    </div>



		);
	}
};//END CLASS

const mapStateToProps = (state, props) => ({
    searchSkiResorts: state.searchSkiResorts,
	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiSearchResults);
