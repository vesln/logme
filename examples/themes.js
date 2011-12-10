/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var fs = require('fs');
var Logme = require('../').Logme;
var logme = null;
var line = function() {
  console.log('');
};
var themes = fs.readdirSync('../lib/themes');

themes.forEach(function(theme) {
  console.log('== Theme: ' + theme.replace(/.js$/, ''));
  line();
  
  logme = new Logme({ theme: theme });
  logme.debug('Lol, coffescript.');
  logme.info('Logme is sexy.');
  logme.warning('Danger!');
  logme.error('Ooops, something went wrong.');
  logme.critical('The base is under attack.');
  
  line();
});