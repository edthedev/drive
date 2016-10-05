 
var YourCar = {
	lane: 0,
	left: function() {
		YourCar.lane -= 1;
		YourCar.animate_to();
	},	
	right: function() {
		YourCar.lane += 1;
		YourCar.animate_to();
	},
	animate_to: function() {
		if(YourCar.lane < 1) YourCar.lane = 1;
		if(YourCar.lane > 3) YourCar.lane = 3;
		// var topPos = $('#' + item_id).offset()['top'] + 3;
		var leftPos = YourCar.lane * 200;
		$("#car").animate({'left':leftPos+ 'px'}, "fast");
	}
};

$(document).ready( function() {
	// document.getElementById('road').onkeydown = khandle
	// document.getElementById('road').onkeyup = khandle
	// document.getElementById('road').onkeypress = khandle
	document.body.addEventListener('keydown', function (e) {
		  e = e || event;
		  if(e.keyCode == 37) YourCar.left();
		  if(e.keyCode == 39) YourCar.right();
	});
});
