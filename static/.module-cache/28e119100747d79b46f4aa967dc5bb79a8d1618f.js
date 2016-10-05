var FishBowl = React.createClass({displayName: "FishBowl",
	render: function() {
		return React.createElement("p", null, "Hello road!");
	}
});

React.render(React.createElement(RoadMap, null), document.getElementById('road'));
