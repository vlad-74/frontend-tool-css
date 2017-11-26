'use strict';

var allSteps = $('.step'); // build a jQuery object with all steps and their properties
for (var i = 0, n = allSteps.length; i < n; ++i) { // for each step, add a nav item linked to its id
  var el = allSteps[i];
  if (el.id) {
//    $('#navbar ul').append('<li><a href="#' + el.id + '">' + (i+1) + '</a></li>'); // number the nav items
   $('#navbar ul').append('<li><a href="#' + el.id + '">' + el.id + '</a></li>'); // generate nav item text from id
  }
}

// Animate scroll to page anchor
$('#navbar [href^=#]').click(function (e) {
  e.preventDefault();
  var div = $(this).attr('href');
  $("html, body").animate({
    scrollTop: $(div).position().top
  }, "slow", "swing");
});