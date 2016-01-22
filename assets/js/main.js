(function($){
	'use strict';
	var $window = window,
		$html	= $('html');

	var enhanceEdgeCaseBrowsers = function() {

		if( !Modernizr.classlist ) {
			$html.removeClass('no-enhance').addClass('enhance');
		}

	};

	// https://github.com/google/material-design-lite/blob/master/docs/_assets/main.js
	var scollTabsButtons = function() {
		var rightScroll = document.querySelector('.js-tabs-page-next');
		var leftScroll = document.querySelector('.js-tabs-page-prev');
		var menuBar = document.querySelector('.js-tabs-nav');
		var delta = 40;

		function updateScrollIndicator() {
			leftScroll.classList.remove('is-disabled');
			rightScroll.classList.remove('is-disabled');
			
			if( menuBar.scrollLeft <= 0 ) {
				leftScroll.classList.add('is-disabled');
			}

			// 5px tolerance because browsers!
			if( menuBar.scrollLeft + menuBar.clientWidth + 5 >= menuBar.scrollWidth ) {
				rightScroll.classList.add('is-disabled');
			}

		}
		menuBar.addEventListener('scroll', updateScrollIndicator);
		updateScrollIndicator();

		function scrollMenuBar(delta) {
			menuBar.scrollLeft += delta;
		}

		rightScroll.addEventListener('click', scrollMenuBar.bind(null, delta));
		rightScroll.addEventListener('tap', scrollMenuBar.bind(null, delta));
		leftScroll.addEventListener('click', scrollMenuBar.bind(null, -delta));
		leftScroll.addEventListener('tap', scrollMenuBar.bind(null, -delta));
	};

/* ===========================================================

	# Init

=========================================================== */

	if( $window.IsModern ){

		enhanceEdgeCaseBrowsers();

		// tabs dev
//		scollTabsButtons();

	}

})(jQuery);