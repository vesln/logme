/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Dependencies.
 */
var basename = require('path').basename;

/**
 * The themes object.
 */
var themes = module.exports;

/**
 * Returns a theme.
 * 
 * @type {String} name
 * @returns {Object}
 */
themes.get = function(name) {
  return require('./themes/' + basename(name));
};