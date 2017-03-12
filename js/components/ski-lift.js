import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';


export class SkiSearchResults extends React.Component { 
    constructor(props) {
        super(props);   
		
    }

  
  
    render() {
	console.log(this.props.searchSkiResorts);
	console.log(this.props.skiFavorite);
		let businesses;
		let favorites;
		if(this.props.searchSkiResorts){
			 businesses = this.props.searchSkiResorts.businesses.map(function(item){
								return (<SkiListItem favorite={item}/>);
			});
		} else if (this.props.skiFavorite){
			favorites = this.props.skiFavorite.favorites.map(function(item){
								return (<SkiListItem favorite={item} />);
				});
		}
	return (
				<div>
					<div className="searchResults">
						<ul>
							{businesses}
						</ul>
					</div>
					<div className="favorites">
						<ul>
							{favorites}
						</ul>
					</div>
				</div>
            

		);
	}
};//END CLASS
        
const mapStateToProps = (state, props) => ({
    searchSkiResorts: state.searchSkiResorts,
	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiSearchResults);
