 
var YourCar = {
	lane: 0,
	left: function() {
		lane -= 1;
		animate_to(lane);
	},	
	right: function() {
		lane += 1;
		animate_to(lane);
	},
	animate_to: function() {
		if(lane < 1) lane = 1;
		if(lane > 3) lane = 3;
		// var topPos = $('#' + item_id).offset()['top'] + 3;
		var leftPos = lane_id * 200;
		$("#car").animate({'left':leftPos+ 'px'}, "fast");
	}
};

function khandle(e) {
  e = e || event
  if (document.forms.keyform[e.type + 'Ignore'].checked) return
  if(e.keyCode == 37) YourCar.left();
  if(e.keyCode == 39) YourCar.right();
}
document.getElementById('road').onkeydown = khandle
// document.getElementById('road').onkeyup = khandle
document.getElementById('road').onkeypress = khandle


// 37 = left
// 39 == right
    
/*
  var evt = e.type
  while (evt.length < 10) evt += ' '
  showmesg(evt +
    ' keyCode=' + e.keyCode +
    ' which=' + e.which +
    ' charCode=' + e.charCode +
    ' char=' + String.fromCharCode(e.keyCode || e.charCode) +
    (e.shiftKey ? ' +shift' : '') +
    (e.ctrlKey ? ' +ctrl' : '') +
    (e.altKey ? ' +alt' : '') +
    (e.metaKey ? ' +meta' : ''), 'key'
  )
   
  if (document.forms.keyform[e.type + 'Stop'].checked) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
  }
*/

