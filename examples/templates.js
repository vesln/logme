/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var logme = require('../');

logme.templates['info'] = 'logme -NFO- :message';
logme.info('Custom templates');