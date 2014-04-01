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
  verbose: '   \033[32m' + '[?]  ' + '\033[39m' + '\033[90m :message \033[39m',
  debug: '   \033[32m' + '[?]  ' + '\033[39m' + '\033[90m :message \033[39m',
  info: ' \033[32m' + '[nfo]  ' + '\033[39m' + '\033[90m :message \033[39m',
  warning: '\033[32m' + '[warn]  ' + '\033[39m' + '\033[90m :message \033[39m',
  error: ' \033[32m' + '[err]  ' + '\033[39m' + '\033[90m :message \033[39m',
  critical: ' \033[32m' + '[die]  ' + '\033[39m' + '\033[90m :message \033[39m',
  inspect: {
    all: 'green',
    label: 'underline',
    other: 'inverted',
    key: 'bold',
    special: 'green',
    string: 'green',
    number: 'green',
    bool: 'green',
    regexp: 'green',
  },
};