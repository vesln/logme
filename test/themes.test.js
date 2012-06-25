/**
 * Logme - Minimalistic logging.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var main = require('../');
var Logme = main.Logme;
var themes = main.themes;
var should = require('chai').should();

describe('themes', function(){
  describe('get', function(){
    it('should return a theme', function(){
      themes.get('default').should.eql(require('../lib/themes/default'));
    });
  });
});
