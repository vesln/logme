/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var Logme = require('../').Logme;
var logme = new Logme({ level: 'error' });

logme.debug('This will not be logged.');
logme.info('This will not be logged.');

logme.error('Win!');
logme.critical('Double win!');
