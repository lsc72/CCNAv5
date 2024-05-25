$(document).ready(function() {

  var header = $('#header');
  var media = $('#media');
  var text = $('#text');
  var body = $('body');

  header.css('position', 'absolute');
  media.css('position', 'absolute');
  text.css('position', 'absolute');
  text.css('overflow', 'auto');
  body.css('overflow', 'hidden');

  function layout() {
    var w = $(window).width();
    var h = $(window).height();
    var d = Math.round(w * (1 / 3));
    header.width(d - 2); // 1px border
    media.css('left', d);
    media.width(w - d);
    media.height(h);
    text.css('top', header.height() + 2); // 1px border
    text.width(d);
    text.height(h - header.height() - 2); // 1px border
  }

  $(window).resize(layout);
  layout();

  body.css('visibility', 'visible');
});

