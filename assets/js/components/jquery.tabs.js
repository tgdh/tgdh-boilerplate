// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "tabs",
			defaults = {
				contentClass: 'c-tabs__content'
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = $(element);
			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
			init: function () {
				this.$nav 			= this.element.find('nav');
				this.$navList		= this.$nav.find('ul');
				this.$navItems		= this.$navList.find('li');
				this.$navLinks		= this.$navItems.find('a');
				this.$content 		= this.element.find('.c-tabs__content');
				this.$contentTabs	= this.$content.children();
				this._tabLength		= this.$navItems.length;

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example bellow
				this.setTabIndexes();
				this.setEventHandlers();
				// @todo get hash fragment or first
				this.setActiveTab( 0 );
			},
			setEventHandlers: function() {
				var $self = this;

				$self.$navList.find('li').on('click', function( e ){
					e.preventDefault();
					var $this = $(this);

					if( !$this.hasClass('is-active') ) {
						$self.setActiveTab( $this.data('index') );
					}

				});
			},
			setTabIndexes: function() {
				for( var i = 0; i < this._tabLength; i++ ) {
					this.$navItems.eq( i ).attr('data-index', i);
					this.$contentTabs.eq( i ).attr('data-index', i);
				}
			},
			// @todo set active tab based on location hash else id
			setActiveTab: function( i ) {
				var $activeNavItem 		= this.$navList.find('[data-index="'+ i +'"]'),
					$activeContentTab 	= this.$content.find('[data-index="' + i + '"]');

				this.$navList.find('.is-active').removeClass('is-active');
				this.$content.find('.is-active').removeClass('is-active');

				$activeNavItem.addClass('is-active');
				$activeContentTab.addClass('is-active');

				this.animateContentHeight( $activeContentTab );
			},
			animateContentHeight: function( el ) {
				this.$content.animate({
					'height': el.innerHeight()
				}, 200);
			}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})( jQuery, window, document );