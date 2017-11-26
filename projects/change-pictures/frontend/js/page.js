'use strict';
var images = new Array();
var i = 0, j = 0;
 
images[0] = 'https://placekitten.com/250/150';
images[1] = 'https://placekitten.com/250/350';
images[2] = 'https://placekitten.com/250/450';
 
function viewImages() {
    document.getElementById("img_main").src = images[i]; 
    i++; j++;
    if (i == images.length) {
        i = 0;
    }

    // if(j > 5) myStopInterval(); //аналог закоментированной mysetTimeout()
};

//1. ДЕЙСТВИЕ (viewImages()) КОТОРОЕ БУДЕТПОВТОРЯТЬСЯ КАЖДЫЕ 1 СЕК (1000 МЛСК)
var myInterval = setInterval(function(){ viewImages() }, 1000);

//3. ОСТАНОВКА ИНТЕРВАЛА ДЛЯ viewImages()
function myStopInterval() {clearInterval(myInterval);}

//2. ЧЕРЕЗ 6 СЕК (6000 МЛСК) ВЫЗОВИТСЯ myStopInterval КОТОРЫЙ ОСТАНОВИТ viewImages()
// function mysetTimeout() {
//   myTimeout = setTimeout(function(){myStopInterval(); }, 6000);
// }
viewImages(); // ЗАПУСК ПОКАЗА КАРТИНОК

//3. ОСТАНОВКА - Timeout ДЛЯ 
function myStopTimeout() {clearTimeout(myTimeout);}

myStopTimeout(); // БЕЗ ОСТАНОВКИ ЕСЛИ НЕ УСЛОВИЯ ОСТАНОВКИ - if(j > 5) myStopInterval();

// mysetTimeout(); // ОСТАНОКА ЧЕРЕЗ 6 СЕК (6000 МЛСК)

