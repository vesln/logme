/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Dependencies.
 */
var eyes = require('eyes');
var themes = require('./themes');
var package = require('package')(module);

/**
 * Logme constructor.
 * 
 * @class
 */
function Logme(config) {
  var inspect = {stream: null};
  
  config || (config = {});
  
  this.options = {
    stream: process.stdout,
    theme: 'default',
    level: 'debug'
  };
  
  for (var key in config) {
    if (!Object.prototype.hasOwnProperty.call(config, key)) {
      continue;
    }
    this.options[key] = config[key];
  }
  
  if (this.options.theme === Object(this.options.theme)) {
    this.templates = this.options.theme;
  } else {
    this.templates = themes.get(this.options.theme);
  }
  
  if (this.templates.inspect !== void 0) {
    inspect.styles = this.templates.inspect;
  }
  
  this.inspector = eyes.inspector(inspect);
};

/**
 * Tokens map, used by the message method.
 * 
 * @type {Object}
 */
Logme.prototype.tokens = {
  date: function() {
    return new Date().toUTCString();
  },
  gid: function() {
    return (process.getgid ? process.getgid() : 0);
  },
  uid: function() {
    return (process.getuid ? process.getuid() : 0);
  },
  pid: function() {
    return process.pid;
  },
  rss: function() {
    return process.memoryUsage().rss;
  },
  heapTotal: function() {
    return process.memoryUsage().heapTotal;
  },
  heapUsed: function() {
    return process.memoryUsage().heapUsed;
  }
};

/**
 * Log levels.
 * 
 * @see rfc3164 for codes, although we do not support all of them.
 * @type {Object}
 */
Logme.prototype.levels = {
  verbose: 8,
  debug: 7,
  info: 6,
  warning: 4,
  error: 3,
  critical: 2
};

/**
 * Formats a log message.
 * 
 * @param {String} level
 * @param {String} str
 * @returns {String}
 */
Logme.prototype.message = function(level, str) {
  var message = this.templates[level];
  for (var token in this.tokens) {
    if (!Object.prototype.hasOwnProperty.call(this.tokens, token)) {
      continue;
    }
    message = message.replace(':' + token, this.tokens[token]());
  }
  return message.replace(':message', str);
};

/**
 * Converts arguments object to string.
 * 
 * @param {Object} args
 * @returns {String}
 */
Logme.prototype.asString = function(args) {
  if (Object.prototype.toString.call(args) == '[object String]') return args;
  return Array.prototype.slice.call(args).join(' ');
};

/**
 * Writes a message to the stream.
 * 
 * @param {String} level
 * @param {String} str
 */
Logme.prototype.log = function(level, str) {
  if (this.levels[level] > this.levels[this.options.level]) return;
  
  if (arguments.length > 2) {
    str = Array.prototype.slice.call(arguments, 1).join(' ');
  } else if (str.toString() == '[object Arguments]') {
    str = Array.prototype.slice.call(str).join(' ');
  }
  this.options.stream.write(this.message(level, str) + "\n");
};

/**
 * Inspects a var.
 * 
 * @param {Mixed} obj
 */
Logme.prototype.inspect = function(obj) {
  return this.log('debug', this.inspector(obj));
};

/**
 * Logs verbose message.
 * 
 * @param  {String} str
 */
Logme.prototype.verbose = function(str) {
  return this.log('verbose', arguments);
};

/**
 * Logs debug message.
 * 
 * @param {String} str
 */
Logme.prototype.debug = function(str) {
  return this.log('debug', arguments)
};

/**
 * Logs info message.
 * 
 * @param {String} str
 */
Logme.prototype.info = function(str) {
  return this.log('info', arguments)
};

/**
 * Logs warning message.
 * 
 * @param {String} str
 */
Logme.prototype.warning = function(str) {
  return this.log('warning', arguments)
};

/**
 * Logs error message.
 * 
 * @param {String} str
 */
Logme.prototype.error = function(str) {
  return this.log('error', arguments)
};

/**
 * Logs critical message.
 * 
 * @param {String} str
 */
Logme.prototype.critical = function(str) {
  return this.log('critical', arguments)
};

/**
 * Exposing the lib.
 */
module.exports = exports = new Logme;

/**
 * Exports Logme constructor.
 */
exports.Logme = Logme;

/**
 * Exports version.
 */
exports.version = package.version;

/**
 * Exports the themes object.
 */
exports.themes = themes;