/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <http://mathiasbynens.be/> */
( function( factory, global ) {
	if (
		typeof require === "function" &&
		typeof exports === "object" &&
		typeof module === "object" ) {

		// CommonJS or Node
		factory( require( "../widgets/datepicker" ) );
	} else if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Globals
		factory( global.jQuery.datepicker );
	}
}( function( datepicker ) {

if ( typeof datepicker.regional.nl === "undefined" ) {
	datepicker.regional.nl = {
		closeText: "Sluiten",
		prevText: "←",
		nextText: "→",
		currentText: "Vandaag",
		monthNames: [ "januari", "februari", "maart", "april", "mei", "juni",
		"juli", "augustus", "september", "oktober", "november", "december" ],
		monthNamesShort: [ "jan", "feb", "mrt", "apr", "mei", "jun",
		"jul", "aug", "sep", "okt", "nov", "dec" ],
		dayNames: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
		dayNamesShort: [ "zon", "maa", "din", "woe", "don", "vri", "zat" ],
		dayNamesMin: [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
		weekHeader: "Wk",
		dateFormat: "dd-mm-yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.nl );
}

return datepicker.regional.nl;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
