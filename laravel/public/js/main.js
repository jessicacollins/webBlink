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

		}
	});

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

	// Set Intensity
	$('.dial').trigger('configure', {
	    'change': function (v) {
	        console.log('new value' + v);
	        var pattern_name = 'solid'
	    	$.get('api/setpattern/' + pattern_name, function(data)) {

	    	}
	    }
	});



})