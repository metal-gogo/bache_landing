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
	var id, element, scroll_val;
	id = 'section-' + section;
	element = $('#' + id);
	if (section.length && element.length ) {
		scroll_val = element.offset().top - getOffsetValue();
		var body = $("html, body");
		body.stop().animate(
			{scrollTop: scroll_val},
			'500',
			'swing',
			function(){}
		);
	}
};

var menuItemClickHandler = function (e) {
	if ( e.handled !== true ) { // This will prevent event triggering more then once
		$( this ).off( 'click', menuItemClickHandler );
		var menu_items = $("#menu-items");
		if( menu_items.hasClass("menu-items-show") ){
			menu_items.removeClass("menu-items-show");
		}
		var params_tmp = $(this ).find("a").attr("href").split("#")[1];
		if (params_tmp.substring(0, params_tmp.indexOf("?"))) {
			params_tmp = params_tmp.substring(0, params_tmp.indexOf("?"));
		}
		if( $('#section-' + params_tmp ).length  ){
			scrollToSection( params_tmp );
		} else{
			window.location.href = "/" + '#' + params_tmp;
		}
		$( this ).on( 'click', menuItemClickHandler );
	}
};

var mobileMenuClickHandler = function (e) {
	if ( e.handled !== true ) { // This will prevent event triggering more then once
		$( this ).off( 'click', mobileMenuClickHandler );
		var menu_items = $("#menu-items");
		if( menu_items.hasClass("menu-items-show") ){
			menu_items.removeClass("menu-items-show");
		} else {
			menu_items.addClass("menu-items-show");
		}
		$( this ).on( 'click', mobileMenuClickHandler );
	}
};

$(document).ready(function(){

	var section;
	section = location.hash.substr(1);
	if (section.substring(0, section.indexOf("?"))) {
		section = section.substring(0, section.indexOf("?"));
	}
	scrollToSection( section );

	$(".menu-item").parent().on("click", menuItemClickHandler);

	$("#responsive-menu").on("click", mobileMenuClickHandler);
});