(function($, w, d, undefined){

	Math.randomNumber = function (fromThis, toThis) {
		return Math.floor( Math.random() * ( toThis - fromThis + 1 ) ) + fromThis;
	};

	var revrev = function (obj) {

		if ( obj.just !== 'string' ) return;

		var origElem = obj.elem
			, html = ''
			, elem = obj.just === 'string' ? origElem.text().trim() : origElem.children().length
			, i = 0
			, l = elem.length
			, cray = obj.cray
			, noRev = [];

		while ( noRev.length < Math.ceil(l - l * (obj.cray / 100)) ) {
			var randomNumber = Math.randomNumber(0, l);
			if ( noRev.indexOf(randomNumber) === -1 ) {
				noRev.push( randomNumber );
			}
		};

		for ( ; i < l; i++ ) {
			var rev = noRev.indexOf(i) === -1 && elem.charAt(i) !== ' ';
			html += rev? '<span class="revrev">' + elem.charAt(i) + '</span>' : elem.charAt(i);
		};

		return origElem.html(html);;

	};

	$(function(){

		revrev({
			elem: $('section'),
			type: 'random',
			just: 'string',
			cray: 50
		});

	});

})(jQuery, window, document);