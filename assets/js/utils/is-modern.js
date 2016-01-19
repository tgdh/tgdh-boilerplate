( function() {
	'use strict';

	var $window = window,
		$html = document.querySelector('html');

	var IsModern = function() {
		return ( 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window );
	};

	$window.IsModern = IsModern;

	if( $window.IsModern ){

		if( $html.classList.contains('no-enhance') ) {
			$html.classList.remove('no-enhance');
			$html.classList.add('enhance');
		}
		
	}
})();