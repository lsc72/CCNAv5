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

function isTextOnly(view) {
  var query = {};
  try { query = queryToObject(view.location.search.substring(1)); } catch(e) {}
  if ('text-only' in query) {
    return true;
  } else if (view.parent && view.parent != view) {
    return isTextOnly(view.parent);
  }
  return false;
}
