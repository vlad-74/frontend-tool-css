/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hf = __webpack_require__(3);
	var ha = __webpack_require__(4);

	var log = __webpack_require__(6)(module);

	var a = 111111111111111;

	new _menu2.default({
	  elem: document.querySelector('.menu')
	});

	document.querySelector('.page__header').onclick = function () {
	  __webpack_require__.e/* nsure */(1, function () {
	    __webpack_require__(8);
	  });
	};

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function Menu(_ref) {
	  var elem = _ref.elem;

	  _classCallCheck(this, Menu);

	  elem.querySelector('.menu__title').onclick = function () {
	    elem.classList.toggle('menu_open');
	    return false;
	  };
	};

		exports.default = Menu;

/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";

	// var log = require('logger')(module);
	// var args = [' - logger = ' + module.filename.substring(module.filename.indexOf('##log1Module\\dir') +17)].concat([].slice.call(arguments));
	global.accessLoger = true;

	module.exports = function (module) {
	  return function () /* ... */{

	    console.log.format = function (c) {
	      return c.getDate() + ": [" + c.filename + ":" + c.getLineNumber() + "] " + c.functionName;
	    };

	    var isDev = process.env.NODE_ENV;
	    var args = [' logger: ' + JSON.stringify(arguments) + ' || '];
	    if (accessLoger) {
	      console.log.apply(console, args);
	    }
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

/***/ },
/* 7 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0MzI3Y2E2NzM0NjBmNmFlYTczNSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9tZW51L2luZGV4LmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtdG9vbC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtdG9vbC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvYWpheC5qcyIsIndlYnBhY2s6Ly8vRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zICReIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC10b29sLWNzcy9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MzI3Y2E2NzM0NjBmNmFlYTczNVxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBoZiA9IHJlcXVpcmUoJ2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9mdW5jdGlvbnMnKTtcbnZhciBoYSA9IHJlcXVpcmUoJ2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9hamF4Jyk7XG5cbnZhciBsb2cgPSByZXF1aXJlKCcuL2xvZ2dlcicpKG1vZHVsZSk7XG5cbnZhciBhID0gMTExMTExMTExMTExMTExO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG5uZXcgTWVudSh7XG4gIGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jylcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9faGVhZGVyJykub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmVxdWlyZSgnLi9oZWFkZXInKTtcbiAgfSk7XG59O1xuXG5cbmxldCB0ZXN0ID0gZnVuY3Rpb24oKXtcblx0bG9nKGhmLmdldEZ1bmN0aW9uTmFtZSgpICsgJ9Ci0JXQmtCh0KIg0JvQntCT0JAgJyArIGFjY2Vzc0xvZ2VyKTtcbn07XG5cbnRlc3QoKTtcblxubGV0IHByb20gPSBoYS5nZXRQcm9taXNlKDEwMClcblxuc2V0VGltZW91dChmdW5jdGlvbigpe2NvbnNvbGUubG9nKHByb20pfSwgMjAwKTtcbmNvbnNvbGUubG9nKCdhY2Nlc3NMb2dlciA9ICcsIGFjY2Vzc0xvZ2VyLCBhKTtcblxuLy8gY29uc29sZS5sb2coKG5ldyBFcnJvcigpKS5zdGFjayk7XG5cblxubG9nKGhmLmdldEZ1bmN0aW9uTmFtZSgpICsgJ9Ci0JXQmtCh0KIg0JvQntCT0JAgJyArIGFjY2Vzc0xvZ2VyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9qcy9wYWdlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3Ioe2VsZW19KSB7XG4gICAgZWxlbS5xdWVyeVNlbGVjdG9yKCcubWVudV9fdGl0bGUnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfb3BlbicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL21lbnUvaW5kZXguanNcbiAqKi8iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1odG1sc3BlY2lhbGNoYXJzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuZXhwb3J0cy5lc2NhcGVIdG1sID0gZnVuY3Rpb24odGV4dCkge1xyXG4gIHJldHVybiB0ZXh0XHJcbiAgICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcclxuICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXHJcbiAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxyXG4gICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcclxuICAgICAgLnJlcGxhY2UoLycvZywgXCImIzAzOTtcIik7XHJcbn07XHJcblxyXG5leHBvcnRzLmVzY2FwZUh0bWxfZGVjb2RlID0gZnVuY3Rpb24oc3RyaW5nLCBxdW90ZV9zdHlsZSkge1xyXG4gIHZhciBvcHRUZW1wID0gMCxcclxuICAgIGkgPSAwLFxyXG4gICAgbm9xdW90ZXMgPSBmYWxzZTtcclxuICBpZiAodHlwZW9mIHF1b3RlX3N0eWxlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcXVvdGVfc3R5bGUgPSAyO1xyXG4gIH1cclxuICBzdHJpbmcgPSBzdHJpbmcudG9TdHJpbmcoKVxyXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxyXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKTtcclxuICB2YXIgT1BUUyA9IHtcclxuICAgICdFTlRfTk9RVU9URVMnOiAwLFxyXG4gICAgJ0VOVF9IVE1MX1FVT1RFX1NJTkdMRSc6IDEsXHJcbiAgICAnRU5UX0hUTUxfUVVPVEVfRE9VQkxFJzogMixcclxuICAgICdFTlRfQ09NUEFUJzogMixcclxuICAgICdFTlRfUVVPVEVTJzogMyxcclxuICAgICdFTlRfSUdOT1JFJzogNFxyXG4gIH07XHJcbiAgaWYgKHF1b3RlX3N0eWxlID09PSAwKSB7XHJcbiAgICBub3F1b3RlcyA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcXVvdGVfc3R5bGUgIT09ICdudW1iZXInKSB7IC8vIEFsbG93IGZvciBhIHNpbmdsZSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5nIGZsYWdzXHJcbiAgICBxdW90ZV9zdHlsZSA9IFtdLmNvbmNhdChxdW90ZV9zdHlsZSk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcXVvdGVfc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gUmVzb2x2ZSBzdHJpbmcgaW5wdXQgdG8gYml0d2lzZSBlLmcuICdQQVRISU5GT19FWFRFTlNJT04nIGJlY29tZXMgNFxyXG4gICAgICBpZiAoT1BUU1txdW90ZV9zdHlsZVtpXV0gPT09IDApIHtcclxuICAgICAgICBub3F1b3RlcyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoT1BUU1txdW90ZV9zdHlsZVtpXV0pIHtcclxuICAgICAgICBvcHRUZW1wID0gb3B0VGVtcCB8IE9QVFNbcXVvdGVfc3R5bGVbaV1dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBxdW90ZV9zdHlsZSA9IG9wdFRlbXA7XHJcbiAgfVxyXG4gIGlmIChxdW90ZV9zdHlsZSAmIE9QVFMuRU5UX0hUTUxfUVVPVEVfU0lOR0xFKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJiMwKjM5Oy9nLCBcIidcIik7IC8vIFBIUCBkb2Vzbid0IGN1cnJlbnRseSBlc2NhcGUgaWYgbW9yZSB0aGFuIG9uZSAwLCBidXQgaXQgc2hvdWxkXHJcbiAgICAvLyBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJmFwb3M7fCYjeDAqMjc7L2csIFwiJ1wiKTsgLy8gVGhpcyB3b3VsZCBhbHNvIGJlIHVzZWZ1bCBoZXJlLCBidXQgbm90IGEgcGFydCBvZiBQSFBcclxuICB9XHJcbiAgaWYgKCFub3F1b3Rlcykge1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcclxuICB9XHJcbiAgLy8gUHV0IHRoaXMgaW4gbGFzdCBwbGFjZSB0byBhdm9pZCBlc2NhcGUgYmVpbmcgZG91YmxlLWRlY29kZWRcclxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxuXHJcbiAgcmV0dXJuIHN0cmluZztcclxufVxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1odG1sc3BlY2lhbGNoYXJzPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnRzLnRvTG93ZXJGaXJzdExldHRlciA9IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZ1swXS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zdXBwb3J0c19sb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCBnZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYiA9IFwidW5rbm93blwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICB2YXIgZiA9IGUud2lkdGg7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdmFyIGVyciA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZihlcnIuc2VhcmNoKFwibm90IGFuIG9iamVjdFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJzYWZhcmlcIjtcclxuICAgICAgICB9IGVsc2UgaWYoZXJyLnNlYXJjaChcIkNhbm5vdCByZWFkXCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcImNocm9tZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiZSBpcyB1bmRlZmluZWRcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZmlyZWZveFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiVW5hYmxlIHRvIGdldCBwcm9wZXJ0eSAnd2lkdGgnIG9mIHVuZGVmaW5lZCBvciBudWxsIHJlZmVyZW5jZVwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICBpZighKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVkZ2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihlcnIuc2VhcmNoKFwiY2Fubm90IGNvbnZlcnQgZSBpbnRvIG9iamVjdFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJvcGVyYVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZigvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIklFXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmdldEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGVyciA9IG5ldyBFcnJvcigpLnN0YWNrLCB0eHRfZnVuLGZ1bixlbXA7XHJcbiAgZW1wID0gJyAtINCQ0J3QntCd0JjQnNCd0JDQryc7XHJcbiAgaWYoZ2V0QnJvd3NlcigpID09IFwiY2hyb21lXCIpIHtcclxuICAgIGZ1biA9IGVyci5zcGxpdCgnXFxuJylbMl0uc3BsaXQoJyAnKVs1XTtcclxuICAgIGlmKGZ1biAhPSAnT2JqZWN0Ljxhbm9ueW1vdXM+Jyl7IHR4dF9mdW4gPSBlcnIuc3BsaXQoJ1xcbicpWzJdLnNwbGl0KCcgJylbNV07fWVsc2V7dHh0X2Z1biA9IGVtcH1cclxuICAgIHJldHVybiBnZXRCcm93c2VyKCkgKyAnIHwg0KTQkNCZ0JsgJyArIChlcnIpLnNwbGl0KCdcXG4nKVsyXS5zcGxpdCgnICcpWzZdLnNwbGl0KCcvJylbNF0uc3BsaXQoJzonKVswXSArICcgfCDQpNCj0J3QmtCm0JjQryAnICsgdHh0X2Z1biArICcgfCAnO1xyXG4gIH1lbHNle1xyXG4gICAgZnVuID0gZXJyLnNwbGl0KCdcXG4nKVsxXS5zcGxpdCgnQCcpWzBdO1xyXG4gICAgaWYoZnVuICE9ICcnKXsgdHh0X2Z1biA9IGVyci5zcGxpdCgnXFxuJylbMV0uc3BsaXQoJ0AnKVswXX1lbHNle3R4dF9mdW4gPSBlbXB9XHJcbiAgICByZXR1cm4gZ2V0QnJvd3NlcigpICsgJyB8INCk0JDQmdCbICcgKyAoZXJyKS5zcGxpdCgnanMvJylbMV0uc3BsaXQoJzonKVswXSArICcgfCDQpNCj0J3QmtCm0JjQryAnICsgdHh0X2Z1biArICcgfCAnO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCfQmtCe0J3QotCV0J3QoiDQmNCXIGhlbHAtZnVuY3Rpb25zOicgKydcXG4nICsgJ3wgZnVuY3Rpb25zICcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMucGhwQ3JlYXRlRmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcCl7IC8vIGZpbGVOYW1lID0gJ2ZpbGVOYW1lLmpzb24nINC40LvQuCAnZmlsZU5hbWUuJ1xyXG4gIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YS5hcHBlbmQoXCJkYXRhXCIgLCBmaWxlTmFtZSk7XHJcblxyXG4gIHZhciB4aHIgPSAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IGFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICB4aHIub3BlbiggJ1BPU1QnLCBwLCB0cnVlICk7XHJcbiAgeGhyLnNlbmQoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydHMucGhwV3JpdGVGaWxlID0gZnVuY3Rpb24oZmlsZU5hbWUsIGZpbGVDb250ZW50LCBwKXsgLy8gZmlsZU5hbWUgPSAnZmlsZU5hbWUuanNvbicg0LjQu9C4ICdmaWxlTmFtZS4nXHJcbiAgdmFyIGRhdGFmID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZGF0YWYuYXBwZW5kKFwibmFtZVwiICwgZmlsZU5hbWUpO1xyXG4gIGRhdGFmLmFwcGVuZChcImNvbnRcIiAsIGZpbGVDb250ZW50KTtcclxuXHJcbiAgdmFyIHhociA9ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgYWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gIHhoci5vcGVuKCAnUE9TVCcsIHAsIHRydWUgKTtcclxuICB4aHIuc2VuZChkYXRhZik7XHJcbn1cclxuXHJcbmxldCBnZXRSZXN1bHRGcm9tSnNvbk5vZGUgPSBmdW5jdGlvbihwYXRoKXtcclxuICAgdmFyIG1lbnVCdXR0b25zID0gcmVxdWlyZShwYXRoKTsvLyB2YXIgYSA9IEpTT04ucGFyc2UobWVudUJ1dHRvbnMpO1xyXG4gICByZXR1cm4gbWVudUJ1dHRvbnM7ICBcclxufTtcclxuZXhwb3J0cy5nZXRSZXN1bHRGcm9tSnNvbk5vZGUgPSBnZXRSZXN1bHRGcm9tSnNvbk5vZGU7XHJcblxyXG5leHBvcnRzLmdldFJlc3VsdEZyb21Kc29uID0gZnVuY3Rpb24ocGF0aCl7XHJcbiAgLy8gcGF0aCA9ICcuLi8uLi8nICsgcGF0aDsgLy9jb25zb2xlLmxvZyhwYXRoKTtcclxuXHJcbiAgdmFyIHJlc3VsdEZyb21Kc29uID0gbnVsbDtcclxuICB0cnkgeyBcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub3BlbignR0VUJywgcGF0aCwgZmFsc2UpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICBpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuICAgLy8g0L7QsdGA0LDQsdC+0YLQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgIGFsZXJ0KCfQntGI0LjQsdC60LAgJyArIHhoci5zdGF0dXMgKyAnOiAnICsgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAvLyDQstGL0LLQtdGB0YLQuCDRgNC10LfRg9C70YzRgtCw0YJcclxuICAvLyBhbGVydCh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIH1cclxuICAgIHJlc3VsdEZyb21Kc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgIHJldHVybiByZXN1bHRGcm9tSnNvbjtcclxuICB9XHJcbiAgY2F0Y2goZXJyKSB7XHJcbiAgICByZXN1bHRGcm9tSnNvbiA9IGdldFJlc3VsdEZyb21Kc29uTm9kZShwYXRoKTsgXHJcbiAgICByZXR1cm4gcmVzdWx0RnJvbUpzb247XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5wcm9taXNlR2V0RGF0YUZyb21VcmwgPSBmdW5jdGlvbih1cmwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uLlNlYXJjaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHMuaHR0cEdldFByb21pc2UgPSBmdW5jdGlvbih1cmwpe1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgZXJyb3IuY29kZSA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZWplY3QobmV3IEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy/Qn9Cg0JjQnNCV0KAg0J/QoNCe0JzQmNCh0JAg0JTQm9CvINCi0JXQodCi0J7QkiDQoSDQl9CQ0JTQkNCS0JDQndCc0KvQnCDQmNCd0KLQldCg0JLQkNCb0J7QnFxyXG5leHBvcnRzLmdldFByb21pc2UgPSAobikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCdQcm9taXNlINCk0KPQndCa0KbQmNCvIGdldFByb21pc2UnKyBuICsnKCkg0J7QotCg0JDQkdCe0KLQkNCb0JAgIScpO1xyXG4gICAgICAgIH0sIG4pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBwcm9jZXNzLnN0ZG91dC53cml0ZSgnfCBhamF4ICcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2FqYXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC10b29sLWNzcy9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucyAkXlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHZhciBsb2cgPSByZXF1aXJlKCdsb2dnZXInKShtb2R1bGUpO1xuLy8gdmFyIGFyZ3MgPSBbJyAtIGxvZ2dlciA9ICcgKyBtb2R1bGUuZmlsZW5hbWUuc3Vic3RyaW5nKG1vZHVsZS5maWxlbmFtZS5pbmRleE9mKCcjI2xvZzFNb2R1bGVcXFxcZGlyJykgKzE3KV0uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5nbG9iYWwuYWNjZXNzTG9nZXIgPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uICovKSB7XG5cbiAgY29uc29sZS5sb2cuZm9ybWF0ID0gZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5nZXREYXRlKCkgKyBcIjogW1wiICsgYy5maWxlbmFtZSArIFwiOlwiICsgYy5nZXRMaW5lTnVtYmVyKCkgKyBcIl0gXCIgKyBjLmZ1bmN0aW9uTmFtZTtcbiAgfTtcblxuICBcdGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgdmFyIGFyZ3MgPSBbJyBsb2dnZXI6ICcgKyBKU09OLnN0cmluZ2lmeShhcmd1bWVudHMpICsgJyB8fCAnIF07XG4gICAgXHRpZihhY2Nlc3NMb2dlcil7XG4gICAgXHRcdGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIFx0fSBcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZnJvbnRlbmQvanMvbG9nZ2VyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLXRvb2wtY3NzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekZBO0FBQ0E7QUFPQTtBQUNBOzs7OztBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==