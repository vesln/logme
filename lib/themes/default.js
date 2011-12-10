/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var color = require('cli-color');

/**
 * Exposing the theme.
 */
module.exports = {
  debug: color.magenta('- DEBUG -') + ' :message',
  info: color.cyan('- INFO -') + ' :message',
  warning: color.yellow('- WARNING -') + ' :message',
  error: color.red('- ERROR -') + ' :message',
  critical: color.red.bold('- CRITICAL -') + ' :message'
};