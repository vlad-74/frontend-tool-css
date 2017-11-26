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
        complete: function() {
          oldDiv.css({
            opacity: 1
          });
          oldDiv.animate({
            'opacity': 1
          }, {
            duration: 1,
            complete: function() {
              modal.css({
                'display': 'none'
              });
              oldDiv = null;
              if (cb)
                cb();
            }
          });
        }
      });
    };
  };

  $('.someDiv').on('click', function(e) {
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
    if (oldDiv && oldDiv.attr('id') == jthis.attr('id'))
      close();
    else if (oldDiv != null) {
      close(show);
    } else {
      show();
    }
  })

  $('#modalDiv').on('click', function() {
    close();
  });
