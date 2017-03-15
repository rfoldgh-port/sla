import React from 'react';
import SearchFormContainer from "./ski-search-form";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {

	return (

					<div className="SkiListFavorite">
                  <nav>
                    <div class="nav-wrapper">
                      <a href="#" class="brand-logo right">Logo</a>
                      <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="#">Sass</a></li>
                        <li><a href="#">Components</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div>
                  </nav>

						<h1>Welcome to the Ski Lift App!</h1>
						<p>Here you can search for ski resorts by region. Feel free to save them to your account for use later!</p>
						<SearchFormContainer />



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

// const mapStateToProps = (state, props) => ({

// });
