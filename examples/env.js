/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */
 
/**
 * Dependencies.
 */
var Logme = require('../').Logme;

/**
 * Logme configurations.
 * 
 * @type {Object}
 */
var config = {
  level: 'debug'
};

/**
 * Checks if the node env var is production and if so
 * sets the log level to critical.
 */
if (process.env.NODE_ENV === 'production') {
  config.level = 'critical';
}

/**
 * Exporting the lib.
 */
module.exports = new Logme(config);