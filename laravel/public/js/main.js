//Control Panel 

$(function() {

	// LED Variables
	var color = null;
	var speed = null;
	var intensity = null;
	var pattern_type_id = null;
	var pattern_changed = false;

	// jQuery Knob
	$(".dial").knob();

	//jQuery Color Picker
	$('#picker').colpick({
		flat:true,
		layout:'hex',
		submit:0,
		onChange: function(hsb, hex, rgb) {
			if (! pattern_changed){
				color = hex;
				sendParams();
			}
		}
	});

	//Update the UI based on Pattern settings 
	function setUI(data) {
		speed = data.speed;
		intensity = data.intensity;
		color = data.color;
		pattern_type_id = data.pattern_type_id; 


	    $('input[name="pattern-name"]').val(data.pattern_name).trigger('change');
	    $('.pattern-select').val(pattern_type_id).attr("selected");
		
		updateUIControls();

	}

	//Update UI

	function updateUIControls() {
		pattern_changed = true;
		
		$('#picker').colpickSetColor(color,true);
	    $('.speed').val(speed).trigger('change');
		$('.intensity').val(intensity).trigger('change');
		
		pattern_changed = false;
	} 

	// Show / Hide the Color Picker or Speed controls
	function showHideControls(pattern_type_id) {
		if (pattern_type_id == '1') {
			$('#picker').hide();
			color = null;
		} else {
			$('#picker').show();
		}

		if (pattern_type_id == '5') {
			$('.speed-dial').hide();
		} else {
			$('.speed-dial').show();
		}
	}

	// Show/Hide Form Buttons based on patterns
	function showHideFormButtons(pattern_id) {
		if (pattern_id <= 7) {
			$('button.save-pattern').show();
			$('button.update-pattern').hide();
			$('button.delete-pattern').hide();
		} else {
			$('button.save-pattern').hide();
			$('button.update-pattern').show();
			$('button.delete-pattern').show();			
		}		
	}

	// Get Custom Pattern Settings
		$('.patterns-form').on('click', 'input[name="pattern"]', function(event) {
			pattern_id = event.currentTarget.value;

			$.get('api/getpattern/' + pattern_id, function(data) {				

				setUI(data);
				showHideControls(pattern_type_id);
				showHideFormButtons(pattern_id);

				sendParams();
				});
		});

	//Set Off
	$('.off').click(function(event) {
		pattern_type_id = '4';
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

	//get Pattern parameters	
	function getParams () {
		var params = null;
		if (pattern_type_id == '1') {
			params = pattern_type_id+ ',' + intensity + ',' + speed;
		} else if (pattern_type_id == '4') {
			params = pattern_type_id;
		} else if (pattern_type_id == '5') {
			params = pattern_type_id + ',' + color + ',' + intensity;
		} else {
			params = pattern_type_id + ',' + color + ',' + intensity + ',' + speed;
		}
		return params;	
	}

	//Send pattern parameters
	function sendParams () {
		$('body').css('background-color', '#' + color);			
		var params = getParams();
		$.get('api/setparams/' + params, function(data) {
			console.log(data);
		});
	}

	//Save custom pattern
	$('button.save-pattern').click(function(event) {
		event.preventDefault();
		savePattern();
	});

	function savePattern () {
		var pattern_name = $('input[name="pattern-name"]').val();
		pattern_type_id = $('select.pattern-select option:selected').val();
		if (pattern_name == null) {
			alert('No input');
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
	            	var buttonId = $(".patterns-form")[0].length;
	            	$( ".patterns-form" ).append(
					'<div><input type="radio" id="pattern-button-' + buttonId + '"' + ' value="' + data.id + '" name="pattern" checked /><label for="pattern-button-' + buttonId + '"' + '><span></span> ' + data.name + '</label></div>'
					);
					$('button.save-pattern').hide();
					$('button.update-pattern').show();
					$('button.delete-pattern').show();	
					
	            }
	        });			
		}
	}

	//Update a pattern
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
	            	$('label[for="'+pattern_id+'"] em').text(data.name);
	            }
	        });	
		}
	}

	//New Pattern
	$('button.new-pattern').click(function(event) {
		event.preventDefault();
		// pattern_changed = true;
		$('input[name="pattern-name"]').val(null);
		$('.pattern-select').val(null);
		$('button.save-pattern').show();
		$('button.update-pattern').hide();
		$('button.delete-pattern').hide();
		$('.speed').val(30).trigger('change');
		$('.intensity').val(127).trigger('change');
		$('#picker').colpickSetColor('303e47',true);
		$('#picker').show();
		$('.speed-dial').show();
		// pattern_changed = false;
	});

	//Delete a Pattern
	$('button.delete-pattern').click(function(event) {
		event.preventDefault();
		deletePattern();
	});

	function deletePattern () {
	var pattern_id = $(".patterns-form input[type='radio']:checked").val();			
		if (pattern_id == null) {
			console.log('Not valid pattern id');
		} else {
			$.ajax({
	            url: '/api/deletepattern/' + pattern_id,
	            type: 'GET',
	            success: function(data) {

				$(".patterns-form input[type='radio']:checked").parent().remove();
				$('input[name="pattern-name"]').val(null);
				$('.pattern-select').val(null);
				$('button.save-pattern').show();
				$('button.update-pattern').hide();
				$('button.delete-pattern').hide();
				$('.speed').val(30).trigger('change');
				$('.intensity').val(127).trigger('change');
				$('#picker').colpickSetColor('303e47',true);
				$('#picker').show();
				$('.speed-dial').show();
				pattern_type_id = 4;
				sendParams();
	            }
	        });	
		}
	}


	// $('pattern-select').click(function() {
	// 	pattern_type_id = $('pattern-select').val();
	// 	sendParams();
	// });

	// // Change color of off button on hover
	// $(".off-hover").hover(function(){
	//     $(".off-hover").css("color", "#00FFFF");
	//     }, function(){
	//     $(".off-hover").css("color", "rgba(255, 255, 255, 0.9)");
	// });

})