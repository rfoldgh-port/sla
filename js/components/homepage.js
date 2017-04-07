import React from 'react';


export default class Homepage extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {

	return (

					<div className="SkiListFavorite">
                  <nav>
                    // <div class="nav-wrapper">
                      <a href="#" class="brand-logo right"></a>
                      <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/#/">Home</a></li>
                        <li><a href="/#/search-form">Search for Resorts</a></li>
                        <li><a href="/#/favorites">Favorites</a></li>
                      </ul>
                    // </div>
                  </nav>

						<div className="homepage-text"><h1>Welcome to the Ski Lift App!</h1>
						<p>Here you can search for ski resorts by region. Feel free to save them to your account for use later!</p>
            <a class ="waves-effect waves-light btn" href="/#/search-form">Click here to get started searching for your favorite ski resorts.</a>
            </div>


            <footer class="page-footer">
                      <div class="container">
                        <div class="row">
                          <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                          </div>
                          <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                          </div>
                        </div>
                      </div>
                      <div class="footer-copyright">
                        <div class="container">
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                      </div>
              </footer>
					</div>



		);
	}
};//END CLASS

// const mapStateToProps = (state, props) => ({

// });
