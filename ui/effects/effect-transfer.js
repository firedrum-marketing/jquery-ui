/*!
 * jQuery UI Effects Transfer 1.12.2-pre
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Transfer Effect
//>>group: Effects
//>>description: Displays a transfer effect from one element to another.
//>>docs: http://api.jqueryui.com/transfer-effect/
//>>demos: http://jqueryui.com/effect/

( function( factory, global ) {
	if (
		typeof require === "function" &&
		typeof exports === "object" &&
		typeof module === "object" ) {

		// CommonJS or Node
		factory( require( "jquery" ), require( "../version" ), require( "../effect" ) );
	} else if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "../version", "../effect" ], factory );
	} else {

		// Globals
		factory( global.jQuery );
	}
}( function( $ ) {

if ( typeof $.effects.effect.transfer === "undefined" ) {
	if ( $.uiBackCompat !== false ) {
		$.effects.define( "transfer", function( options, done ) {
			$( this ).transfer( options, done );
		} );
	}
}

return $.effects.effect.transfer;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
