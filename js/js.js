$(document).ready(function(){
	new WOW().init();
	setTimeout(function(){
		var preloader = $('#page-preloader');
		if(!preloader.hasClass('done')) {
			preloader.addClass('done');
		}
	}, 1000	);
	
	
});//end ready