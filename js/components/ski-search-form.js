

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {getSkiInfo} from '../actions/index';
import {addSkiFavorite} from '../actions/index';
import {showSkiResorts} from '../actions/index';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

		this.searchSkiLifts = this.searchSkiLifts.bind(this);
		// this.addFavorite = this.addFavorite.bind(this);
		this.showSkiFavorite = this.showSkiFavorite.bind(this);

    }

    searchSkiLifts(event){
        event.preventDefault();
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

		 var buttonColor = {
				backgroundColor: "#ff1100"
		 };

        let form;
              form = ( <div><form className="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <input className ="ski-lift-input" type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <div className="seach-favorite-buttons"><button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="search-button">Search</button>
				<button style={buttonColor} className="btn waves-effect waves-light" type='submit' id="show-favorites" onClick={this.showSkiFavorite}>Show Favorites</button></div>


                &nbsp;
            </form></div>); //JSX syntax where you can use html markup as JS objects
            var login;
            if(!this.props.user){
             login = (<a className="google-button" href='/auth/google'><img className="google-image" src='../images/sign-in-with-google.png'/></a>);
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

                      <div className="searchForm">
              					<div className="row">
              						<div>{form}</div>
              					</div>
                        {login}
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
}

const mapStateToProps = (state, props) => ({
  user: state.user
});


var SearchFormContainer = connect(mapStateToProps)(SearchForm);
export default SearchFormContainer;
