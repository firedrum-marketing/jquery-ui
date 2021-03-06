/* Romansh initialisation for the jQuery UI date picker plugin. */
/* Written by Yvonne Gienal (yvonne.gienal@educa.ch). */
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

if ( typeof datepicker.regional.rm === "undefined" ) {
	datepicker.regional.rm = {
		closeText: "Serrar",
		prevText: "&#x3C;Suandant",
		nextText: "Precedent&#x3E;",
		currentText: "Actual",
		monthNames: [
			"Schaner",
			"Favrer",
			"Mars",
			"Avrigl",
			"Matg",
			"Zercladur",
			"Fanadur",
			"Avust",
			"Settember",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Scha",
			"Fev",
			"Mar",
			"Avr",
			"Matg",
			"Zer",
			"Fan",
			"Avu",
			"Sett",
			"Oct",
			"Nov",
			"Dec"
		],
		dayNames: [ "Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda" ],
		dayNamesShort: [ "Dum","Gli","Mar","Mes","Gie","Ven","Som" ],
		dayNamesMin: [ "Du","Gl","Ma","Me","Gi","Ve","So" ],
		weekHeader: "emna",
		dateFormat: "dd/mm/yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.rm );
}

return datepicker.regional.rm;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
