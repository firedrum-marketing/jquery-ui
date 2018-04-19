( function( factory, global ) {
	if (
		typeof require === "function" &&
		typeof exports === "object" &&
		typeof module === "object" ) {

		// CommonJS or Node
		factory( require( "jquery" ) );
	} else if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery" ], factory );
	} else {

		// Globals
		factory( global.jQuery );
	}
}( function( $ ) {

$.ui = $.ui || {};

if ( typeof $.ui.version === "undefined" ) {
	$.ui.version = "1.12.2-pre";
}

return $.ui.version;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
