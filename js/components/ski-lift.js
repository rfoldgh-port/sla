import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';


export class SkiSearchResults extends React.Component { 
    constructor(props) {
        super(props);   
		
    }

  
  
    render() {
	console.log(this.props.searchSkiResorts);
		let businesses;
		if(this.props.searchSkiResorts){
			 businesses = this.props.searchSkiResorts.businesses.map(function(item){
								return (<SkiListItem favorite={item}/>);
			});
		}//end if
	return (
				
				<ul>
					{businesses}
				</ul>
            

		);
	}
};//END CLASS
        
const mapStateToProps = (state, props) => ({
    searchSkiResorts: state.searchSkiResorts,
});

export default connect(mapStateToProps)(SkiSearchResults);
