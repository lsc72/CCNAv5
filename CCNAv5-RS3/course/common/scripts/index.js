$(document).ready(function() {

  var prev = $('#prev-btn');
  var next = $('#next-btn');

  var nav = document.getElementById('nav');
  var anchors = nav.getElementsByTagName('a');
  var frame = document.getElementById('frame');

  var anchor = null;
  var query = queryToObject(location.search.substring(1));
  if (query.id) {
    anchor = document.getElementById(query.id);
    if (!anchor) {
      var container = document.getElementById('container');
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      var div = document.createElement('div');
      var str = query.id + ' was not found in this module.';
      div.appendChild(document.createTextNode(str));
      div.setAttribute('class', 'error');
      container.appendChild(div);
    }
  } else {
    anchor = anchors[0];
  }

  $('#nav li').addClass('collapse');
  $('#nav li').on('click', function(e) {
    var collapsed =  $(this).hasClass('collapse');
    // collapse everything
    $('#nav li').addClass('collapse');
    // keep current exposed
    $('#nav .current').parents('li').removeClass('collapse');
    // toggle collapse
    if (collapsed) {
      $(this).removeClass('collapse');
    }
    // keep this exposed
    $(this).parents('li').removeClass('collapse');
    e.stopPropagation();
    e.preventDefault();
  });

  if (anchor) {
    var src = anchor.getAttribute('href');
    frame.setAttribute('src', src);
    if (isFirst(anchor)) {
      prev.attr('disabled', 'disabled');
    } else {
      prev.removeAttr('disabled');
    }
    if (isLast(anchor)) {
      next.attr('disabled', 'disabled');
    } else {
      next.removeAttr('disabled');
    }
    $(anchor).addClass('current');
    $(anchor).parents().removeClass('collapse');
    
  }


  function isFirst(anchor) {
    return anchor == anchors[0];
  }

  function isLast(anchor) {
    return anchor == anchors[anchors.length - 1];
  }

  function request(anchor) {
    var id = anchor.getAttribute('id');
    location.assign('?id=' + id);
  }

  function findCurrentIndex() {
    var src = frame.getAttribute('src');
    for (var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      if (anchor.getAttribute('href') == src) {
        return i;
      }
    }
   return -1;
  }

  $('#nav a').on('click', function(e) {
    request(e.target);
    e.preventDefault();
  });

  prev.on('click', function(e) {
    var index = findCurrentIndex();
    if (index > 0) {
      request(anchors[index - 1]);
    }
  });

  next.on('click', function(e) {
    var index = findCurrentIndex();
    if (index < anchors.length - 1) {
      request(anchors[index + 1]);
    }
  });

});

function queryToObject(str) {
  var result = {};
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    if (pair.length) {
      var parts = pair.split('=');
      var name = decodeURIComponent(parts.shift());
      var value = decodeURIComponent(parts.join('='));
      if (typeof result[name] == 'string') {
        result[name] = [result[name]];
      }
      if (result[name] instanceof Array) {
        result[name].push(value);
      } else {
        result[name] = value;
      }
    }
  }
  return result;
}

