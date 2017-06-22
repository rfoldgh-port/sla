

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';
import {showSkiResorts} from '../actions/index';
import {loggedOut} from '../actions/index';
import Footer from './footer';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);

		this.searchSkiLifts = this.searchSkiLifts.bind(this);
		// this.addFavorite = this.addFavorite.bind(this);
		this.showSkiFavorite = this.showSkiFavorite.bind(this);
    this.logOut = this.logOut.bind(this);
    }

    logOut(event){
      event.preventDefault();
      this.props.dispatch(loggedOut());
    }

    searchSkiLifts(event){
        event.preventDefault();
        if($(".ski-lift-search input").val() == ""){
            $(".warning-message").show();
            return;
        }
	      this.props.dispatch(getSkiInfo(this.inputText.value));
	      window.location="/#/search";
	}

	// addFavorite(event){
		// event.preventDefault();
		// this.props.dispatch(addSkiFavorite(this.inputText.value));

	// }

	showSkiFavorite(event){
		event.preventDefault();
		this.props.dispatch(showSkiResorts());
		window.location='/#/favorites';
	}


     render() {
       let logOutButton;
		 var buttonColor = {
				backgroundColor: "#ff1100"
		 };

        let form;
              form = ( <div><form className="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <p className="homepage-text">Enter a city, state or area to search for ski resorts.</p>
                <input className ="ski-lift-input" type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <div className="seach-favorite-buttons"><button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="search-button">Search</button>

				<button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="show-favorites" onClick={this.showSkiFavorite}>Show Favorites</button></div>
        <div className="warning-message"><p>Please enter a valid location name.</p></div>

                &nbsp;
            </form></div>); //JSX syntax where you can use html markup as JS objects
            var login;
            var favorites;
            if(!this.props.user){
             login = (<a className="google-button" href='/auth/google'><img className="google-image" src='../images/sign-in-with-google.png'/></a>);
           }
           if(this.props.user){
             logOutButton = (<li><a href="/logged-out">Log Out</a></li>);
             favorites = (<li><a href="/#/favorites">Favorites</a></li>);
           }

            return (

              <div className="SkiListFavorite">

                    <nav>
                       <div class="nav-wrapper">
                        <a href="#" class="brand-logo right"></a>
                        <ul className="left hide-on-med-and-down">
                          <li><a href="/#/">Home</a></li>
                          <li><a href="/#/search-form">Search for Resorts</a></li>
                          {favorites}
                          {logOutButton}
                        </ul>
                       </div>
                    </nav>

                      <div className="searchForm">
              					<div className="search-form-container">
              						<div className="searchf-form-div">{form}</div>
              					</div>
                        <div className="search-form-login">
                        {login}
                        </div>
                      </div>


                    <div className="search-form-footer">
                        <Footer />
                    </div>


    					</div>



            );
         }
}

const mapStateToProps = (state, props) => ({
  user: state.user
});


var SearchFormContainer = connect(mapStateToProps)(SearchForm);
export default SearchFormContainer;
