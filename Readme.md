[![Build Status](https://secure.travis-ci.org/vesln/logme.png)](http://travis-ci.org/vesln/logme)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# Logme

Minimalistic logger for Node.js.

![screenshot](http://img853.imageshack.us/img853/3641/screenshot20111210at226.png)

## Features.

- Error levels
- Tokens
- Custom templates
- Custom everything

## How to install it?

	$ npm install logme
	
## Neat. Now what?

	var logme = require('logme');
	logme.critical('The base is under attack');

## Whaaaat?

For more complete examples see "examples/".

## Tests.

Sure.

	$ npm install
	$ make test

## Contributing to this library.

Anytime.

## Theme master?

Send me a pull request with your theme and I will include it.

## Inspiration.

- [log.js](https://github.com/visionmedia/log.js)
- [express](https://github.com/visionmedia/express)
- [mongoose](https://github.com/LearnBoost/mongoose)

## License.

MIT License.
