( function( factory, global ) {
	if (
		typeof require === "function" &&
		typeof exports === "object" &&
		typeof module === "object" ) {

		// CommonJS or Node
		factory( require( "jquery" ), require( "./version" ) );
	} else if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "./version" ], factory );
	} else {

		// Globals
		factory( global.jQuery );
	}
}( function( $ ) {

if ( typeof $.ui.escapeSelector === "undefined" ) {
	// Internal use only
	$.ui.escapeSelector = ( function() {
		var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
		return function( selector ) {
			return selector.replace( selectorEscape, "\\$1" );
		};
	} )();
}

return $.ui.escapeSelector;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
