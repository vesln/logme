/**
 * Logme - Minimalistic logging.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

var should = require('chai').should();
var main = require('../');
var Logme = main.Logme;
var themes = main.themes;
var color = require('cli-color');
var dateRegExp = /(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\,\s\d{2}\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT/;
var logme = null;
var log = null;
var stream = {
  write: function(msg) {
    log = msg;
  }
};

describe('logme singleton', function(){
  it('should be sane', function(){
    main.constructor.should.equal(main.Logme);
  });
});

describe('Logme', function(){
  beforeEach(function(){
    logme = new Logme;
  });

  afterEach(function(){
    logme = null;
  });

  it('should expose version', function() {
    main.version.should.be.ok;
  });

  it('should be configurable on construction', function(){
    var logme = new Logme({ prefix: 'foo' });
    logme.options.prefix.should.equal('foo');
  });

  it('should have defaults', function(){
    logme.options.should.eql({
      level: 'debug',
      theme: 'default',
      stream: process.stdout
    });
  });

  it('should have levels', function(){
    logme.levels.should.eql({
      verbose: 8,
      debug: 7,
      info: 6,
      warning: 4,
      error: 3,
      critical: 2
    });
  });

  describe('tokens', function(){
    it('should have date', function(){
      logme.tokens.date().should.match(dateRegExp);
    });
    it('should have gid', function(){
      logme.tokens.gid().should.eql(process.getgid());
    });
    it('should have uid', function(){
      logme.tokens.uid().should.eql(process.getuid());
    });
    it('should have pid', function(){
      logme.tokens.pid().should.eql(process.pid);
    });
    it('should have rss', function(){
      logme.tokens.rss().should.match(/\d+/);
    });
    it('should have heapTotal', function(){
      logme.tokens.heapTotal().should.match(/\d+/);
    });
    it('should have heapUsed', function(){
      logme.tokens.heapUsed().should.match(/\d+/);
    });
  });

  describe('message', function(){
    it('should format messages', function(){
      var msg = 'Test msg';
      var theme = themes.get('default');
      for (var level in logme.levels) {
        logme.message(level, msg).should.eql(theme[level].replace(':message', msg));
      }
    });

    it('should replace tokens', function(){
      var logme = new Logme({level: 'error', stream: stream});
      var debug = logme.templates['debug'];
      logme.tokens['foo'] = function() {
        return 'bar';
      };
      logme.templates['debug'] = ':message :foo';
      logme.message('debug', 'Foo').should.eql('Foo bar');
      logme.templates['debug'] = debug;
    });
  });

  describe('log', function(){
    afterEach(function(){
      log = null;
    });

    it('shouldn\'t log messages if the supplied log level is greater than the defined one', function(){
      var logme = new Logme({level: 'error', stream: stream});
      should.not.exist(logme.log('debug', 'Foo'));
    });

    it('should write to the stream', function(){
      var logme = new Logme({level: 'debug', stream: stream });
      logme.log('debug', 'Bar')
      log.should.equal(logme.message('debug', 'Bar') + '\n');
    });

    it('should log multiple values at once', function(){
      var logme = new Logme({ level: 'debug', stream: stream, theme: 'minimalistic' });
      logme.log('debug', 'Foo', 'bar', 'baz');
      log.should.eql('debug: Foo bar baz\n');
      logme.debug('Key:', 'value');
      log.should.eql('debug: Key: value\n');
    });
  });

  describe('inspect', function(){
    it('should inspect an obj', function(){
      var logme = new Logme({ stream: stream, theme: { inspect: false }});
      var obj = { foo: 'bar' };
      logme.templates['debug'] = ':message';
      logme.inspect(obj)
      log.should.eql('{ foo: \'bar\' }\n');
    });
  });
});
