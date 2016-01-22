(function($){
	'use strict';
	
	var $window = window,
	$tabsHandler = $('.js-tabs');

	$tabsHandler.each(function(){
		var $tabs 		= $(this),
			$nav 		= $tabs.find('nav'),
			$navList	= $nav.find('ul'),
			$content 	= $tabs.find('.c-tabs__content');

		var _init = function() {
			$navList.children().first().addClass('is-active');
		};

		_init();
	});
	

/* ===========================================================
	# Init
=========================================================== */
	if( $window.IsModern ){

	}

})(jQuery);

/*
jQuery(document).ready(function($){
	var $tabsHandle = $('.js-tabs');
	
	$tabsHandle.each(function(){
		var $tabs = $(this),
			tabItems = $tabs.find('nav'),
			tabContentWrapper = $tabs.find('.js-tabs-content'),
			tabNavigation = $tabs.find('.c-tabs__nav');

		tabItems.on('click', 'a', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if( !selectedItem.hasClass('selected') ) {
				var selectedTab = selectedItem.data('content'),
					selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
					slectedContentHeight = selectedContent.innerHeight();
				
				tabItems.find('a.selected').removeClass('selected');
				selectedItem.addClass('selected');
				selectedContent.addClass('selected').siblings('li').removeClass('selected');
				//animate tabContentWrapper height when content changes 
				tabContentWrapper.animate({
					'height': slectedContentHeight
				}, 200);
			}
		});

		//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
		checkScrolling(tabNavigation);
		tabNavigation.on('scroll', function(){ 
			checkScrolling($(this));
		});
	});
	
	$(window).on('resize', function(){
		$tabsHandle.each(function(){
			var $tabs = $(this);
			checkScrolling( $tabs.find('nav') );
			$tabs.find('.cd-tabs-content').css('height', 'auto');
		});
	});

	function checkScrolling($tabs){
		var totalTabWidth = parseInt($tabs.children('.cd-tabs-navigation').width()),
		 	$tabsViewport = parseInt($tabs.width());
		if( $tabs.scrollLeft() >= totalTabWidth - $tabsViewport) {
			$tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			$tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});
*/