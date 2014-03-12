/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var app = "\033[37;40mapp\033[0m";

/**
 * Exposing the theme.
 */
module.exports = {
  verbose: app + ' \033[34;40m' + 'verbose' + '\033[39m' + ' :message ',
  debug: app + ' \033[34;40m' + 'debug' + '\033[39m' + ' :message ',
  info: app + ' \033[32m' + 'info' + '\033[39m' + ' :message ',
  warning: app + ' \033[30;41m' + 'WARN' + '\033[0m' + ' :message ',
  error: app + ' \033[31;40m' + 'ERR!' + '\033[0m' + ' :message ',
  critical: app + ' \033[31;40m' + 'FATAL!' + '\033[39m' + ' :message ',
};