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
  debug: '[:date] debug: :message' ,
  info: '[:date] info: :message',
  warning: '[:date] info: :warning',
  error: '[:date] info: :error',
  critical: '[:date] critical: :message',
  inspect: false
};