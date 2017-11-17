# JavaScript style guide

This project follows the Revealing Modular Pattern [Private Naming Conventions](https://toddmotto.com/mastering-the-module-pattern/#private-naming-conventions)

Code should be broken down into component based modules which can be configured as necessary.
If applicable, settings should be configurable through `data-attributes` to allow for variety. An example of this might be a carousel which enables dots in one location and navigation arrows in another. 

```js
var Module = (function () {

  var _privateMethod = function () {
    // private stuff
  };

  var publicMethod = function () {
    _privateMethod();
  };

  return {
    publicMethod: publicMethod
  };

})();
```

Modules can then be envoked within the `main.js` file and in the `IsModern` check:

```js
if ($window.IsModern) {
  $window.Carousel.init($('.js-carousel'));
}
```