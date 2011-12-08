/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var logme = require('../');

/**
 * Different levels.
 */
logme.debug('Lol, coffescript.');
logme.info('Logme is sexy.');
logme.warning('Danger!');
logme.error('Ooops, something went wrong.');
logme.critical('The base is under attack.');

// or...
logme.log('debug', 'Lol, coffescript.');
logme.log('info', 'Logme is sexy.');
logme.log('warning', 'Danger!');
logme.log('error', 'Ooops, something went wrong.');
logme.log('critical', 'The base is under atack.');