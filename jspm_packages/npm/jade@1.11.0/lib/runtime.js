/* */ 
'use strict';
exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];
  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac))
      ac = [ac];
    if (!Array.isArray(bc))
      bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }
  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }
  return a;
};
function nulls(val) {
  return val != null && val !== '';
}
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) : (val && typeof val === 'object') ? Object.keys(val).filter(function(key) {
    return val[key];
  }) : [val]).filter(nulls).join(' ');
}
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};
exports.style = function(val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function(style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' + 'will be escaped to `&amp;`');
    }
    ;
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' + 'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};
exports.attrs = function attrs(obj, terse) {
  var buf = [];
  var keys = Object.keys(obj);
  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i],
          val = obj[key];
      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }
  return buf.join('');
};
var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;
function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}
exports.escape = jade_escape;
function jade_escape(html) {
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html)
    return html;
  else
    return result;
}
;
exports.rethrow = function rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error))
    throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('@empty').readFileSync(filename, 'utf8');
  } catch (ex) {
    rethrow(err, null, lineno);
  }
  var context = 3,
      lines = str.split('\n'),
      start = Math.max(lineno - context, 0),
      end = Math.min(lines.length, lineno + context);
  var context = lines.slice(start, end).map(function(line, i) {
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
  }).join('\n');
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno + '\n' + context + '\n\n' + err.message;
  throw err;
};
exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
};
