// JavaScript Document
$(document).on("ready", function() {
		
$('.anime').on('click',function(){
		var participantes = ["animated swing", "animated hinge", "animated flash", "animated tada", "animated bounce", "animated pulse", "animated rubberBand", "animated shake", "animated headShake", "animated wobble", "animated jello", "animated bounceIn", "animated bounceInDown", "animated bounceInLeft", "animated bounceInRight", "animated bounceInUp", "animated bounceOut", "animated bounceOutDown", "animated bounceOutLeft", "animated bounceOutRight", "animated bounceOutUp", "animated fadeIn", "animated fadeInDown", "animated fadeInDownBig", "animated fadeInLeft", "animated fadeInLeftBig", "animated fadeInRight", "animated fadeInRightBig", "animated fadeInUp", "animated fadeInUpBig", "animated fadeOut", "animated fadeOutDown", "animated fadeOutDownBig", "animated fadeOutLeft", "animated fadeOutLeftBig", "animated fadeOutRight", "animated fadeOutRightBig", "animated fadeOutUp", "animated fadeOutUpBig", "animated flip", "animated flipInX", "animated flipInY", "animated flipOutX", "animated flipOutY", "animated lightSpeedIn", "animated lightSpeedOut", "animated rotateIn", "animated rotateInDownLeft", "animated rotateInDownRight", "animated rotateInUpLeft", "animated rotateInUpRight", "animated rotateOut", "animated rotateOutDownLeft", "animated rotateOutDownRight", "animated rotateOutUpLeft", "animated rotateOutUpRight", "animated jackInTheBox", "animated rollIn", "animated rollOut", "animated zoomIn", "animated zoomInDown", "animated zoomInLeft", "animated zoomInRight", "animated zoomInUp", "animated zoomOut", "animated zoomOutDown", "animated zoomOutLeft", "animated zoomOutRight", "animated zoomOutUp", "animated slideInDown", "animated slideInLeft", "animated slideInRight", "animated slideInUp", "animated slideOutDown", "animated slideOutLeft", "animated slideOutRight", "animated slideOutUp"];
		var participa = Math.floor(Math.random() *67+1);
		$(this).addClass(participantes[participa]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function() {
			$(this).removeClass(participantes[participa]);
			
		});
		
		}); //animacion aleatoria en cada click
	
		
}); //ready