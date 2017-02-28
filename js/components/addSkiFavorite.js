var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {

    return (
            <div className="add-favorite">
				<form class="ski-lift-search" onSubmit={this.searchSkiLifts}>
                <input type="text" ref={(input) => this.inputText = input } name="term-input"/>
                <button type='submit' id="search-button">Search</button>
				</form>); //JSX syntax where you can use 
                <p className="text">{props.text}</p>
			</div>
    );
};

module.exports = Card;