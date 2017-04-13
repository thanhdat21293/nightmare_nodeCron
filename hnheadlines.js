// Get headlines and urls from Hacker News
//
// Run it with: `node hnheadlines.js`

var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

nightmare
	.goto('http://news.ycombinator.com/')
	.evaluate(function () {
		var nodeList = document.querySelectorAll("a.storylink");
		var result = [];
		for (var i = 0; i < nodeList.length; i++) {
			var selector = nodeList[ i ];
			result.push({headline: selector.innerText, url: selector.href});
		}
		return result;
	})
	// .end completes the queue and closes Electron
	.end()
	.then(function (result) {
		result.forEach(function (r) {
			console.log(">> " + r.headline + "  ::  " + r.url)
		})
	})
	.catch(function (error) {
		console.error('Search failed:', error);
	});