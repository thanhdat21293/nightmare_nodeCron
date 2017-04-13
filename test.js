const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true})

nightmare
	.goto('https://github.com/segmentio/nightmare')
	.wait(1000)
	.click('a[href="/segmentio/nightmare/archive/master.zip"]')
    .download('master.zip')
	.end()
	.then(function (result) {
		console.log(result)
	})
	.catch(function (error) {
		console.error('Error:', error);
	});