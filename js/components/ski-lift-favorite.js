import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';
import {showSkiResorts} from '../actions/index';
import {loggedOut} from '../actions/index';

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

    if(this.props.user){
      logOutButton = (<li><a href="/logged-out">Log Out</a></li>);
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
          {logOutButton}
        </ul>
       </div>
    </nav>


      <ul>
        {favorites}
      </ul>


<footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text"></h5>
              <p class="grey-text text-lighten-4"></p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text"></h5>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          <a class="grey-text text-lighten-4 right" href="#!"></a>
          </div>
        </div>
</footer>
</div>



		);
	}
};//END CLASS

const mapStateToProps = (state, props) => ({
      user: state.user,
    	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiListFavorite);
