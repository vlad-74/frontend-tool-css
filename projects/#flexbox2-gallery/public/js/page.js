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

	    // console.log.format = function (c) {
	    //   return c.getDate() + ": [" + c.filename + ":" + c.getLineNumber() + "] " + c.functionName;
	    // };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMTVlYjVhYzIyNmRiNTZhMDQxOSIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vRDovX0RFVkVMT1BFUi9TaXRlcy9fR0lUL2Zyb250ZW5kLWNzcy9+L2hlbHAtZnVuY3Rpb25zL2Z1bmN0aW9ucy9hamF4LmpzIiwid2VicGFjazovLy9EOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zICReIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vL0Q6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC1jc3Mvfi9wcm9jZXNzL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjE1ZWI1YWMyMjZkYjU2YTA0MTlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaGYgPSByZXF1aXJlKCdoZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvZnVuY3Rpb25zJyk7XG52YXIgaGEgPSByZXF1aXJlKCdoZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvYWpheCcpO1xuXG52YXIgbG9nID0gcmVxdWlyZSgnLi9sb2dnZXInKShtb2R1bGUpO1xuXG52YXIgYSA9IDExMTExMTExMTExMTExMTtcblxubGV0IHRlc3QgPSBmdW5jdGlvbigpe1xuXHRsb2coaGYuZ2V0RnVuY3Rpb25OYW1lKCkgKyAn0KLQldCa0KHQoiDQm9Ce0JPQkCAnICsgYWNjZXNzTG9nZXIpO1xufTtcblxudGVzdCgpO1xuXG5sZXQgcHJvbSA9IGhhLmdldFByb21pc2UoMTAwKVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y29uc29sZS5sb2cocHJvbSl9LCAyMDApO1xuY29uc29sZS5sb2coJ2FjY2Vzc0xvZ2VyID0gJywgYWNjZXNzTG9nZXIsIGEpO1xuXG4vLyBjb25zb2xlLmxvZygobmV3IEVycm9yKCkpLnN0YWNrKTtcblxuXG5sb2coaGYuZ2V0RnVuY3Rpb25OYW1lKCkgKyAn0KLQldCa0KHQoiDQm9Ce0JPQkCAnICsgYWNjZXNzTG9nZXIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL3BhZ2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aHRtbHNwZWNpYWxjaGFycz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKHRleHQpIHtcclxuICByZXR1cm4gdGV4dFxyXG4gICAgICAucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXHJcbiAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxyXG4gICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcclxuICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXHJcbiAgICAgIC5yZXBsYWNlKC8nL2csIFwiJiMwMzk7XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5lc2NhcGVIdG1sX2RlY29kZSA9IGZ1bmN0aW9uKHN0cmluZywgcXVvdGVfc3R5bGUpIHtcclxuICB2YXIgb3B0VGVtcCA9IDAsXHJcbiAgICBpID0gMCxcclxuICAgIG5vcXVvdGVzID0gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBxdW90ZV9zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHF1b3RlX3N0eWxlID0gMjtcclxuICB9XHJcbiAgc3RyaW5nID0gc3RyaW5nLnRvU3RyaW5nKClcclxuICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcclxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+Jyk7XHJcbiAgdmFyIE9QVFMgPSB7XHJcbiAgICAnRU5UX05PUVVPVEVTJzogMCxcclxuICAgICdFTlRfSFRNTF9RVU9URV9TSU5HTEUnOiAxLFxyXG4gICAgJ0VOVF9IVE1MX1FVT1RFX0RPVUJMRSc6IDIsXHJcbiAgICAnRU5UX0NPTVBBVCc6IDIsXHJcbiAgICAnRU5UX1FVT1RFUyc6IDMsXHJcbiAgICAnRU5UX0lHTk9SRSc6IDRcclxuICB9O1xyXG4gIGlmIChxdW90ZV9zdHlsZSA9PT0gMCkge1xyXG4gICAgbm9xdW90ZXMgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHF1b3RlX3N0eWxlICE9PSAnbnVtYmVyJykgeyAvLyBBbGxvdyBmb3IgYSBzaW5nbGUgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZyBmbGFnc1xyXG4gICAgcXVvdGVfc3R5bGUgPSBbXS5jb25jYXQocXVvdGVfc3R5bGUpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHF1b3RlX3N0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vIFJlc29sdmUgc3RyaW5nIGlucHV0IHRvIGJpdHdpc2UgZS5nLiAnUEFUSElORk9fRVhURU5TSU9OJyBiZWNvbWVzIDRcclxuICAgICAgaWYgKE9QVFNbcXVvdGVfc3R5bGVbaV1dID09PSAwKSB7XHJcbiAgICAgICAgbm9xdW90ZXMgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKE9QVFNbcXVvdGVfc3R5bGVbaV1dKSB7XHJcbiAgICAgICAgb3B0VGVtcCA9IG9wdFRlbXAgfCBPUFRTW3F1b3RlX3N0eWxlW2ldXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcXVvdGVfc3R5bGUgPSBvcHRUZW1wO1xyXG4gIH1cclxuICBpZiAocXVvdGVfc3R5bGUgJiBPUFRTLkVOVF9IVE1MX1FVT1RFX1NJTkdMRSkge1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyYjMCozOTsvZywgXCInXCIpOyAvLyBQSFAgZG9lc24ndCBjdXJyZW50bHkgZXNjYXBlIGlmIG1vcmUgdGhhbiBvbmUgMCwgYnV0IGl0IHNob3VsZFxyXG4gICAgLy8gc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyZhcG9zO3wmI3gwKjI3Oy9nLCBcIidcIik7IC8vIFRoaXMgd291bGQgYWxzbyBiZSB1c2VmdWwgaGVyZSwgYnV0IG5vdCBhIHBhcnQgb2YgUEhQXHJcbiAgfVxyXG4gIGlmICghbm9xdW90ZXMpIHtcclxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XHJcbiAgfVxyXG4gIC8vIFB1dCB0aGlzIGluIGxhc3QgcGxhY2UgdG8gYXZvaWQgZXNjYXBlIGJlaW5nIGRvdWJsZS1kZWNvZGVkXHJcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcblxyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aHRtbHNwZWNpYWxjaGFycz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmNhcGl0YWxpemVGaXJzdExldHRlciA9IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuZXhwb3J0cy50b0xvd2VyRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmdbMF0udG9Mb3dlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc3VwcG9ydHNfbG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93Wydsb2NhbFN0b3JhZ2UnXSAhPT0gbnVsbDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGIgPSBcInVua25vd25cIjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGU7XHJcbiAgICAgICAgdmFyIGYgPSBlLndpZHRoO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHZhciBlcnIgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYoZXJyLnNlYXJjaChcIm5vdCBhbiBvYmplY3RcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwic2FmYXJpXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGVyci5zZWFyY2goXCJDYW5ub3QgcmVhZFwiKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJjaHJvbWVcIjtcclxuICAgICAgICB9IGVsc2UgaWYoZXJyLnNlYXJjaChcImUgaXMgdW5kZWZpbmVkXCIpICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcImZpcmVmb3hcIjtcclxuICAgICAgICB9IGVsc2UgaWYoZXJyLnNlYXJjaChcIlVuYWJsZSB0byBnZXQgcHJvcGVydHkgJ3dpZHRoJyBvZiB1bmRlZmluZWQgb3IgbnVsbCByZWZlcmVuY2VcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgaWYoIShmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJlZGdlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoZXJyLnNlYXJjaChcImNhbm5vdCBjb252ZXJ0IGUgaW50byBvYmplY3RcIikgIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwib3BlcmFcIjtcclxuICAgICAgICB9IGVsc2UgaWYoLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJRVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRGdW5jdGlvbk5hbWUgPSBmdW5jdGlvbigpe1xyXG4gIGxldCBlcnIgPSBuZXcgRXJyb3IoKS5zdGFjaywgdHh0X2Z1bixmdW4sZW1wO1xyXG4gIGVtcCA9ICcgLSDQkNCd0J7QndCY0JzQndCQ0K8nO1xyXG4gIGlmKGdldEJyb3dzZXIoKSA9PSBcImNocm9tZVwiKSB7XHJcbiAgICBmdW4gPSBlcnIuc3BsaXQoJ1xcbicpWzJdLnNwbGl0KCcgJylbNV07XHJcbiAgICBpZihmdW4gIT0gJ09iamVjdC48YW5vbnltb3VzPicpeyB0eHRfZnVuID0gZXJyLnNwbGl0KCdcXG4nKVsyXS5zcGxpdCgnICcpWzVdO31lbHNle3R4dF9mdW4gPSBlbXB9XHJcbiAgICByZXR1cm4gZ2V0QnJvd3NlcigpICsgJyB8INCk0JDQmdCbICcgKyAoZXJyKS5zcGxpdCgnXFxuJylbMl0uc3BsaXQoJyAnKVs2XS5zcGxpdCgnLycpWzRdLnNwbGl0KCc6JylbMF0gKyAnIHwg0KTQo9Cd0JrQptCY0K8gJyArIHR4dF9mdW4gKyAnIHwgJztcclxuICB9ZWxzZXtcclxuICAgIGZ1biA9IGVyci5zcGxpdCgnXFxuJylbMV0uc3BsaXQoJ0AnKVswXTtcclxuICAgIGlmKGZ1biAhPSAnJyl7IHR4dF9mdW4gPSBlcnIuc3BsaXQoJ1xcbicpWzFdLnNwbGl0KCdAJylbMF19ZWxzZXt0eHRfZnVuID0gZW1wfVxyXG4gICAgcmV0dXJuIGdldEJyb3dzZXIoKSArICcgfCDQpNCQ0JnQmyAnICsgKGVycikuc3BsaXQoJ2pzLycpWzFdLnNwbGl0KCc6JylbMF0gKyAnIHwg0KTQo9Cd0JrQptCY0K8gJyArIHR4dF9mdW4gKyAnIHwgJztcclxuICB9XHJcbn07XHJcblxyXG4vLyBwcm9jZXNzLnN0ZG91dC53cml0ZSgn0JrQntCd0KLQldCd0KIg0JjQlyBoZWxwLWZ1bmN0aW9uczonICsnXFxuJyArICd8IGZ1bmN0aW9ucyAnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5waHBDcmVhdGVGaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lLCBwKXsgLy8gZmlsZU5hbWUgPSAnZmlsZU5hbWUuanNvbicg0LjQu9C4ICdmaWxlTmFtZS4nXHJcbiAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhLmFwcGVuZChcImRhdGFcIiAsIGZpbGVOYW1lKTtcclxuXHJcbiAgdmFyIHhociA9ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgYWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG4gIHhoci5vcGVuKCAnUE9TVCcsIHAsIHRydWUgKTtcclxuICB4aHIuc2VuZChkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0cy5waHBXcml0ZUZpbGUgPSBmdW5jdGlvbihmaWxlTmFtZSwgZmlsZUNvbnRlbnQsIHApeyAvLyBmaWxlTmFtZSA9ICdmaWxlTmFtZS5qc29uJyDQuNC70LggJ2ZpbGVOYW1lLidcclxuICB2YXIgZGF0YWYgPSBuZXcgRm9ybURhdGEoKTtcclxuICBkYXRhZi5hcHBlbmQoXCJuYW1lXCIgLCBmaWxlTmFtZSk7XHJcbiAgZGF0YWYuYXBwZW5kKFwiY29udFwiICwgZmlsZUNvbnRlbnQpO1xyXG5cclxuICB2YXIgeGhyID0gKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBhY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbiAgeGhyLm9wZW4oICdQT1NUJywgcCwgdHJ1ZSApO1xyXG4gIHhoci5zZW5kKGRhdGFmKTtcclxufVxyXG5cclxubGV0IGdldFJlc3VsdEZyb21Kc29uTm9kZSA9IGZ1bmN0aW9uKHBhdGgpe1xyXG4gICB2YXIgbWVudUJ1dHRvbnMgPSByZXF1aXJlKHBhdGgpOy8vIHZhciBhID0gSlNPTi5wYXJzZShtZW51QnV0dG9ucyk7XHJcbiAgIHJldHVybiBtZW51QnV0dG9uczsgIFxyXG59O1xyXG5leHBvcnRzLmdldFJlc3VsdEZyb21Kc29uTm9kZSA9IGdldFJlc3VsdEZyb21Kc29uTm9kZTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVzdWx0RnJvbUpzb24gPSBmdW5jdGlvbihwYXRoKXtcclxuICAvLyBwYXRoID0gJy4uLy4uLycgKyBwYXRoOyAvL2NvbnNvbGUubG9nKHBhdGgpO1xyXG5cclxuICB2YXIgcmVzdWx0RnJvbUpzb24gPSBudWxsO1xyXG4gIHRyeSB7IFxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoLCBmYWxzZSk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xyXG4gICAvLyDQvtCx0YDQsNCx0L7RgtCw0YLRjCDQvtGI0LjQsdC60YNcclxuICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCAnICsgeGhyLnN0YXR1cyArICc6ICcgKyB4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gIC8vINCy0YvQstC10YHRgtC4INGA0LXQt9GD0LvRjNGC0LDRglxyXG4gIC8vIGFsZXJ0KHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0RnJvbUpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdEZyb21Kc29uO1xyXG4gIH1cclxuICBjYXRjaChlcnIpIHtcclxuICAgIHJlc3VsdEZyb21Kc29uID0gZ2V0UmVzdWx0RnJvbUpzb25Ob2RlKHBhdGgpOyBcclxuICAgIHJldHVybiByZXN1bHRGcm9tSnNvbjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnByb21pc2VHZXREYXRhRnJvbVVybCA9IGZ1bmN0aW9uKHVybCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24uU2VhcmNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0cy5odHRwR2V0UHJvbWlzZSA9IGZ1bmN0aW9uKHVybCl7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICBlcnJvci5jb2RlID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgIH07XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL9Cf0KDQmNCc0JXQoCDQn9Cg0J7QnNCY0KHQkCDQlNCb0K8g0KLQldCh0KLQntCSINChINCX0JDQlNCQ0JLQkNCd0JzQq9CcINCY0J3QotCV0KDQktCQ0JvQntCcXHJcbmV4cG9ydHMuZ2V0UHJvbWlzZSA9IChuKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoJ1Byb21pc2Ug0KTQo9Cd0JrQptCY0K8gZ2V0UHJvbWlzZScrIG4gKycoKSDQntCi0KDQkNCR0J7QotCQ0JvQkCAhJyk7XHJcbiAgICAgICAgfSwgbik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCd8IGFqYXggJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBEOi9fREVWRUxPUEVSL1NpdGVzL19HSVQvZnJvbnRlbmQtY3NzL34vaGVscC1mdW5jdGlvbnMvZnVuY3Rpb25zL2FqYXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC1jc3Mvfi9oZWxwLWZ1bmN0aW9ucy9mdW5jdGlvbnMgJF5cbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB2YXIgbG9nID0gcmVxdWlyZSgnbG9nZ2VyJykobW9kdWxlKTtcbi8vIHZhciBhcmdzID0gWycgLSBsb2dnZXIgPSAnICsgbW9kdWxlLmZpbGVuYW1lLnN1YnN0cmluZyhtb2R1bGUuZmlsZW5hbWUuaW5kZXhPZignIyNsb2cxTW9kdWxlXFxcXGRpcicpICsxNyldLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuZ2xvYmFsLmFjY2Vzc0xvZ2VyID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLiAqLykge1xuXG4gIC8vIGNvbnNvbGUubG9nLmZvcm1hdCA9IGZ1bmN0aW9uIChjKSB7XG4gIC8vICAgcmV0dXJuIGMuZ2V0RGF0ZSgpICsgXCI6IFtcIiArIGMuZmlsZW5hbWUgKyBcIjpcIiArIGMuZ2V0TGluZU51bWJlcigpICsgXCJdIFwiICsgYy5mdW5jdGlvbk5hbWU7XG4gIC8vIH07XG5cbiAgXHRjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIHZhciBhcmdzID0gWycgbG9nZ2VyOiAnICsgSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKSArICcgfHwgJyBdO1xuICAgIFx0aWYoYWNjZXNzTG9nZXIpe1xuICAgIFx0XHRjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICBcdH0gXG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL2xvZ2dlci5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEQ6L19ERVZFTE9QRVIvU2l0ZXMvX0dJVC9mcm9udGVuZC1jc3Mvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=