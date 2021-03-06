/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
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

if ( typeof datepicker.regional.gl === "undefined" ) {
	datepicker.regional.gl = {
		closeText: "Pechar",
		prevText: "&#x3C;Ant",
		nextText: "Seg&#x3E;",
		currentText: "Hoxe",
		monthNames: [ "Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño",
		"Xullo","Agosto","Setembro","Outubro","Novembro","Decembro" ],
		monthNamesShort: [ "Xan","Feb","Mar","Abr","Mai","Xuñ",
		"Xul","Ago","Set","Out","Nov","Dec" ],
		dayNames: [ "Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado" ],
		dayNamesShort: [ "Dom","Lun","Mar","Mér","Xov","Ven","Sáb" ],
		dayNamesMin: [ "Do","Lu","Ma","Mé","Xo","Ve","Sá" ],
		weekHeader: "Sm",
		dateFormat: "dd/mm/yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.gl );
}

return datepicker.regional.gl;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
