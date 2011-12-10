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
    return process.getgid();
  },
  uid: function() {
    return process.getuid();
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
    message = message.replace(':' + token, this.tokens[token]());
  }
  return message.replace(':message', str);
};

/**
 * Writes a message to the stream.
 * 
 * @param {String} level
 * @param {String} str
 */
Logme.prototype.log = function(level, str) {
  if (this.levels[level] > this.levels[this.options.level]) return;
  var msg = this.message(level, str);
  this.options.stream.write(msg + "\n");
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
 * Logs debug message.
 * 
 * @param {String} str
 */
Logme.prototype.debug = function(str) {
  return this.log('debug', str)
};

/**
 * Logs info message.
 * 
 * @param {String} str
 */
Logme.prototype.info = function(str) {
  return this.log('info', str)
};

/**
 * Logs warning message.
 * 
 * @param {String} str
 */
Logme.prototype.warning = function(str) {
  return this.log('warning', str)
};

/**
 * Logs error message.
 * 
 * @param {String} str
 */
Logme.prototype.error = function(str) {
  return this.log('error', str)
};

/**
 * Logs critical message.
 * 
 * @param {String} str
 */
Logme.prototype.critical = function(str) {
  return this.log('critical', str)
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
 * Exports the themes object.
 */
exports.themes = themes;