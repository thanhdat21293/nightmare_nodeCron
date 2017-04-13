const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true})

nightmare
	.viewport(1180, 720)
	.goto('https://www.foody.vn/ha-noi#/places')
	.wait(1000)
	.click('a.signin')
	.wait(100)
	.type('input#Email', 'minhcuong@gmail.com')
	.type('input#Password', 'minh009-')
	.click('div#signin_menu input#signin_submit')
	.wait(1000)
	.select('select#slDistrictPlace', "28")  //Quan Tay Ho
	.wait(1000)
	.scrollTo(10000, 0)
	.wait(1000)
	.evaluate(function () {
		let nodeList = document.querySelectorAll("div.content-item  div.title a");
		let result = [];
		for (let i = 0; i < nodeList.length; i++) {
			let selector = nodeList[ i ]
			result.push({headline: selector.innerText, url: selector.href});
		}
		return result;
	})
	.end()
	.then(function (result) {
		console.log(result)
	})
	.catch(function (error) {
		console.error('Error:', error);
	});