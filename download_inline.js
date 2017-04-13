var Nightmare = require('nightmare');
require('nightmare-inline-download')(Nightmare);
var nightmare = Nightmare();

var downloadInfo = nightmare
	.goto('https://github.com/segmentio/nightmare')
	.click('a[href="/segmentio/nightmare/archive/master.zip"]')
	// this will move the download to this file (relative to current directory)
	.download('master.zip')
	.end()
	.then(function (val) {
		console.log('DONE:', val)
	})
	.catch(function (error) {
		console.log("ERROR:", error)
	});