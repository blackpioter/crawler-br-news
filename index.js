const requestPromise = require('request-promise')
const cheerio = require('cheerio')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('[data-destaque="titulo"]')
		.each((index, item) => arr.push({
			title: $(item).text(),
			link : $(item).closest('[data-destaque="link"]').attr('href')
		}))
	return arr
}

requestPromise('http://www.em.com.br/')
	.then(getNews)
	.then(console.log)

	
	



