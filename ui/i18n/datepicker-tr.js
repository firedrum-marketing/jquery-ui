/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
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

if ( typeof datepicker.regional.tr === "undefined" ) {
	datepicker.regional.tr = {
		closeText: "kapat",
		prevText: "&#x3C;geri",
		nextText: "ileri&#x3e",
		currentText: "bugün",
		monthNames: [ "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
		"Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık" ],
		monthNamesShort: [ "Oca","Şub","Mar","Nis","May","Haz",
		"Tem","Ağu","Eyl","Eki","Kas","Ara" ],
		dayNames: [ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi" ],
		dayNamesShort: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
		dayNamesMin: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
		weekHeader: "Hf",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.tr );
}

return datepicker.regional.tr;

},
	typeof global !== "undefined" ? global :
	typeof self !== "undefined" ? self :
	typeof window !== "undefined" ? window :
	{}
) );
