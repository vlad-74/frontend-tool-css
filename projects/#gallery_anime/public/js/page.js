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

	var modal = $('#modalDiv');
	var oldDiv = null;

	function close(cb) {
	  if (oldDiv) {
	    modal.animate({
	      'height': oldDiv.height(),
	      'width': oldDiv.width(),
	      'top': oldDiv.offset().top,
	      'left': oldDiv.offset().left
	    }, {
	      duration: 500,
	      complete: function complete() {
	        oldDiv.css({
	          opacity: 1
	        });
	        oldDiv.animate({
	          'opacity': 1
	        }, {
	          duration: 1,
	          complete: function complete() {
	            modal.css({
	              'display': 'none'
	            });
	            oldDiv = null;
	            if (cb) cb();
	          }
	        });
	      }
	    });
	  };
	};

	$('.someDiv').on('click', function (e) {
	  var jthis = $(this);
	  var r = null;

	  function show() {
	    modal.css({
	      'top': jthis.offset().top,
	      'left': jthis.offset().left,
	      'width': jthis.width(),
	      'height': jthis.height(),
	      'background-color': jthis.css('background-color'),
	      'opacity': '1',
	      'display': 'block'
	    });
	    jthis.css('opacity', 0);
	    modal.animate({
	      'height': 400,
	      'width': 400,
	      'top': (window.innerHeight - 400) / 2,
	      'left': (window.innerWidth - 400) / 2
	    }, {
	      duration: 500,
	      specialEasing: {
	        height: 'swing',
	        width: 'swing'
	      }
	    });
	    oldDiv = jthis;
	  }
	  if (oldDiv && oldDiv.attr('id') == jthis.attr('id')) close();else if (oldDiv != null) {
	    close(show);
	  } else {
	    show();
	  }
	});

	$('#modalDiv').on('click', function () {
	  close();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YmIwZDk2NDU2NWQ5MjAwZmU0YSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2YmIwZDk2NDU2NWQ5MjAwZmU0YVxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBtb2RhbCA9ICQoJyNtb2RhbERpdicpO1xuICB2YXIgb2xkRGl2ID0gbnVsbDtcblxuICBmdW5jdGlvbiBjbG9zZShjYikge1xuICAgIGlmIChvbGREaXYpIHtcbiAgICAgIG1vZGFsLmFuaW1hdGUoe1xuICAgICAgICAnaGVpZ2h0Jzogb2xkRGl2LmhlaWdodCgpLFxuICAgICAgICAnd2lkdGgnOiBvbGREaXYud2lkdGgoKSxcbiAgICAgICAgJ3RvcCc6IG9sZERpdi5vZmZzZXQoKS50b3AsXG4gICAgICAgICdsZWZ0Jzogb2xkRGl2Lm9mZnNldCgpLmxlZnRcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG9sZERpdi5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9sZERpdi5hbmltYXRlKHtcbiAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBtb2RhbC5jc3Moe1xuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBvbGREaXYgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoY2IpXG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICAkKCcuc29tZURpdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIganRoaXMgPSAkKHRoaXMpO1xuICAgIHZhciByID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICBtb2RhbC5jc3Moe1xuICAgICAgICAndG9wJzoganRoaXMub2Zmc2V0KCkudG9wLFxuICAgICAgICAnbGVmdCc6IGp0aGlzLm9mZnNldCgpLmxlZnQsXG4gICAgICAgICd3aWR0aCc6IGp0aGlzLndpZHRoKCksXG4gICAgICAgICdoZWlnaHQnOiBqdGhpcy5oZWlnaHQoKSxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBqdGhpcy5jc3MoJ2JhY2tncm91bmQtY29sb3InKSxcbiAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xuICAgICAgfSk7XG4gICAgICBqdGhpcy5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgIG1vZGFsLmFuaW1hdGUoe1xuICAgICAgICAnaGVpZ2h0JzogNDAwLFxuICAgICAgICAnd2lkdGgnOiA0MDAsXG4gICAgICAgICd0b3AnOiAod2luZG93LmlubmVySGVpZ2h0IC0gNDAwKSAvIDIsXG4gICAgICAgICdsZWZ0JzogKHdpbmRvdy5pbm5lcldpZHRoIC0gNDAwKSAvIDJcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgc3BlY2lhbEVhc2luZzoge1xuICAgICAgICAgIGhlaWdodDogJ3N3aW5nJyxcbiAgICAgICAgICB3aWR0aDogJ3N3aW5nJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG9sZERpdiA9IGp0aGlzO1xuICAgIH1cbiAgICBpZiAob2xkRGl2ICYmIG9sZERpdi5hdHRyKCdpZCcpID09IGp0aGlzLmF0dHIoJ2lkJykpXG4gICAgICBjbG9zZSgpO1xuICAgIGVsc2UgaWYgKG9sZERpdiAhPSBudWxsKSB7XG4gICAgICBjbG9zZShzaG93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdygpO1xuICAgIH1cbiAgfSlcblxuICAkKCcjbW9kYWxEaXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZSgpO1xuICB9KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL3BhZ2UuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQVRBO0FBV0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=