/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Dependencies.
 */
var colors = require('colors');

/**
 * Logme constructor.
 * 
 * @class
 */
function Logme(config) {
  this.options = {
    stream: process.stdout,
    level: 'debug'
  };
  
  if (config === Object(config)) {
    for (var key in config) {
      this.options[key] = config[key];
    }
  }
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
  gid: function(){
    return process.getgid();
  },
  uid: function(){
    return process.getuid();
  },
  pid: function(){
    return process.pid();
  },
  memmory: function(){
    return process.memoryUsage();
  }  
};

/**
 * Log levels.
 * 
 * @type {Object}
 */
Logme.prototype.levels = {
  debug: 0,
  info: 1,
  warning: 2,
  error: 3,
  critical: 4
};

/**
 * Templates.
 * 
 * @type {Object}
 */
Logme.prototype.templates = {
  debug: '- DEBUG -'.magenta + ' :message',
  info: '- INFO -'.cyan + ' :message',
  warning: '- WARNING -'.yellow + ' :message',
  error: '- ERROR -'.red + ' :message',
  critical: '- CRITICAL -'.red.bold + ' :message'
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
  if (this.levels[level] < this.levels[this.options.level]) return;
  var msg = this.message(level, str);
  this.options.stream.write(msg + "\n");
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