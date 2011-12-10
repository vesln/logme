/**
 * Logme - Minimalistic logging.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var Logme = require('../').Logme;
var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/tmp/file.log', { flags: 'a' })
var logme = new Logme({ stream: stream, theme: 'clean' });

logme.error('Pro Tip: It logs to files.');