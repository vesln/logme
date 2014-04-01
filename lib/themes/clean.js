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
  verbose: '[:date] verbose: message',
  debug: '[:date] debug: :message' ,
  info: '[:date] info: :message',
  warning: '[:date] warning: :message',
  error: '[:date] error: :message',
  critical: '[:date] critical: :message',
  inspect: false
};