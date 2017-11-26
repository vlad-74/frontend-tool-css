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

	var images = new Array();
	var i = 0,
	    j = 0;

	images[0] = 'https://placekitten.com/250/150';
	images[1] = 'https://placekitten.com/250/350';
	images[2] = 'https://placekitten.com/250/450';

	function viewImages() {
	    document.getElementById("img_main").src = images[i];
	    i++;j++;
	    if (i == images.length) {
	        i = 0;
	    }

	    // if(j > 5) myStopInterval(); //аналог закоментированной mysetTimeout()
	};

	//1. ДЕЙСТВИЕ (viewImages()) КОТОРОЕ БУДЕТПОВТОРЯТЬСЯ КАЖДЫЕ 1 СЕК (1000 МЛСК)
	var myInterval = setInterval(function () {
	    viewImages();
	}, 1000);

	//3. ОСТАНОВКА ИНТЕРВАЛА ДЛЯ viewImages()
	function myStopInterval() {
	    clearInterval(myInterval);
	}

	//2. ЧЕРЕЗ 6 СЕК (6000 МЛСК) ВЫЗОВИТСЯ myStopInterval КОТОРЫЙ ОСТАНОВИТ viewImages()
	// function mysetTimeout() {
	//   myTimeout = setTimeout(function(){myStopInterval(); }, 6000);
	// }
	viewImages(); // ЗАПУСК ПОКАЗА КАРТИНОК

	//3. ОСТАНОВКА - Timeout ДЛЯ 
	function myStopTimeout() {
	    clearTimeout(myTimeout);
	}

	myStopTimeout(); // БЕЗ ОСТАНОВКИ ЕСЛИ НЕ УСЛОВИЯ ОСТАНОВКИ - if(j > 5) myStopInterval();

	// mysetTimeout(); // ОСТАНОКА ЧЕРЕЗ 6 СЕК (6000 МЛСК)

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ODU0ZDhhMjc3OWU2MjY5MWVkOCIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5ODU0ZDhhMjc3OWU2MjY5MWVkOFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBpbWFnZXMgPSBuZXcgQXJyYXkoKTtcbnZhciBpID0gMCwgaiA9IDA7XG4gXG5pbWFnZXNbMF0gPSAnaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjUwLzE1MCc7XG5pbWFnZXNbMV0gPSAnaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjUwLzM1MCc7XG5pbWFnZXNbMl0gPSAnaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjUwLzQ1MCc7XG4gXG5mdW5jdGlvbiB2aWV3SW1hZ2VzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nX21haW5cIikuc3JjID0gaW1hZ2VzW2ldOyBcbiAgICBpKys7IGorKztcbiAgICBpZiAoaSA9PSBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIC8vIGlmKGogPiA1KSBteVN0b3BJbnRlcnZhbCgpOyAvL9Cw0L3QsNC70L7QsyDQt9Cw0LrQvtC80LXQvdGC0LjRgNC+0LLQsNC90L3QvtC5IG15c2V0VGltZW91dCgpXG59O1xuXG4vLzEuINCU0JXQmdCh0KLQktCY0JUgKHZpZXdJbWFnZXMoKSkg0JrQntCi0J7QoNCe0JUg0JHQo9CU0JXQotCf0J7QktCi0J7QoNCv0KLQrNCh0K8g0JrQkNCW0JTQq9CVIDEg0KHQldCaICgxMDAwINCc0JvQodCaKVxudmFyIG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpeyB2aWV3SW1hZ2VzKCkgfSwgMTAwMCk7XG5cbi8vMy4g0J7QodCi0JDQndCe0JLQmtCQINCY0J3QotCV0KDQktCQ0JvQkCDQlNCb0K8gdmlld0ltYWdlcygpXG5mdW5jdGlvbiBteVN0b3BJbnRlcnZhbCgpIHtjbGVhckludGVydmFsKG15SW50ZXJ2YWwpO31cblxuLy8yLiDQp9CV0KDQldCXIDYg0KHQldCaICg2MDAwINCc0JvQodCaKSDQktCr0JfQntCS0JjQotCh0K8gbXlTdG9wSW50ZXJ2YWwg0JrQntCi0J7QoNCr0Jkg0J7QodCi0JDQndCe0JLQmNCiIHZpZXdJbWFnZXMoKVxuLy8gZnVuY3Rpb24gbXlzZXRUaW1lb3V0KCkge1xuLy8gICBteVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bXlTdG9wSW50ZXJ2YWwoKTsgfSwgNjAwMCk7XG4vLyB9XG52aWV3SW1hZ2VzKCk7IC8vINCX0JDQn9Cj0KHQmiDQn9Ce0JrQkNCX0JAg0JrQkNCg0KLQmNCd0J7QmlxuXG4vLzMuINCe0KHQotCQ0J3QntCS0JrQkCAtIFRpbWVvdXQg0JTQm9CvIFxuZnVuY3Rpb24gbXlTdG9wVGltZW91dCgpIHtjbGVhclRpbWVvdXQobXlUaW1lb3V0KTt9XG5cbm15U3RvcFRpbWVvdXQoKTsgLy8g0JHQldCXINCe0KHQotCQ0J3QntCS0JrQmCDQldCh0JvQmCDQndCVINCj0KHQm9Ce0JLQmNCvINCe0KHQotCQ0J3QntCS0JrQmCAtIGlmKGogPiA1KSBteVN0b3BJbnRlcnZhbCgpO1xuXG4vLyBteXNldFRpbWVvdXQoKTsgLy8g0J7QodCi0JDQndCe0JrQkCDQp9CV0KDQldCXIDYg0KHQldCaICg2MDAwINCc0JvQodCaKVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9qcy9wYWdlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==