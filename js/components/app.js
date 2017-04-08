import React from 'react';
import {connect} from 'react-redux';
import {loggedInUser} from '../actions/index';

export class App extends React.Component {
    constructor(props) {
        super(props);

    }

  
   componentDidMount(){
   this.props.dispatch(loggedInUser());
 }

    render() {

	return (

					<div className="App">
						{this.props.children}
					</div>



		);
	}
};

export default connect()(App);
