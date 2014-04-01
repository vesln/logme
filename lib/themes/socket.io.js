/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Exposing the theme.
 */
module.exports = {
  verbose: '   \033[90m' + 'verbose   ' + ' -\033[39m' + ' :message',
  debug: '   \033[90m' + 'debug   ' + ' -\033[39m' + ' :message',
  info: '   \033[36m' + 'info    ' + ' -\033[39m' + ' :message',
  warning: '   \033[33m' + 'warn    ' + ' -\033[39m' + ' :message',
  error: '   \033[31m' + 'error   ' + ' -\033[39m' + ' :message',
  critical: '   \033[31m' + 'critical' + ' -\033[39m' + ' :message',
};