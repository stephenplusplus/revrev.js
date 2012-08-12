(function($, w, d, undefined){

	Math.randomNumber = function (fromThis, toThis) {
		return Math.floor(Math.random() * ( toThis - fromThis + 1 )) + fromThis;
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
				, elem = cfg.just === 'string' ? origElem.html().trim() : origElem.children().length
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
				, tags = []
				, tagElem
				, tagContent
				, tagBuilding = false;

			while ( noRev.length < noRevCap ) {
				var randomNumber = Math.randomNumber(0, l);
				if ( noRev.indexOf(randomNumber) === -1 ) noRev.push(randomNumber);
			};

			for ( ; i < l; i++ ) {
				var rev = noRev.indexOf(i) === -1
					, revChar = elem.charAt(i)
					, nothing = revChar === ' '
					, house = d.createElement('span')
					, classes = [];

				if ( revChar === '<' ) {
					tagBuilding = true;
					if ( tags.length === 2 ) {
						tagElem += revChar;
					} else {
						tags.house = house;
						tagElem = revChar;
					}
				} else if ( tagElem !== '' && revChar !== '>' ) {
					tagElem += revChar;
				} else if ( tagElem !== '' && revChar === '>' ) {
					tags.push( tagElem + '>' );
					tagElem = '';
					tagContent = '';
				} else if ( tags.length === 1 ) {
					tagContent += revChar;
				} else if ( tags.length === 2 ) {
					tagBuilding = false;
					tags = [];
				};

				if ( rev && cray > 0 )
					classes.push('revrev');
				if ( cap && i % 2 === 0 && !nothing )
					classes.push('revrevcap');
				if ( updown && i % 2 === 1 && !nothing )
					classes.push('revrevupdown');
				if ( squish && i % 2 === 0 )
					classes.push('revrevsquish');
				if ( colorize && i % ( l / 3 ) < ( l / 6 ) )
					house.style.color = colors[Math.randomNumber(0, colors.length)];

				if ( classes.length > 0 )
					house.className = classes.join(' ');

				if ( tagBuilding ) {
					if ( tags.length === 1 ) {
						var tagContentBuild = tagContent;
					} else if ( tags.length === 2 ) {
						tags.house.innerHTML = tags[0] + tagContentBuild + tags[1];
						frag.appendChild(tags.house);
					};
				} else {
					house.innerHTML = revChar;
					frag.appendChild(house);
				};
			};

			return origElem.html(frag);
		});
	};

	$(function(){

		$('*[data-revrev]').revrev();

	});

})(jQuery, window, document);