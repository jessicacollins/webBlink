//Control Panel 

$(function() {

	// LED Variables
	var color = null;
	var speed = null;
	var intensity = null;
	var pattern_type_id = null;


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
	$('.patterns-form').on('click', 'input[name="pattern"]', function(event) {
		pattern_type_id = event.currentTarget.value;
		if (pattern_type_id == '1') {
			$('#picker').hide();
			color = null;

		} else {
			$('#picker').show();
		}

		if (pattern_type_id <= 7) {
			$('button.save-pattern').show();
			$('button.update-pattern').hide();
			$('button.delete-pattern').hide();
			// $('input[name="pattern-name"]').removeAttr('value');

		} else {
			$('button.save-pattern').hide();
			$('button.update-pattern').show();
			$('button.delete-pattern').show();			
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
		var params = null;
		if (pattern_type_id == '1') {
			params = pattern_type_id + ',' + speed;
		} else {
			params = pattern_type_id + ',' + color + ',' + intensity + ',' + speed;
		}
		return params;	
	}

	//Send pattern parameters
	function sendParams () {
		
		var params = getParams();
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
	            }
	        });			
		}
	}

	$('button.update-pattern').click(function(event) {
		event.preventDefault();
		updatePattern();
	});

	function updatePattern () {
		var pattern_id = $(".patterns-form input[type='radio']:checked").val();		
		var pattern_name = $('input[name="pattern-name"]').val();
		console.log(pattern_id);
		if (pattern_id == null) {
			console.log('Not valid pattern id');
		} else {
			$.ajax({
	            url: '/api/updatepattern/' + pattern_id,
	            type: 'GET',

	            data: { 
	            	color: color,
	            	speed: speed,
	            	intensity: intensity,
	            	pattern_type_id: pattern_type_id,
	            	pattern_name: pattern_name
	             },
	            success: function(data) {
	    //         	$( ".patterns-form" ).append(
					// '<div><input type="radio" value="' + data.id + '" name="pattern" checked /><label><span></span>' + data.name + '</label></div>'
					// );
	            	console.log(data);
	            	// $(".patterns-form input[type='radio']:checked").html('<div><input type="radio" value="' + data.id + '" name="pattern" checked /><label><span></span>' + data.name + '</label></div>')
	            }
	        });	
		}
	}


	// get Custom Pattern Settings
	$('.patterns-form').on('click', 'input[name="pattern"]', function(event) {
	
		pattern_id = event.currentTarget.value;
		// event.preventDefault();

		$.get('api/getpattern/' + pattern_id, function(data) {
			$('#picker').colpickSetColor(data.color,true);
		    $('.speed').val(data.speed).trigger('change');
			$('.intensity').val(data.intensity).trigger('change');
		    $('input[name="pattern-name"]').val(data.pattern_name).trigger('change');
		    $('.pattern_select').val(data.pattern_type_id).attr("selected");
			
		    console.log(pattern_id);

			speed = data.speed;
			intensity = data.intensity;
			color = data.color;
			pattern_type_id = data.pattern_type_id; 
			// sendParams();
		});
	});
})