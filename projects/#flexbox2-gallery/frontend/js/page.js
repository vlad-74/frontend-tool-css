'use strict';
var hf = require('help-functions/functions/functions');
var ha = require('help-functions/functions/ajax');

var log = require('./logger')(module);

var a = 111111111111111;

let test = function(){
	log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);
};

test();

let prom = ha.getPromise(100)

setTimeout(function(){console.log(prom)}, 200);
console.log('accessLoger = ', accessLoger, a);

// console.log((new Error()).stack);


log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ' + accessLoger);