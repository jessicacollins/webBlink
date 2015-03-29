//Control Panel 

$(function() {

	// LED Variables
	var color = null;
	var speed = null;
	var intensity = null;
	var pattern_type_id = null;
	params = null;

	// jQuery Knob
	$(".dial").knob();


	//jQuery Color Picker
	$('#picker').colpick({
		flat:true,
		layout:'hex',
		submit:0, 
		onChange: function(hsb, hex, rgb) {
			if (pattern_type_id == null) {
				pattern_name = '5';
				color = hex;
			} else {
				color = hex;
			}
			sendParams();
		}
	});

	//Set Pattern
	$('input[name="pattern"]').click(function(event) {
		pattern_type_id = event.currentTarget.value;
		if (pattern_type_id == '1') {
			$('#picker').hide();
			// $('#picker').toggleClass("blur");
			color = null;
		} else {
			$('#picker').show();
		}

		sendParams();
	});


	//Set Off
	$('.off').click(function(event) {
		pattern_type_id = '4';
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
		// if (pattern == null) {

		// }
	    'change': function (v) {
	        speed = Math.round(v);
	        sendParams();
	    }
	});

	//get Pattern parameters	
	function getParams () {
		if (pattern_type_id == '1') {
			params = pattern_type_id + ',' + speed;
		} else {
			params = pattern_type_id + ',' + color + ',' + intensity + ',' + speed;
		}
		return params;	
	}

	//Send pattern parameters
	function sendParams () {
		getParams();
		$.get('api/setparams/' + params, function(data) {
			console.log(data);
		});
	}

	$('button.save-pattern').click(function(event) {
		event.preventDefault();
		savePattern();
	});

	//Save custom pattern
	function savePattern () {
		var pattern_name = $('input[name="pattern-name"]').val();
		pattern_type_id = $('select.pattern_select option:selected').val();
		if (pattern_name == null) {
			console.log('No input');
		} else {
			$.ajax({
	            url: '/api/savepattern',
	            type: 'GET',

	            data: { 
	            	color: color,
	            	speed: speed,
	            	intensity: intensity,
	            	pattern_type_id: pattern_type_id,
	            	pattern_name: pattern_name
	             },
	            success: function(data) {
	            	$( ".patterns-form" ).append(
					'<div><input type="radio" value="' + data.id + '" name="pattern" checked /><label><span></span>' + data.name + '</label></div>'
					);
	            	sendParams();
	            }
	        });			
		}
	}

	// get Custom Pattern Settings
	$('input[name="pattern"]').click(function(event) {
		pattern_id = event.currentTarget.value;
		$.get('api/getpattern/' + pattern_id, function(data) {
		console.log(data.color);
			$('#picker').colpickSetColor(data.color,true);
		    $('.speed').val(data.speed).trigger('change');
		    $('.intensity').val(data.intensity).trigger('change');
		});
	});
})