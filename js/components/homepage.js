import React from 'react';
import {loggedOut} from '../actions/index';
import {connect} from 'react-redux';
import Footer from './footer';

export class Homepage extends React.Component {
    constructor(props) {
        super(props);

          this.logOut = this.logOut.bind(this);
    }

    logOut(event){
      event.preventDefault();
      this.props.dispatch(loggedOut());
    }



    render() {
      let logOutButton;
      if(this.props.user){
        logOutButton = (<li><a href="/logged-out">Log Out</a></li>);
      }

      var login;
      var favorites;
      if(!this.props.user){
       login = (<a className="google-button" href='/auth/google'><img className="google-image" src='../images/sign-in-with-google.png'/></a>);
     }
     else {
       favorites = (<li><a href="/#/favorites">Favorites</a></li>);
     }

	return (


          <div className="SkiListFavorite">
              <nav>
                 <div className="nav-wrapper">
                  <a href="#" className="brand-logo right"></a>
                  <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/#/">Home</a></li>
                    <li><a href="/#/search-form">Search for Resorts</a></li>
                    {favorites}
                    {logOutButton}
                  </ul>
                 </div>
              </nav>

						<div className="homepage-text"><h1>Welcome to the Ski Lift App!</h1>
						<p>Here you can search for ski resorts by region. Feel free to save them to your account for use later!</p>
            <a className ="waves-effect waves-light btn" href="/#/search-form">Click here to get started searching for your favorite ski resorts.</a><br></br>
            {login}
            </div>
            <div className="features-sections">
              <div className="image-container">
                  <div className="feature-block">
                    <img className="feature-img" src="../../images/snow-mountains-winter-sport.jpg" />
                    <p className="feature-description">Feature description goes here</p>
                  </div>
                  <div className="feature-block">
                    <img className="feature-img" src="../../images/skier-on-slope.jpeg" />
                    <p className="feature-description">Feature description goes here</p>
                  </div>
                  <div className="feature-block">
                    <img className="feature-img" src="../../images/tree-slopes.jpeg" />
                    <p className="feature-description">Feature description goes here</p>
                  </div>
                </div>
            </div>

            <Footer />

					</div>



		);
	}
};

const mapStateToProps = (state, props) => ({
  user: state.user
});

var HompageComponent = connect(mapStateToProps)(Homepage);
export default HompageComponent;
