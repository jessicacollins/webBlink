//Control Panel 

$(function() {

	// jQuery Knob
	$(".dial").knob();

	//jQuery Color Picker
	$('#picker').colpick({
		flat:true,
		layout:'hex',
		submit:0, 
		onChange: function(hex) {
			console.log(hex);
			// $.get('api/setpattern/')

		}
	});

	cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col),cal.data('colpick').el]);

	// LED Variables

	var color = '';
	var speed = '';
	var delay = '';

	//Set Pattern
	$('input[name*="pattern"]').click(function(event) {
		var pattern_name = event.currentTarget.value;
		$.get('api/setpattern/' + pattern_name, function(data) {
			console.log(data);	
		});
	});

	//Set Off
	$('.off').click(function(event) {
		var pattern_name = 'off';
		$.get('api/setpattern/' + pattern_name, function(data) {
			console.log(data);	
		});
	});

	//Log intensity

	// $('.dial').trigger('configure', {
	//     'change': function (v) {
	//         console.log('new value' + Math.round(v));
	//     }
	// });

	$('.dial').trigger('configure', {
	    'change': function (v) {
	    	var pattern_name = 'solid';
	        var params = Math.round(v);
	        $.get('/api/setpattern/' + pattern_name + '/' + params, function(data){
	        	console.log(data);
	        });
	    }
	});

})