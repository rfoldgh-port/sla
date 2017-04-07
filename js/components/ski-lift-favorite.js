import React from 'react';
import {connect} from 'react-redux';
import SkiListItem from './ski-list-item';


export class SkiListFavorite extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
		// console.log(this.props.searchSkiResorts);
		// console.log(this.props.skiFavorite);

		let favorites;

		if (this.props.skiFavorite){
			favorites = this.props.skiFavorite.map(function(item){
								return (<SkiListItem favorite={item} />);
				});
		}
	return (
					<div className="SkiListFavorite">
						<ul>
							{favorites}
						</ul>
					</div>



		);
	}
};//END CLASS

const mapStateToProps = (state, props) => ({
    	skiFavorite: state.skiFavorite
});

export default connect(mapStateToProps)(SkiListFavorite);
