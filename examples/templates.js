/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var Logme = require('../').Logme;
var logme = new Logme({ 
  theme: {
    info: 'logme -NFO- :message'
  }
});

logme.info('Custom templates');