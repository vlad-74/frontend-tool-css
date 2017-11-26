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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var hf = __webpack_require__(2);
	var ha = __webpack_require__(3);

	var log = __webpack_require__(5)(module);

	var a = 111111111111111;

	var test = function test() {
		log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
	};

	test();

	var prom = ha.getPromise(100);

	setTimeout(function () {
		console.log(prom);
	}, 200);
	console.log('accessLoger = ', accessLoger, a);

	// console.log((new Error()).stack);


	log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* =======================================htmlspecialchars=======================================*/
	exports.escapeHtml = function(text) {
	  return text
	      .replace(/&/g, "&amp;")
	      .replace(/</g, "&lt;")
	      .replace(/>/g, "&gt;")
	      .replace(/"/g, "&quot;")
	      .replace(/'/g, "&#039;");
	};

	exports.escapeHtml_decode = function(string, quote_style) {
	  var optTemp = 0,
	    i = 0,
	    noquotes = false;
	  if (typeof quote_style === 'undefined') {
	    quote_style = 2;
	  }
	  string = string.toString()
	    .replace(/&lt;/g, '<')
	    .replace(/&gt;/g, '>');
	  var OPTS = {
	    'ENT_NOQUOTES': 0,
	    'ENT_HTML_QUOTE_SINGLE': 1,
	    'ENT_HTML_QUOTE_DOUBLE': 2,
	    'ENT_COMPAT': 2,
	    'ENT_QUOTES': 3,
	    'ENT_IGNORE': 4
	  };
	  if (quote_style === 0) {
	    noquotes = true;
	  }
	  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
	    quote_style = [].concat(quote_style);
	    for (i = 0; i < quote_style.length; i++) {
	      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
	      if (OPTS[quote_style[i]] === 0) {
	        noquotes = true;
	      } else if (OPTS[quote_style[i]]) {
	        optTemp = optTemp | OPTS[quote_style[i]];
	      }
	    }
	    quote_style = optTemp;
	  }
	  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
	    string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
	    // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
	  }
	  if (!noquotes) {
	    string = string.replace(/&quot;/g, '"');
	  }
	  // Put this in last place to avoid escape being double-decoded
	  string = string.replace(/&amp;/g, '&');

	  return string;
	}
	/* =======================================htmlspecialchars=======================================*/

	exports.capitalizeFirstLetter = function(string) {
	    return string[0].toUpperCase() + string.slice(1);
	};

	exports.toLowerFirstLetter = function(string) {
	    return string[0].toLowerCase() + string.slice(1);
	};

	exports.supports_localStorage = function() {
	  try {
	    return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
	      return false;
	  }
	};

	let getBrowser = function() {
	    var b = "unknown";
	    try {
	        var e;
	        var f = e.width;
	    } catch (e) {
	        var err = e.toString();
	        if(err.search("not an object") !== -1){
	            return "safari";
	        } else if(err.search("Cannot read") !== -1){
	            return "chrome";
	        } else if(err.search("e is undefined") !== -1){
	            return "firefox";
	        } else if(err.search("Unable to get property 'width' of undefined or null reference") !== -1){
	            if(!(false || !!document.documentMode) && !!window.StyleMedia){
	                return "edge";
	            }
	        } else if(err.search("cannot convert e into object") !== -1){
	            return "opera";
	        } else if(/*@cc_on!@*/false || !!document.documentMode){
	            return "IE";
	        } else {
	            return undefined;
	        }
	    }
	};

	exports.getFunctionName = function(){
	  let err = new Error().stack, txt_fun,fun,emp;
	  emp = ' - АНОНИМНАЯ';
	  if(getBrowser() == "chrome") {
	    fun = err.split('\n')[2].split(' ')[5];
	    if(fun != 'Object.<anonymous>'){ txt_fun = err.split('\n')[2].split(' ')[5];}else{txt_fun = emp}
	    return getBrowser() + ' | ФАЙЛ ' + (err).split('\n')[2].split(' ')[6].split('/')[4].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
	  }else{
	    fun = err.split('\n')[1].split('@')[0];
	    if(fun != ''){ txt_fun = err.split('\n')[1].split('@')[0]}else{txt_fun = emp}
	    return getBrowser() + ' | ФАЙЛ ' + (err).split('js/')[1].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
	  }
	};

	// process.stdout.write('КОНТЕНТ ИЗ help-functions:' +'\n' + '| functions ');

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports.phpCreateFile = function (fileName, p){ // fileName = 'fileName.json' или 'fileName.'
	  var data = new FormData();
	  data.append("data" , fileName);

	  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	  xhr.open( 'POST', p, true );
	  xhr.send(data);
	}

	exports.phpWriteFile = function(fileName, fileContent, p){ // fileName = 'fileName.json' или 'fileName.'
	  var dataf = new FormData();
	  dataf.append("name" , fileName);
	  dataf.append("cont" , fileContent);

	  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	  xhr.open( 'POST', p, true );
	  xhr.send(dataf);
	}

	let getResultFromJsonNode = function(path){
	   var menuButtons = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());// var a = JSON.parse(menuButtons);
	   return menuButtons;  
	};
	exports.getResultFromJsonNode = getResultFromJsonNode;

	exports.getResultFromJson = function(path){
	  // path = '../../' + path; //console.log(path);

	  var resultFromJson = null;
	  try { 
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', path, false);
	    xhr.send();

	    if (xhr.status != 200) {
	   // обработать ошибку
	   alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
	    } else {
	  // вывести результат
	  // alert(xhr.responseText);
	    }
	    resultFromJson = JSON.parse(xhr.responseText);
	    return resultFromJson;
	  }
	  catch(err) {
	    resultFromJson = getResultFromJsonNode(path); 
	    return resultFromJson;
	  }
	};

	exports.promiseGetDataFromUrl = function(url){
	    return new Promise(function(resolve, reject) {
	        let xhr = new XMLHttpRequest();
	        xhr.open('GET', url);
	        xhr.onload = function() {
	            if (xhr.status === 200) {
	                let json = JSON.parse(xhr.response);
	                resolve(json.Search);
	            } else {
	                reject(xhr.statusText);
	            }
	        };
	        
	        xhr.onerror = function(error) {
	            reject(error);
	        };
	        
	        xhr.send();
	    });
	}

	exports.httpGetPromise = function(url){
	  return new Promise(function(resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url, true);

	    xhr.onload = function() {
	      if (this.status == 200) {
	        resolve(this.response);
	      } else {
	        var error = new Error(this.statusText);
	        error.code = this.status;
	        reject(error);
	      }
	    };
	    xhr.onerror = function() {
	      reject(new Error("Network Error"));
	    };
	    xhr.send();
	  });
	}

	//ПРИМЕР ПРОМИСА ДЛЯ ТЕСТОВ С ЗАДАВАНМЫМ ИНТЕРВАЛОМ
	exports.getPromise = (n) => {
	    return new Promise(function(resolve, reject) {
	        setTimeout(() => {
	            resolve('Promise ФУНКЦИЯ getPromise'+ n +'() ОТРАБОТАЛА !');
	        }, n);
	    });
	};

	// process.stdout.write('| ajax ');

