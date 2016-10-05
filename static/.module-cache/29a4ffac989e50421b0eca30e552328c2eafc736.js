var Road = React.createClass({displayName: "Road",
	render: function() {
		return React.createElement("p", null, "Hello road!");
	}
});

React.render(React.createElement(Road, null), document.getElementById('road'));
