/**
 * Created by danie on 2/9/2016.
 */

var getOffsetValue = function(){
	var width = $( window ).width();
	return ( width < 400 )
		? 90
		: ( width < 640 )
		       ? 100
		       : 120;
};

var scrollToSection = function ( section ) {
	var id;
	var scroll_val;
	id = 'section-' + section;
	if (section.length) {
		scroll_val = $('#' + id).offset().top - getOffsetValue();
		var body = $("html, body");
		body.stop().animate(
			{scrollTop: scroll_val},
			'500',
			'swing',
			function(){}
		);
	}
};

$(document).ready(function(){
	$(".menu-item").click(function () {
		var params_tmp = $(this).attr("href").split("#")[1];
		if (params_tmp.substring(0, params_tmp.indexOf("?"))) {
			params_tmp = params_tmp.substring(0, params_tmp.indexOf("?"));
		}
		console.log( params_tmp );
		scrollToSection( params_tmp );
	});

	var section;
	section = location.hash.substr(1);
	if (section.substring(0, section.indexOf("?"))) {
		section = section.substring(0, section.indexOf("?"));
	}
	scrollToSection( section );
});