/***/ },
/* 4 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	// var log = require('logger')(module);
	// var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module\\dir') +17)].concat([].slice.call(arguments));
	global.accessLoger = true;

	module.exports = function (module) {
	  return function () /* ... */{

	    var isDev = process.env.NODE_ENV;
	    var args = [' logger: ' + JSON.stringify(arguments) + ' || '];
	    if (accessLoger) {
	      console.log.apply(console, args);
	    }
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZTU0MzhjOTE4ZjZiNTQyZTA5OCIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtdG9vbC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtdG9vbC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvYWpheC5qcyIsIndlYnBhY2s6Ly8vRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zICReIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC10b29sLWNzcy9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlZTU0MzhjOTE4ZjZiNTQyZTA5OFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBoZiA9IHJlcXVpcmUoJ2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9mdW5jdGlvbnMnKTtcbnZhciBoYSA9IHJlcXVpcmUoJ2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9hamF4Jyk7XG5cbnZhciBsb2cgPSByZXF1aXJlKCcuL2xvZ2dlcicpKG1vZHVsZSk7XG5cbnZhciBhID0gMTExMTExMTExMTExMTExO1xuXG5sZXQgdGVzdCA9IGZ1bmN0aW9uKCl7XG5cdGxvZyhoZi5nZXRGdW5jdGlvbk5hbWUoKSArICfQotCV0JrQodCiINCb0J7Qk9CQICcgKyBhY2Nlc3NMb2dlcik7XG59O1xuXG50ZXN0KCk7XG5cbmxldCBwcm9tID0gaGEuZ2V0UHJvbWlzZSgxMDApXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhwcm9tKX0sIDIwMCk7XG5jb25zb2xlLmxvZygnYWNjZXNzTG9nZXIgPSAnLCBhY2Nlc3NMb2dlciwgYSk7XG5cbi8vIGNvbnNvbGUubG9nKChuZXcgRXJyb3IoKSkuc3RhY2spO1xuXG5cbmxvZyhoZi5nZXRGdW5jdGlvbk5hbWUoKSArICfQotCV0JrQodCiINCb0J7Qk9CQICcgKyBhY2Nlc3NMb2dlcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZnJvbnRlbmQvanMvcGFnZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1odG1sc3BlY2lhbGNoYXJzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZXhwb3J0cy5lc2NhcGVIdG1sID0gZnVuY3Rpb24odGV4dCkge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcclxuICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXHJcbiAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxyXG4gICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcclxuICAgICAgLnJlcGxhY2UoLycvZywgXCImIzAzOTtcIik7XHJcbn07XHJcblxyXG5leHBvcnRzLmVzY2FwZUh0bWxfZGVjb2RlID0gZnVuY3Rpb24oc3RyaW5nLCBxdW90ZV9zdHlsZSkge1xyXG4gIHZhciBvcHRUZW1wID0gMCxcclxuICAgIGkgPSAwLFxyXG4gICAgbm9xdW90ZXMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIHF1b3RlX3N0eWxlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcXVvdGVfc3R5bGUgPSAyO1xyXG4gIH1cclxuICBzdHJpbmcgPSBzdHJpbmcudG9TdHJpbmcoKVxyXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxyXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKTtcclxuICB2YXIgT1BUUyA9IHtcclxuICAgICdFTlRfTk9RVU9URVMnOiAwLFxyXG4gICAgJ0VOVF9IVE1MX1FVT1RFX1NJTkdMRSc6IDEsXHJcbiAgICAnRU5UX0hUTUxfUVVPVEVfRE9VQkxFJzogMixcclxuICAgICdFTlRfQ09NUEFUJzogMixcclxuICAgICdFTlRfUVVPVEVTJzogMyxcclxuICAgICdFTlRfSUdOT1JFJzogNFxyXG4gIH07XHJcbiAgaWYgKHF1b3RlX3N0eWxlID09PSAwKSB7XHJcbiAgICBub3F1b3RlcyA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcXVvdGVfc3R5bGUgIT09ICdudW1iZXInKSB7IC8vIEFsbG93IGZvciBhIHNpbmdsZSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5nIGZsYWdzXHJcbiAgICBxdW90ZV9zdHlsZSA9IFtdLmNvbmNhdChxdW90ZV9zdHlsZSk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcXVvdGVfc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gUmVzb2x2ZSBzdHJpbmcgaW5wdXQgdG8gYml0d2lzZSBlLmcuICdQQVRISU5GT19FWFRFTlNJT04nIGJlY29tZXMgNFxyXG4gICAgICBpZiAoT1BUU1txdW90ZV9zdHlsZVtpXV0gPT09IDApIHtcclxuICAgICAgICBub3F1b3RlcyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoT1BUU1txdW90ZV9zdHlsZVtpXV0pIHtcclxuICAgICAgICBvcHRUZW1wID0gb3B0VGVtcCB8IE9QVFNbcXVvdGVfc3R5bGVbaV1dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBxdW90ZV9zdHlsZSA9IG9wdFRlbXA7XHJcbiAgfVxyXG4gIGlmIChxdW90ZV9zdHlsZSAmIE9QVFMuRU5UX0hUTUxfUVVPVEVfU0lOR0xFKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJiMwKjM5Oy9nLCBcIidcIik7IC8vIFBIUCBkb2Vzbid0IGN1cnJlbnRseSBlc2NhcGUgaWYgbW9yZSB0aGFuIG9uZSAwLCBidXQgaXQgc2hvdWxkXHJcbiAgICAvLyBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJmFwb3M7fCYjeDAqMjc7L2csIFwiJ1wiKTsgLy8gVGhpcyB3b3VsZCBhbHNvIGJlIHVzZWZ1bCBoZXJlLCBidXQgbm90IGEgcGFydCBvZiBQSFBcclxuICB9XHJcbiAgaWYgKCFub3F1b3Rlcykge1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcclxuICB9XHJcbiAgLy8gUHV0IHRoaXMgaW4gbGFzdCBwbGFjZSB0byBhdm9pZCBlc2NhcGUgYmVpbmcgZG91YmxlLWRlY29kZWRcclxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxuXHJcbiAgcmV0dXJuIHN0cmluZztcclxufVxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1odG1sc3BlY2lhbGNoYXJzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnRzLnRvTG93ZXJGaXJzdExldHRlciA9IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZ1swXS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zdXBwb3J0c19sb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCBnZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYiA9IFwidW5rbm93blwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICB2YXIgZiA9IGUud2lkdGg7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdmFyIGVyciA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZihlcnIuc2VhcmNoKFwibm90IGFuIG9iamVjdFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJzYWZhcmlcIjtcclxuICAgICAgICB9IGVsc2UgaWYoZXJyLnNlYXJjaChcIkNhbm5vdCByZWFkXCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcImNocm9tZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiZSBpcyB1bmRlZmluZWRcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZmlyZWZveFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiVW5hYmxlIHRvIGdldCBwcm9wZXJ0eSAnd2lkdGgnIG9mIHVuZGVmaW5lZCBvciBudWxsIHJlZmVyZW5jZVwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICBpZighKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVkZ2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiY2Fubm90IGNvbnZlcnQgZSBpbnRvIG9iamVjdFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJvcGVyYVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZigvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIklFXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmdldEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGVyciA9IG5ldyBFcnJvcigpLnN0YWNrLCB0eHRfZnVuLGZ1bixlbXA7XHJcbiAgZW1wID0gJyAtINCQ0J3QntCd0JjQnNCd0JDQryc7XHJcbiAgaWYoZ2V0QnJvd3NlcigpID09IFwiY2hyb21lXCIpIHtcclxuICAgIGZ1biA9IGVyci5zcGxpdCgnXFxuJylbMl0uc3BsaXQoJyAnKVs1XTtcclxuICAgIGlmKGZ1biAhPSAnT2JqZWN0Ljxhbm9ueW1vdXM+Jyl7IHR4dF9mdW4gPSBlcnIuc3BsaXQoJ1xcbicpWzJdLnNwbGl0KCcgJylbNV07fWVsc2V7dHh0X2Z1biA9IGVtcH1cclxuICAgIHJldHVybiBnZXRCcm93c2VyKCkgKyAnIHwg0KTQkNCZ0JsgJyArIChlcnIpLnNwbGl0KCdcXG4nKVsyXS5zcGxpdCgnICcpWzZdLnNwbGl0KCcvJylbNF0uc3BsaXQoJzonKVswXSArICcgfCDQpNCj0J3QmtCm0JjQryAnICsgdHh0X2Z1biArICcgfCAnO1xyXG4gIH1lbHNle1xyXG4gICAgZnVuID0gZXJyLnNwbGl0KCdcXG4nKVsxXS5zcGxpdCgnQCcpWzBdO1xyXG4gICAgaWYoZnVuICE9ICcnKXsgdHh0X2Z1biA9IGVyci5zcGxpdCgnXFxuJylbMV0uc3BsaXQoJ0AnKVswXX1lbHNle3R4dF9mdW4gPSBlbXB9XHJcbiAgICByZXR1cm4gZ2V0QnJvd3NlcigpICsgJyB8INCk0JDQmdCbICcgKyAoZXJyKS5zcGxpdCgnanMvJylbMV0uc3BsaXQoJzonKVswXSArICcgfCDQpNCj0J3QmtCm0JjQryAnICsgdHh0X2Z1biArICcgfCAnO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCfQmtCe0J3QotCV0J3QoiDQmNCXIGhlbHAtZnVuY3Rpb25zOicgKydcXG4nICsgJ3wgZnVuY3Rpb25zICcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMucGhwQ3JlYXRlRmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcCl7IC8vIGZpbGVOYW1lID0gJ2ZpbGVOYW1lLmpzb24nINC40LvQuCAnZmlsZU5hbWUuJ1xyXG4gIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoXCJkYXRhXCIgLCBmaWxlTmFtZSk7XHJcblxyXG4gIHZhciB4aHIgPSAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IGFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICB4aHIub3BlbiggJ1BPU1QnLCBwLCB0cnVlICk7XHJcbiAgeGhyLnNlbmQoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydHMucGhwV3JpdGVGaWxlID0gZnVuY3Rpb24oZmlsZU5hbWUsIGZpbGVDb250ZW50LCBwKXsgLy8gZmlsZU5hbWUgPSAnZmlsZU5hbWUuanNvbicg0LjQu9C4ICdmaWxlTmFtZS4nXHJcbiAgdmFyIGRhdGFmID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YWYuYXBwZW5kKFwibmFtZVwiICwgZmlsZU5hbWUpO1xyXG4gIGRhdGFmLmFwcGVuZChcImNvbnRcIiAsIGZpbGVDb250ZW50KTtcclxuXHJcbiAgdmFyIHhociA9ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgYWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gIHhoci5vcGVuKCAnUE9TVCcsIHAsIHRydWUgKTtcclxuICB4aHIuc2VuZChkYXRhZik7XHJcbn1cclxuXHJcbmxldCBnZXRSZXN1bHRGcm9tSnNvbk5vZGUgPSBmdW5jdGlvbihwYXRoKXtcclxuICAgdmFyIG1lbnVCdXR0b25zID0gcmVxdWlyZShwYXRoKTsvLyB2YXIgYSA9IEpTT04ucGFyc2UobWVudUJ1dHRvbnMpO1xyXG4gICByZXR1cm4gbWVudUJ1dHRvbnM7ICBcclxufTtcclxuZXhwb3J0cy5nZXRSZXN1bHRGcm9tSnNvbk5vZGUgPSBnZXRSZXN1bHRGcm9tSnNvbk5vZGU7XHJcblxyXG5leHBvcnRzLmdldFJlc3VsdEZyb21Kc29uID0gZnVuY3Rpb24ocGF0aCl7XHJcbiAgLy8gcGF0aCA9ICcuLi8uLi8nICsgcGF0aDsgLy9jb25zb2xlLmxvZyhwYXRoKTtcclxuXHJcbiAgdmFyIHJlc3VsdEZyb21Kc29uID0gbnVsbDtcclxuICB0cnkgeyBcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub3BlbignR0VUJywgcGF0aCwgZmFsc2UpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICBpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuICAgLy8g0L7QsdGA0LDQsdC+0YLQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgIGFsZXJ0KCfQntGI0LjQsdC60LAgJyArIHhoci5zdGF0dXMgKyAnOiAnICsgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAvLyDQstGL0LLQtdGB0YLQuCDRgNC10LfRg9C70YzRgtCw0YJcclxuICAvLyBhbGVydCh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHJlc3VsdEZyb21Kc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIHJldHVybiByZXN1bHRGcm9tSnNvbjtcclxuICB9XHJcbiAgY2F0Y2goZXJyKSB7XHJcbiAgICByZXN1bHRGcm9tSnNvbiA9IGdldFJlc3VsdEZyb21Kc29uTm9kZShwYXRoKTsgXHJcbiAgICByZXR1cm4gcmVzdWx0RnJvbUpzb247XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5wcm9taXNlR2V0RGF0YUZyb21VcmwgPSBmdW5jdGlvbih1cmwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uLlNlYXJjaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHMuaHR0cEdldFByb21pc2UgPSBmdW5jdGlvbih1cmwpe1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgZXJyb3IuY29kZSA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZWplY3QobmV3IEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy/Qn9Cg0JjQnNCV0KAg0J/QoNCe0JzQmNCh0JAg0JTQm9CvINCi0JXQodCi0J7QkiDQoSDQl9CQ0JTQkNCS0JDQndCc0KvQnCDQmNCd0KLQldCg0JLQkNCb0J7QnFxyXG5leHBvcnRzLmdldFByb21pc2UgPSAobikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCdQcm9taXNlINCk0KPQndCa0KbQmNCvIGdldFByb21pc2UnKyBuICsnKCkg0J7QotCg0JDQkdCe0KLQkNCb0JAgIScpO1xyXG4gICAgICAgIH0sIG4pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBwcm9jZXNzLnN0ZG91dC53cml0ZSgnfCBhamF4ICcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2FqYXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC10b29sLWNzcy9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucyAkXlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHZhciBsb2cgPSByZXF1aXJlKCdsb2dnZXInKShtb2R1bGUpO1xuLy8gdmFyIGFyZ3MgPSBbJyAtIGxvZ2dlciA9ICcgKyBtb2R1bGUuZmlsZW5hbWUuc3Vic3RyaW5nKG1vZHVsZS5maWxlbmFtZS5pbmRleE9mKCcjI2xvZzFNb2R1bGVcXFxcZGlyJykgKzE3KV0uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5nbG9iYWwuYWNjZXNzTG9nZXIgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uICovKSB7XG5cbiAgXHRjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIHZhciBhcmdzID0gWycgbG9nZ2VyOiAnICsgSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKSArICcgfHwgJyBdO1xuICAgIFx0aWYoYWNjZXNzTG9nZXIpe1xuICAgIFx0XHRjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICBcdH0gXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL2xvZ2dlci5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC10b29sLWNzcy9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==