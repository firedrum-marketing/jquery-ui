/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
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

if ( typeof datepicker.regional.it === "undefined" ) {
	datepicker.regional.it = {
		closeText: "Chiudi",
		prevText: "&#x3C;Prec",
		nextText: "Succ&#x3E;",
		currentText: "Oggi",
		monthNames: [ "Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
			"Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ],
		monthNamesShort: [ "Gen","Feb","Mar","Apr","Mag","Giu",
			"Lug","Ago","Set","Ott","Nov","Dic" ],
		dayNames: [ "Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato" ],
		dayNamesShort: [ "Dom","Lun","Mar","Mer","Gio","Ven","Sab" ],
		dayNamesMin: [ "Do","Lu","Ma","Me","Gi","Ve","Sa" ],
		weekHeader: "Sm",
		dateFormat: "dd/mm/yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.it );
}

return datepicker.regional.it;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
