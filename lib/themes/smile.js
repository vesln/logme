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
  verbose: color.gray('verbose:') + '    :message',
  debug: color.gray('debug:') + '    :message',
  info: color.green('info:') + '     :message',
  warning: color.cyan('warning:') + '  :message',
  error: color.red('error:') + '    :message',
  critical: color.red.underline('critical:') + ' :message'
};