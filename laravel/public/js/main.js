//Control Panel 

$(function() {

	// LED Variables
	var color = '';
	var speed = '';
	var intensity = '';
	var pattern = '';
	params = '';

	// jQuery Knob
	$(".dial").knob();

	//jQuery Color Picker
	$('#picker').colpick({
		flat:true,
		layout:'hex',
		submit:0, 
		onChange: function(hsb, hex, rgb) {
			color = hex;
			sendParams();
		}
	});

	//Set Pattern
	$('input[name*="pattern"]').click(function(event) {
		pattern = event.currentTarget.value;
		sendParams();
	});

	//Set Off
	$('.off').click(function(event) {
		pattern = 'off';
		color = '';
		intensity = '';
		speed = '';
		sendParams();
	});

	//Log intensity
	$('.intensity').trigger('configure', {
	    'change': function (v) {
	        intensity = Math.round(v);
	        sendParams();
	    }
	});
	
	//Log Speed
	$('.speed').trigger('configure', {
	    'change': function (v) {
	        speed = Math.round(v);
	        sendParams();
	    }
	});

	function getParams () {
		params = pattern + ',' + color + ',' + intensity + ',' + speed;
		return params;
	}

	function sendParams () {
		getParams();
		$.get('api/setparams/' + params, function(data) {
			console.log(data);
		});
	}

})