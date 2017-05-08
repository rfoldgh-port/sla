import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';
import {showSkiResorts} from '../actions/index';
import {loggedOut} from '../actions/index';
import Footer from './footer';
export class SkiListFavorite extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(showSkiResorts());
        this.logOut = this.logOut.bind(this);
    }

    logOut(event){
  		event.preventDefault();
  		this.props.dispatch(loggedOut());
  	}

    render() {
      let logOutButton;
		// console.log(this.props.searchSkiResorts);
		// console.log(this.props.skiFavorite);

		let favorites;
    console.log(this.props.skiFavorite);
		if (this.props.skiFavorite){

			favorites = this.props.skiFavorite.map(function(item){
								return (<SkiListItem favorite={item} />);
				});
		}

    var favoriteNav;
    if(this.props.user){
      logOutButton = (<li><a href="/logged-out">Log Out</a></li>);
      favoriteNav = (<li><a href="/#/favorites">Favorites</a></li>);
    }

    if (favorites){
			var bottom= ({bottom: 'auto'});
		} else{
      	var bottom= ({bottom: '0'});
    }


	return (
    <div className="SkiListFavorite">
    <nav>
       <div class="nav-wrapper">
        <a href="#" class="brand-logo right"></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/#/">Home</a></li>
          <li><a href="/#/search-form">Search for Resorts</a></li>
          {favoriteNav}
          {logOutButton}
        </ul>
       </div>
    </nav>


      <ul>
        {favorites}
      </ul>


      <div className="search-form-footer">
        <Footer bottom={bottom} />
      </div>
</div>



		);
	}
};//END CLASS

const mapStateToProps = (state, props) => ({
      user: state.user,
    	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiListFavorite);
