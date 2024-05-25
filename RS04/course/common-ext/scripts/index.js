$(document).ready(function() {

  var $doc = $(document);
  var $prev = $('#prev-btn');
  var $next = $('#next-btn');
  var $mini = $('#mini-btn');
  var $jump = $('#jump-box');
  var $menu = $('#nav-menu');

  var nav = document.getElementById('nav');
  var title = document.getElementById('title');
  var anchors = nav.getElementsByTagName('a');
  var container = document.getElementById('container');
  var current = null;

  function isFirst(anchor) {
    return anchor == anchors[0];
  }

  function isLast(anchor) {
    return anchor == anchors[anchors.length - 1];
  }

  function request(anchor) {
    var id = anchor.getAttribute('data-ident');
    location.hash = id;
  }

  function findCurrentIndex() {
	var frame = document.getElementById('frame');
    var src = frame.getAttribute('src');
    for (var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      if (anchor.getAttribute('href') == src) {
        return i;
      }
    }
   return -1;
  }

  function prev() {
    var index = findCurrentIndex();
    if (index > 0) {
      request(anchors[index - 1]);
    }
  }

  function next() {
    var index = findCurrentIndex();
    if (index < anchors.length - 1) {
      request(anchors[index + 1]);
    }
  }

  function update() {
    var anchor = null;
    var hash = location.hash.substring(1); // remove "#"
    if (hash) {
      for (var i = 0; i < anchors.length; i++) {
        var id = anchors[i].getAttribute('data-ident');
        if (hash == id) {
          anchor = anchors[i];
          break;
        }
      }
    }
    if (anchor) {
      var id = anchor.getAttribute('data-ident');
      var src = anchor.getAttribute('href');
      $(anchors).removeClass('current');
      title.innerHTML = anchor.innerHTML;
      // the iframe is removed and rebuilt to keep the iframe
      // in sync with menu when the back button is used
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      var frame = document.createElement('iframe');
      frame.setAttribute('id', 'frame');
      frame.setAttribute('src', src);
      container.appendChild(frame);
      if (isFirst(anchor)) {
        $prev.attr('disabled', 'disabled');
      } else {
        $prev.removeAttr('disabled');
      }
      if (isLast(anchor)) {
        $next.attr('disabled', 'disabled');
      } else {
        $next.removeAttr('disabled');
      }
      $jump.val(id);
      $(anchor).addClass('current');
      $(anchor).parents().removeClass('collapse');
      var item = anchor.parentNode;
      if ($(item).offset().top - $(nav).offset().top + $(item).height() > $(nav).height()) {
        item.scrollIntoView(false);
      }
      if ($(item).offset().top - $(nav).offset().top < 0) {
        item.scrollIntoView(true);
      }
      current = id;
    } else {
      request(anchors[0]);
    }
  }

  $('.sections > li, .topics > li', nav).addClass('collapse');
  $('.sections > li, .topics > li', nav).on('click', function(e) {
    $(this).toggleClass('collapse');
    e.stopPropagation();
    e.preventDefault();
    $menu.removeClass('active');
  });

  $('a', nav).on('click', function(e) {
    request(e.target);
    e.stopPropagation();
    e.preventDefault();
    $menu.removeClass('active');
  });

  $(nav).on('contextmenu', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    x = Math.min(e.pageX, $doc.width() - $menu.width());
    y = Math.min(e.pageY, $doc.height() - $menu.height());
    $menu.addClass('active');
    $menu.offset({left: x, top: y});
    e.preventDefault();
  });

  $doc.on('click', function(e) {
    $menu.removeClass('active');
  });

  $('#nav-menu-expand').on('click', function(e) {
    $('.sections > li, .topics > li', nav).removeClass('collapse');
    e.preventDefault();
  });

  $('#nav-menu-collapse').on('click', function(e) {
    $('.sections > li, .topics > li', nav).addClass('collapse');
    e.preventDefault();
  });

  $prev.on('click', function(e) {
    prev();
  });

  $next.on('click', function(e) {
    next();
  });

  $mini.on('click', function(e) {
    $(document.documentElement).toggleClass('minimize');
  });

  $jump.on('change', function(e) {
    var id = $(this).val();
    var anchor = null;
    for (var i = 0; i < anchors.length; i++) {
      if (id == anchors[i].getAttribute('data-ident')) {
        anchor = anchors[i];
        break;
      }
    }
    if (anchor) {
      request(anchor);
    } else {
      //request(anchors[0]);
      $jump.val(current);
    }
  });

  // some browsers do not trigger a change
  // event when the Enter key is pressed
  $jump.on('keyup', function(e) {
    if (e.which == 13) { // Enter key
      e.target.blur();
      e.target.focus();
    }
    e.stopPropagation();
  });

  $doc.on('keyup', function(e) {
    switch (e.which) {
      case 32: // Space key
      case 39: // Right Arrow key
      case 40: // Down Arrow key
        next();
        e.preventDefault();
        break;
      case 37: // Left Arrow key
      case 38: // Up Arrow key
        prev();
        e.preventDefault();
        break;
    }
  });

  $(window).bind('hashchange', function(e) {
    update();
  });

  update();

});
