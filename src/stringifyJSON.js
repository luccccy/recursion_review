// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  for (var key in obj) {
    if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
      return '{}';
    }

    result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  }

  return '{' + result + '}';

};
