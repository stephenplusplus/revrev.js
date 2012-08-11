(function($, w, d, undefined){

	Math.randomNumber = function (fromThis, toThis) {
		return Math.floor( Math.random() * ( toThis - fromThis + 1 ) ) + fromThis;
	};

	Object.prototype.isArray = function () {
		return Object.prototype.toString.call(this) === '[object Array]';
	};

	$.fn.revrev = function () {
		var defs = {
			just: 'string', // for now.
			revrevCray: 80, // pretty cray, not TOO cray.
			revrevClrz: [], // whatever sweet colors.
			revrevAlso: [] // cap, updown, squish, colorize. 
		};
		return this.each(function(){
			var elem = $(this)
				, data = elem.data()
				, cfg = $.extend({}, defs, data);

			if ( typeof data.revrevClrz !== 'undefined' )
				cfg.revrevClrz = defs.revrevClrz.concat( data.revrevClrz.replace(/\s+/g, '').split(',') );

			if ( typeof data.revrevAlso !== 'undefined' )
				cfg.revrevAlso = defs.revrevAlso.concat( data.revrevAlso.replace(/\s+/g, '').split(',') );

			var frag = document.createDocumentFragment()
				, origElem = elem
				, html = ''
				, elem = cfg.just === 'string' ? origElem.text().trim() : origElem.children().length
				, i = 0
				, l = elem.length
				, cray = cfg.revrevCray
				, noRev = []
				, noRevCap = Math.ceil(l - l * (cray / 100))
				, colors = cfg.revrevClrz
				, also = cfg.revrevAlso
				, cap = also.indexOf('cap') > -1
				, updown = also.indexOf('updown') > -1
				, squish = also.indexOf('squish') > -1
				, colorize = also.indexOf('colorize') > -1

			while ( noRev.length < noRevCap ) {
				var randomNumber = Math.randomNumber(0, l);
				if ( noRev.indexOf(randomNumber) === -1 ) noRev.push(randomNumber);
			};

			for ( ; i < l; i++ ) {
				var rev = noRev.indexOf(i) === -1
					, revChar = elem.charAt(i)
					, nothing = revChar === ' '
					, house = d.createElement('span');
				if ( rev && cray > 0 ) house.classList.add('revrev');
				if ( cap && i % 2 === 0 && !nothing ) house.classList.add('revrevcap');
				if ( updown && i % 2 === 1 && !nothing ) house.classList.add('revrevupdown');
				if ( squish && i % 2 === 0 ) house.classList.add('revrevsquish');
				if ( colorize && i % ( l / 3 ) < ( l / 6 ) ) house.style.color = colors[Math.randomNumber(0, colors.length)]; 
				house.innerText = elem.charAt(i);
				frag.appendChild(house);
			};

			return origElem.html(frag);
		});
	};

	$(function(){

		$('*[data-revrev]').revrev();

	});

})(jQuery, window, document);