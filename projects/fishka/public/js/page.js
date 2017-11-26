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

	var s = c.width = c.height = 500,
	    ctx = c.getContext('2d'),
	    opts = {
	  particles: 200,
	  particleBaseSize: 4,
	  particleAddedSize: 1,
	  particleMaxSize: 5,
	  particleBaseLight: 5,
	  particleAddedLight: 30,
	  particleBaseBaseAngSpeed: .001,
	  particleAddedBaseAngSpeed: .001,
	  particleBaseVariedAngSpeed: .0005,
	  particleAddedVariedAngSpeed: .0005,
	  sourceBaseSize: 3,
	  sourceAddedSize: 3,
	  sourceBaseAngSpeed: -.01,
	  sourceVariedAngSpeed: .005,
	  sourceBaseDist: 130,
	  sourceVariedDist: 50,

	  particleTemplateColor: 'hsla(hue,80%,light%,alp)',
	  repaintColor: 'rgba(0,0,0,.1)',
	  enableTrails: false
	},
	    util = {
	  square: function square(x) {
	    return x * x;
	  },
	  tau: 6.2831853071795864769252867665590057683943
	},
	    particles = [],
	    source = new Source(),
	    tick = 0;

	function Particle() {
	  this.dist = Math.sqrt(Math.random()) * s / 2;
	  this.rad = Math.random() * util.tau;

	  this.baseAngSpeed = opts.particleBaseBaseAngSpeed + opts.particleAddedBaseAngSpeed * Math.random();
	  this.variedAngSpeed = opts.particleBaseVariedAngSpeed + opts.particleAddedVariedAngSpeed * Math.random();
	  this.size = opts.particleBaseSize + opts.particleAddedSize * Math.random();
	}
	Particle.prototype.step = function () {
	  var angSpeed = this.baseAngSpeed + this.variedAngSpeed * Math.sin(this.rad * 7 + tick / 100);
	  this.rad += angSpeed;

	  var x = this.dist * Math.cos(this.rad),
	      y = this.dist * Math.sin(this.rad),
	      squareDist = util.square(x - source.x) + util.square(y - source.y),
	      sizeProp = Math.pow(s, 1 / 2) / Math.pow(squareDist, 1 / 2),
	      color = opts.particleTemplateColor.replace('hue', this.rad / util.tau * 360 + tick).replace('light', opts.particleBaseLight + sizeProp * opts.particleAddedLight).replace('alp', .8);

	  ctx.fillStyle = color;
	  ctx.beginPath();
	  ctx.arc(x, y, Math.min(this.size * sizeProp, opts.particleMaxSize), 0, util.tau);
	  ctx.fill();
	};

	function Source() {
	  this.x = 0;
	  this.y = 0;
	  this.rad = Math.random() * util.tau;
	}
	Source.prototype.step = function () {

	  if (!this.mouseControlled) {
	    var angSpeed = opts.sourceBaseAngSpeed + Math.sin(this.rad * 6 + tick / 100) * opts.sourceVariedAngSpeed;
	    this.rad += angSpeed;

	    var dist = opts.sourceBaseDist + Math.sin(this.rad * 5 + tick / 100) * opts.sourceVariedDist;

	    this.x = dist * Math.cos(this.rad);
	    this.y = dist * Math.sin(this.rad);
	  }

	  ctx.fillStyle = 'white';
	  ctx.beginPath();
	  ctx.arc(this.x, this.y, 1, 0, util.tau);
	  ctx.fill();
	};

	function anim() {

	  window.requestAnimationFrame(anim);

	  ++tick;

	  if (!opts.enableTrails) ctx.globalCompositeOperation = 'source-over';

	  ctx.fillStyle = opts.repaintColor;
	  ctx.fillRect(0, 0, s, s);

	  ctx.globalCompositeOperation = 'lighter';

	  if (particles.length < opts.particles) particles.push(new Particle());

	  ctx.translate(s / 2, s / 2);

	  source.step();

	  particles.map(function (particle) {
	    return particle.step();
	  });
	  ctx.translate(-s / 2, -s / 2);
	}

	ctx.fillStyle = '#222';
	ctx.fillRect(0, 0, s, s);
	anim();

	c.addEventListener('mousemove', function (e) {

	  var bbox = c.getBoundingClientRect();

	  source.x = e.clientX - bbox.left - s / 2;
	  source.y = e.clientY - bbox.top - s / 2;
	  source.mouseControlled = true;
	});
	c.addEventListener('mouseleave', function (e) {

	  var bbox = c.getBoundingClientRect();

	  source.x = e.clientX - bbox.left - s / 2;
	  source.y = e.clientY - bbox.top - s / 2;

	  source.rad = Math.atan(source.y / source.x);
	  if (source.x < 0) source.rad += Math.PI;

	  source.mouseControlled = false;
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YzczZWY0OTE3ZjFhYmI5MzM4MCIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4YzczZWY0OTE3ZjFhYmI5MzM4MFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHMgPSBjLndpZHRoID0gYy5oZWlnaHQgPSA1MDBcbiAgLCBjdHggPSBjLmdldENvbnRleHQoICcyZCcgKVxuXG4gICwgb3B0cyA9IHtcbiAgICBwYXJ0aWNsZXM6IDIwMCxcbiAgICBwYXJ0aWNsZUJhc2VTaXplOiA0LFxuICAgIHBhcnRpY2xlQWRkZWRTaXplOiAxLFxuICAgIHBhcnRpY2xlTWF4U2l6ZTogNSxcbiAgICBwYXJ0aWNsZUJhc2VMaWdodDogNSxcbiAgICBwYXJ0aWNsZUFkZGVkTGlnaHQ6IDMwLFxuICAgIHBhcnRpY2xlQmFzZUJhc2VBbmdTcGVlZDogLjAwMSxcbiAgICBwYXJ0aWNsZUFkZGVkQmFzZUFuZ1NwZWVkOiAuMDAxLFxuICAgIHBhcnRpY2xlQmFzZVZhcmllZEFuZ1NwZWVkOiAuMDAwNSxcbiAgICBwYXJ0aWNsZUFkZGVkVmFyaWVkQW5nU3BlZWQ6IC4wMDA1LFxuICAgIHNvdXJjZUJhc2VTaXplOiAzLFxuICAgIHNvdXJjZUFkZGVkU2l6ZTogMyxcbiAgICBzb3VyY2VCYXNlQW5nU3BlZWQ6IC0uMDEsXG4gICAgc291cmNlVmFyaWVkQW5nU3BlZWQ6IC4wMDUsXG4gICAgc291cmNlQmFzZURpc3Q6IDEzMCxcbiAgICBzb3VyY2VWYXJpZWREaXN0OiA1MCxcbiAgICBcbiAgICBwYXJ0aWNsZVRlbXBsYXRlQ29sb3I6ICdoc2xhKGh1ZSw4MCUsbGlnaHQlLGFscCknLFxuICAgIHJlcGFpbnRDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcbiAgICBlbmFibGVUcmFpbHM6IGZhbHNlXG4gIH1cbiAgXG4gICwgdXRpbCA9IHtcbiAgICBzcXVhcmU6IHggPT4geCp4LFxuICAgIHRhdTogNi4yODMxODUzMDcxNzk1ODY0NzY5MjUyODY3NjY1NTkwMDU3NjgzOTQzXG4gIH1cbiAgICBcbiAgLCBwYXJ0aWNsZXMgPSBbXVxuICAsIHNvdXJjZSA9IG5ldyBTb3VyY2VcbiAgLCB0aWNrID0gMDtcblxuZnVuY3Rpb24gUGFydGljbGUoKSB7XG4gIHRoaXMuZGlzdCA9ICggTWF0aC5zcXJ0KCBNYXRoLnJhbmRvbSgpICkgKSAqIHMgLyAyO1xuICB0aGlzLnJhZCA9IE1hdGgucmFuZG9tKCkgKiB1dGlsLnRhdTtcbiAgXG4gIHRoaXMuYmFzZUFuZ1NwZWVkID0gb3B0cy5wYXJ0aWNsZUJhc2VCYXNlQW5nU3BlZWQgKyBvcHRzLnBhcnRpY2xlQWRkZWRCYXNlQW5nU3BlZWQgKiBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLnZhcmllZEFuZ1NwZWVkID0gb3B0cy5wYXJ0aWNsZUJhc2VWYXJpZWRBbmdTcGVlZCArIG9wdHMucGFydGljbGVBZGRlZFZhcmllZEFuZ1NwZWVkICogTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5zaXplID0gb3B0cy5wYXJ0aWNsZUJhc2VTaXplICsgb3B0cy5wYXJ0aWNsZUFkZGVkU2l6ZSAqIE1hdGgucmFuZG9tKCk7XG59XG5QYXJ0aWNsZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYW5nU3BlZWQgPSB0aGlzLmJhc2VBbmdTcGVlZCArIHRoaXMudmFyaWVkQW5nU3BlZWQgKiBNYXRoLnNpbiggdGhpcy5yYWQgKiA3ICsgdGljayAvIDEwMCApO1xuICB0aGlzLnJhZCArPSBhbmdTcGVlZDtcbiAgXG4gIHZhciB4ID0gdGhpcy5kaXN0ICogTWF0aC5jb3MoIHRoaXMucmFkIClcbiAgICAsIHkgPSB0aGlzLmRpc3QgKiBNYXRoLnNpbiggdGhpcy5yYWQgKVxuICBcbiAgICAsIHNxdWFyZURpc3QgPSB1dGlsLnNxdWFyZSggeCAtIHNvdXJjZS54ICkgKyB1dGlsLnNxdWFyZSggeSAtIHNvdXJjZS55IClcbiAgICAsIHNpemVQcm9wID0gTWF0aC5wb3coIHMsIDEvMiApIC8gTWF0aC5wb3coIHNxdWFyZURpc3QsIDEvMiApXG4gICAgLCBjb2xvciA9IG9wdHMucGFydGljbGVUZW1wbGF0ZUNvbG9yXG4gICAgICAucmVwbGFjZSggJ2h1ZScsIHRoaXMucmFkIC8gdXRpbC50YXUgKiAzNjAgKyB0aWNrIClcbiAgICAgIC5yZXBsYWNlKCAnbGlnaHQnLCBvcHRzLnBhcnRpY2xlQmFzZUxpZ2h0ICsgc2l6ZVByb3AgKiBvcHRzLnBhcnRpY2xlQWRkZWRMaWdodCApXG4gICAgICAucmVwbGFjZSggJ2FscCcsIC44ICk7XG4gIFxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyggeCwgeSwgTWF0aC5taW4oIHRoaXMuc2l6ZSAqIHNpemVQcm9wLCBvcHRzLnBhcnRpY2xlTWF4U2l6ZSApLCAwLCB1dGlsLnRhdSApO1xuICBjdHguZmlsbCgpO1xufVxuXG5mdW5jdGlvbiBTb3VyY2UoKSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMucmFkID0gTWF0aC5yYW5kb20oKSAqIHV0aWwudGF1O1xufVxuU291cmNlLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBpZiggIXRoaXMubW91c2VDb250cm9sbGVkICkge1xuICAgIHZhciBhbmdTcGVlZCA9IG9wdHMuc291cmNlQmFzZUFuZ1NwZWVkICsgTWF0aC5zaW4oIHRoaXMucmFkICogNiArIHRpY2sgLyAxMDAgKSAqIG9wdHMuc291cmNlVmFyaWVkQW5nU3BlZWQ7XG4gICAgdGhpcy5yYWQgKz0gYW5nU3BlZWQ7XG5cbiAgICB2YXIgZGlzdCA9IG9wdHMuc291cmNlQmFzZURpc3QgKyBNYXRoLnNpbiggdGhpcy5yYWQgKiA1ICsgdGljayAvIDEwMCApICogb3B0cy5zb3VyY2VWYXJpZWREaXN0O1xuXG4gICAgdGhpcy54ID0gZGlzdCAqIE1hdGguY29zKCB0aGlzLnJhZCApO1xuICAgIHRoaXMueSA9IGRpc3QgKiBNYXRoLnNpbiggdGhpcy5yYWQgKTtcbiAgfVxuICBcbiAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyggdGhpcy54LCB0aGlzLnksIDEsIDAsIHV0aWwudGF1ICk7XG4gIGN0eC5maWxsKCk7XG59XG5cbmZ1bmN0aW9uIGFuaW0oKSB7XG4gIFxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltICk7XG4gIFxuICArK3RpY2s7XG4gIFxuICBpZiggIW9wdHMuZW5hYmxlVHJhaWxzIClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgXG4gIGN0eC5maWxsU3R5bGUgPSBvcHRzLnJlcGFpbnRDb2xvcjtcbiAgY3R4LmZpbGxSZWN0KCAwLCAwLCBzLCBzICk7XG4gIFxuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICBcbiAgaWYoIHBhcnRpY2xlcy5sZW5ndGggPCBvcHRzLnBhcnRpY2xlcyApXG4gICAgcGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSApO1xuICBcbiAgY3R4LnRyYW5zbGF0ZSggcy8yLCBzLzIgKTtcbiAgXG4gIHNvdXJjZS5zdGVwKCk7XG4gIFxuICBwYXJ0aWNsZXMubWFwKCBwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5zdGVwKCkgKTtcbiAgY3R4LnRyYW5zbGF0ZSggLXMvMiwgLXMvMiApO1xufVxuXG5jdHguZmlsbFN0eWxlID0gJyMyMjInO1xuY3R4LmZpbGxSZWN0KCAwLCAwLCBzLCBzICk7XG5hbmltKCk7XG5cbmMuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsICggZSApID0+IHtcbiAgXG4gIHZhciBiYm94ID0gYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gIHNvdXJjZS54ID0gZS5jbGllbnRYIC0gYmJveC5sZWZ0IC0gcy8yO1xuICBzb3VyY2UueSA9IGUuY2xpZW50WSAtIGJib3gudG9wIC0gcy8yO1xuICBzb3VyY2UubW91c2VDb250cm9sbGVkID0gdHJ1ZTtcbn0pXG5jLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgKCBlICkgPT4ge1xuICBcbiAgdmFyIGJib3ggPSBjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBcbiAgc291cmNlLnggPSBlLmNsaWVudFggLSBiYm94LmxlZnQgLSBzLzI7XG4gIHNvdXJjZS55ID0gZS5jbGllbnRZIC0gYmJveC50b3AgLSBzLzI7XG4gIFxuICBzb3VyY2UucmFkID0gTWF0aC5hdGFuKCBzb3VyY2UueSAvIHNvdXJjZS54ICk7XG4gIGlmKCBzb3VyY2UueCA8IDAgKVxuICAgIHNvdXJjZS5yYWQgKz0gTWF0aC5QSTtcbiAgXG4gIHNvdXJjZS5tb3VzZUNvbnRyb2xsZWQgPSBmYWxzZTtcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZnJvbnRlbmQvanMvcGFnZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUhBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUExQkE7QUFBQTtBQUFBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=