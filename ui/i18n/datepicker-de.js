/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
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

if ( typeof datepicker.regional.de === "undefined" ) {
	datepicker.regional.de = {
		closeText: "Schließen",
		prevText: "&#x3C;Zurück",
		nextText: "Vor&#x3E;",
		currentText: "Heute",
		monthNames: [ "Januar","Februar","März","April","Mai","Juni",
		"Juli","August","September","Oktober","November","Dezember" ],
		monthNamesShort: [ "Jan","Feb","Mär","Apr","Mai","Jun",
		"Jul","Aug","Sep","Okt","Nov","Dez" ],
		dayNames: [ "Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag" ],
		dayNamesShort: [ "So","Mo","Di","Mi","Do","Fr","Sa" ],
		dayNamesMin: [ "So","Mo","Di","Mi","Do","Fr","Sa" ],
		weekHeader: "KW",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.de );
}

return datepicker.regional.de;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
