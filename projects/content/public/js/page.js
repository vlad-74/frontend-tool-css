/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var allSteps = $('.step'); // build a jQuery object with all steps and their properties
	for (var i = 0, n = allSteps.length; i < n; ++i) {
	  // for each step, add a nav item linked to its id
	  var el = allSteps[i];
	  if (el.id) {
	    //    $('#navbar ul').append('<li><a href="#' + el.id + '">' + (i+1) + '</a></li>'); // number the nav items
	    $('#navbar ul').append('<li><a href="#' + el.id + '">' + el.id + '</a></li>'); // generate nav item text from id
	  }
	}

	// Animate scroll to page anchor
	$('#navbar [href^=#]').click(function (e) {
	  e.preventDefault();
	  var div = $(this).attr('href');
	  $("html, body").animate({
	    scrollTop: $(div).position().top
	  }, "slow", "swing");
		});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYThlNDVhY2I5M2YxMGU1NmVjYiIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhYThlNDVhY2I5M2YxMGU1NmVjYlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFsbFN0ZXBzID0gJCgnLnN0ZXAnKTsgLy8gYnVpbGQgYSBqUXVlcnkgb2JqZWN0IHdpdGggYWxsIHN0ZXBzIGFuZCB0aGVpciBwcm9wZXJ0aWVzXG5mb3IgKHZhciBpID0gMCwgbiA9IGFsbFN0ZXBzLmxlbmd0aDsgaSA8IG47ICsraSkgeyAvLyBmb3IgZWFjaCBzdGVwLCBhZGQgYSBuYXYgaXRlbSBsaW5rZWQgdG8gaXRzIGlkXG4gIHZhciBlbCA9IGFsbFN0ZXBzW2ldO1xuICBpZiAoZWwuaWQpIHtcbi8vICAgICQoJyNuYXZiYXIgdWwnKS5hcHBlbmQoJzxsaT48YSBocmVmPVwiIycgKyBlbC5pZCArICdcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7IC8vIG51bWJlciB0aGUgbmF2IGl0ZW1zXG4gICAkKCcjbmF2YmFyIHVsJykuYXBwZW5kKCc8bGk+PGEgaHJlZj1cIiMnICsgZWwuaWQgKyAnXCI+JyArIGVsLmlkICsgJzwvYT48L2xpPicpOyAvLyBnZW5lcmF0ZSBuYXYgaXRlbSB0ZXh0IGZyb20gaWRcbiAgfVxufVxuXG4vLyBBbmltYXRlIHNjcm9sbCB0byBwYWdlIGFuY2hvclxuJCgnI25hdmJhciBbaHJlZl49I10nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBkaXYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkKGRpdikucG9zaXRpb24oKS50b3BcbiAgfSwgXCJzbG93XCIsIFwic3dpbmdcIik7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9qcy9wYWdlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OzsiLCJzb3VyY2VSb290IjoiIn0=