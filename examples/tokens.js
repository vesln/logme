/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var Logme = require('../').Logme;
var logme = new Logme({ 
  theme: {
    info: ':date - INFO (:pid) - :message'
  }
});

logme.info('Custom templates');

logme.tokens['random'] = function() {
  return Math.random();
};
logme.templates['info'] = ':date - INFO - :message (:random)';
logme.info('Custom templates');