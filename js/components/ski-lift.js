import React from 'react';
import {connect} from 'react-redux';
import {app} from '../app';

export class GoogleLogin extends React.Component { 
    constructor(props) {
        super(props);   
		
    }
  
  
    render() {

	return (
				<h1>Hello, please login here</h1>
				<div>
				<a href="/auth/google"><img src="../../images/sign-in-with-google.png"/></a>
				</div>
            

		);
	}
};//END CLASS
        
const mapStateToProps = (state, props) => ({
    feedback: state.feedback,
});

export default connect(mapStateToProps)(GoogleLogin);
