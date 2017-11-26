'use strict';

var foo = document.getElementById('foo');
let elem = document.getElementById('elem');
var t1 = 'СКРЫТЬ КНОПКУ';
var t2 = 'ПОКАЗАТЬ КНОПКУ';

elem.onclick = function() { alert('КНОПКУ НАЖАЛИ !!!') };

function chan(el, mytxt){
	el.innerHTML = mytxt;
}

foo.onclick = function() {
	if(foo.textContent == t1){
		chan(foo, t2);
		elem.style.display = 'none';
	}else{
		chan(foo, t1);
		elem.style.display = 'block';
	};	
}