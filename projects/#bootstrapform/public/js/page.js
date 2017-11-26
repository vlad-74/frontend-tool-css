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

	(function () {

		var app = {

			initialize: function initialize() {
				this.setUpListeners();
			},

			setUpListeners: function setUpListeners() {
				$('form').on('submit', app.submitForm);
				$('form').on('keydown', '.has-error', app.removeError);
			},

			submitForm: function submitForm(e) {
				e.preventDefault();

				var form = $(this),
				    submitBtn = form.find('button[type="submit"]');

				// если валидация не проходит - то дальше не идём
				if (app.validateForm(form) === false) return false;

				var str = form.serialize();

				// против повторного нажатия
				submitBtn.attr({ disabled: 'disabled' });

				console.log('ajax !!!');

				// $.ajax({
				//     type: "GET", //"POST",
				//     url: "contact_form/test.json", //"contact_form/contact_process.php",
				//     data: str                
				// }).done(function(msg) {
				//     if(msg == 'OK') {
				//         result = 'Спасибо за ваш заказ! Мы свяжемся с вами в течение 15 минут';
				//         form.html(result);
				//     } else {
				//         form.html('msg');
				//     }		
				// }).always(function(){
				// 	submitBtn.removeAttr("disabled");
				// })

				// ВМЕСТО ЗАКОММЕНТИРОВАННОГО $.ajax
				var itog;
				app.httpGetPromise("contact_form/test.json").then(function f1(result) {
					itog = JSON.parse(result);
					form.html(itog.test);
				});
			},

			validateForm: function validateForm(form) {

				var inputs = form.find('input'),
				    valid = true;

				inputs.tooltip('destroy');

				$.each(inputs, function (index, val) {
					var input = $(val),
					    val = input.val(),
					    formGrout = input.parents('.form-group'),
					    label = formGrout.find('label').text().toLowerCase(),
					    textError = 'Введите ' + label;

					if (val.length === 0) {
						formGrout.addClass('has-error').removeClass('has-success');
						input.tooltip({
							trigger: 'manual',
							placement: 'right',
							title: textError
						}).tooltip('show');
						valid = false;
					} else {
						formGrout.removeClass('has-error').addClass('has-success');
						input.tooltip('hide');
					}
				});

				return valid;
			},

			removeError: function removeError() {
				$(this).removeClass('has-error').find('input').tooltip('destroy');
			},

			httpGetPromise: function httpGetPromise(url) {
				return new Promise(function (resolve, reject) {
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url, true);

					xhr.onload = function () {
						if (this.status == 200) {
							resolve(this.response);
						} else {
							var error = new Error(this.statusText);
							error.code = this.status;
							reject(error);
						}
					};
					xhr.onerror = function () {
						reject(new Error("Network Error"));
					};
					xhr.send();
				});
			}

		};

		app.initialize();
		})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNDI5NTg1ZmEzZGE3NGRlNWQyNiIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlNDI5NTg1ZmEzZGE3NGRlNWQyNlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICBcblx0dmFyIGFwcCA9IHtcblx0XHRcblx0XHRpbml0aWFsaXplIDogZnVuY3Rpb24gKCkge1x0XG5cdFx0XHR0aGlzLnNldFVwTGlzdGVuZXJzKCk7XG5cdFx0fSxcblxuXHRcdHNldFVwTGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKCdmb3JtJykub24oJ3N1Ym1pdCcsIGFwcC5zdWJtaXRGb3JtKTtcblx0XHRcdCQoJ2Zvcm0nKS5vbigna2V5ZG93bicsICcuaGFzLWVycm9yJywgYXBwLnJlbW92ZUVycm9yKTtcblx0XHR9LFxuXG5cdFx0c3VibWl0Rm9ybTogZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyIGZvcm0gPSAkKHRoaXMpLFxuXHRcdFx0XHRzdWJtaXRCdG4gPSBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7IFxuXG5cdFx0XHQvLyDQtdGB0LvQuCDQstCw0LvQuNC00LDRhtC40Y8g0L3QtSDQv9GA0L7RhdC+0LTQuNGCIC0g0YLQviDQtNCw0LvRjNGI0LUg0L3QtSDQuNC00ZHQvFxuXHRcdFx0aWYgKCBhcHAudmFsaWRhdGVGb3JtKGZvcm0pID09PSBmYWxzZSApXHRyZXR1cm4gZmFsc2U7IFxuXG5cdFx0XHR2YXIgc3RyID0gZm9ybS5zZXJpYWxpemUoKTsgICBcblxuXHRcdFx0Ly8g0L/RgNC+0YLQuNCyINC/0L7QstGC0L7RgNC90L7Qs9C+INC90LDQttCw0YLQuNGPXG5cdCAgICAgICAgc3VibWl0QnRuLmF0dHIoe2Rpc2FibGVkOiAnZGlzYWJsZWQnfSk7XG5cblx0ICAgICAgICBjb25zb2xlLmxvZygnYWpheCAhISEnKTtcblxuICAgICAgICAgICAgLy8gJC5hamF4KHtcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiBcIkdFVFwiLCAvL1wiUE9TVFwiLFxuICAgICAgICAgICAgLy8gICAgIHVybDogXCJjb250YWN0X2Zvcm0vdGVzdC5qc29uXCIsIC8vXCJjb250YWN0X2Zvcm0vY29udGFjdF9wcm9jZXNzLnBocFwiLFxuICAgICAgICAgICAgLy8gICAgIGRhdGE6IHN0ciAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0pLmRvbmUoZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYobXNnID09ICdPSycpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gJ9Ch0L/QsNGB0LjQsdC+INC30LAg0LLQsNGIINC30LDQutCw0LchINCc0Ysg0YHQstGP0LbQtdC80YHRjyDRgSDQstCw0LzQuCDQsiDRgtC10YfQtdC90LjQtSAxNSDQvNC40L3Rg9GCJztcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9ybS5odG1sKHJlc3VsdCk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9ybS5odG1sKCdtc2cnKTtcbiAgICAgICAgICAgIC8vICAgICB9XHRcdFxuICAgICAgICAgICAgLy8gfSkuYWx3YXlzKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBcdHN1Ym1pdEJ0bi5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyDQktCc0JXQodCi0J4g0JfQkNCa0J7QnNCc0JXQndCi0JjQoNCe0JLQkNCd0J3QntCT0J4gJC5hamF4XG4gICAgICAgICAgICB2YXIgaXRvZztcbiAgICAgICAgICAgIGFwcC5odHRwR2V0UHJvbWlzZShcImNvbnRhY3RfZm9ybS90ZXN0Lmpzb25cIilcblx0ICAgICAgICAudGhlbiggZnVuY3Rpb24gZjEocmVzdWx0KSB7XG5cdFx0XHRcdGl0b2cgPSBKU09OLnBhcnNlKHJlc3VsdClcblx0ICAgICAgICBcdGZvcm0uaHRtbChpdG9nLnRlc3QpO1xuXHQgICAgICAgIH0pXG5cdFx0fSxcblxuXHRcdHZhbGlkYXRlRm9ybTogZnVuY3Rpb24gKGZvcm0pe1xuXG5cdFx0XHR2YXIgaW5wdXRzID0gZm9ybS5maW5kKCdpbnB1dCcpLFxuXHRcdFx0XHR2YWxpZCA9IHRydWU7XG5cdFx0XHRcblx0XHRcdGlucHV0cy50b29sdGlwKCdkZXN0cm95Jyk7XG5cblx0XHRcdCQuZWFjaChpbnB1dHMsIGZ1bmN0aW9uKGluZGV4LCB2YWwpIHtcblx0XHRcdFx0dmFyIGlucHV0ID0gJCh2YWwpLFxuXHRcdFx0XHRcdHZhbCA9IGlucHV0LnZhbCgpLFxuXHRcdFx0XHRcdGZvcm1Hcm91dCA9IGlucHV0LnBhcmVudHMoJy5mb3JtLWdyb3VwJyksXG5cdFx0XHRcdFx0bGFiZWwgPSBmb3JtR3JvdXQuZmluZCgnbGFiZWwnKS50ZXh0KCkudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHR0ZXh0RXJyb3IgPSAn0JLQstC10LTQuNGC0LUgJyArIGxhYmVsO1xuXG5cdFx0XHRcdGlmKHZhbC5sZW5ndGggPT09IDApe1xuXHRcdFx0XHRcdGZvcm1Hcm91dC5hZGRDbGFzcygnaGFzLWVycm9yJykucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJyk7XHRcblx0XHRcdFx0XHRpbnB1dC50b29sdGlwKHtcblx0XHRcdFx0XHRcdHRyaWdnZXI6ICdtYW51YWwnLFxuXHRcdFx0XHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHRleHRFcnJvclxuXHRcdFx0XHRcdH0pLnRvb2x0aXAoJ3Nob3cnKTtcdFx0XG5cdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcdFx0XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGZvcm1Hcm91dC5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJyk7XG5cdFx0XHRcdFx0aW5wdXQudG9vbHRpcCgnaGlkZScpO1xuXHRcdFx0XHR9XHRcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmFsaWQ7XG5cdFx0XHRcblx0XHR9LFxuXG5cdFx0cmVtb3ZlRXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykuZmluZCgnaW5wdXQnKS50b29sdGlwKCdkZXN0cm95Jyk7XG5cdFx0fSxcblxuXHRcdGh0dHBHZXRQcm9taXNlOiBmdW5jdGlvbiAodXJsKSB7XG5cdFx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHQgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG5cblx0XHQgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdCAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcblx0XHQgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG5cdFx0ICAgICAgfSBlbHNlIHtcblx0XHQgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcih0aGlzLnN0YXR1c1RleHQpO1xuXHRcdCAgICAgICAgZXJyb3IuY29kZSA9IHRoaXMuc3RhdHVzO1xuXHRcdCAgICAgICAgcmVqZWN0KGVycm9yKTtcblx0XHQgICAgICB9XG5cdFx0ICAgIH07XG5cdFx0ICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0ICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xuXHRcdCAgICB9O1xuXHRcdCAgICB4aHIuc2VuZCgpO1xuXHRcdCAgfSk7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0YXBwLmluaXRpYWxpemUoKTtcblxufSgpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9qcy9wYWdlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzR0E7QUFDQTtBQTZHQTtBQUVBOzs7Iiwic291cmNlUm9vdCI6IiJ9