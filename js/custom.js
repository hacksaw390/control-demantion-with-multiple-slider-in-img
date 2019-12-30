$(document).ready(function(){

	$('#imgheight, #imgwidth').slider({
		max:500,
		min: 100,
		slide:controling
	});

	$('#imgopacity').slider({
		min:0,
		max: 100,
		value: 100,
		slide: controling
	});



	function controling(){
		var height 	= $('#imgheight').slider('value');
		var width 	= $('#imgwidth').slider('value');
		var opacity = $('#imgopacity').slider('value');
		$('#liveimg').css({
			height:height,
			width: width,
			opacity:opacity/100
		});

		$('#state').html('height: '+height+' pixels<br>'+
						 'width: '+width+' pixels<br>'+
						 'opacity: '+opacity/100);
	}

});